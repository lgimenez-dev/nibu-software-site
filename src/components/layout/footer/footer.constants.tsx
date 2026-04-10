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
    bgColor: "bg-gradient-to-tr from-twitter-black to-twitter-gray",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nibusolutions",
    icon: IconFacebookSocial,
    bgColor: "bg-facebook-blue",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nibusolutions",
    icon: IconInstagramSocial,
    bgColor: "bg-gradient-to-tr from-instagram-orange via-instagram-pink to-instagram-purple",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/nibusolutions",
    icon: IconYoutubeSocial,
    bgColor: "bg-youtube-red",
  },
  {
    name: "WhatsApp",
    link: `${CONTACT_INFO.whatsapp.support}`,
    icon: IconWhatsappSocial,
    bgColor: "bg-whatsapp-green",
  },
] as const

export const COPYRIGHT = `© ${new Date().getFullYear()} Nibu All Rights Reserved.` as const
