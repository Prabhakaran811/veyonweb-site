import { BadgeCheck, CalendarDays, Users } from "lucide-react";
import type { Stat } from "@/types";

// Only real VEYON figures belong here. Never add invented numbers.
export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Successful projects", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Happy clients", icon: Users },
  { value: 4, label: "Years of experience", icon: CalendarDays },
];