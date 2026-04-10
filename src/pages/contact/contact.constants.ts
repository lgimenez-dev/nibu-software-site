import { CONTACT_INFO } from "@/components/shared"
import type { PageInfo } from "./contact.types"

// Contact page header configuration
export const PAGE_INFO: PageInfo = {
  title: "Contact",
  subtitle: "Thank you for your interest in our services. Please complete the form to request personalized information about our products, quotes, or general inquiries, and our team will contact you as soon as possible to provide all the information you need.",
  address: `We are located at ${CONTACT_INFO.shortAddress}, in the heart of Córdoba Capital. Visit us from ${CONTACT_INFO.schedule[0]} or on ${CONTACT_INFO.schedule[1]}. You can also contact us by phone at ${CONTACT_INFO.phones.main.join(" / ")}, or through our ${CONTACT_INFO.schedule[2]}.`,
  mapsUrl: CONTACT_INFO.mapsUrl,
}

// Contact form configuration
export const FORM_CONFIG = {
  fields: {
    companyName: {
      label: "Company Name",
      placeholder: "Your company name or legal name",
    },
    ein: {
      label: "EIN",
      placeholder: "2012345 (numbers only)",
    },
    phone: {
      label: "Phone",
      placeholder: "3511234567 (numbers only)",
    },
    email: {
      label: "Email",
      placeholder: "example@company.com",
    },
    scheduleFrom: {
      label: "Contact Time (From)",
      placeholder: "Select time",
    },
    scheduleTo: {
      label: "Contact Time (To)",
      placeholder: "Select time",
    },
    contactName: {
      label: "Contact Name",
      placeholder: "Full name",
    },
    comments: {
      label: "Comments",
      placeholder: "Additional comments or questions...",
    },
  },
  contactHours: [
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
  ],
  buttons: {
    submit: "Send request",
    submitting: "Sending...",
  },
  messages: {
    success: "Redirecting to WhatsApp...",
    error: "An error occurred while processing the request. Please try again.",
  }
} as const
