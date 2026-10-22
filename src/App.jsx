
import { useState } from "react";
import "./App.css";

// Keep your contact information and social links here.
const CONTACT = {
  email: "pranavpradeeptp@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranavpradeept/",
  github: "https://github.com/FullStackPranav",
};

const services = [
  {
    number: "01",
    icon: "people",
    title: "HR & Employee Operations",
    description:
      "Keep employee-related workflows organised, documented and moving forward.",
    tasks: [
      "Leave-case tracking",
      "Employee records & documentation",
      "Case administration & follow-ups",
    ],
  },
  {
    number: "02",
    icon: "payroll",
    title: "Payroll Administration Support",
    description:
      "Support accurate payroll preparation through structured checks and data handling.",
    tasks: [
      "Timesheet & attendance checks",
      "Employee data validation",
      "Discrepancy tracking & follow-ups",
    ],
  },
  {
    number: "03",
    icon: "support",
    title: "Customer & Back-Office Support",
    description:
      "Deliver consistent customer communication and dependable day-to-day support.",
    tasks: [
      "Live chat & email support",
      "Ticket handling & tracking",
      "Escalations & case updates",
    ],
  },
  {
    number: "04",
    icon: "automation",
    title: "Process & Automation Support",
    description:
      "Help teams maintain clear processes and resolve routine workflow issues.",
    tasks: [
      "SOP & process documentation",
      "Workflow & incident support",
      "Automation exception handling",
    ],
  },
];

// Inline SVG icons: no icon library or external assets required.
function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
        <path d="M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.5V20" />
      </>
    ),
    payroll: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3 10h18M7 15h4M16 15h1" />
      </>
    ),
    support: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="12" width="4" height="7" rx="2" />
        <rect x="17" y="12" width="4" height="7" rx="2" />
        <path d="M17 19a5 5 0 0 1-5 3h-1" />
      </>
    ),
    automation: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <path d="m5.6 5.6 2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{paths[name] ?? paths.arrow}</svg>;
}

// Dedicated placeholder: implement résumé content separately later.

const resumeExperience = [
  {
    id: "claysys",
    company: "ClaySys Technologies",
    role: "RPA Developer",
    period: "Oct 2025 — Sep 2026",
    location: "Cochin, India",
    category: "AUTOMATION & PRODUCTION SUPPORT",
    summary:
      "Supported production automation workflows for US financial-services clients, with a focus on exception handling, incident resolution and process reliability.",
    responsibilities: [
      "Monitored production automation and investigated failures using execution logs, system outputs and operational data.",
      "Worked with validation checks, structured logging and exception handling to support reliable workflows.",
      "Maintained SOPs, runbooks, deployment guides and operational handover documentation.",
      "Coordinated with development, infrastructure and business stakeholders to communicate incidents and escalations.",
    ],
    skills: ["UiPath, ", "RPA Genie, ", "Azure Devops, ","SQL Server Management Studio "],
  },
  {
    id: "camerinfolks",
    company: "Camerinfolks Pvt. Ltd",
    role: "Full-Stack Intern",
    period: "Jan 2025 — Jun 2025",
    location: "Cochin, India",
    category: "SOFTWARE DEVELOPMENT",
    summary:
      "Developed backend services and REST APIs for workflow-driven applications while supporting data validation, troubleshooting and deployment.",
    responsibilities: [
      "Developed backend services and REST APIs with a focus on data integrity and reliability.",
      "Used SQL queries to validate application data and investigate processing issues.",
      "Troubleshot issues across frontend, backend and database layers using logs and traces.",
      "Supported testing, deployment, technical documentation and operational handovers.",
    ],
    skills: ["MERN Stack, ",  "JavaScript, ", "Git/GitHub, "],
  },
  {
    id: "sutherland",
    company: "Sutherland Global Services",
    role: "Customer Support Associate",
    period: "Apr 2021 — Jun 2023",
    location: "Cochin, India",
    category: "EMPLOYEE OPERATIONS & CASE MANAGEMENT",
    summary:
      "Supported Amazon UK and US employee operations, handling leave, attendance and payroll-related cases in SLA-driven workflows.",
    responsibilities: [
      "Reviewed employee leave and payroll requests against approvals, eligibility rules, policy requirements and available balances.",
      "Validated supporting documents and updated attendance, working hours and leave records using Kronos (MyTime) and PeopleSoft.",
      "Used Salesforce and enterprise systems to research employee records, document case actions and resolve requests.",
      "Coordinated with HR Business Partners and managers to obtain missing information, approvals and case clarifications.",
      "Investigated payroll discrepancies and handled manual fallback processing when automation exceptions occurred.",
    ],
    skills: [
      "Salesforce, ",
      "PeopleSoft, ",
      "Kronos (MyTime), ",
      "Payroll Support, ",
      "Case Management, ",
      "Customer Service",
    ],
    highlight:
      "Recognized among the top three performers for eight consecutive months based on SLA adherence, productivity and operational support quality.",
  },
];

