import { IconXSocial, IconFacebookSocial, IconInstagramSocial, IconYoutubeSocial, IconWhatsappSocial } from "@/components/shared/icons"
import { CONTACT_INFO } from "@/components/shared"

export const ABOUT_INFO = {
  title: "About us",
  description: "We build reliable, scalable software solutions that empower businesses to innovate faster. Our team combines technical excellence with a customer-first mindset to deliver modern, high‑quality digital products."
} as const

export const SOCIAL_LINKS = [
  {
    name: "X",
    link: "https://twitter.com/nibusolutions",
    icon: IconXSocial,
    bgColor: "bg-shadow-grey",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nibusolutions",
    icon: IconFacebookSocial,
    bgColor: "bg-iron-grey",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nibusolutions",
    icon: IconInstagramSocial,
    bgColor: "bg-gradient-to-tr from-gunmetal to-slate-grey",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/nibusolutions",
    icon: IconYoutubeSocial,
    bgColor: "bg-iron-grey",
  },
  {
    name: "WhatsApp",
    link: `${CONTACT_INFO.whatsapp.support}`,
    icon: IconWhatsappSocial,
    bgColor: "bg-gunmetal",
  },
] as const

export const COPYRIGHT = `© ${new Date().getFullYear()} Nibu All Rights Reserved.` as const
