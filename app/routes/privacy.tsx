import type { Route } from "./+types/privacy";
import { Link } from "react-router";
import { LegalLayout, LegalList, LegalSection } from "~/components/LegalPage";
import { COMPANY_NAME, SITE_NAME, SITE_URL } from "~/lib/links";

/**
 * ⚠️ TEMPLATE — not legal advice. Have an attorney review before launch.
 * See the notice in app/components/LegalPage.tsx.
 */

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | HireExpertHub" },
    {
      name: "description",
      content:
        "How HireExpertHub collects, uses, and protects your information, including SMS messaging consent and your privacy rights.",
    },
  ];
}

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro={`This Privacy Policy explains how ${COMPANY_NAME} ("ExpertHub," "we," "us," or "our") collects, uses, shares, and protects information when you visit ${SITE_URL}, submit an inquiry, or engage our services. By using the Site, you agree to the practices described here.`}
    >
      <LegalSection heading="1. Information We Collect">
        <p>We collect information you give us directly, including:</p>
        <LegalList
          items={[
            <>
              <strong>Contact details</strong> — your first and last name, email
              address, phone number, and company name.
            </>,
            <>
              <strong>Inquiry details</strong> — the service you&apos;re
              interested in and any message or requirements you share with us.
            </>,
            <>
              <strong>Engagement information</strong> — details about the tasks,
              systems, and scope of work involved in an active engagement.
            </>,
            <>
              <strong>Consent records</strong> — whether you agreed to receive
              SMS messages, the exact consent language displayed to you at the
              time, and a timestamp of when you agreed.
            </>,
          ]}
        />
        <p>
          We also collect limited technical information automatically when you
          visit the Site, such as your IP address, browser type, device type,
          referring pages, and pages viewed. This information is used in
          aggregate to keep the Site working and to understand how it is used.
        </p>
        <p>
          We do not knowingly collect sensitive categories of personal
          information such as government identifiers, financial account
          numbers, or health information through the Site&apos;s inquiry forms.
          Please do not submit that kind of information through a form. Where an
          engagement requires access to sensitive business records, we scope and
          protect that access separately under your service agreement.
        </p>
      </LegalSection>

      <LegalSection heading="2. How We Use Your Information">
        <LegalList
          items={[
            "Respond to your inquiry and arrange a strategy session or consultation.",
            "Match you with an appropriate Trained Professional and deliver the Services.",
            "Communicate with you about your engagement, including by SMS where you have consented.",
            "Send service updates, and — where permitted — information we think is relevant to your business.",
            "Maintain records of consent and communications for compliance purposes.",
            "Improve the Site, our matching process, and our services.",
            "Detect, prevent, and address fraud, abuse, or security issues.",
            "Comply with legal obligations and enforce our agreements.",
          ]}
        />
      </LegalSection>

      <LegalSection
        id="sms"
        heading="3. SMS Messaging and Your Consent"
      >
        <p>
          Customers opt in by entering their phone number at{" "}
          <Link to="/" className="text-primary underline">
            {SITE_URL}
          </Link>{" "}
          on a contact or inquiry form and checking a consent checkbox. The form
          states that they agree to receive SMS messages from {SITE_NAME}.
        </p>
        <p>
          The customer is also notified that message frequency may vary, that
          message and data rates may apply, and that they can reply{" "}
          <strong>STOP</strong> to opt out or <strong>HELP</strong> for
          assistance. Links to our Terms of Use and this Privacy Policy are
          provided on the form.
        </p>
        <p>
          Consent is not a condition of purchase, and the consent checkbox is
          never pre-selected. You may withdraw consent at any time by replying{" "}
          <strong>STOP</strong> to any message, or by contacting us using the
          details at the end of this policy. After opting out you may receive a
          final confirmation message; no further marketing messages will be
          sent unless you opt in again.
        </p>
        <p className="rounded-xl border-l-4 border-primary bg-primary/10 p-5 font-semibold text-gray-700">
          We do not sell, rent, or share your mobile phone number or your SMS
          opt-in consent data with any third party for their own marketing or
          promotional purposes. Mobile information is shared only with the
          service providers that transmit messages on our behalf, and only to
          deliver the messages you agreed to receive.
        </p>
        <p>
          Carriers are not liable for delayed or undelivered messages. Message
          delivery is subject to effective transmission by your mobile carrier
          and is not guaranteed.
        </p>
      </LegalSection>

      <LegalSection heading="4. How We Share Information">
        <p>
          We do not sell your personal information. We share it only in these
          circumstances:
        </p>
        <LegalList
          items={[
            <>
              <strong>Service providers.</strong> Companies that help us operate
              — including our customer relationship management (CRM) system,
              SMS and email delivery providers, hosting, scheduling, and
              payment processing — receive only the information needed to
              perform their function, under contractual confidentiality
              obligations.
            </>,
            <>
              <strong>Trained Professionals and supervisors.</strong> Information
              necessary to perform the work you have asked us to deliver.
            </>,
            <>
              <strong>Legal and safety.</strong> Where required by law, subpoena,
              or court order, or where necessary to protect the rights, safety,
              or property of ExpertHub, our clients, or the public.
            </>,
            <>
              <strong>Business transfers.</strong> In connection with a merger,
              acquisition, financing, or sale of assets, in which case your
              information may be transferred as part of that transaction.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="cookies" heading="5. Cookies and Tracking">
        <p>
          The Site uses cookies and similar technologies to keep the Site
          functioning, remember your preferences, and understand how visitors
          use our pages. Some cookies are set by third-party services embedded
          in the Site — for example, our scheduling provider sets cookies when
          you interact with the booking calendar, and our chat widget sets
          cookies to maintain a session.
        </p>
        <p>
          You can control or delete cookies through your browser settings. Most
          browsers let you block third-party cookies or clear existing ones.
          Blocking cookies may affect how parts of the Site — particularly the
          scheduling calendar and chat widget — behave.
        </p>
        <p>
          Where required by applicable law, we will obtain your consent before
          setting non-essential cookies, and we honour browser-based opt-out
          preference signals.
        </p>
      </LegalSection>

      <LegalSection heading="6. Data Retention">
        <p>
          We keep personal information for as long as needed to fulfil the
          purposes described in this policy, to maintain our business records,
          and to comply with legal, tax, and accounting obligations. Consent
          records are retained for the period required to demonstrate compliance
          with applicable messaging laws. When information is no longer needed,
          we delete or de-identify it.
        </p>
      </LegalSection>

      <LegalSection heading="7. Security">
        <p>
          We use administrative, technical, and physical safeguards designed to
          protect your information, including access controls, encrypted
          transmission, and least-privilege credential sharing for
          Professionals working on client engagements. No method of transmission
          or storage is completely secure, so we cannot guarantee absolute
          security. If we become aware of a breach affecting your personal
          information, we will notify you and any applicable regulator as
          required by law.
        </p>
      </LegalSection>

      <LegalSection heading="8. Your Choices and Rights">
        <p>You may request to:</p>
        <LegalList
          items={[
            "Access the personal information we hold about you.",
            "Correct information that is inaccurate or incomplete.",
            "Delete your personal information, subject to our legal and contractual retention obligations.",
            "Opt out of marketing emails using the unsubscribe link in any message, and out of SMS by replying STOP.",
            "Withdraw SMS consent at any time.",
          ]}
        />
        <p>
          To exercise any of these rights, contact us using the details below.
          We will respond within the timeframe required by applicable law and may
          need to verify your identity before acting on a request. We will not
          discriminate against you for exercising your privacy rights.
        </p>
        <p>
          Depending on where you live, you may have additional rights under
          state privacy laws. If you are a resident of a state with a
          comprehensive privacy statute and we are unable to honour a request,
          you may appeal by contacting us and noting the appeal in your message.
        </p>
      </LegalSection>

      <LegalSection heading="9. Notice to California Residents">
        <p>
          If you are a California resident, the California Consumer Privacy Act,
          as amended by the California Privacy Rights Act, gives you the right
          to know what personal information we collect, use, and disclose; to
          request access to and deletion of your personal information; to
          correct inaccurate information; to opt out of the sale or sharing of
          personal information; to limit the use of sensitive personal
          information; and to not be discriminated against for exercising these
          rights.
        </p>
        <p>
          We do not sell or share personal information as those terms are
          defined under California law. To exercise any California right, contact
          us using the details below and describe your request. You may use an
          authorised agent to submit a request on your behalf, subject to
          verification.
        </p>
      </LegalSection>

      <LegalSection heading="10. Children's Privacy">
        <p>
          The Site and Services are intended for businesses and are not directed
          to children under 13. We do not knowingly collect personal information
          from children under 13. If you believe a child has provided us with
          personal information, please contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection heading="11. Third-Party Links and Services">
        <p>
          The Site links to and embeds services operated by other companies,
          including our scheduling calendar and chat widget. This Privacy Policy
          does not apply to those services. We encourage you to review the
          privacy policies of any third-party service you use.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &quot;Last updated&quot; date above. Material changes
          will be communicated through the Site or by email where appropriate.
          Your continued use of the Site after a change takes effect constitutes
          acceptance of the updated policy.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
