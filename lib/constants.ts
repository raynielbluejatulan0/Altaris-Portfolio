export const SITE = {
  name: "Rayniel Blue Jatulan",
  tagline: "AI Automation Specialist",
  description:
    "AI Automation Specialist building voice agents, messaging systems, and workflow automation. Open to freelance and full-time roles. GMT+8.",
  url: "https://altaris.ai",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    title: "AI Voice Receptionist (Inbound)",
    description:
      "24/7 phone answering with VAPI, Claude, and ElevenLabs. The AI understands callers, answers questions from a knowledge base, and books appointments in real-time. Multilingual support and human handoff built in.",
  },
  {
    title: "AI Outbound Follow-Up Calls",
    description:
      "Automated follow-up calls to leads and past clients. Each call pulls CRM history for context, handles DND and opt-out compliance, and logs outcomes automatically.",
  },
  {
    title: "Multi-Channel Messaging Agent",
    description:
      "One AI agent across 8 channels — SMS, Messenger, Instagram DM, WhatsApp, Email, Live Chat, Google Business Messages. Handles FAQs, books appointments, and escalates on complaints.",
  },
  {
    title: "Intelligent Booking System",
    description:
      "Real-time calendar availability checks with natural language date understanding. Timezone-aware and supports multiple calendar providers simultaneously.",
  },
  {
    title: "CRM Integration & Automation",
    description:
      "Every interaction creates or updates a contact. Call transcripts get logged, pipeline stages move automatically, and missed call tasks fire without anyone touching the CRM.",
  },
  {
    title: "Client Onboarding (White-Label)",
    description:
      "New clients onboard in 5–10 minutes via config only — no workflow changes needed. Each client gets isolated credentials, knowledge base, and CRM connection.",
  },
  {
    title: "End-of-Call Intelligence",
    description:
      "After every call, the AI extracts contact info from the transcript, maps the outcome to a CRM stage, sends a booking confirmation via SMS, and logs call analytics.",
  },
];

export const TECH_STACK_TABLE = [
  { layer: "Automation Engine", tools: "n8n", note: "18 workflows, 146 nodes" },
  { layer: "Voice AI", tools: "VAPI · Deepgram Nova-3 · ElevenLabs", note: "" },
  {
    layer: "LLM",
    tools: "Claude Sonnet 4.6 · Gemini 2.5 Flash",
    note: "Claude primary, Gemini fallback",
  },
  { layer: "CRM", tools: "GoHighLevel · ActiveCampaign", note: "" },
  { layer: "Database", tools: "Supabase · PostgreSQL", note: "Config + vector search" },
  { layer: "Knowledge Base", tools: "Google Docs · Vector embeddings", note: "" },
  { layer: "Calendars", tools: "GHL Calendar · Symplast", note: "" },
];

export const TECH_STACK_ROW1 = [
  { name: "n8n", icon: "GitBranch" as const },
  { name: "VAPI", icon: "PhoneCall" as const },
  { name: "Claude", icon: "Sparkles" as const },
  { name: "ElevenLabs", icon: "Mic" as const },
  { name: "Deepgram", icon: "AudioLines" as const },
  { name: "GoHighLevel", icon: "Rocket" as const },
  { name: "Supabase", icon: "Database" as const },
  { name: "Gemini", icon: "Brain" as const },
];

export const TECH_STACK_ROW2 = [
  { name: "PostgreSQL", icon: "Database" as const },
  { name: "Next.js", icon: "Globe" as const },
  { name: "Tailwind CSS", icon: "Palette" as const },
  { name: "TypeScript", icon: "FileCode" as const },
  { name: "Framer Motion", icon: "Sparkles" as const },
  { name: "Vercel", icon: "Triangle" as const },
  { name: "Google Docs", icon: "FileText" as const },
  { name: "Webhooks", icon: "Webhook" as const },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Automation Audit",
    description:
      "We analyze your current workflows and identify the highest-impact opportunities for automation.",
  },
  {
    step: 2,
    title: "System Architecture",
    description:
      "We design a custom automation blueprint tailored to your business processes and tech stack.",
  },
  {
    step: 3,
    title: "Build & Deploy",
    description:
      "We build, test, and deploy your automation systems with minimal disruption to your operations.",
  },
  {
    step: 4,
    title: "Optimization",
    description:
      "We monitor performance, gather feedback, and continuously optimize your systems for better results.",
  },
];

