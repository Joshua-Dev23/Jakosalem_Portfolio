import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Award, Code2, Facebook, Github, ImagePlus, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react'

const links = [['About', '#about'], ['Toolkit', '#skills'], ['Projects', '#work'], ['Education', '#education'], ['Certificates', '#certificates'], ['Contact', '#contact']]
const capabilities = [
  { title: 'Frontend', info: 'Tools for structuring, styling, and building interactive web interfaces.', tools: [['HTML5', 'html5'], ['CSS3', 'css3'], ['JavaScript', 'javascript'], ['React', 'react']] },
  { title: 'Backend & databases', info: 'Technologies for server-side development and working with application data.', tools: [['Node.js', 'nodedotjs'], ['Express', 'express'], ['MySQL', 'mysql'], ['MongoDB', 'mongodb']] },
  { title: 'Developer tools', info: 'Tools for writing code, tracking changes, and managing projects.', tools: [['Git', 'git'], ['GitHub', 'github'], ['VS Code', 'visualstudiocode']] },
  { title: 'Productivity', info: 'Everyday tools for documents, spreadsheets, and organization.', tools: [['Microsoft Office', 'microsoftoffice'], ['Excel', 'microsoftexcel']] },
]
const projects = [
  { title: 'DANCALAN', type: 'Featured Project', body: 'A web-based barangay management system tailored to Dancalan, designed to support daily operations and keep essential community information organized.', tags: ['Tailwind CSS', 'Node.js', 'Express', 'React', 'MySQL'], image: `${import.meta.env.BASE_URL}assets/projects/dancalan-preview.png` },
]

