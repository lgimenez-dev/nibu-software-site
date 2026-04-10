import { useRef } from "react"
import type ReCAPTCHA from "react-google-recaptcha"
import type { UseRecaptchaOptions, UseRecaptchaReturn } from "./contact.types"

/**
 * Personalized hook to integrate Google reCAPTCHA with react-hook-form.
 * This hook provides handlers and utilities to manage reCAPTCHA state and integration with the form.
 * It abstracts away the complexity of handling reCAPTCHA tokens and form state synchronization.
 * @example
 * ```tsx
 * const { form } = useRequestInfoForm()
 * const { recaptchaRef, handleRecaptchaChange, resetRecaptcha } = useRecaptcha({
 *   setValue: form.setValue
 * })
 * 
 * // En el JSX:
 * <ReCAPTCHA
 *   ref={recaptchaRef}
 *   sitekey={SITE_KEY}
 *   onChange={handleRecaptchaChange}
 *   onExpired={resetRecaptcha}
 *   onErrored={resetRecaptcha}
 * />
 * ```
 */
export function useRecaptcha<T extends { recaptcha?: string }>({
  setValue,
  onTokenChange,
}: UseRecaptchaOptions<T>): UseRecaptchaReturn {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  // Handler to use when the reCAPTCHA token changes (onChange)
  const handleRecaptchaChange = (token: string | null) => {
    // @ts-expect-error - TypeScript no puede inferir correctamente el tipo genérico aquí
    setValue("recaptcha", token || "", {
      shouldValidate: true,
    })
    onTokenChange?.(token)
  }

  // Handler to reset the reCAPTCHA and clear the form value (Useful in case of expiration or error)
  const resetRecaptcha = () => {
    recaptchaRef.current?.reset()
    // @ts-expect-error
    setValue("recaptcha", "", {
      shouldValidate: false,
    })
  }

  // Handler to execute the reCAPTCHA programmatically and return the token (Useful if you need to validate before submit)
  const executeRecaptcha = async (): Promise<string | null> => {
    return recaptchaRef.current?.executeAsync() || null
  }

  // Handler to get the current token without executing
  const getRecaptchaValue = (): string | null => {
    return recaptchaRef.current?.getValue() || null
  }

  return {
    // recaptchaRef,
    handleRecaptchaChange,
    resetRecaptcha,
    executeRecaptcha,
    getRecaptchaValue,
  }
}
