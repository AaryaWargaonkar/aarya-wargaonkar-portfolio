import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Server,
  Smartphone,
  Trophy,
  GraduationCap,
  Briefcase,
  Menu,
  X,
  Download,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Skills Hub",
    type: "Full-Stack E-Learning Platform",
    period: "08/2026 – 09/2026",
    description:
      "A full-stack e-learning platform with separate Student and Instructor workflows, course management, learning progress, assessments, certificates, badges, reviews and payments.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Bootstrap",
      "Razorpay",
    ],
    live: "https://skillshub-frontend.onrender.com/",
    github: "https://github.com/AaryaWargaonkar/SkillsHub.git",
    featured: true,
  },
  {
    title: "Import-Export Management System",
    type: "Java Web Application",
    period: "04/2025 – 07/2025",
    description:
      "A multi-module Java web application using MVC2 architecture to manage consumer and seller workflows, products, inventory, orders, tracking, reporting and dashboards.",
    tech: ["Java", "Servlets", "JDBC", "MySQL", "JSP", "Bootstrap", "MVC2"],
    github: "https://github.com/AaryaWargaonkar/Import-Export-Java.git",
  },
  {
    title: "Travel Sync",
    type: "Cross-Platform Travel Application",
    period: "01/2026 – 02/2026",
    description:
      "A travel management application for trip planning, expense management, packing lists, journals and travel information, with API integrations and personalized destination recommendations.",
    tech: [
      "Flutter",
      "Dart",
      "Python",
      "Flask",
      "MySQL",
      "Postman",
      "Scikit-learn",
    ],
    github: "https://github.com/AaryaWargaonkar/Travel-Sync.git",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      "Java",
      "Python",
      "PHP",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: Server,
    title: "Frameworks & Libraries",
    items: [
      "Node.js",
      "Express.js",
      "React.js",
      "Bootstrap",
      "Java Servlets",
      "JSP",
      "Flutter",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "Oracle SQL"],
  },
  {
    icon: Smartphone,
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse IDE",
      "Figma",
      "Apache Tomcat",
      "Android Studio",
      "Render",
      "MongoDB Atlas",
    ],
  },
  {
    icon: Code2,
    title: "Concepts",
    items: [
      "RESTful APIs",
      "OOP",
      "MVC2 Architecture",
      "API Integration",
      "Payment Gateway Integration",
    ],
  },
];

