import type { NavMenuItem } from "./nav.types"

export const NAV_MENU_ITEMS: readonly NavMenuItem[] = [
  {
    label: "Company",
    items: [
      { link: "/about-us", label: "About us" },
      { link: "/contact", label: "Contact" }
    ],
  },
  {
    label: "Services",
    items: [
      { link: "#", label: "NimbusFlow" },
      { link: "#", label: "SentinelCore" },
      { link: '#', label: 'AtlasDB Engine' },
      { link: '#', label: 'PulseSync' },
    ],
  },
  {
    label: "Support",
    items: [
      { link: "/support", label: "Technical Support" },
      { link: "/download", label: "Download" },
    ],
  },
  {
    label: "How we work",
    link: "/how-we-work",
  },
] as const
