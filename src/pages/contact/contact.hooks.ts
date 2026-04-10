import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "./contact.schema"
import { filterOnlyNumbers } from "./contact.utils"
import type { contactFormData, SubmitStatus } from "./contact.types"
import { CONTACT_INFO } from "@/components/shared"

/**
* Custom hook for the information request form.
* Encapsulates all the form logic including validation,
* input handlers and submit
*/
export function useContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("")

  const form = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      companyName: "",
      ein: "",
      phone: "",
      email: "",
      scheduleFrom: "",
      scheduleTo: "",
      contactName: "",
      comments: "",
    },
  })

  const { setValue, reset } = form

  // filter only numbers for EIN and Phone inputs
  const handleEinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = filterOnlyNumbers(e.target.value)
    setValue("ein", filtered, { shouldValidate: true })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = filterOnlyNumbers(e.target.value)
    setValue("phone", filtered, { shouldValidate: true })
  }

  // handler for open WhatsApp with the pre-filled message after successful form submission
  const handleSuccessRedirect = (resultLink: string) => {
    setTimeout(() => {
      window.open(resultLink, "_blank")
      reset()
      setTimeout(() => {
        setSubmitStatus("")
      }, 10000)
    }, 1500)
  }

  // handler for form submission, prepares the message and simulates a successful submission
  const onSubmit = async (data: contactFormData) => {
    setSubmitStatus("")

    const message = encodeURIComponent(
      `Hello, I am ${data.contactName} and I would like to request information about the system.\n\n` +
      `*Contact Information:*\n` +
      `• Company Name: ${data.companyName}\n` +
      `• EIN: ${data.ein}\n` +
      `• Contact: ${data.contactName}\n` +
      `• Phone: ${data.phone}\n` +
      `• Email: ${data.email}\n` +
      `• Schedule: ${data.scheduleFrom} - ${data.scheduleTo}\n` +
      (data.comments ? `• Comments: ${data.comments}\n\n` : '\n') +
      `Could you contact me? Thank you very much!`
    )
    setSubmitStatus("success")
    handleSuccessRedirect(`${CONTACT_INFO.whatsapp.training}?text=${message}`)
  }

  return {
    form,
    submitStatus,
    handleEinChange,
    handlePhoneChange,
    onSubmit,
  }
}
