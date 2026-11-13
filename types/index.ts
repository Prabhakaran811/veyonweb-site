import type { LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  image: string; // path in /public/images
};

export type Stat = { value: number; suffix?: string; label: string; icon?: LucideIcon };