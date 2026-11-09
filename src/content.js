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
    skills: [
      "UiPath, ",
      "RPA Genie, ",
      "Azure Devops, ",
      "SQL Server Management Studio ",
    ],
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
    skills: ["MERN Stack, ", "JavaScript, ", "Git/GitHub, "],
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
  {
    title: "Enterprise systems",
    skills: [
      "Salesforce",
      "PeopleSoft",
      "Kronos (MyTime)",
      "MS Office",
      "Sim Ticketing",
      "Panaroma",
      "Azure devops",
    ],
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
];

export {
  CONTACT,
  services,
  resumeExperience,
  resumeEducation,
  resumeSkillGroups,
};
