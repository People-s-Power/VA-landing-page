import React, { useState } from "react";
import { Link } from "react-router";
import { serviceOptions } from "~/data/services";
import { CALENDLY_STRATEGY_SESSION, DALLAS_ADDRESS } from "~/lib/links";
import {
  SMS_CONSENT_DISCLOSURE,
  SMS_CONSENT_LABEL,
  isCrmConfigured,
  submitContact,
  validateContact,
  type ContactFormValues,
  type FieldErrors,
} from "~/lib/crm";

const EMPTY: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  serviceInterest: "",
  message: "",
  // Never default this to true. A pre-checked consent box is not valid TCPA
  // consent, and it is the single most common way these forms get challenged.
  smsConsent: false,
};

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40";
const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";
const errorClass = "mt-1 text-sm text-red-600";

const Field: React.FC<{
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}> = ({ id, label, error, required, children }) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
      {required && <span className="text-red-600"> *</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className={errorClass}>
        {error}
      </p>
    )}
  </div>
);

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const update =
    (field: keyof ContactFormValues) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const target = event.target;
      const value =
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value;

      setValues((prev) => ({ ...prev, [field]: value }));
      // Clear the field's error as soon as the user starts fixing it.
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return; // double-submit guard

    const validation = validateContact(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      await submitContact(values);
      setStatus("success");
      setValues(EMPTY);
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/40 bg-primary/10 p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Thanks — we&apos;ve got your details.
        </h3>
        <p className="text-gray-600 mb-6">
          A member of our team will be in touch shortly. If you already know you
          want to talk, you can book a time right now.
        </p>
        <a
          href={CALENDLY_STRATEGY_SESSION}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:brightness-90"
        >
          Book Strategy Session
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {!isCrmConfigured() && (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <strong className="font-semibold">
            This form isn&apos;t connected yet.
          </strong>{" "}
          The CRM endpoint hasn&apos;t been configured for this environment, so
          submissions can&apos;t be delivered. Please call or book a session
          using the links below in the meantime.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="firstName" label="First name" required error={errors.firstName}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={values.firstName}
            onChange={update("firstName")}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={inputClass}
          />
        </Field>

        <Field id="lastName" label="Last name" required error={errors.lastName}>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={update("lastName")}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
        </Field>

        <Field id="phone" label="Phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(214) 555-0123"
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="company" label="Company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update("company")}
            className={inputClass}
          />
        </Field>

        <Field id="serviceInterest" label="Service of interest">
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={values.serviceInterest}
            onChange={update("serviceInterest")}
            className={inputClass}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
      </div>

      <Field id="message" label="How can we help?">
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          className={inputClass}
        />
      </Field>

      {/* SMS consent. The checkbox is uncontrolled-by-default (unchecked) and
          the exact disclosure below is stored verbatim with each submission —
          see SMS_CONSENT_TEXT in app/lib/crm.ts. */}
      <div className="rounded-xl border border-gray-300 bg-gray-50 p-4">
        <div className="flex items-start gap-3">
          <input
            id="smsConsent"
            name="smsConsent"
            type="checkbox"
            checked={values.smsConsent}
            onChange={update("smsConsent")}
            aria-invalid={Boolean(errors.smsConsent)}
            aria-describedby="smsConsent-disclosure"
            className="mt-0.5 h-5 w-5 shrink-0 accent-primary"
          />
          <label htmlFor="smsConsent" className="text-sm text-gray-700">
            {SMS_CONSENT_LABEL}
          </label>
        </div>

        <p
          id="smsConsent-disclosure"
          className="mt-3 text-xs leading-relaxed text-gray-600"
        >
          {SMS_CONSENT_DISCLOSURE} See our{" "}
          <Link to="/terms" className="underline hover:text-primary">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>

        {errors.smsConsent && (
          <p role="alert" className={errorClass}>
            {errors.smsConsent}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800"
        >
          <p className="font-semibold mb-1">
            We couldn&apos;t send your message.
          </p>
          <p className="mb-2">{submitError}</p>
          <p>
            Please call us at{" "}
            <a href={DALLAS_ADDRESS.phoneHref} className="underline">
              {DALLAS_ADDRESS.phone}
            </a>{" "}
            or{" "}
            <a
              href={CALENDLY_STRATEGY_SESSION}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              book a strategy session
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
