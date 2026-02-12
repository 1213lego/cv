import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Luis Granada",
  initials: "LG",
  location: "West End, Brisbane QLD",
  locationLink: "https://www.google.com/maps/place/West+End+QLD",
  about: "Software Engineer",
  summary: (
    <>
      Software Engineer with 5+ years of experience building scalable backend
      systems, event-driven architectures, and AI-powered platforms. Hands-on
      with AI pipelines and LLM integrations across the full stack using
      TypeScript, Python, and Java in cloud environments (GCP, AWS).
      <br /><br />
      Fluent in English and Spanish (native). Ultra-endurance cyclist with
      completed races across Australia and Indonesia. Full working rights in
      Australia (Visa 485).
    </>
  ),
  avatarUrl: "https://github.com/1213lego.png",
  personalWebsiteUrl: "",
  contact: {
    email: "luisgranada1213@gmail.com",
    tel: "+61480452267",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/1213lego",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/lego",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "University of Ibagué",
      degree: "Systems Engineer",
      start: "2016",
      end: "2021",
    },
    {
      school: "Oracle",
      degree: "Oracle Certified Professional: Java SE 11 Developer",
      start: "2021",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Dondo (Crowdswap, Inc.)",
      link: "https://dondo.com",
      badges: ["Remote", "Python", "FastAPI", "Next.js", "AI", "GCP"],
      title: "Software Engineer - AI Platform",
      start: "2024",
      end: null,
      description: (
        <>
          AI-powered e-commerce platform — $4.4M raised from investors including
          Eric Yuan (Zoom CEO), Jerry Yang (Yahoo co-founder), and Ryan Smith
          (Qualtrics CEO). Built platform serving 3,000+ users, 769 stores, and
          90,000 products.
          <ul className="list-inside list-disc">
            <li>
              Designed core architecture supporting 6 e-commerce integrations
              (Shopify, Amazon, MercadoLibre, WooCommerce, Tienda Nube, Vtex).
              Imported 91,000+ Shopify listings in 2 hours.
            </li>
            <li>
              Architected extensible integration layer using design patterns,
              scaling from 2 to 6 platforms within a year.
            </li>
            <li>
              Built event-driven AI pipelines using LLMs with Cloud Tasks and
              Cloud Run. Tuned processing from 1.5–5 minutes to 6–30 seconds
              per listing.
            </li>
            <li>
              Built AI image generation feature producing 33,000+ lifestyle,
              studio, and advertising images with rate limiting and priority
              queuing.
            </li>
            <li>
              Implemented sequential listing optimization with Google ADK for
              contextual, higher-quality results.
            </li>
            <li>
              Developed prompt management tools enabling version control, testing,
              and environment switching in seconds.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Dondo (Crowdswap, Inc.)",
      link: "https://dondo.com",
      badges: ["Remote", "GraphQL", "Node.js", "Vue.js", "Azure"],
      title: "Backend Engineer",
      start: "2021",
      end: "2024",
      description: (
        <>
          Backend engineer for digital barter marketplace: 120,000+ users,
          80,000+ transactions, 10,000 daily active users, $8M+ in item value.
          <ul className="list-inside list-disc">
            <li>
              Developed backward-compatible services with custom database-driven
              feature flags and app version management.
            </li>
            <li>
              Designed Server Driven UI approach enabling dynamic content delivery
              without app releases.
            </li>
            <li>
              Implemented alert and distribution system for balanced customer
              support task allocation.
            </li>
            <li>
              Built in-house chat feature, replacing third-party solution and
              reducing costs.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Coder Academy Australia",
      link: "https://www.coderacademy.edu.au",
      badges: ["Part-Time", "Education", "Mentorship"],
      title: "Academic Teacher/Support",
      start: "2023",
      end: "2025",
      description: (
        <>
          Mentored 4 cohorts of 9–20 students in web development bootcamp.
          <ul className="list-inside list-disc">
            <li>
              Delivered one-on-one mentorship in HTML, CSS, JavaScript, Node.js,
              Python, PostgreSQL, and API design.
            </li>
            <li>
              Guided students through coding challenges and projects from concept
              to completion.
            </li>
            <li>
              Assessed assignments with constructive feedback to enhance learning
              outcomes.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Palm",
      link: "https://palm.com.co/",
      badges: ["Contract", "Remote", "Java", "Spring Boot", "GCP"],
      title: "Backend Developer",
      start: "2021",
      end: "2022",
      description: (
        <>
          Built medical prescription system for Mutual Ser (Colombian Health Insurance).
          <ul className="list-inside list-disc">
            <li>
              Owned initial phase: database model, microservices flow, and
              technology viability tests.
            </li>
            <li>
              Architected event-driven communication with GCP Pub/Sub for
              prescription validation and notifications.
            </li>
            <li>
              Delivered zero-downtime solution processing 500,000+ prescriptions
              in first week, scaling to 1,000,000+.
            </li>
            <li>
              Built APIs for drug providers to query prescriptions, reducing
              unnecessary pharmacy visits.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Geosat",
      link: "https://www.geosat.com.co/",
      badges: ["Contract", "Remote", "Node.js", "PostgreSQL", "Java"],
      title: "Software Developer",
      start: "2021",
      end: "2021",
      description: (
        <>
          Maintained road management system for Colombia's second-largest city.
          <ul className="list-inside list-disc">
            <li>
              Led Oracle to PostgreSQL migration: 20+ tables, 24,000+ geospatial
              records.
            </li>
            <li>
              Built custom Node.js migration program, cutting timeline from 6
              months to 3.
            </li>
            <li>
              Enhanced road inventory features across React UI and Play Framework
              Java backend.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "SOAINT",
      link: "https://soaint.com/",
      badges: ["Full-Time", "Java", "Spring Boot", "Angular"],
      title: "Junior Software Developer",
      start: "2019",
      end: "2020",
      description: (
        <>
          Contributed to government projects with Ministry of Labor requiring high
          availability.
          <ul className="list-inside list-disc">
            <li>
              Migrated legacy Java services from Java 6 to 8 with Git version
              management.
            </li>
            <li>
              Modernized build with Maven, reducing deploy times by 70%.
            </li>
            <li>
              Built citizen request portal features in Angular and Java, reducing
              paper requests by 70%.
            </li>
            <li>
              Conducted performance audits: sped up main dashboard by 15s, login
              by 7s, analytics by minutes.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "Node.js",
    "FastAPI",
    "Spring Boot",
    "React",
    "Next.js",
    "Vue.js",
    "Tailwind CSS",
    "GraphQL",
    "REST",
    "PostgreSQL",
    "Redis",
    "GCP",
    "AWS",
    "Azure",
    "Docker",
    "LLM Integration",
    "Google Gen AI",
    "Google ADK",
    "Prompt Engineering",
    "Event-Driven Architecture",
    "Microservices",
    "BullMQ",
    "Socket.IO",
  ],
  projects: [
    {
      title: "Project 1",
      techStack: ["Tech", "Stack", "Here"],
      description: "Project description to be added.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Project 2",
      techStack: ["Tech", "Stack", "Here"],
      description: "Project description to be added.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Project 3",
      techStack: ["Tech", "Stack", "Here"],
      description: "Project description to be added.",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