const achievements = [
  ["1st Rank", "Computer Science Department", "Second Year B.Sc. Computer Science · 2024–2025"],
  ["1st Rank", "Computer Science Department", "Third Year B.Sc. Computer Science · 2025–2026"],
  ["3rd Rank", "Computer Science Department", "First Year B.Sc. Computer Science · 2023–2024"],
  ["Winner", "Origin 2024", "Thakur College of Science & Commerce"],
  ["Consolation Prize", "20th Avishkar Research Convention" ],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav">
          <button className="brand" onClick={() => go("home")}>
            <span className="brand-mark">AW</span>
            <span>Aarya Wargaonkar</span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "achievements",
              "contact",
            ].map((id) => (
              <button
                key={id}
                className={active === id ? "active" : ""}
                onClick={() => go(id)}
              >
                {id[0].toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <button className="nav-cta" onClick={() => go("contact")}>
            Let's connect <ArrowUpRight size={16} />
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span className="pulse"></span> Open to opportunities
              </div>

              <h1>
                Turning ideas into applications with <em>code & curiosity.</em>
              </h1>

              <p className="hero-text">
                I'm Aarya, a Computer Science graduate and MERN Stack Developer
                focused on building practical, responsive and full-stack
                applications.
              </p>

              <div className="hero-actions">
                <button className="primary-btn" onClick={() => go("projects")}>
                  View my work <ArrowUpRight size={18} />
                </button>

                <button className="secondary-btn" onClick={() => go("contact")}>
                  Get in touch <ArrowUpRight size={17} />
                </button>
              </div>

              <div className="hero-meta">
                <span>
                  <MapPin size={16} /> Mumbai, India
                </span>
                <span>
                  <Code2 size={16} /> MERN Stack Developer
                </span>
              </div>
            </div>

            <div className="hero-art reveal">
              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div>

              <div className="code-card">
                <div className="window-bar">
                  <i></i>
                  <i></i>
                  <i></i>
                  <span>developer.js</span>
                </div>

                <pre>
                  <code>
                    <span className="kw">const</span> developer = {"{"}
                    {"\n"} name: <span className="str">"Aarya"</span>,{"\n"}{" "}
                    role: <span className="str">"Full-Stack Developer"</span>,
                    {"\n"} stack: [<span className="str">"React"</span>,{" "}
                    <span className="str">"Node"</span>,{"\n"}{" "}
                    <span className="str">"Express"</span>,{" "}
                    <span className="str">"MongoDB"</span>],
                    {"\n"} focus:{" "}
                    <span className="str">"Building useful applications"</span>
                    {"\n"}
                    {"}"};
                  </code>
                </pre>

                <div className="code-status">
                  <span></span> Ready to build
                </div>
              </div>

              <div className="floating-chip chip-one">React.js</div>
              <div className="floating-chip chip-two">Node.js</div>
              <div className="floating-chip chip-three">MongoDB</div>
            </div>
          </div>

          <div className="scroll-note">
            Scroll to explore <span></span>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-head">
            <span className="section-number">01</span>
            <div>
              <p className="kicker">About me</p>
              <h2>
                Turning ideas into <span>working software.</span>
              </h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="lead">
                Full-Stack Developer with hands-on experience building and
                deploying web applications using React.js, Node.js, Express.js,
                MongoDB, REST APIs and Axios.
              </p>

              <p>
                My projects span e-learning, payment, recommendation and
                management applications. I enjoy working across the stack — from
                designing responsive interfaces to building APIs and connecting
                applications with databases.
              </p>

              <div className="about-stats">
                <div>
                  <strong>9.44</strong>
                  <span>CGPA</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>Featured projects</span>
                </div>
                <div>
                  <strong>2025</strong>
                  <span>Internship experience</span>
                </div>
              </div>
            </div>

            <div className="about-side">
              <div className="quote-card">
                <Sparkles size={22} />
                <p>
                  “I like learning by building — then improving what I build.”
                </p>
              </div>

              <div className="mini-card">
                <GraduationCap size={22} />
                <div>
                  <b>B.Sc. in Computer Science</b>
                  <span>
                    Thakur College of Science and Commerce · 2023–2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <div className="section-head">
            <span className="section-number">02</span>
            <div>
              <p className="kicker">Toolkit</p>
              <h2>
                Technologies I <span>work with.</span>
              </h2>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, items }) => (
              <div className="skill-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <div className="tags">
                  {items.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <span className="section-number">03</span>
            <div>
              <p className="kicker">Experience</p>
              <h2>
                Learning through <span>real projects.</span>
              </h2>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">04/2025 – 07/2025</div>

              <div className="timeline-card">
                <div className="role-top">
                  <div>
                    <h3>Software Development Intern | Team Lead</h3>
                    <p>SDAC Infotech · Mumbai</p>
                  </div>
                  <Briefcase size={24} />
                </div>

                <ul>
                  <li>
                    Worked on end-to-end web application development from
                    planning to deployment.
                  </li>
                  <li>
                    Worked with Java, JDBC, Servlets, MySQL and Bootstrap CSS.
                  </li>
                  <li>
                    Contributed to a hybrid application development project
                    integrating Generative AI concepts.
                  </li>
                  <li>
                    Led and coordinated interns during team-based development,
                    providing technical guidance and supporting task completion.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-head">
            <span className="section-number">04</span>
            <div>
              <p className="kicker">Selected work</p>
              <h2>
                Projects that show <span>how I build.</span>
              </h2>
            </div>
          </div>

          <div className="projects">
            {projects.map((project, i) => (
              <article
                className={`project-card ${project.featured ? "featured" : ""}`}
                key={project.title}
              >
                <div className="project-top">
                  <span className="project-index">0{i + 1}</span>
                  <span className="project-period">{project.period}</span>
                </div>

                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={17} /> GitHub <ExternalLink size={14} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        className="live-link"
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ArrowUpRight size={17} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section dark-section">
          <div className="section-head">
            <span className="section-number">05</span>
            <div>
              <p className="kicker">Achievements</p>
              <h2>
                A few things I'm <span>proud of.</span>
              </h2>
            </div>
          </div>

          <div className="achievement-grid">
            {achievements.map(([label, title, detail]) => (
              <div className="achievement-card" key={title}>
                <Trophy size={23} />
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>

          <div className="info-item certifications-item" >
            <b>Certifications</b>
            <div className="certificates">
              <span>
                IIT Bombay Spoken Tutorial: Java · Python · HTML · RDBMS ·
                PostgreSQL · Linux
              </span>
              <span>
                AWS Training: Introduction to Generative AI · Machine Learning
                Terminology and Process
              </span>
              <span>Great Learning: Artificial Intelligence Fundamentals</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <p className="kicker">06 · Contact</p>

            <h2>
              Let's connect <span>professionally.</span>
            </h2>

            <p>
              I'm open to opportunities where I can contribute, learn and grow
              as a developer.
            </p>

            <div className="contact-actions">
              <a
                className="secondary-btn"
                href="https://www.linkedin.com/in/aarya-wargaonkar-789402361/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>

            <div className="contact-details">
              <span>aaryawargaonkar@gmail.com</span>
              <span>
                <Phone size={16} /> 8291808438
              </span>
              <span>
                <MapPin size={16} /> Mumbai, India
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Aarya Wargaonkar</span>
        <span>MERN Stack Developer</span>

        <a
          href="https://github.com/AaryaWargaonkar"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} /> GitHub
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
