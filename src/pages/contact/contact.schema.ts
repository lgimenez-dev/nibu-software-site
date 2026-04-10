import { z } from "zod"

// Validation schema for the contact request form, using Zod
export const contactSchema = z.object({
  companyName: z
    .string()
    .min(1, "Company name is required")
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be at most 20 characters"),

  ein: z
    .string()
    .min(1, "EIN is required")
    .regex(/^\d{9}$/, "EIN must be 9 numeric digits"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d{10,15}$/, "Phone number must be between 10 and 15 digits"),

  email: z
    .string()
    .email("Invalid email format")
    .min(1, "Email is required")
    .max(50, "Email must be at most 50 characters"),

  scheduleFrom: z
    .string()
    .min(1, "Select contact time (from)"),

  scheduleTo: z
    .string()
    .min(1, "Select contact time (to)"),

  contactName: z
    .string()
    .min(1, "Contact name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),

  comments: z
    .string()
    .max(100, "Comments must be at most 100 characters")
    .optional()

  // recaptcha: z
  //   .string()
  //   .min(1, "Please complete the reCAPTCHA"),

}).refine((data) => {
  // Custom validation: scheduleTo > scheduleFrom
  if (data.scheduleFrom && data.scheduleTo) {
    return data.scheduleTo > data.scheduleFrom
  }
  return true
}, {
  message: "'To' time must be greater than 'From' time",
  path: ["scheduleTo"],
})

// Zod-inferred type - also available in contact.types.ts
export type ContactFormData = z.infer<typeof contactSchema>