import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    title: "Salon Business Website",
    type: "Business Website",
    description:
      "A premium, mobile-first website concept for a salon with service discovery, pricing, gallery, location and direct enquiry CTAs.",
    tags: ["React", "Responsive UI", "WhatsApp CTA"],
    live: "#",
    video: "/videos/salon-demo.mp4",
    featured: true,
  },
  {
    title: "Job Portal",
    type: "Full-Stack Web App",
    description:
      "A job portal project with candidate/recruiter flows, job management and frontend-backend integration using the MERN stack.",
    tags: ["MongoDB", "Express", "Node.js", "JavaScript"],
    live: "#",
    video: "/videos/job-portal-demo.mp4",
    featured: true,
  },
  {
    title: "Live Business Project",
    type: "Client Project",
    description:
      "A real business website built for an operating business. Local Delivery Made Simple in Nelamangala. This business helps you get anything you need from your nearby local shops in Nelamangala and deliver it straight to your doorstep, without apps, confusion, or unnecessary delivery charges.",
    tags: ["Client Work", "Web Development", "Deployment"],
    live: "https://yourwants.online",
    video: "/videos/business-demo.mp4",
    featured: true,
  },
];

const skills = [
  { name: "HTML5", level: 90, group: "Frontend" },
  { name: "CSS3", level: 88, group: "Frontend" },
  { name: "JavaScript", level: 90, group: "Frontend" },
  { name: "React.js", level: 82, group: "Frontend" },
  { name: "Node.js", level: 75, group: "Backend" },
  { name: "Express.js", level: 85, group: "Backend" },
  { name: "MongoDB", level: 85, group: "Database" },
  { name: "Java", level: 72, group: "Programming" },
  { name: "SQL", level: 70, group: "Database" },
  { name: "Git & GitHub", level: 82, group: "Tools" },
  { name: "REST APIs", level: 80, group: "Backend" },
  { name: "Manual Testing", level: 70, group: "Quality" },
];

const services = [
  {
    number: "01",
    title: "Business Websites",
    text: "Modern websites that make local businesses look credible and make it easy for customers to call, message or enquire.",
  },
  {
    number: "02",
    title: "React Web Apps",
    text: "Responsive, component-based interfaces for startups, products and custom web applications.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    text: "Frontend + backend development with APIs, databases and practical business functionality.",
  },
  {
    number: "04",
    title: "Website Improvements",
    text: "Redesigns, responsive fixes, UI improvements, content updates and feature additions to existing websites.",
  },
];