export const CASE_STUDIES = [
  {
    title: "Dental Clinic Automation",
    client: "SmileBright Dental",
    industry: "Healthcare",
    before:
      "12+ missed calls daily, 40hrs/month wasted on manual scheduling, patients hanging up and booking competitors",
    after:
      "Booked 32 patients in 14 days, 40hrs/month freed up, zero missed calls — front desk focuses on in-office care",
    problem:
      "The clinic was losing potential patients due to missed calls and slow manual scheduling. Staff spent 40+ hours a month on booking alone.",
    solution:
      "I built a Messenger AI chatbot integrated with their booking system via n8n. Patients can now book, reschedule, and get reminders automatically.",
    techBuilt: "n8n + Messenger AI + booking system integration",
    techUsed: "Messenger AI + n8n + Booking System",
    results: [
      { metric: "80%", label: "Reduction in manual booking work" },
      { metric: "40hrs", label: "Saved per month" },
      { metric: "3x", label: "More appointments booked online" },
    ],
  },
  {
    title: "HVAC Service Lead Recovery",
    client: "CoolBreeze HVAC",
    industry: "Home Services",
    before:
      "60% of after-hours calls lost to voicemail, $4,000+/week in missed emergency repairs, no way to capture overnight leads",
    after:
      "Handled 500+ calls in first month, 35% more jobs booked, $6,200/month in recovered revenue from after-hours leads",
    problem:
      "Over 60% of after-hours calls went to voicemail. Emergency repair requests were lost overnight, costing thousands in missed revenue weekly.",
    solution:
      "I built an AI voice receptionist that answers every call 24/7, qualifies the urgency, books service appointments, and dispatches the on-call technician via SMS — automatically.",
    techBuilt: "VAPI voice receptionist + n8n + GoHighLevel CRM dispatch",
    techUsed: "VAPI Voice AI + n8n + GoHighLevel CRM",
    results: [
      { metric: "95%", label: "Calls answered instantly" },
      { metric: "35%", label: "Increase in booked jobs" },
      { metric: "12hrs", label: "Faster average response time" },
    ],
  },
  {
    title: "Med Spa Multi-Channel Booking",
    client: "GlowUp Aesthetics",
    industry: "Med Spa",
    before:
      "1,200+ monthly messages across 6 channels, 1 overwhelmed front desk person, 4-hour avg response, 40% of leads ghosted",
    after:
      "1,200+ messages handled automatically, 5-second response time, increased conversion by 40%, zero missed inquiries",
    problem:
      "Leads were coming in from Instagram, WhatsApp, and the website but the front desk could only handle one channel at a time. Response times averaged 4+ hours and 40% of inquiries never got a reply.",
    solution:
      "I deployed a single AI messaging agent across all 6 channels. It answers FAQs, recommends treatments, checks real-time availability, and books consultations — with automatic CRM logging and follow-up sequences.",
    techBuilt: "Single AI agent across 6 channels + calendar API + CRM logging",
    techUsed: "Multi-Channel AI + n8n + Calendar API + CRM",
    results: [
      { metric: "5s", label: "Average response time" },
      { metric: "60%", label: "More consultations booked" },
      { metric: "0", label: "Missed inquiries per week" },
    ],
  },
];

export const CONTACT = {
  email: "raynielbluejatulan0@gmail.com",
  whatsapp: "https://wa.me/639171425738",
  whatsappDisplay: "+63 917 142 5738",
};

