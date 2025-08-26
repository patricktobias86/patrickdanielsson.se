// /composables/useExperience.ts
export type ExperienceItem = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export function useExperience() {
  const experience: ExperienceItem[] = [
    {
      role: "Marketing Automation Specialist",
      org: "The Incredibly Journey",
      period: "2023—",
      bullets: [
        "HubSpot automation: workflows, email, metrics to drive engagement & conversions.",
      ],
    },
    {
      role: "Nordic Tech Lead",
      org: "Carglass Nordics",
      period: "2021—2022",
      bullets: [
        "Owned web architecture for DK/FI/NO/SE; led devs with external agency.",
        "Standardized processes & KPIs; automated dashboards (GA + ERP).",
      ],
    },
    {
      role: "Nordic Digital Manager",
      org: "Carglass Nordics",
      period: "2016—2021",
      bullets: [
        "Raised conversion 66% via A/B & growth hacking.",
        "Managed digital strategy, master data model across markets.",
      ],
    },
    {
      role: "Technical Project Manager",
      org: "Carglass Nordics",
      period: "2016",
      bullets: ["123", "123"],
    }
  ]

  return { experience }
}