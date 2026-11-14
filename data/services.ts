import {
  Globe, Code2, Database, Smartphone, Monitor, Cloud,
  Wifi, Workflow, Cpu, Gauge, Network,
  Factory, Car, FlaskConical, Wrench, type LucideIcon,
} from "lucide-react";

export type Item = { href: string; title: string; desc: string; icon: LucideIcon };
export type ServiceGroup = { id: string; title: string; blurb: string; items: Item[] };

// Reorder the groups here to change which one shows first.
export const serviceGroups: ServiceGroup[] = [
  {
    id: "software",
    title: "Software Development",
    blurb: "Custom software built around how your business actually works.",
    items: [
      { href: "/services#website-development", title: "Website Development", desc: "Corporate, business and catalogue websites and landing pages.", icon: Globe },
      { href: "/services#custom-software", title: "Custom Software Development", desc: "Process automation, bespoke business apps and SaaS platforms.", icon: Code2 },
      { href: "/services#crm-erp", title: "CRM & ERP Development", desc: "Sales, inventory, operations and custom workflow ERPs.", icon: Database },
      { href: "/services#mobile-apps", title: "Mobile App Development", desc: "iOS, Android and cross-platform business mobility.", icon: Smartphone },
      { href: "/services#desktop-apps", title: "Desktop Applications", desc: "Intuitive desktop software, dashboards and interface revamps.", icon: Monitor },
      { href: "/services#cloud-integration", title: "Cloud & Application Integration", desc: "Secure cloud infrastructure, APIs and data pipelines.", icon: Cloud },
    ],
  },
  {
    id: "industrial",
    title: "Industrial Automation & IOT",
    blurb: "Smart-industry solutions that connect machines, data and people.",
    items: [
      { href: "/services#industrial-iot", title: "Industrial IoT Solutions", desc: "Machine connectivity, edge gateways and live telemetry.", icon: Wifi },
      { href: "/services#mes", title: "Manufacturing Execution Systems", desc: "Production tracking, downtime analysis and OEE intelligence.", icon: Workflow },
      { href: "/services#plc-automation", title: "PLC & Industrial Automation", desc: "PLC programming, HMI, SCADA and electrical panels.", icon: Cpu },
      { href: "/services#industrial-communication", title: "Industrial Communication & Integration", desc: "Connecting PLCs, sensors and machines with your business software.", icon: Network },
      { href: "/services#machine-monitoring", title: "Machine & Energy Monitoring", desc: "Asset utilization, power quality and energy management.", icon: Gauge },
    ],
  },
];

export const industries: Omit<Item, "href">[] = [
  { title: "Foundries", desc: "Melting, moulding and furnace monitoring.", icon: Factory },
    { title: "SME Factories", desc: "Affordable, scalable automation upgrades.", icon: Wrench },
  { title: "Process Industries", desc: "Batch and continuous process control.", icon: FlaskConical },
    { title: "Automotive", desc: "Assembly and machining line automation.", icon: Car },

];