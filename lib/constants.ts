export const SITE = {
  name: "Altaris",
  tagline: "AI Automation Systems That Run Your Business",
  description:
    "Altaris builds AI-powered automation systems that help businesses reduce manual work, streamline operations, and scale efficiently with intelligent agents and workflows.",
  url: "https://altaris.ai",
};

export const NAV_LINKS = [
  { label: "How It Works", href: "#flow" },
  { label: "Live Demos", href: "#automation" },
  { label: "Who This Is For", href: "#who-its-for" },
  { label: "Services", href: "#services" },
  { label: "Behind the Scenes", href: "#workflows" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#cta" },
];

export const SERVICES = [
  {
    title: "AI Voice Receptionist",
    description:
      "Your AI picks up every call, understands what the caller needs, answers questions from your knowledge base, and books appointments — all in a natural voice conversation.",
    icon: "Phone" as const,
    highlight: "24/7 · Zero missed calls",
    tags: ["VAPI", "Claude", "ElevenLabs", "Deepgram"],
    features: [
      "Natural voice conversations",
      "Real-time calendar booking",
      "Multilingual support",
      "Human handoff when needed",
    ],
  },
  {
    title: "Multi-Channel Messaging Agent",
    description:
      "One AI agent handles all your messaging channels. Customers reach out wherever they prefer — your AI responds instantly, answers FAQs, and guides them to book.",
    icon: "MessageSquare" as const,
    highlight: "8 channels · 1 AI agent",
    tags: ["SMS", "Messenger", "Instagram", "WhatsApp", "Email", "Live Chat"],
    features: [
      "Instant replies across all platforms",
      "Context-aware conversations",
      "Auto-escalation to human",
      "Appointment booking built-in",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "The engine behind everything. Every call, message, and booking triggers a chain of automated actions — no manual steps, no copy-pasting between tools.",
    icon: "Workflow" as const,
    highlight: "18 workflows · 146 nodes",
    tags: ["n8n", "Webhooks", "APIs", "Supabase"],
    features: [
      "End-to-end automation",
      "Real-time data sync",
      "Error handling built-in",
      "Scalable architecture",
    ],
  },
  {
    title: "CRM Integration & Follow-Up",
    description:
      "Every interaction creates or updates a contact automatically. Call transcripts are logged, pipeline stages move forward, and follow-up sequences fire — without anyone touching the CRM.",
    icon: "Users" as const,
    highlight: "Zero manual data entry",
    tags: ["GoHighLevel", "ActiveCampaign", "Supabase"],
    features: [
      "Auto contact creation",
      "Call transcript logging",
      "Pipeline stage tracking",
      "Automated follow-up sequences",
    ],
  },
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
    before: "Losing 12+ calls/day to voicemail, staff overwhelmed with manual booking, 40+ hours/month wasted on scheduling",
    after: "AI answers every call, books 3x more appointments, 40hrs/month saved — staff focuses on patients, not phones",
    problem:
      "The clinic was losing potential patients due to missed calls and slow manual appointment booking. Staff spent 40+ hours per month on scheduling alone.",
    solution:
      "We deployed a Messenger AI chatbot integrated with their booking system via n8n workflow automation. Patients can now book, reschedule, and get reminders automatically.",
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
    before: "60% of after-hours calls went to voicemail, emergency requests lost overnight, thousands in missed revenue weekly",
    after: "95% of calls answered instantly, 35% more jobs booked, response time cut by 12 hours — zero leads lost overnight",
    problem:
      "Over 60% of after-hours calls went to voicemail. Emergency repair requests were lost overnight, costing thousands in missed revenue weekly.",
    solution:
      "We built an AI voice receptionist that answers every call 24/7, qualifies the urgency, books service appointments, and dispatches the on-call technician via SMS — all automatically.",
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
    before: "6 messaging channels, 1 front desk person, 4+ hour response times, 40% of inquiries never answered",
    after: "AI handles all 6 channels simultaneously, 5-second responses, 60% more consultations booked, zero missed inquiries",
    problem:
      "Leads were coming in from Instagram, WhatsApp, and the website but the front desk could only handle one channel at a time. Response times averaged 4+ hours, and 40% of inquiries never got a reply.",
    solution:
      "We deployed a single AI messaging agent across all 6 channels that answers FAQs, recommends treatments, checks real-time availability, and books consultations — with automatic CRM logging and follow-up sequences.",
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
      "Watch the AI handle a real inbound call — answering questions, checking availability, and booking an appointment in real time.",
    videoSrc: "/videos/voice-demo.mp4",
    badge: "Most Requested",
    badgeVariant: "success" as const,
    tags: ["24/7 Calls", "Real-time booking", "CRM synced"],
    featured: true,
  },
  {
    title: "AI Messaging Agent",
    description:
      "See how the AI responds instantly on Messenger, qualifies the lead, and books an appointment — all while you sleep.",
    videoSrc: "/videos/messaging-demo.mp4",
    badge: "Messenger / IG / SMS",
    badgeVariant: "secondary" as const,
    tags: ["Instant replies", "Lead qualification", "Auto-booking"],
    featured: false,
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
  subtitle: "I build the AI systems that replace your front desk — so your team focuses on patients, not phones.",
  photo: "/images/proffesional-image (4).png",
  availability: "Available for freelance & agency partnerships",
  timezone: "GMT+8 · Async-first · Remote",
  bio: "I've been working in AI since 2022 — starting with generative AI and content creation before going all-in on AI automation in 2025. Today, I build production-ready voice agents, messaging systems, and workflow automation that handle calls, book appointments, and update CRMs — running 24/7 for real businesses.",
  differentiators: [
    {
      title: "Production-First, Not Prototype",
      detail: "Every system I build is live and handling real calls, real messages, and real bookings — not just a demo.",
    },
    {
      title: "Full-Stack AI, One Person",
      detail: "Voice AI, messaging, booking, CRM, workflows — I handle the entire pipeline end-to-end. No need to hire a team.",
    },
    {
      title: "Built for Scale",
      detail: "My architecture supports multi-client deployment. Onboard a new client in 10 minutes with zero workflow changes.",
    },
    {
      title: "Business-Driven, Not Tech-Driven",
      detail: "I start with the business outcome — more bookings, fewer missed calls — and work backwards to the automation.",
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
    { value: "85%", label: "Reduction in automation complexity" },
    { value: "8", label: "Channels unified under one AI" },
    { value: "146", label: "Nodes optimized" },
    { value: "4", label: "Production clients live" },
    { value: "18", label: "Production workflows" },
    { value: "24/7", label: "AI availability" },
  ],
  techStack: [
    { layer: "Automation Engine", tech: "n8n (18 workflows, 146 nodes)" },
    { layer: "Voice AI", tech: "VAPI + Deepgram Nova-3 + ElevenLabs" },
    {
      layer: "AI / LLM",
      tech: "Claude Sonnet 4.5 (primary), Gemini 2.5 Flash (fallback)",
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
      label: "Started in AI — generative AI, images & video creation",
    },
    {
      year: "2023",
      label: "AI content creation — YouTube, UGC, social media",
    },
    {
      year: "2024",
      label:
        "AI Prompt Engineer — crafting advanced prompts for LLMs, fine-tuning outputs for business use cases, and building custom GPTs",
    },
    {
      year: "2025",
      label:
        "All-in on AI automation — voice agents, messaging, booking, CRM",
    },
  ],
  demoVideos: [
    { title: "Voice AI Receptionist Demo", url: "#automation" },
    { title: "Messaging AI Demo", url: "#automation" },
  ],
};
