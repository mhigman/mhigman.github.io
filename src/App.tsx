import { useEffect, useState } from 'react';
import './App.css';
import { Icon } from './icons';
import { contact, projectHubUrl, projects, skills, type ProjectCategory } from './portfolio-data';

const filters: Array<ProjectCategory | 'All'> = ['All', 'Circuits', 'Research', 'Embedded', 'Robotics'];

/** A mobile-safe single-page portfolio with simple native interactions. */
function App() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.categories.includes(activeFilter));

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="Miles Higman home" onClick={closeMenu}><img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="" /></a>
      <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}><span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation</span><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      <nav id="site-navigation" className={menuOpen ? 'navigation navigation--open' : 'navigation'} aria-label="Primary navigation">
        <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-hub" href={projectHubUrl} target="_blank" rel="noreferrer">Project hub <Icon name="arrow" /></a>
      </nav>
    </header>
    <main id="top">
      <section className="hero section-frame" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span /> Electrical engineering · Stanford</p><h1 id="hero-title">Miles<br /><em>Higman.</em></h1><p className="hero-lede">Electrical engineering projects in circuits, embedded systems, and control.</p><div className="hero-actions"><a className="button button--primary" href="#work">View projects <Icon name="arrow" /></a><a className="button button--quiet" href={`mailto:${contact.email}`}>Get in touch</a></div></div>
        <aside className="hero-panel" aria-label="Current focus"><div className="panel-label">CURRENT FOCUS</div><p>Analog & mixed-signal circuits<br />Semiconductor devices<br />Embedded hardware systems</p><div className="panel-rule" /><p className="panel-note">EE undergraduate on an accelerated graduate coursework path.</p></aside>
      </section>
      <section id="work" className="section-frame work-section" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">01 / PROJECTS</p><h2 id="work-title">Selected<br /><em>work.</em></h2></div><p>Research, simulations, and hardware projects organized by the work they demonstrate.</p></div>
        <div className="filter-bar" aria-label="Filter projects by discipline">{filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? 'filter-button filter-button--active' : 'filter-button'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="project-grid" aria-live="polite">{visibleProjects.map((project, index) => <article className={project.featured && index === 0 ? 'project-card project-card--featured' : 'project-card'} key={project.title}><div className="project-meta"><span>{project.categories.join(' · ')}</span><span>{project.date}</span></div><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} in the project hub`}>View project <Icon name="arrow" /></a></article>)}</div>
        <a className="text-link" href={projectHubUrl} target="_blank" rel="noreferrer">See the complete project hub <Icon name="arrow" /></a>
      </section>
      <section id="about" className="section-frame about-section" aria-labelledby="about-title"><p className="eyebrow">02 / SKILLS</p><div className="about-grid"><div><h2 id="about-title">Skills &<br /><em>tools.</em></h2><p className="about-copy">I work across circuit analysis, hardware bring-up, algorithms, and technical communication—moving from a model or derivation to a system that can be tested.</p></div><div className="skill-list" aria-label="Technical skills">{skills.map((skill, index) => <span key={skill}><b>{String(index + 1).padStart(2, '0')}</b>{skill}</span>)}</div></div></section>
      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="section-frame contact-inner"><p className="eyebrow">03 / CONTACT</p><h2 id="contact-title">Get in<br /><em>touch.</em></h2><a className="email-link" href={`mailto:${contact.email}`}>{contact.email} <Icon name="arrow" /></a><div className="social-links"><a href={contact.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a><a href={contact.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a><a href={`mailto:${contact.email}`}><Icon name="mail" /> Email</a></div></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Miles Higman</span><a href="#top">Back to top ↑</a></footer>
  </div>;
}
export default App;