function ArrowUpRight() {
  return <span className="arrow">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    document.body.style.overflow = video ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [video]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="noise" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">R</span>
            <span>Rakshith<span className="muted"> Web Studio</span></span>
          </a>

          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight /></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Available for freelance projects</div>
            <h1>
              I build <em>websites</em><br />
              that help businesses<br />
              <span className="outline">stand out.</span>
            </h1>
            <p className="hero-text">
              Freelance web developer creating fast, modern and mobile-friendly
              websites and web applications using React, JavaScript and the MERN stack.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">See my work <ArrowUpRight /></a>
              <a className="btn btn-ghost" href="#contact">Start a project</a>
            </div>
            <div className="trust-row">
              <span>01+ Year IT Experience</span>
              <i />
              <span>Real Client Work</span>
              <i />
              <span>MERN Development</span>
            </div>
          </div>

          <section className="mern-orbit-section" id="skills">
  <div className="mern-orbit">

    {/* Animated rings */}
    <div className="orbit orbit-outer"></div>
    <div className="orbit orbit-inner"></div>

    {/* Center */}
    <div className="mern-center">
      <span>FULL STACK</span>
      <strong>MERN</strong>
    </div>

    {/* MongoDB */}
    <div className="mern-tech tech-mongo">
      <div className="tech-icon">
        <i className="devicon-mongodb-plain"></i>
      </div>
      <span>MongoDB</span>
    </div>

    {/* Express */}
    <div className="mern-tech tech-express">
      <div className="tech-icon">
        <i className="devicon-express-original"></i>
      </div>
      <span>Express</span>
    </div>

    {/* React */}
    <div className="mern-tech tech-react">
      <div className="tech-icon">
        <i className="devicon-react-original"></i>
      </div>
      <span>React</span>
    </div>

    {/* Node */}
    <div className="mern-tech tech-node">
      <div className="tech-icon">
        <i className="devicon-nodejs-plain"></i>
      </div>
      <span>Node.js</span>
    </div>

  </div>
</section>
        </section>

        <section className="ticker" aria-label="Services">
          <div className="ticker-track">
            <span>WEB DESIGN</span><b>✦</b><span>REACT DEVELOPMENT</span><b>✦</b>
            <span>BUSINESS WEBSITES</span><b>✦</b><span>MERN STACK</span><b>✦</b>
            <span>WEB DESIGN</span><b>✦</b><span>REACT DEVELOPMENT</span><b>✦</b>
          </div>
        </section>

        <section id="work" className="section container">
          <div className="section-head">
            <div>
              <p className="section-kicker">01 — Selected work</p>
              <h2>Projects that <span>do the talking.</span></h2>
            </div>
            <p className="section-intro">
              A mix of business websites, full-stack applications and real-world work.
            </p>
          </div>

          <div className="projects">
            {projects.map((project, index) => (
              <article className={`project ${index === 0 ? "featured-project" : ""}`} key={project.title}>
                <div className="project-visual">
                  <div className={`project-placeholder p${index + 1}`}>
                    <div className="window-bar"><i /><i /><i /></div>
                    <div className="mock-content">
                      <small>{project.type.toUpperCase()}</small>
                      <strong>{project.title}</strong>
                      <span>Modern • Responsive • Built to convert</span>
                    </div>
                    <div className="project-number">0{index + 1}</div>
                  </div>
                  {project.video && (
                    <button className="play-btn" onClick={() => setVideo(project)} aria-label={`Play ${project.title} video`}>
                      ▶
                    </button>
                  )}
                </div>
                <div className="project-info">
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">Live website <ArrowUpRight /></a>
                    {project.video && <button onClick={() => setVideo(project)}>Watch demo <span>▶</span></button>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section dark-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">02 — What I do</p>
                <h2>From idea to <span>live website.</span></h2>
              </div>
            </div>
            <div className="services-grid">
              {services.map(service => (
                <article className="service" key={service.number}>
                  <span className="service-no">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-head">
            <div>
              <p className="section-kicker">03 — Skills & tools</p>
              <h2>Tools I use to <span>build.</span></h2>
            </div>
            <p className="section-intro">
              AI-assisted development helps me move faster; engineering fundamentals help me ship reliably.
            </p>
          </div>

          <div className="skills-layout">
            <div className="skills-copy">
              <div className="big-number">MERN</div>
              <p>
                I combine frontend development, backend fundamentals, databases,
                APIs and practical troubleshooting to turn ideas into working products.
              </p>
              <div className="skill-pills">
                <span>AI-assisted development</span>
                <span>Responsive design</span>
                <span>API integration</span>
                <span>Deployment</span>
                <span>Debugging</span>
              </div>
            </div>
            <div className="skill-list">
              {skills.map(skill => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-label">
                    <span>{skill.name}</span>
                    <small>{skill.group}</small>
                  </div>
                  <div className="bar"><span style={{ width: `${skill.level}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">04 — About me</p>
              <h2>Technical mindset.<br /><span>Business focus.</span></h2>
            </div>
            <div className="about-copy">
              <p className="large">
                I'm Rakshith K., a web developer with hands-on IT administration
                experience and a growing focus on modern web development.
              </p>
              <p>
                I enjoy taking a business idea, turning it into a clean interface,
                connecting the functionality behind it and getting it live. My
                approach is practical: understand the goal, build quickly, test
                carefully and keep the experience simple for the end user.
              </p>
              <a href="#contact" className="text-link">Have a project in mind? Let's talk <ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section className="process section container">
          <div className="section-head">
            <div>
              <p className="section-kicker">05 — Simple process</p>
              <h2>How we'll <span>work together.</span></h2>
            </div>
          </div>
          <div className="process-grid">
            <div><b>01</b><h3>Discover</h3><p>We discuss your business, audience and what the website needs to achieve.</p></div>
            <div><b>02</b><h3>Design & build</h3><p>I create the interface and develop the website using a fast, modern workflow.</p></div>
            <div><b>03</b><h3>Review</h3><p>You review the website and I refine the details based on your feedback.</p></div>
            <div><b>04</b><h3>Launch</h3><p>I test, deploy and help you get the finished website live.</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <p className="section-kicker">06 — Start a project</p>
            <h2>Have an idea?<br /><span>Let's build it.</span></h2>
            <p className="contact-sub">
              Tell me what you're building. I'll get back to you with a practical next step.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:rakshithwebstudio@gmail.com">Email me <ArrowUpRight /></a>
              <a className="btn btn-ghost light" href="https://wa.me/9611740509" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
            <div className="contact-meta">
              <span>Bengaluru, India</span>
              <span>Available for freelance work</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Rakshith K.</span>
          <div>
            <a href="https://github.com/Raksh0527" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>

      {video && (
        <div className="modal" onClick={() => setVideo(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setVideo(null)}>×</button>
            <div className="modal-title">
              <small>{video.type}</small>
              <h3>{video.title}</h3>
            </div>
            <video controls autoPlay playsInline src={video.video}>
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);