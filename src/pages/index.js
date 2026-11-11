import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
const samples = [
  {tag:'01 / User documentation',title:'Work confidently',desc:'Help agents manage availability and customer interactions with clear, outcome-focused tasks.',href:'/docs/user-guide/overview'},
  {tag:'02 / Administrator documentation',title:'Configure with clarity',desc:'Guide administrators through user provisioning, permissions, and routing.',href:'/docs/admin-guide/overview'},
  {tag:'03 / Integration documentation',title:'Connect the ecosystem',desc:'Document CRM integration setup, validation, and recovery paths.',href:'/docs/integrations/crm-connection'},
  {tag:'04 / Operations documentation',title:'Operate reliably',desc:'Turn upgrades and troubleshooting into predictable workflows.',href:'/docs/operations/upgrade-workflow'}
];
export default function Home() {return <Layout title="Technical Writing Portfolio" description="User and administrator documentation portfolio">
  <header className="heroCustom"><div className="heroInner"><div className="eyebrow">Technical writing portfolio / Enterprise software</div><h1 className="heroTitle">Complex systems.<br/>Clear instructions.</h1><p className="heroLead">I design user and administrator documentation that helps people complete tasks, solve problems, and operate enterprise software with confidence.</p><Link className="cta" to="/docs/intro">Explore documentation →</Link><Link className="cta ctaSecondary" to="/about">About my approach</Link></div></header>
  <main><section className="homeSection"><div className="eyebrow">Selected writing samples</div><h2>Documentation built around the job to be done.</h2><p>Browse a fictional cloud communications platform, Nexus Connect, through the eyes of its users, administrators, and operators.</p><div className="cards">{samples.map(s=><Link key={s.href} className="sampleCard" to={s.href}><div className="cardTag">{s.tag}</div><h3>{s.title}</h3><p>{s.desc}</p><strong>Read sample →</strong></Link>)}</div></section><section className="homeSection"><div className="notice"><strong>How these samples were created</strong><p>All product names, interfaces, endpoints, and procedures are illustrative. They demonstrate documentation craft, not instructions for a live product.</p></div></section></main>
</Layout>}