export const VIDEO_DEMOS = [
  {
    title: "AI Voice Receptionist",
    description:
      "An inbound call handled start to finish. The AI answers, checks availability, and books — no human involved.",
    videoSrc: "/videos/voice-demo.mp4",
  },
  {
    title: "AI Messaging Agent",
    description:
      "Messenger, Instagram, SMS — one agent across all three. Lead comes in, gets qualified, gets booked.",
    videoSrc: "/videos/messaging-demo.mp4",
  },
];

export const WORKFLOW_GALLERY = [
  {
    src: "/images/inbound-voice.png",
    alt: "Inbound voice workflow",
    caption: "Handles calls + booking.",
  },
  {
    src: "/images/messaging.png",
    alt: "Messaging workflow",
    caption: "Replies + guides conversations.",
  },
  {
    src: "/images/availability.png",
    alt: "Availability check workflow",
    caption: "Checks calendar in real-time.",
  },
  {
    src: "/images/booking.png",
    alt: "Booking workflow",
    caption: "Books and confirms appointments.",
  },
  {
    src: "/images/knowledge-base-lookup.png",
    alt: "Knowledge base lookup workflow",
    caption: "Pulls business info instantly.",
  },
  {
    src: "/images/Universal-channel-router.png",
    alt: "Universal channel router workflow",
    caption: "Routes messages from any channel to the right AI agent.",
  },
];

export const WORKFLOW_DEMOS = [
  {
    title: "Voice AI Receptionist",
    description:
      "Your AI picks up every call, answers questions, and books appointments — just like a real receptionist, but available 24/7.",
    nodes: [
      { label: "Phone Call", icon: "Phone" as const },
      { label: "Voice AI", icon: "Mic" as const },
      { label: "Booking System", icon: "ClipboardList" as const },
      { label: "Calendar", icon: "Calendar" as const },
    ],
  },
  {
    title: "Messaging AI",
    description:
      "Instantly replies to leads on Messenger, Instagram, and WhatsApp — qualifying them and booking appointments while you sleep.",
    nodes: [
      { label: "Messenger", icon: "MessageSquare" as const },
      { label: "AI Agent", icon: "Bot" as const },
      { label: "n8n", icon: "GitBranch" as const },
      { label: "Google Calendar", icon: "Calendar" as const },
    ],
  },
];

