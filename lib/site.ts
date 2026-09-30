export const site = {
  name: "Skyline Rope Squad",
  tagline: "Safe work at height. Done by a tight team of four.",
  description:
    "Certified high-altitude work team: facade cleaning, industrial rope access, roof repairs, inspections and installations on buildings, towers and chimneys.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "+381 60 000 0000",
  email: "office@your-domain.com",
  city: "Belgrade",
  country: "RS",
  keywords: [
    "high-altitude work", "rope access", "industrial climbing",
    "facade cleaning", "roof repair", "chimney inspection", "work at height Serbia",
  ],
};

export const services = [
  { icon: "🏢", title: "Facade Cleaning", text: "Glass, aluminium and stone facades cleaned without scaffolding." },
  { icon: "🧱", title: "Facade & Roof Repair", text: "Sealing, painting, waterproofing and minor structural fixes." },
  { icon: "🔍", title: "Inspections", text: "Visual and photo-documented inspection of towers, chimneys and bridges." },
  { icon: "🔧", title: "Installations", text: "Signs, antennas, cameras, lights and banners mounted at height." },
  { icon: "🏭", title: "Industrial Access", text: "Silos, stacks and tanks where cranes and lifts can't reach." },
  { icon: "🚨", title: "Urgent Jobs", text: "Fast response for leaks, loose panels and storm damage." },
];

export const team = [
  { name: "Marko", role: "Team Lead · Level 3", bio: "12 years of rope access and safety supervision." },
  { name: "Nikola", role: "Senior Technician · Level 2", bio: "Facade and waterproofing specialist." },
  { name: "Stefan", role: "Technician · Level 2", bio: "Installations, welding and inspections." },
  { name: "Ana", role: "Technician · Level 1", bio: "Cleaning, documentation and ground coordination." },
];

export const steps = [
  { n: "01", title: "Free Assessment", text: "We visit the site, check access points and give you a fixed quote." },
  { n: "02", title: "Safety Plan", text: "Risk assessment, rescue plan and permits before anyone leaves the ground." },
  { n: "03", title: "Work at Height", text: "Two-rope system, full PPE and a supervisor on every job." },
  { n: "04", title: "Report & Handover", text: "Photo report and a clean site, with no trace left behind." },
];

export const faqs = [
  { q: "Do you need scaffolding or a lift?", a: "No. We use rope access, which is faster and usually cheaper than scaffolding for most jobs." },
  { q: "Are you insured and certified?", a: "Yes. Every team member is trained in rope access and rescue, and we carry liability insurance. (Replace with your real certificates.)" },
  { q: "How fast can you start?", a: "Most jobs start within a week. Urgent repairs are often handled within 24-48 hours." },
  { q: "What areas do you cover?", a: "Belgrade and all of Serbia. Regional jobs are quoted individually." },
];
