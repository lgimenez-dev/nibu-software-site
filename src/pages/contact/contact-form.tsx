import { Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Card, CardContent } from "@/components/ui/card"
import { IconWhatsappSocial } from "@/components/shared/icons"
import { FORM_CONFIG } from "./contact.constants"
import type { ContactFormProps } from "./contact.types"

export function ContactForm({
  form,
  submitStatus,
  handleEinChange,
  handlePhoneChange,
  onSubmit,
}: ContactFormProps) {
  const { register, control, handleSubmit, formState } = form

  return (
    <section className="dotsPattern py-10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Field>
                  <FieldLabel htmlFor="companyName">
                    {FORM_CONFIG.fields.companyName.label}
                    <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder={FORM_CONFIG.fields.companyName.placeholder}
                    aria-invalid={!!formState.errors.companyName}
                    disabled={formState.isSubmitting}
                    maxLength={20}
                    {...register("companyName")}
                  />
                  {formState.errors.companyName && (
                    <FieldError errors={[{ message: formState.errors.companyName.message }]} />
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="ein">
                    {FORM_CONFIG.fields.ein.label}
                    <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    id="ein"
                    type="text"
                    inputMode="numeric"
                    placeholder={FORM_CONFIG.fields.ein.placeholder}
                    aria-invalid={!!formState.errors.ein}
                    disabled={formState.isSubmitting}
                    {...register("ein")}
                    onChange={handleEinChange}
                    maxLength={11}
                  />
                  {formState.errors.ein && (
                    <FieldError errors={[{ message: formState.errors.ein.message }]} />
                  )}
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel htmlFor="phone">
                      {FORM_CONFIG.fields.phone.label}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      placeholder={FORM_CONFIG.fields.phone.placeholder}
                      aria-invalid={!!formState.errors.phone}
                      disabled={formState.isSubmitting}
                      {...register("phone")}
                      onChange={handlePhoneChange}
                      maxLength={15}
                    />
                    {formState.errors.phone && (
                      <FieldError errors={[{ message: formState.errors.phone.message }]} />
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">
                      {FORM_CONFIG.fields.email.label}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder={FORM_CONFIG.fields.email.placeholder}
                      aria-invalid={!!formState.errors.email}
                      disabled={formState.isSubmitting}
                      maxLength={50}
                      {...register("email")}
                    />
                    {formState.errors.email && (
                      <FieldError errors={[{ message: formState.errors.email.message }]} />
                    )}
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel htmlFor="scheduleFrom">
                      {FORM_CONFIG.fields.scheduleFrom.label}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Controller
                      name="scheduleFrom"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={formState.isSubmitting}
                        >
                          <SelectTrigger 
                            id="scheduleFrom"
                            aria-invalid={!!formState.errors.scheduleFrom}
                          >
                            <SelectValue placeholder={FORM_CONFIG.fields.scheduleFrom.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {FORM_CONFIG.contactHours.map((horario) => (
                              <SelectItem key={horario} value={horario}>
                                {horario}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {formState.errors.scheduleFrom && (
                      <FieldError errors={[{ message: formState.errors.scheduleFrom.message }]} />
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="scheduleTo">
                      {FORM_CONFIG.fields.scheduleTo.label}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Controller
                      name="scheduleTo"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={formState.isSubmitting}
                        >
                          <SelectTrigger 
                            id="scheduleTo"
                            aria-invalid={!!formState.errors.scheduleTo}
                          >
                            <SelectValue placeholder={FORM_CONFIG.fields.scheduleTo.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {FORM_CONFIG.contactHours.map((hour) => (
                              <SelectItem key={hour} value={hour}>
                                {hour}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {formState.errors.scheduleTo && (
                      <FieldError errors={[{ message: formState.errors.scheduleTo.message }]} />
                    )}
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="contactName">
                    {FORM_CONFIG.fields.contactName.label}
                    <span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    id="contactName"
                    type="text"
                    placeholder={FORM_CONFIG.fields.contactName.placeholder}
                    aria-invalid={!!formState.errors.contactName}
                    disabled={formState.isSubmitting}
                    maxLength={50}
                    {...register("contactName")}
                  />
                  {formState.errors.contactName && (
                    <FieldError errors={[{ message: formState.errors.contactName.message }]} />
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="comments">
                    {FORM_CONFIG.fields.comments.label}
                  </FieldLabel>
                  <Textarea
                    id="comments"
                    placeholder={FORM_CONFIG.fields.comments.placeholder}
                    rows={4}
                    disabled={formState.isSubmitting}
                    maxLength={100}
                    {...register("comments")}
                  />
                </Field>

                {submitStatus === "success" && (
                  <div 
                    className="p-4 rounded-md bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
                    role="alert"
                  >
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      {FORM_CONFIG.messages.success}
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div 
                    className="p-4 rounded-md bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800"
                    role="alert"
                  >
                    <p className="text-red-800 dark:text-red-200 text-sm">
                      {FORM_CONFIG.messages.error}
                    </p>
                  </div>
                )}

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState.isSubmitting}
                    className="w-full md:w-auto md:min-w-50 cursor-pointer bg-whatsapp-green hover:bg-whatsapp-green/80"
                  >
                    <IconWhatsappSocial className="inline-flex mr-2" />
                    {formState.isSubmitting ? FORM_CONFIG.buttons.submitting : FORM_CONFIG.buttons.submit}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

ContactForm.displayName = "ContactForm"