export const ABOUT_PROFILE = {
  name: "Rayniel Blue Jatulan",
  title: "AI Automation Specialist",
  subtitle:
    "I build the AI systems that replace your front desk — so your team focuses on patients, not phones.",
  photo: "/images/dark.png",
  availability: "Open to freelance & full-time roles",
  timezone: "GMT+8 · Remote",
  bio: "I've been in AI since 2022. Started with generative content — images, video, social. Spent 2024 deep in prompt engineering, fine-tuning LLM outputs for real business use cases.\n\nIn 2025 I went all-in on automation. Today I build voice agents, messaging systems, and workflow automation. They run 24/7. They handle real calls and real bookings. That's the work.",
  differentiators: [
    {
      title: "Production-First, Not Prototype",
      detail:
        "Every system I build is live and handling real calls, real messages, and real bookings — not just a demo.",
    },
    {
      title: "Full-Stack AI, One Person",
      detail:
        "Voice AI, messaging, booking, CRM, workflows — I handle the entire pipeline end-to-end. No need to hire a team.",
    },
    {
      title: "Built for Scale",
      detail:
        "My architecture supports multi-client deployment. Onboard a new client in 10 minutes with zero workflow changes.",
    },
    {
      title: "Business-Driven, Not Tech-Driven",
      detail:
        "I start with the business outcome — more bookings, fewer missed calls — and work backwards to the automation.",
    },
  ],
  capabilities: [
    {
      title: "AI Voice Receptionist (Inbound)",
      details:
        "24/7 phone answering using VAPI + Claude + ElevenLabs. Real-time booking, multilingual support (English/Spanish), and human handoff.",
    },
    {
      title: "AI Outbound Follow-Up Calls",
      details:
        "Automated follow-up calls to leads and past clients. Context-aware conversations pulling CRM history, with DND/opt-out compliance.",
    },
    {
      title: "Multi-Channel Messaging Agent",
      details:
        "Single AI agent across 8 channels: SMS, Messenger, Instagram DM, WhatsApp, Email, Live Chat, Google Business Messages. Auto-escalation on complaints.",
    },
    {
      title: "Intelligent Booking System",
      details:
        "Real-time calendar availability checks, natural language date understanding, timezone-aware, multi-provider calendar support.",
    },
    {
      title: "CRM Integration & Automation",
      details:
        "Automatic contact creation from every interaction. Call transcripts logged, pipeline tracking (lead → booked → follow-up), missed call tasks.",
    },
    {
      title: "Client Onboarding (White-Label)",
      details:
        "Onboard new clients in 5-10 minutes via config only. Zero workflow changes — per-client knowledge base, credentials, and CRM isolation.",
    },
    {
      title: "End-of-Call Intelligence",
      details:
        "AI extracts contact info from call transcripts, maps outcomes to CRM stages, sends booking confirmations via SMS, logs analytics.",
    },
  ],
  metrics: [
    { value: "24/7", label: "Systems running live" },
    { value: "2", label: "Voice agents in production" },
    { value: "3", label: "AI systems deployed" },
    { value: "8", label: "Channels integrated" },
    { value: "146", label: "Nodes engineered" },
    { value: "18", label: "Workflows built" },
  ],
  techStack: [
    { layer: "Automation Engine", tech: "n8n (18 workflows, 146 nodes)" },
    { layer: "Voice AI", tech: "VAPI + Deepgram Nova-3 + ElevenLabs" },
    {
      layer: "AI / LLM",
      tech: "Claude Sonnet 4.6 (primary), Gemini 2.5 Flash (fallback)",
    },
    { layer: "CRM", tech: "GoHighLevel, ActiveCampaign" },
    { layer: "Database", tech: "Supabase (config + vector search), PostgreSQL" },
    {
      layer: "Knowledge Base",
      tech: "Google Docs, Vector embeddings (roadmap)",
    },
    { layer: "Calendars", tech: "GHL Calendar, Symplast" },
  ],
  timeline: [
    {
      year: "2022",
      label: "Generative AI — images & video creation",
    },
    {
      year: "2023",
      label: "AI content — YouTube, UGC, social media",
    },
    {
      year: "2024",
      label: "Prompt Engineering — LLMs, fine-tuning, custom GPTs",
    },
    {
      year: "2025",
      label: "AI Automation — voice agents, messaging, workflows",
    },
  ],
  demoVideos: [
    { title: "Voice AI Receptionist Demo", url: "#demos" },
    { title: "Messaging AI Demo", url: "#demos" },
  ],
};

export const IMPACT_STATS = [
  { value: 18, suffix: "", label: "Workflows Built" },
  { value: 146, suffix: "", label: "Nodes Engineered" },
  { value: 8, suffix: "", label: "Channels Integrated" },
  { value: 3, suffix: "", label: "AI Systems Deployed" },
  { value: 2, suffix: "", label: "Voice Agents Live" },
];

export const HOW_I_WORK = [
  {
    step: "01",
    title: "Automation Audit",
    description:
      "I analyze your current workflows and pinpoint the highest-impact opportunities — where time is lost, leads slip, and manual work stacks up.",
  },
  {
    step: "02",
    title: "System Design",
    description:
      "I architect a custom automation blueprint for your exact use case — voice AI, messaging, booking, CRM — designed to run without babysitting.",
  },
  {
    step: "03",
    title: "Build & Deploy",
    description:
      "I build, test, and ship the system. Then I hand it off with documentation and stay available for questions. Most systems go live in under 3 weeks.",
  },
];

export const SKILLS_MARQUEE = [
  "n8n", "VAPI", "Claude", "ElevenLabs", "Deepgram",
  "GoHighLevel", "Supabase", "PostgreSQL", "Gemini",
  "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Vercel", "Google Docs", "Webhooks", "ActiveCampaign",
  "Messenger API", "WhatsApp API", "Twilio", "Make.com",
];
