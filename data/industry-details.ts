// Copy for the /industries page, keyed by industry title (matches data/services.ts).
// Written as general capabilities. Edit so it matches what VEYON really does for each sector.
export type IndustryDetail = {
  id: string;
  challenges: string[];
  help: string[];
  services: { label: string; href: string }[];
};

const S = {
  iiot: { label: "Industrial IoT", href: "/services#industrial-iot" },
  mes: { label: "MES", href: "/services#mes" },
  plc: { label: "PLC & Automation", href: "/services#plc-automation" },
  monitoring: { label: "Machine & Energy Monitoring", href: "/services#machine-monitoring" },
  comms: { label: "Industrial Communication", href: "/services#industrial-communication" },
  software: { label: "Custom Software", href: "/services#custom-software" },
};

export const industryDetails: Record<string, IndustryDetail> = {
  Foundries: {
    id: "foundries",
    challenges: ["Furnace and melting readings noted by hand", "Stoppages with no clear cause", "Energy use that is hard to trace"],
    help: ["Live furnace and process monitoring", "Digital production and downtime tracking", "Energy and power monitoring"],
    services: [S.iiot, S.mes, S.monitoring],
  },
  Automotive: {
    id: "automotive",
    challenges: ["Lines that must hold tight cycle times", "Production counts and quality data kept apart", "Machines from different makers that don't connect"],
    help: ["PLC and HMI automation for lines and cells", "Real-time production tracking and OEE", "Machine-to-system integration"],
    services: [S.plc, S.mes, S.comms],
  },
  "Process Industries": {
    id: "process-industries",
    challenges: ["Processes that need constant manual supervision", "Alarms and readings spread across separate screens", "Reports prepared by hand"],
    help: ["SCADA supervision and alarm handling", "Process control with PLCs and control panels", "Automated reports and dashboards"],
    services: [S.plc, S.iiot, S.software],
  },
  "SME Factories": {
    id: "sme-factories",
    challenges: ["Limited budget for a big, one-shot overhaul", "Spreadsheets and paper running production", "No clear view of machine utilisation"],
    help: ["Step-by-step upgrades you can scale", "Simple dashboards and production tracking", "Custom software that fits your size"],
    services: [S.mes, S.iiot, S.software],
  },
};