const resumeEducation = [
  {
    qualification: "Master of Computer Applications",
    institution: "APJ Abdul Kalam Technological University",
    period: "2023 — 2025",
  },
  {
    qualification: "B.Sc. Computer Science",
    institution: "MG University",
    period: "2017 — 2020",
  },
];

const resumeSkillGroups = [
  // {
  //   title: "Operations & case management",
  //   skills: [
  //     "Case Review",
  //     "Document Validation",
  //     "Data Verification",
  //     "Eligibility Checks",
  //     "Escalation Management",
  //     "SLA Management",
  //     "SOP Adherence",
  //   ],
  // },
  {
    title: "Enterprise systems",
    skills: ["Salesforce", "PeopleSoft", "Kronos (MyTime)", "MS Office","Sim Ticketing","Panaroma","Azure devops"],
  },
  {
    title: "Automation & development",
    skills: [
      "UiPath",
      "RPA Genie",
      "Python",
      "SQL",
      "JavaScript",
      "REST APIs",
      "Postman",
      "Git/GitHub",

      "MongoDB",
    ],
  },
  // {
  //   title: "Production support",
  //   skills: [
  //     "Incident Management",
  //     "Root Cause Analysis",
  //     "Log Analysis",
  //     "Exception Handling",
  //     "Runbooks",
  //   ],
  // },
];

