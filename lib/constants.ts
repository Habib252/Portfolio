export const SITE_CONFIG = {
  name: "Kerolos Refaat",
  title: "UX/UI Designer & Pharmacist",
  email: "kerolos.refaat@example.com",
  linkedin: "https://www.linkedin.com/in/kerolos-refaat",
  url: "https://kerolosrefaat.com",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: "medtrack",
    title: "MedTrack",
    subtitle: "Patient Adherence App",
    description:
      "A mobile-first application designed to help patients manage their medication schedules, track adherence, and receive timely reminders — improving outcomes through intuitive UX.",
    tags: ["UX Research", "Figma", "Healthcare", "Mobile Design"],
    category: "Case Study",
    gradient: "from-[#1A2A1A] to-[#0D1A0D]",
    accentColor: "#4CAF84",
  },
  {
    id: "rxportal",
    title: "RxPortal",
    subtitle: "Pharmacy Dashboard",
    description:
      "An enterprise dashboard for pharmacy managers to oversee inventory, prescriptions, and staff workflows — built to reduce cognitive load and streamline daily operations.",
    tags: ["UI Design", "Dashboard", "Interaction Design", "Figma"],
    category: "Case Study",
    gradient: "from-[#1A1A2A] to-[#0D0D1A]",
    accentColor: "#6C8FEF",
  },
  {
    id: "healflow",
    title: "HealFlow",
    subtitle: "Telehealth Onboarding",
    description:
      "A seamless onboarding experience for a telehealth platform, guiding new patients from sign-up to their first consultation — reducing drop-off rates by 40%.",
    tags: ["UX Design", "Usability Testing", "Telehealth", "Prototyping"],
    category: "Case Study",
    gradient: "from-[#2A1A1A] to-[#1A0D0D]",
    accentColor: "#EF8C6C",
  },
];

export const SKILL_GROUPS = [
  {
    category: "Design Tools",
    icon: "Palette",
    skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Framer"],
  },
  {
    category: "UX Methodologies",
    icon: "Users",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Journey Mapping",
      "Information Architecture",
    ],
  },
  {
    category: "Healthcare Domain",
    icon: "Heart",
    skills: [
      "Clinical Workflow Design",
      "Pharmacy Systems",
      "Patient-Centered Design",
      "Medical Terminology",
      "HIPAA Awareness",
      "EHR/EMR Systems",
    ],
  },
  {
    category: "Collaboration",
    icon: "MessageSquare",
    skills: [
      "Design Systems",
      "Handoff to Dev",
      "Agile/Scrum",
      "Stakeholder Presentations",
      "Cross-functional Teams",
      "Notion",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Kerolos brings a rare combination of design expertise and healthcare knowledge. His ability to translate complex clinical workflows into intuitive interfaces is exceptional.",
    author: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    company: "HealthTech Solutions",
    initials: "SM",
  },
  {
    quote:
      "Working with Kerolos was a pleasure. He asked the right questions, delivered pixel-perfect Figma files, and always kept the end-user experience at the forefront.",
    author: "Ahmed Hassan",
    role: "Product Manager",
    company: "RxCare Platform",
    initials: "AH",
  },
  {
    quote:
      "His pharmacy background gave him an edge in understanding our users. The designs he produced for our patient app led to a significant improvement in daily active users.",
    author: "Nadia Khalil",
    role: "Head of Product Design",
    company: "MediCloud",
    initials: "NK",
  },
];
