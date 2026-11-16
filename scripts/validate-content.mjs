import {existsSync, readFileSync, readdirSync} from 'node:fs';
import {load} from 'js-yaml';
import {lint} from 'markdownlint/sync';

const portfolioKinds = ['overview', 'runbook', 'procedure', 'case-study'];
const portfolioEnvironments = ['simulation', 'portfolio'];

function markdownFiles(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.isFile() && /\.mdx?$/.test(entry.name) ? [path] : [];
  });
}

function lintMarkdown() {
  const files = [
    ...['README.md', 'CONTRIBUTING.md'].filter(existsSync),
    ...['docs', 'src/pages', 'reports', '.github'].flatMap(markdownFiles),
  ].sort();
  const config = JSON.parse(readFileSync('.markdownlint.json', 'utf8'));
  const errors = lint({files, config}).toString();

  if (errors) {
    console.error(errors);
    return false;
  }
  console.log(`Markdown lint passed for ${files.length} files.`);
  return true;
}

function readFrontMatter(contents) {
  const lines = contents.replace(/^\uFEFF/, '').split(/\r?\n/);
  const end = lines.findIndex((line, index) => index > 0 && /^---[ \t]*$/.test(line));
  if (lines[0].trimEnd() !== '---' || end < 0) {
    throw new Error('Expected a leading YAML front matter block.');
  }

  return load(['', ...lines.slice(1, end)].join('\n'));
}

function isMapping(value) {
  return value !== null && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype;
}

function isNonemptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateFrontMatter(path, fields) {
  if (!isMapping(fields)) return ['Expected front matter to be a mapping of field names to values.'];

  const errors = [];
  const requiresPortfolio = ['docs/infrastructure-operations/', 'docs/case-studies/']
    .some((directory) => path.startsWith(directory));
  const requiredStrings = requiresPortfolio ? ['title', 'description'] : ['title'];

  for (const field of requiredStrings) {
    if (!isNonemptyString(fields[field])) errors.push(`${field} must be a nonempty string.`);
  }
  for (const field of ['id', 'slug', 'sidebar_label', 'description']) {
    if (!requiredStrings.includes(field) && Object.hasOwn(fields, field) && !isNonemptyString(fields[field])) {
      errors.push(`${field} must be a nonempty string.`);
    }
  }
  if (Object.hasOwn(fields, 'sidebar_position') && !Number.isFinite(fields.sidebar_position)) {
    errors.push('sidebar_position must be a number.');
  }

  if (!requiresPortfolio && !Object.hasOwn(fields, 'portfolio')) return errors;

  const portfolio = fields.portfolio;
  if (!isMapping(portfolio)) return [...errors, 'portfolio must be a YAML mapping.'];
  if (!portfolioKinds.includes(portfolio.kind)) {
    errors.push(`portfolio.kind must be one of: ${portfolioKinds.join(', ')}.`);
  }
  if (!isNonemptyString(portfolio.audience)) {
    errors.push('portfolio.audience must be a nonempty string.');
  }
  if (!portfolioEnvironments.includes(portfolio.environment)) {
    errors.push(`portfolio.environment must be one of: ${portfolioEnvironments.join(', ')}.`);
  }
  return errors;
}

function checkFrontMatter() {
  // Docusaurus excludes underscore-prefixed partial files and directories from routes.
  const files = ['docs', 'src/pages'].flatMap(markdownFiles)
    .filter((path) => !path.split('/').some((segment) => segment.startsWith('_')))
    .sort();
  let hasErrors = false;

  for (const path of files) {
    let errors;
    try {
      const fields = readFrontMatter(readFileSync(path, 'utf8'));
      errors = validateFrontMatter(path, fields);
    } catch (error) {
      errors = [error.message];
    }
    for (const message of errors) {
      console.error(`${path}: ${message}`);
      hasErrors = true;
    }
  }
  if (!hasErrors) console.log(`YAML front matter passed for ${files.length} pages.`);
  return !hasErrors;
}

const checks = {markdown: lintMarkdown, 'front-matter': checkFrontMatter};
const check = process.argv[2];
if (!Object.hasOwn(checks, check)) {
  console.error('Usage: node scripts/validate-content.mjs markdown|front-matter');
  process.exitCode = 2;
} else if (!checks[check]()) {
  process.exitCode = 1;
}