function ExperienceCard({ job, expanded, onToggle }) {
  return (
    <article className={`experience-card${expanded ? " is-expanded" : ""}`}>
      <button
        type="button"
        className="experience-trigger"
        aria-expanded={expanded}
        aria-controls={`experience-details-${job.id}`}
        onClick={onToggle}
      >
        <span className="experience-marker" aria-hidden="true" />

        <span className="experience-heading">
          <span className="experience-category">{job.category}</span>
          <span className="experience-role">{job.role}</span>
          <span className="experience-company">{job.company}</span>
          <span className="experience-meta">
            {job.period} <span aria-hidden="true">·</span> {job.location}
          </span>
          <span className="experience-summary">{job.summary}</span>
        </span>

        <span className="experience-toggle" aria-hidden="true">
          {expanded ? "−" : "+"}
        </span>
      </button>

      <div
        id={`experience-details-${job.id}`}
        className="experience-collapse"
        aria-hidden={!expanded}
        inert={!expanded}
      >
        <div className="experience-collapse-inner">
          <div className="experience-details">
            <span className="experience-details-label">
              RESPONSIBILITIES & CONTRIBUTIONS
            </span>

            <ul className="experience-list">
              {job.responsibilities.map((item) => (
                <li key={item}>
                  <span className="experience-check" aria-hidden="true">
                    <Icon name="check" size={13} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {job.highlight && (
              <div className="experience-highlight">
                <span className="highlight-spark" aria-hidden="true">✳</span>
                <p>{job.highlight}</p>
              </div>
            )}

            <div className="experience-tools">
              <span className="experience-details-label">TOOLS & EXPERTISE</span>
              <div className="resume-tags">
                {job.skills.map((skill) => (
                  <span className="resume-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ResumeView({ setView }) {
  const [expandedRoles, setExpandedRoles] = useState([]);

  function toggleRole(id) {
    setExpandedRoles((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

 function returnToContact(event) {
  event.preventDefault();

  setView("services");

  // Wait for the homepage to render, then scroll to Contact.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      }
    });
  });
}

  return (
    <main className="resume-view section-shell" aria-label="Professional profile">
      <div className="resume-topbar">
        <button
          type="button"
          className="resume-back"
          onClick={() => setView("services")}
        >
          <span aria-hidden="true">←</span> Back to services
        </button>
        <span className="resume-document-label">
          <span className="eyebrow-dot" />
          PROFESSIONAL PROFILE
        </span>
      </div>

      <section className="resume-intro-panel">
        <div className="resume-intro-copy">
          <Eyebrow>OPERATIONS · CASE MANAGEMENT · AUTOMATION</Eyebrow>
          <h1>
            Pranav T Pradeep<span>.</span>
          </h1>
          <p className="resume-intro-role">
            Business Operations & Case Management Analyst
          </p>
          <p className="resume-summary">
            Business operations professional with experience in employee
            services, payroll workflows, case processing and technical
            operations. I combine structured case management with a technical
            foundation in software development, RPA and production support.
          </p>

          <div className="resume-location">
            <Icon name="globe" size={16} />
            <span>Bangalore, India</span>
            <span className="resume-location-divider" />
            <span>Remote collaboration</span>
          </div>
        </div>

        <div className="resume-profile-aside">
          <span className="resume-aside-label">PROFESSIONAL FOCUS</span>
          <div className="resume-focus-item">
            <span>01</span>
            <p>Business operations</p>
          </div>
          <div className="resume-focus-item">
            <span>02</span>
            <p>Case management</p>
          </div>
          <div className="resume-focus-item">
            <span>03</span>
            <p>Automation support</p>
          </div>
          <a
            className="resume-contact-quicklink"
            href={`mailto:${CONTACT.email}`}
          >
            <Icon name="mail" size={16} />
            Get in touch <Icon name="arrow" size={16} />
          </a>
        </div>
      </section>

      <section className="resume-experience-section">
        <div className="resume-section-heading">
          <div>
            <Eyebrow>THE JOURNEY SO FAR</Eyebrow>
            <h2>Experience that connects <span>people & systems.</span></h2>
            <p className="resume-section-description">
              From employee operations to software development and automation.
              Select a role to explore the details.
            </p>
          </div>
          <span className="resume-section-count">03 ROLES</span>
        </div>

        <div className="experience-timeline">
          {resumeExperience.map((job) => (
            <ExperienceCard
              key={job.id}
              job={job}
              expanded={expandedRoles.includes(job.id)}
              onToggle={() => toggleRole(job.id)}
            />
          ))}
        </div>
      </section>

      <section className="resume-lower-grid">
        <div className="resume-education-section">
          <div className="resume-section-heading compact">
            <div>
              <Eyebrow>ACADEMIC BACKGROUND</Eyebrow>
              <h2>Education</h2>
            </div>
          </div>

          <div className="resume-education-list">
            {resumeEducation.map((item) => (
              <article className="resume-education-item" key={item.qualification}>
                <span className="education-icon">
                  <Icon name="graduation-cap" size={21} />
                </span>
                <div className="education-content">
                  <h3>{item.qualification}</h3>
                  <p>{item.institution}</p>
                  <span>{item.period}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-skills-section">
          <div className="resume-section-heading compact">
            <div>
              <Eyebrow>TOOLS & CAPABILITIES</Eyebrow>
              <h2>Technical toolkit</h2>
            </div>
          </div>

          <div className="resume-skills-list">
  {resumeSkillGroups.map((group) => (
    <article className="resume-skill-card" key={group.title}>
      <h3>{group.title}</h3>

      <div className="resume-tags">
        {group.skills.map((skill) => (
          <span className="resume-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  ))}
</div>
        </div>
      </section>

      <section className="resume-cta-panel">
        <div className="resume-cta-decoration" aria-hidden="true">✳</div>
        <div className="resume-cta-copy">
          <Eyebrow>HAVE A PROCESS THAT NEEDS SUPPORT?</Eyebrow>
          <h2>Let's make your workday <span>lighter.</span></h2>
          <p>
            If you're looking for dependable support across business
            operations, case management or technical workflows, let's talk.
          </p>
        </div>
        <a
          className="button button-primary resume-cta-button"
          href="#contact"
          onClick={returnToContact}
        >
          Let's work together <Icon name="arrow" size={18} />
        </a>
      </section>

      <div className="resume-bottom">
        <span>PRANAV T PRADEEP</span>
        <span>BUSINESS PROCESS & OPERATIONS</span>
        <button type="button" onClick={() => setView("services")}>
          BACK TO SERVICES ↑
        </button>
      </div>
    </main>
  );
}


function Header({ view, setView }) {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        onClick={() => setView("services")}
        aria-label="Pranav T Pradeep, home"
      >
        <span className="brand-mark">P<span>.</span></span>
        <span className="brand-name">Pranav T Pradeep</span>
      </a>

      <nav className="view-switch" aria-label="Main navigation">
        <button
          type="button"
          className={view === "services" ? "switch-option active" : "switch-option"}
          aria-pressed={view === "services"}
          onClick={() => setView("services")}jpg
        >
          Services
        </button>
        <button
          type="button"
          className={view === "resume" ? "switch-option active" : "switch-option"}
          aria-pressed={view === "resume"}
          onClick={() => setView("resume")}
        >
          Resume <span className="resume-arrow">↗</span>
        </button>
      </nav>
    </header>
  );
}

function Eyebrow({ children, className = "" }) {
  return (
    <div className={`eyebrow ${className}`}>
      <span className="eyebrow-dot" />
      {children}
    </div>
  );
}

function ProfilePlaceholder() {
  return (
    <div className="profile-wrap" aria-label="Profile photograph placeholder">
      <div className="profile-backdrop" />
      <div className="profile-card">
        <div className="profile-topline">
          <span className="profile-live-dot" />
          <span>INTRODUCING</span>
          <span className="profile-index">01 / 01</span>
        </div>

       
            <img className="profile-photo" src="/profile.png"
                 alt="Portrait of Pranav T Pradeep" />
        
        {/* <div className="profile-photo-placeholder" aria-hidden="true">
          <span className="photo-orbit orbit-one" />
          <span className="photo-orbit orbit-two" />
          <span className="photo-initials">PTP</span>
          <span className="photo-caption">YOUR PHOTO HERE</span>
        </div> */}

        <div className="profile-bottom">
          <div>
            <span className="profile-small-label">YOUR OPERATIONS PARTNER</span>
            <p>Pranav T Pradeep</p>
          </div>
          <span className="profile-sparkle" aria-hidden="true">✳</span>
        </div>
      </div>

      <div className="floating-note note-top">
        <span className="note-icon"><Icon name="globe" size={17} /></span>
        <span>
          <strong>Remote-first</strong>
          <small>Working across time zones</small>
        </span>
      </div>

      <div className="floating-note note-bottom">
        <span className="note-check"><Icon name="check" size={16} /></span>
        <span>
          <strong>Process-minded</strong>
          <small>People · Systems · Detail</small>
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <Eyebrow>REMOTE OPERATIONS SUPPORT <span className="eyebrow-divider">/</span> INDIA</Eyebrow>

        <h1>
          Reliable operations.
          <br />
          <span>Less work</span> on your plate.
        </h1>

        <p className="hero-description">
          Practical support for the processes that keep your business running.
          From employee services and payroll administration to customer support
          and process documentation, I help teams stay organised and focused.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Let's work together <Icon name="arrow" size={18} />
          </a>
          <a className="button button-secondary" href="#services">
            Explore services <span className="down-arrow">↓</span>
          </a>
        </div>

        <div className="hero-proof">
          <div className="proof-mark" aria-hidden="true">
            <span /><span /><span />
          </div>
          <p>
            Experience across <strong>international business processes</strong>,
            customer operations and technical support.
          </p>
        </div>
      </div>

      <ProfilePlaceholder />

      <div className="hero-index" aria-hidden="true">
        <span>01</span><span className="index-line" /><span>04</span>
      </div>
    </section>
  );
}

function SectionHeading({ label, title, description, number }) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <Eyebrow>{label}</Eyebrow>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {number && <span className="section-number">{number}</span>}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon"><Icon name={service.icon} size={24} /></span>
        <span className="service-number">{service.number}</span>
      </div>

      <h3>{service.title}</h3>
      <p className="service-description">{service.description}</p>

      <ul className="service-tasks">
        {service.tasks.map((task) => (
          <li key={task}>
            <span className="task-bullet"><Icon name="check" size={12} /></span>
            {task}
          </li>
        ))}
      </ul>

      <a
        className="service-link"
        href="#contact"
        aria-label={`Discuss ${service.title}`}
      >
        Discuss your needs <Icon name="arrow" size={17} />
      </a>
    </article>
  );
}

function Services() {
  return (
    <section className="services-section section-shell section-block" id="services">
      <SectionHeading
        label="WHAT I CAN HELP WITH"
        title={<>The right support.<br /><span>Where you need it.</span></>}
        description="Flexible, detail-oriented support for everyday business operations, administration and process work."
        number="01 — SERVICES"
      />

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </div>

      <div className="services-note">
        <span className="services-note-icon"><Icon name="check" size={17} /></span>
        <p>
          <strong>Built around your workflow.</strong> Support can be tailored
          to your existing tools, processes and team requirements.
        </p>
      </div>
    </section>
  );
}

function About() {
  const highlights = [
    { number: "01", title: "Operations experience", text: "Sutherland Global Services" },
    { number: "02", title: "Technical support", text: "ClaySys Technologies" },
    { number: "03", title: "Technical foundation", text: "Computer Science background" },
  ];

  return (
    <section className="about-section section-shell section-block" id="about">
      <div className="about-panel">
        <div className="about-copy">
          <Eyebrow>A LITTLE ABOUT ME</Eyebrow>
          <h2>
            I understand the
            <br />
            <span>people behind</span> the process.
          </h2>
          <p>
            I'm Pranav, an operations professional with experience in employee
            services, customer support and technical workflows. My work at
            Sutherland Global Services gave me a foundation in structured
            business processes, while my experience at ClaySys Technologies
            strengthened my understanding of technical support and automation.
          </p>
          <p>
            With a background in Computer Science, I bring together an
            operational mindset, technical curiosity and attention to detail
            to help teams manage the work that happens behind the scenes.
          </p>
          <a className="text-link" href="#contact">
            A little more about working together <Icon name="arrow" size={17} />
          </a>
        </div>

        <div className="about-highlights">
          <span className="about-side-label">EXPERIENCE & APPROACH</span>
          {highlights.map((item) => (
            <div className="highlight-row" key={item.number}>
              <span className="highlight-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <Icon name="arrow" size={17} />
            </div>
          ))}

          <div className="about-quote">
            <span className="quote-mark">“</span>
            <p>Good operations make good work easier.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-shell section-block" id="contact">
      <div className="contact-panel">
        <div className="contact-main">
          <Eyebrow>HAVE SOMETHING IN MIND?</Eyebrow>
          <h2>
            Let's make your
            <br />
            workday <span>lighter.</span>
          </h2>
          <p>
            Need an extra pair of hands for operations, administration or
            customer support? Let's talk about your workflow and where I
            could help.
          </p>
          <a className="button button-primary contact-cta" href={`mailto:${CONTACT.email}`}>
            Get in touch <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="contact-details">
          <span className="contact-details-label">FIND ME HERE</span>
          <a className="contact-link" href={`mailto:${CONTACT.email}`}>
            <span className="contact-link-icon"><Icon name="mail" size={19} /></span>
            <span><small>EMAIL</small><strong>{CONTACT.email}</strong></span>
            <Icon name="external" size={16} />
          </a>
          <a
            className="contact-link"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon linkedin-letter">in</span>
            <span><small>LINKEDIN</small><strong>Connect professionally</strong></span>
            <Icon name="external" size={16} />
          </a>
          <a
            className="contact-link"
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon"><Icon name="external" size={19} /></span>
            <span><small>GITHUB</small><strong>Explore my work</strong></span>
            <Icon name="external" size={16} />
          </a>
          <div className="contact-availability">
            <span className="eyebrow-dot" />
            Available for remote opportunities from India
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ setView }) {
  return (
    <footer className="site-footer section-shell">
      <a
        className="footer-brand"
        href="#home"
        onClick={() => setView("services")}
      >
        <span className="brand-mark">P<span>.</span></span>
        <span>
          <strong>Pranav T Pradeep</strong>
          <small>Business Process & Operations</small>
        </span>
      </a>

      <p className="footer-location">
        <Icon name="globe" size={15} />
        Remote from India · Open to global collaboration
      </p>

      <a className="back-to-top" href="#home" onClick={() => setView("services")}>
        Back to top ↑
      </a>
      <span className="footer-copyright">© {new Date().getFullYear()} Pranav T Pradeep</span>
    </footer>
  );
}

export default function App() {
  const [view, setView] = useState("services");

  return (
    <div className="app">
      <div className="ambient-glow" aria-hidden="true" />
      <Header view={view} setView={setView} />

      {view === "resume" ? (
  <ResumeView setView={setView} />
) : (
        <>
          <Hero />
          <Services />
          <About />
          <Contact />
          <Footer setView={setView} />
        </>
      )}
    </div>
  );
}
