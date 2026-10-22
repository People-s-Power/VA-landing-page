/**
 * Contact/lead submission client.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  ⚠️  SECURITY — READ BEFORE SETTING VITE_CRM_ENDPOINT
 *
 *  This app runs in SPA mode (`ssr: false` in react-router.config.ts), so there
 *  is no server runtime to receive a form POST. Leads are therefore sent
 *  straight from the browser, and Vite inlines every `VITE_*` variable into the
 *  client bundle — meaning whatever you put in `VITE_CRM_ENDPOINT` is PUBLICLY
 *  READABLE by anyone who views the page source.
 *
 *  That is fine for a public intake URL (Zapier/Make catch hook, HubSpot public
 *  forms endpoint, Formspree, a CRM's public lead-capture endpoint).
 *
 *  It is NOT fine if the endpoint requires a secret API key or bearer token —
 *  the key would be published. In that case, add a Vercel serverless function
 *  at `api/contact.ts` that holds the key server-side, and change the `fetch`
 *  URL in `submitContact` below to `/api/contact`. The form component needs no
 *  changes.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
  smsConsent: boolean;
}

/** Label on the consent checkbox. Must remain unchecked by default — see below. */
export const SMS_CONSENT_LABEL =
  "I agree to receive SMS text messages from HireExpertHub.com at the number provided.";

/** Full disclosure shown beneath the checkbox. */
export const SMS_CONSENT_DISCLOSURE =
  "Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not a condition of purchase.";

/**
 * The exact text a consenting user saw, stored verbatim with the submission.
 * If consent is ever disputed, "what did the user actually see" is the whole
 * defence — and it cannot be reconstructed from a later copy edit.
 */
export const SMS_CONSENT_TEXT = `${SMS_CONSENT_LABEL} ${SMS_CONSENT_DISCLOSURE}`;

export const CRM_ENDPOINT =
  (import.meta.env.VITE_CRM_ENDPOINT as string | undefined)?.trim() || "";

/** False until VITE_CRM_ENDPOINT is set. */
export const isCrmConfigured = (): boolean => CRM_ENDPOINT.length > 0;

/**
 * Coerces common US phone formats to E.164 (+1XXXXXXXXXX).
 * Returns null if the input isn't a plausible US number.
 */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!normalizePhone(values.phone)) {
    errors.phone = "Enter a valid 10-digit US phone number.";
  }

  if (!values.smsConsent) {
    errors.smsConsent = "Please agree to receive SMS messages to continue.";
  }

  return errors;
}

export interface ContactSubmission extends ContactFormValues {
  phone: string;
  smsConsent: true;
  /** Verbatim consent copy shown to the user. */
  consentText: string;
  /** ISO timestamp of when consent was given. */
  consentTimestamp: string;
  source: string;
  pageUrl: string;
  userAgent: string;
  submittedAt: string;
}

/**
 * Payload shape sent to the CRM. Field names are flat and human-readable so the
 * mapping is obvious in a Zapier/Make/HubSpot step:
 *
 *   firstName, lastName, email, phone (+1XXXXXXXXXX), company,
 *   serviceInterest, message, smsConsent, consentText, consentTimestamp,
 *   source, pageUrl, userAgent, submittedAt
 */
export function buildSubmission(
  values: ContactFormValues
): ContactSubmission {
  const phone = normalizePhone(values.phone);
  if (!phone) throw new Error("Invalid phone number");

  const now = new Date().toISOString();

  return {
    ...values,
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    email: values.email.trim().toLowerCase(),
    phone,
    company: values.company.trim(),
    message: values.message.trim(),
    smsConsent: true,
    consentText: SMS_CONSENT_TEXT,
    consentTimestamp: now,
    source: "hireexperthub.com",
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    submittedAt: now,
  };
}

export async function submitContact(
  values: ContactFormValues
): Promise<void> {
  if (!isCrmConfigured()) {
    throw new Error(
      "The contact form isn't connected yet. Please call us instead."
    );
  }

  const payload = buildSubmission(values);

  const response = await fetch(CRM_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Submission failed (${response.status})`);
  }
}
