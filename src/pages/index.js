import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SampleCards, {homepageSamples} from '../components/SampleCards';
import WritingStyleSwitch from '../components/WritingStyleSwitch';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Technical writing portfolio"
      description="Infrastructure runbooks, network validation, and enterprise software documentation by Kerem Baysal.">
      <main className={styles.index}>
        <div className={styles.hero}>
          <header className={styles.intro}>
            <h1>Technical writing for enterprise software</h1>
            <WritingStyleSwitch />
            <p>
              Explore infrastructure runbooks, network validation, and user and
              administrator guides for Nexus Connect, a fictional platform.
            </p>
            <Link className={styles.primaryLink} to="/docs/intro">
              Open the documentation library
            </Link>
          </header>

          <aside className={styles.about} aria-labelledby="about-preview">
            <h2 id="about-preview">About me</h2>
            <p>
              Hi, I am Kerem. I write documentation for unified communications
              and contact centers.
            </p>
            <Link to="/about">See more about me</Link>
          </aside>
        </div>

        <section className={styles.samples} aria-labelledby="writing-samples">
          <h2 id="writing-samples">Writing samples</h2>
          <SampleCards samples={homepageSamples} />
        </section>
      </main>
    </Layout>
  );
}
