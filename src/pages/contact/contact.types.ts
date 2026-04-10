import type { RefObject } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import type { UseFormSetValue, UseFormReturn } from "react-hook-form"

// Information request form data inferred from the Zod validation schema
export interface contactFormData {
  companyName: string
  ein: string
  phone: string
  email: string
  scheduleFrom: string
  scheduleTo: string
  contactName: string
  comments?: string
  recaptcha?: string // Opcional - that will hold the reCAPTCHA token if implemented
}

// Estados posibles del envío del formulario
export type SubmitStatus = "" | "success" | "error"

// options for the hook useRecaptcha
export interface UseRecaptchaOptions<T extends { recaptcha?: string }> {
  setValue: UseFormSetValue<T> // Function setValue of react-hook-form
  onTokenChange?: (token: string | null) => void // Optional callback when the token changes
}

// Return of the hook useRecaptcha
export interface UseRecaptchaReturn {
  recaptchaRef?: RefObject<ReCAPTCHA>
  handleRecaptchaChange: (token: string | null) => void
  resetRecaptcha: () => void
  executeRecaptcha: () => Promise<string | null>
  getRecaptchaValue: () => string | null
}

// Interfaces for components
export interface PageInfo {
  title: string
  subtitle: string
  address: string
  mapsUrl: string
}

export interface PageHeaderProps {
  title: string
  subtitle: string
}

export interface ContactFormProps {
  form: UseFormReturn<contactFormData>
  submitStatus: SubmitStatus
  handleEinChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (data: contactFormData) => void
}

export interface LocationSectionProps {
  title: string
  address: string
  mapsUrl: string
}
