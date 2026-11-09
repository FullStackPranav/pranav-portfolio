
import { useEffect, useRef, useState } from 'react';
import { CONTACT, services, resumeExperience, resumeEducation, resumeSkillGroups } from './content.js';
import Icon from './Icon.jsx';
import './App.css';

function Label({ children }) { return <p className="label">{children}</p>; }
function Arrow() { return <Icon name="arrow" size={20} />; }
function Portrait() {
  const image = useRef(null);
  const [state, setState] = useState('loading');
  useEffect(() => { if (image.current?.complete) setState(image.current.naturalWidth ? 'ready' : 'error'); }, []);
  return <figure className={`portrait ${state}`} aria-busy={state === 'loading'}>
    {state === 'loading' && <div className="skeleton" role="status"><span className="sr-only">Loading portrait</span></div>}
    <img ref={image} src="/profile.png" width="800" height="900" fetchPriority="high" alt="Pranav T Pradeep" onLoad={() => setState('ready')} onError={() => setState('error')} />
    {state === 'error' && <div className="portrait-fallback"><span>PTP.</span><p>Portrait unavailable</p></div>}
    <figcaption><span>PRANAV T PRADEEP</span><span>BANGALORE, INDIA ↗</span></figcaption>
  </figure>;
}
function Experience() {
  return <section className="section shell" id="experience"><div className="section-heading"><Label>03 / EXPERIENCE</Label><div><h2>A career connecting<br />people and systems.</h2><p>Employee operations, software development and automation.<br />Select a role to explore the details.</p></div></div><div className="experience-list">{resumeExperience.map(job => <details key={job.id} className="job"><summary><span className="job-period">{job.period}<small>{job.location}</small></span><span><span className="job-role">{job.role}</span><span className="job-company">{job.company}</span></span><span className="plus" aria-hidden="true">+</span></summary><div className="job-details"><Label>{job.category}</Label><p>{job.summary}</p><ul>{job.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>{job.highlight && <p className="recognition">{job.highlight}</p>}<div className="tags">{job.skills.map(skill => <span key={skill}>{skill.replace(/,\s*$/, '').trim()}</span>)}</div></div></details>)}</div></section>;
}
function Toolkit() {
  return <section className="section shell" id="skills"><div className="section-heading"><Label>04 / TOOLKIT & EDUCATION</Label><div><h2>Operational mindset.<br />Technical foundation.</h2></div></div><div className="toolkit-grid"><div>{resumeSkillGroups.map(group => <article className="skill-group" key={group.title}><h3>{group.title}</h3><div className="tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div><div className="education"><Label>ACADEMIC BACKGROUND</Label>{resumeEducation.map(item => <article key={item.qualification}><span className="label">{item.period}</span><h3>{item.qualification}</h3><p>{item.institution}</p></article>)}</div></div></section>;
}
function Contact() {
  const [copyState, setCopyState] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(CONTACT.email); setCopyState('Email copied.'); }
    catch { setCopyState('Unable to copy. Select the address or use the email link.'); }
  }
  return <section className="contact" id="contact"><div className="shell contact-grid"><div><Label>05 / LET’S CONNECT</Label><h2>Good operations.<br />Start a conversation.</h2><p>Need dependable support for operations, administration or technical workflows? Let’s talk about where I could help.</p><a className="button light" href={`mailto:${CONTACT.email}`}>Let’s work together <Arrow /></a></div><div className="contact-links"><Label>FIND ME HERE</Label><a href={`mailto:${CONTACT.email}`}><span><small>EMAIL</small>{CONTACT.email}</span><Arrow /></a><button className="copy-email" onClick={copyEmail}>Copy email address <span aria-hidden="true">⧉</span></button><p className="copy-status" role="status">{copyState}</p><a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><span><small>LINKEDIN</small>Connect professionally</span><Icon name="external" /></a><a href={CONTACT.github} target="_blank" rel="noreferrer"><span><small>GITHUB</small>Explore my work</span><Icon name="external" /></a><p className="availability"><span />Available for remote opportunities from India</p></div></div></section>;
}
export default function App() {
  const [view, setView] = useState('services');
  const [menuOpen, setMenuOpen] = useState(false);
  const main = useRef(null);
  const changed = useRef(false);
  function changeView(next) { if (next !== view) { changed.current = true; setView(next); } setMenuOpen(false); }
  useEffect(() => {
    if (changed.current) { main.current?.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: 'instant' }); changed.current = false; }
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.animate([{ opacity: .65, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 240, easing: 'cubic-bezier(0,0,.38,.9)' }); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!preference.matches) document.querySelectorAll('.section-heading').forEach(el => observer.observe(el));
    const stopMotion = () => { if (preference.matches) { observer.disconnect(); document.getAnimations().forEach(animation => animation.cancel()); } };
    preference.addEventListener('change', stopMotion);
    return () => { observer.disconnect(); preference.removeEventListener('change', stopMotion); };
  }, [view]);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="header"><div className="header-inner shell"><a href="#home" className="brand" onClick={() => changeView('services')} aria-label="Pranav T Pradeep, home"><span className="monogram">P<span>.</span></span><span>Pranav T Pradeep</span></a><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button><nav id="main-nav" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation"><button onClick={() => changeView('services')} aria-pressed={view === 'services'}>Services</button>{view === 'services' && <><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></>}<button onClick={() => changeView('resume')} aria-pressed={view === 'resume'}>Resume ↗</button><a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow /></a></nav></div></header>
    <main id="main" tabIndex="-1" ref={main} key={view} className="view-enter">{view === 'services' ? <><section className="hero shell" id="home"><div className="hero-top"><Label>INDEPENDENT PORTFOLIO / OPERATIONS & TECHNOLOGY</Label><span className="label">INDIA · REMOTE COLLABORATION</span></div><div className="hero-grid"><div className="hero-copy"><Label>PEOPLE. PROCESSES. POSSIBILITIES.</Label><h1>Behind every<br />good business.<br /><span>Better operations.</span></h1><p>I'm Pranav. I bring structure to the work behind the scenes — connecting employee services, business processes and technical support.</p><div className="hero-actions"><a href="#contact" className="button">Let’s work together <Arrow /></a><a href="#services" className="button secondary">Explore services <span aria-hidden="true">↓</span></a></div></div><Portrait /></div><div className="hero-bottom"><span>BUSINESS OPERATIONS & CASE MANAGEMENT</span><a href="#services">Discover my approach ↓</a></div></section>
    <section className="section shell" id="services"><div className="section-heading"><Label>01 / WHAT I DO</Label><div><h2>The right support.<br />Where you need it.</h2><p>Practical, detail-oriented support for the processes that keep your business running.</p></div></div><div className="services-grid">{services.map(service => <article className="service" key={service.number}><div className="card-top"><span className="label">{service.number}</span><Icon name={service.icon} size={28} /></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.tasks.map(task => <li key={task}>{task}</li>)}</ul><a href="#contact" aria-label={`Discuss ${service.title}`}>Discuss your needs <Arrow /></a></article>)}</div><p className="service-note">↳ Built around your workflow. Support tailored to your existing tools, processes and team.</p></section>
    <section className="about" id="about"><div className="shell about-grid"><div><Label>02 / ABOUT ME</Label><h2>I understand<br />the people<br /><span>behind the process.</span></h2></div><div className="about-copy"><p className="large-copy">Good operations make good work easier.</p><p>I'm Pranav, an operations professional with experience in employee services, customer support and technical workflows. My work at Sutherland Global Services gave me a foundation in structured business processes, while my experience at ClaySys Technologies strengthened my understanding of technical support and automation.</p><p>With a background in Computer Science, I bring together an operational mindset, technical curiosity and attention to detail to help teams manage the work that happens behind the scenes.</p><div className="about-facts"><div><Label>BASED IN</Label><p>Bangalore, India</p></div><div><Label>WORKING ACROSS</Label><p>People · Systems · Detail</p></div></div><button className="text-button" onClick={() => changeView('resume')}>View professional profile <Arrow /></button></div></div></section><Experience /><Toolkit /><aside className="work-link shell"><div><Label>CODE & DEVELOPMENT</Label><h2>Explore the technical side.</h2><p>Find my development work on GitHub.</p></div><a className="button secondary" href={CONTACT.github} target="_blank" rel="noreferrer">View GitHub <Icon name="external" /></a></aside></> : <><section className="resume-intro shell" id="home"><button className="text-button" onClick={() => changeView('services')}>← Back to services</button><Label>PROFESSIONAL PROFILE / OPERATIONS · CASE MANAGEMENT · AUTOMATION</Label><h1>Pranav T Pradeep<span>.</span></h1><h2>Business Operations & Case Management Analyst</h2><p>Business operations professional with experience in employee services, payroll workflows, case processing and technical operations. I combine structured case management with a technical foundation in software development, RPA and production support.</p><Label>BANGALORE, INDIA / REMOTE COLLABORATION</Label></section><Experience /><Toolkit /></>}<Contact /></main>
    <footer className="shell footer"><a className="brand" href="#home" onClick={() => changeView('services')}><span className="monogram">P<span>.</span></span><span>Pranav T Pradeep<small>Business Process & Operations</small></span></a><p>Remote from India.<br />Open to global collaboration.</p><a href="#home">Back to top ↑</a><span className="copyright">© {new Date().getFullYear()} Pranav T Pradeep</span></footer></>;
}

