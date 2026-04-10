import { PageHeader } from "./page-header"
import { ContactForm } from "./contact-form"
import { LocationSection } from "./location-section"
import { PAGE_INFO } from "./contact.constants"
import { useContactForm } from "./contact.hooks"

export function ContactPage() {
  const { form, submitStatus, handleEinChange, handlePhoneChange, onSubmit, } = useContactForm()

  /*
  // pending implementation of reCAPTCHA integration, to be activated when necessary...
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  const { recaptchaRef, handleRecaptchaChange, resetRecaptcha } = useRecaptcha({ setValue: form.setValue, onTokenChange: (token) => { console.log("reCAPTCHA token:", token ? "✓" : "✗") } })
  */

  return (
    <article className="pt-15!">
      <PageHeader 
        title={PAGE_INFO.title}
        subtitle={PAGE_INFO.subtitle}
      />
      <ContactForm
        form={form}
        submitStatus={submitStatus}
        handleEinChange={handleEinChange}
        handlePhoneChange={handlePhoneChange}
        onSubmit={onSubmit}
      />
      <LocationSection
        title="Our Location"
        address={PAGE_INFO.address}
        mapsUrl={PAGE_INFO.mapsUrl}
      />
    </article>
  )
}