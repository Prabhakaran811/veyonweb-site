// Detail copy for the /services page, keyed by service title (matches data/services.ts).
// Edit the wording so it matches what VEYON really offers. Keep it honest.
export type ServiceDetail = { id: string; problem: string; solution: string; bullets: string[]; page?: string };

export const serviceDetails: Record<string, ServiceDetail> = {
  "Website Development": {
    id: "website-development",
    problem: "Your business is hard to find, or doesn't look as capable online as it is.",
    solution: "We build fast, responsive company, catalogue and landing-page websites that explain what you do and bring in enquiries.",
    bullets: ["Corporate and business websites", "Product catalogue websites", "Campaign landing pages", "Mobile-first and SEO-ready"],
  },
  "Custom Software Development": {
    id: "custom-software",
    problem: "Your team keeps working around tools that don't fit your process.",
    solution: "We build bespoke business applications and SaaS platforms around the way your business actually works.",
    bullets: ["Process automation tools", "Bespoke business applications", "SaaS platforms", "Dashboards and reporting"],
  },
  "CRM & ERP Development": {
    id: "crm-erp",
    problem: "Sales, stock and operations live in separate files and nobody sees the whole picture.",
    solution: "We develop CRM and ERP systems shaped to your workflows, so everyone works from the same data.",
    bullets: ["Sales and customer management", "Inventory and purchasing", "Operations workflows", "Custom workflow ERPs"],
  },
  "Mobile App Development": {
    id: "mobile-apps",
    problem: "Your people need to work, approve and report away from a desk.",
    solution: "We build mobile apps that put your business processes in your team's hands.",
    bullets: ["iOS and Android apps", "Cross-platform apps", "Field and shop-floor mobility", "Connected to your existing systems"],
  },
  "Desktop Applications": {
    id: "desktop-apps",
    problem: "Spreadsheets and outdated screens slow down daily work.",
    solution: "We create clear, intuitive desktop software and refresh old interfaces so work gets done faster.",
    bullets: ["Windows desktop software", "Dashboards and data screens", "Interface revamps", "Shop-floor and office tools"],
  },
  "Cloud & Application Integration": {
    id: "cloud-integration",
    problem: "Your systems don't share data, so people retype it or guess.",
    solution: "We connect your applications and move data securely between them, in the cloud or on your own servers.",
    bullets: ["Secure cloud infrastructure", "APIs", "Data pipelines", "Application integration"],
  },
  "Industrial IoT Solutions": {
    id: "industrial-iot",
    problem: "You can't see what your machines are doing right now.",
    solution: "We connect your machines, collect their data and show it live, so problems are seen as they happen.",
    bullets: ["Machine connectivity", "Edge gateways", "Live telemetry", "Dashboards and alerts"],
    page: "/services/iiot-solutions",
  },
  "Manufacturing Execution Systems": {
    id: "mes",
    problem: "Production is tracked on paper, so true output and downtime stay unclear.",
    solution: "We build MES software that tracks production in real time and turns it into clear, usable numbers.",
    bullets: ["Production tracking", "Downtime analysis", "OEE intelligence", "Shift and production reports"],
  },
  "PLC & Industrial Automation": {
    id: "plc-automation",
    problem: "Your machines need dependable control and a clear view for operators.",
    solution: "We program PLCs, design HMI and SCADA screens and build the electrical panels that run your lines.",
    bullets: ["PLC programming", "HMI design", "SCADA systems", "Electrical control panels"],
    page: "/services/plc-automation",
  },
  "Machine & Energy Monitoring": {
    id: "machine-monitoring",
    problem: "Machine utilisation and energy use are invisible until the bill or the breakdown arrives.",
    solution: "We monitor your machines and power so you can see where time and energy are being lost.",
    bullets: ["Asset utilisation", "Machine status monitoring", "Power quality", "Energy management"],
  },
  "Industrial Communication & Integration": {
    id: "industrial-communication",
    problem: "Machines, PLCs and business software don't talk to each other.",
    solution: "We link them together so shop-floor data flows into the systems your business uses.",
    bullets: ["PLC and machine connectivity", "Sensor integration", "Protocol integration", "Data to MES and ERP"],
  },
};