function SectionHeading({ eyebrow, title }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light')
  const [roleText, setRoleText] = useState('')
  const [activeSection, setActiveSection] = useState(() => window.location.hash)
  const email = 'jakosalem.m.joshua@gmail.com'
  const profileImage = `${import.meta.env.BASE_URL}assets/profile-cutout.png`

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    function syncActiveSection() {
      setActiveSection(window.location.hash)
    }

    window.addEventListener('hashchange', syncActiveSection)
    return () => window.removeEventListener('hashchange', syncActiveSection)
  }, [])

  useEffect(() => { 
    const roles = ['Aspiring Full Stack Developer', 'Always Learning']
    let roleIndex = 0
    let characterIndex = 0
    let deleting = false
    let timer

    function typeNextCharacter() {
      const currentRole = roles[roleIndex]
      characterIndex += deleting ? -1 : 1
      setRoleText(currentRole.slice(0, characterIndex))

      let delay = deleting ? 45 : 85
      if (!deleting && characterIndex === currentRole.length) {
        deleting = true
        delay = 1400
      } else if (deleting && characterIndex === 0) {
        deleting = false
        roleIndex = (roleIndex + 1) % roles.length
        delay = 350
      }

      timer = window.setTimeout(typeNextCharacter, delay)
    }

    timer = window.setTimeout(typeNextCharacter, 250)
    return () => window.clearTimeout(timer)
  }, [])

  return <>
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Mark Joshua Jakosalem home"><span className="brand-mark">MJ</span><span>Mark Joshua Jakosalem</span></a>
        <button className="menu-toggle icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
        <nav className={`navigation ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} className={activeSection === href ? 'active' : undefined} aria-current={activeSection === href ? 'location' : undefined} onClick={() => { setActiveSection(href); setMenuOpen(false) }}>{label}</a>)}
          <button className="theme-toggle icon-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}</button>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={14}/></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero page-width" id="home">
        <div className="hero-copy">
          <span className="availability"><span className="status-dot"/> Open to internships</span>
          <p className="hero-greeting">Hi, I’m</p>
          <h1>Mark Joshua<br/><span>Jakosalem.</span></h1>
          <p className="hero-role" aria-label="Aspiring Full Stack Developer"><span>{roleText}</span><span className="typing-caret" aria-hidden="true"/></p>
          <p>Information Technology student at STI College Legazpi, learning across the stack and creating responsive web projects.</p>
          <div className="hero-actions"><a className="button-primary" href="#work">View my work <ArrowDownRight size={16}/></a><a className="text-link" href="#about">About me</a></div>
        </div>
        <aside className="profile-card" aria-label="Profile summary">
          <div className="profile-photo">{profileImage ? <img src={profileImage} alt="Mark Joshua Jakosalem"/> : <div className="profile-photo-placeholder"><ImagePlus size={27}/><span>Add your photo</span></div>}</div>
          <div className="profile-details"><span className="eyebrow">INFORMATION TECHNOLOGY STUDENT</span><h2>Learning by building.</h2><p>STI College Legazpi</p></div>
        </aside>
      </section>

      <section className="page-width section section-decorated" id="about">
        <SectionHeading eyebrow="ABOUT" title="A little about me"/>
        <div className="about-layout">
          <div className="about-card card">
            <p>I’m pursuing a Bachelor of Science in Information Technology at STI College Legazpi. I’m interested in how thoughtful design and technology can turn ideas into useful, easy-to-use web experiences.</p>
            <p>I enjoy exploring both sides of web development: creating clear, responsive interfaces and understanding how applications handle data behind the scenes. My coursework and academic projects have given me experience with responsive layouts, database design, and core application development.</p>
            <p>I’m continuing to build my skills across the stack, learn new tools, and grow through hands-on projects.</p>
          </div>
          <aside className="about-focus-card card">
            <div className="focus-heading"><span className="focus-icon"><Code2 size={18}/></span><span className="eyebrow">LEARNING FOCUS</span></div>
            <h3>Growing across the stack.</h3>
            <p>Building hands-on skills in:</p>
            <div className="focus-tags"><span>Frontend</span><span>Backend</span><span>Database design</span></div>
          </aside>
        </div>
      </section>

      <section className="section section-muted toolkit-section" id="skills">
        <div className="page-width">
          <SectionHeading eyebrow="TOOLKIT" title="Tools I work with"/>
          <div className="skills-grid">
            {capabilities.map(({ title, info, tools }) => <article className="skill-card card" key={title}>
              <h3>{title}</h3>
              <p>{info}</p>
              <div className="tool-list">{tools.map(([name, logo]) => <span className="tool" key={name}><span className="tool-logo"><img src={`${import.meta.env.BASE_URL}assets/tools/${logo}.svg`} alt="" loading="lazy"/></span>{name}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="page-width section section-decorated" id="work">
        <SectionHeading eyebrow="PROJECTS" title="Projects I’ve built"/>
        <div className="project-grid">
          {projects.map(project => <article className="project-card card" key={project.title}>
            <div className="project-image">{project.image ? <img src={project.image} alt={project.title}/> : <div className="project-image-placeholder"><ImagePlus size={30}/><span>Project photo</span></div>}</div>
            <div className="project-copy"><span className="eyebrow">{project.type}</span><h3>{project.title}</h3><p>{project.body}</p><div className="project-technologies"><span className="eyebrow">Technologies used</span><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></div>
          </article>)}
        </div>
      </section>

      <section className="section section-muted" id="education">
        <div className="page-width">
          <SectionHeading eyebrow="EDUCATION" title="My learning journey"/>
          <div className="education-grid">
            <article className="education-card card"><span className="eyebrow">2023 — 2027</span><h3>Bachelor of Science in Information Technology</h3><p>STI College Legazpi</p></article>
            <article className="education-card card"><span className="eyebrow">2021 — 2023</span><h3>Senior High School</h3><p>Donsol National Comprehensive High School</p></article>
          </div>
        </div>
      </section>

      <section className="section section-muted section-decorated" id="certificates">
        <div className="page-width">
          <SectionHeading eyebrow="CERTIFICATES" title="Courses & certificates"/>
          <article className="certificate-card card">
            <div className="certificate-heading">
              <span className="certificate-icon"><Award size={22}/></span>
              <div className="certificate-details"><span className="eyebrow">ORACLE ACADEMY</span><h3>Java Fundamentals</h3><p>Completed June 19, 2024</p><a href={`${import.meta.env.BASE_URL}assets/certificates/Java_Funamentals.pdf`} target="_blank" rel="noreferrer">Open original PDF <ArrowUpRight size={14}/></a></div>
            </div>
            <img className="certificate-preview" src={`${import.meta.env.BASE_URL}assets/certificates/Java_Funamentals-preview.png`} alt="Oracle Academy Java Fundamentals certificate awarded to Mark Joshua Jakosalem on June 19, 2024"/>
          </article>
        </div>
      </section>

      <section className="page-width section" id="contact">
        <div className="contact-card card">
          <div><span className="eyebrow">CONTACT</span><h2>Let’s connect.</h2><p>Open to web development opportunities and conversations about technology.</p></div>
          <div className="contact-links">
            <a href={`mailto:${email}`}><Mail size={17}/>{email}<ArrowUpRight size={14}/></a>
            <a href="https://www.linkedin.com/in/jakosalem-mark-joshua" target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn<ArrowUpRight size={14}/></a>
            <a href="https://github.com/Joshua-Dev23" target="_blank" rel="noreferrer"><Github size={17}/>GitHub<ArrowUpRight size={14}/></a>
            <a href="https://www.facebook.com/markjoshua.llave" target="_blank" rel="noreferrer"><Facebook size={17}/>Facebook<ArrowUpRight size={14}/></a>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer"><div className="page-width footer-inner"><a className="brand" href="#home"><span className="brand-mark">MJ</span><span>Mark Joshua Jakosalem</span></a><span>© {new Date().getFullYear()} Mark Joshua Jakosalem</span><a href="#home" className="back-top">Back to top ↑</a></div></footer>
  </>
}

export default App
