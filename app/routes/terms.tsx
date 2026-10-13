import type { Route } from "./+types/terms";
import { Link } from "react-router";
import { LegalLayout, LegalList, LegalSection } from "~/components/LegalPage";
import { COMPANY_NAME, SITE_NAME, SITE_URL } from "~/lib/links";

/**
 * ⚠️ TEMPLATE — not legal advice. Have an attorney review before launch.
 * See the notice in app/components/LegalPage.tsx.
 */

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Use | HireExpertHub" },
    {
      name: "description",
      content:
        "The terms governing your use of HireExpertHub.com and the services we provide.",
    },
  ];
}

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Use"
      intro={`These Terms of Use govern your access to and use of ${SITE_URL} (the "Site") and any services provided by ${COMPANY_NAME} ("ExpertHub," "we," "us," or "our"). By using the Site or engaging our services, you agree to these Terms. If you do not agree, do not use the Site.`}
    >
      <LegalSection heading="1. The Services">
        <p>
          ExpertHub provides remote staffing and administrative support services
          to businesses, primarily by matching clients with dedicated,
          full-time Trained Professionals (&quot;Professionals&quot;) who
          perform agreed tasks remotely. The specific scope of work, hours, and
          fees for your engagement are set out in your service agreement or
          order confirmation.
        </p>
        <p>
          We may add, change, or discontinue any part of the Services at any
          time. We do not guarantee that any particular Professional, feature,
          or service tier will remain available.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility">
        <p>
          The Services are intended for businesses and individuals who are at
          least 18 years old and able to form a binding contract. By using the
          Site you represent that you meet these requirements and that any
          information you provide is accurate and current.
        </p>
      </LegalSection>

      <LegalSection heading="3. Your Responsibilities">
        <LegalList
          items={[
            "Provide accurate information about your business, your requirements, and the tasks you want performed.",
            "Grant only the access the Professional actually needs, and manage that access through appropriate credential-sharing tools rather than plain-text documents.",
            "Give clear instructions, priorities, and decision rules for the work you delegate.",
            "Ensure you have the right to share any data, systems, or materials you make available to us or a Professional.",
            "Comply with all laws applicable to your business, including any recordkeeping, privacy, or professional-conduct obligations specific to your industry.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="4. Relationship of the Parties">
        <p>
          Professionals are engaged by ExpertHub, not by you. Nothing in these
          Terms or in any service agreement creates an employment, partnership,
          joint venture, or agency relationship between you and a Professional,
          and you may not direct a Professional to act as your legal
          representative or to make commitments on your behalf.
        </p>
        <p>
          You are responsible for supervising the business outcomes of the work
          you delegate. ExpertHub is responsible for the supervision,
          quality control, and replacement of Professionals as described in your
          service agreement.
        </p>
      </LegalSection>

      <LegalSection heading="5. Fees, Billing, and Renewal">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Fees, billing frequency, and any included hours are stated on the
            Site or in your order confirmation. Promotional or partner pricing
            is available for a limited time and may be changed or withdrawn.
          </li>
          <li>
            Subscriptions renew automatically for successive periods unless
            cancelled before the end of the current period.
          </li>
          <li>
            You authorise us or our payment processor to charge your nominated
            payment method on a recurring basis.
          </li>
          <li>
            Except where required by law or expressly stated in your service
            agreement, fees are non-refundable, including for partially used
            periods.
          </li>
          <li>
            We may suspend or terminate Services for unpaid amounts. You are
            responsible for reasonable costs of collection, including
            attorneys&apos; fees, where permitted by law.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. No Guarantee of Results">
        <p>
          We commit to the process — vetting, matching, training, supervision,
          and replacement. We do not and cannot guarantee any particular
          business outcome, revenue result, cost saving, or that the Services
          will be uninterrupted or error-free. Any examples or estimates
          discussed with you are illustrative only.
        </p>
      </LegalSection>

      <LegalSection heading="7. Acceptable Use">
        <p>You agree not to use the Site or the Services to:</p>
        <LegalList
          items={[
            "Violate any law or regulation, or infringe the rights of any third party.",
            "Ask a Professional to perform work that is unlawful, deceptive, harassing, or defamatory.",
            "Ask a Professional to provide legal, medical, tax, or financial advice requiring a licence they do not hold, or to perform any activity requiring a professional licence.",
            "Transmit malware, attempt to gain unauthorised access to our systems, or interfere with the Site's operation.",
            "Scrape, resell, or misrepresent the Services, or use them to build a competing offering.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="8. Intellectual Property">
        <p>
          The Site, including its text, design, graphics, and logos, is owned by
          ExpertHub or its licensors and is protected by intellectual property
          laws. You may not copy, modify, distribute, or create derivative works
          from it without our written permission.
        </p>
        <p>
          You retain all rights to your own business data, materials, and
          deliverables. You grant us a limited licence to use them solely to
          provide the Services. Work product created by a Professional in the
          course of your engagement is yours, subject to payment of applicable
          fees.
        </p>
      </LegalSection>

      <LegalSection heading="9. Confidentiality">
        <p>
          Each party will protect the other&apos;s confidential information with
          at least the same care it uses for its own, and will use it only to
          perform under the agreement. Professionals engaged on your work are
          bound by written non-disclosure obligations. Confidentiality
          obligations do not apply to information that is public through no
          fault of the receiving party, independently developed, or required to
          be disclosed by law.
        </p>
      </LegalSection>

      <LegalSection heading="10. SMS and Electronic Communications">
        <p>
          By providing your phone number and checking the consent box on our
          contact or inquiry form, you agree to receive SMS text messages from{" "}
          {SITE_NAME} at the number you provided. Message frequency may vary.
          Message and data rates may apply. Reply <strong>STOP</strong> to opt
          out, or <strong>HELP</strong> for assistance. Consent is not a
          condition of purchase.
        </p>
        <p>
          You may also receive transactional or service-related messages
          connected to an active engagement. Opting out of marketing messages
          does not prevent us from contacting you about an active service
          relationship where permitted by law. See our{" "}
          <Link to="/privacy" className="text-primary underline">
            Privacy Policy
          </Link>{" "}
          for how we handle your information.
        </p>
        <p>
          By using the Site or engaging the Services, you consent to receiving
          electronic communications from us, including agreements, notices, and
          disclosures, and agree that these satisfy any legal requirement that
          such communications be in writing.
        </p>
      </LegalSection>

      <LegalSection heading="11. Third-Party Services">
        <p>
          The Site and the Services may integrate with third-party tools,
          including scheduling, workspace, communication, and payment
          providers. We do not control those services and are not responsible
          for their availability, content, or practices. Your use of a
          third-party service is governed by that provider&apos;s own terms.
        </p>
      </LegalSection>

      <LegalSection heading="12. Disclaimers">
        <p>
          Except as expressly stated in these Terms or your service agreement,
          the Site and Services are provided &quot;as is&quot; and &quot;as
          available,&quot; without warranties of any kind, whether express,
          implied, or statutory, including implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. Some jurisdictions do not allow the exclusion of
          certain warranties, so some of the above may not apply to you.
        </p>
      </LegalSection>

      <LegalSection heading="13. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, ExpertHub will not be liable
          for indirect, incidental, special, consequential, exemplary, or
          punitive damages, or for lost profits, revenue, data, or business
          opportunity, arising out of or relating to the Site or the Services,
          even if advised of the possibility of such damages.
        </p>
        <p>
          Our total aggregate liability arising out of or relating to the
          Services will not exceed the total fees you paid to us in the twelve
          (12) months immediately preceding the event giving rise to the claim.
        </p>
      </LegalSection>

      <LegalSection heading="14. Indemnification">
        <p>
          You agree to indemnify and hold harmless ExpertHub and its officers,
          directors, employees, and agents from any claims, damages,
          liabilities, and expenses (including reasonable attorneys&apos; fees)
          arising from your use of the Services, your business data or
          materials, your violation of these Terms, or your violation of any
          third-party right.
        </p>
      </LegalSection>

      <LegalSection heading="15. Term and Termination">
        <p>
          Either party may terminate a service engagement as set out in the
          applicable service agreement. We may suspend or terminate your access
          to the Site or the Services immediately if you breach these Terms,
          fail to pay applicable fees, or use the Services in a way that creates
          risk or legal exposure for us or a Professional. Sections on fees,
          intellectual property, confidentiality, disclaimers, limitation of
          liability, indemnification, and dispute resolution survive
          termination.
        </p>
      </LegalSection>

      <LegalSection heading="16. Governing Law">
        <p>
          These Terms are governed by the laws of the State of Texas, without
          regard to its conflict-of-laws principles. Subject to the arbitration
          provision below, the state and federal courts located in Dallas
          County, Texas have exclusive jurisdiction over any dispute not subject
          to arbitration.
        </p>
      </LegalSection>

      <LegalSection heading="17. Dispute Resolution; Binding Arbitration">
        <p>
          Please read this section carefully — it affects your legal rights.
        </p>
        <p>
          You and ExpertHub agree to first attempt to resolve any dispute
          informally by contacting us. If the dispute is not resolved within
          thirty (30) days, any dispute arising out of or relating to these
          Terms or the Services will be resolved by final and binding
          arbitration administered in Dallas County, Texas, rather than in
          court, except that either party may bring an individual claim in
          small-claims court.
        </p>
        <p>
          <strong>Class action waiver.</strong> You and ExpertHub agree that
          each may bring claims against the other only in an individual
          capacity, and not as a plaintiff or class member in any purported
          class, collective, or representative proceeding.
        </p>
        <p>
          <strong>Right to opt out.</strong> You may opt out of this arbitration
          provision by sending written notice to us within thirty (30) days of
          first accepting these Terms. Opting out will not affect any other part
          of these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="18. Changes to These Terms">
        <p>
          We may update these Terms from time to time. When we do, we will
          revise the &quot;Last updated&quot; date above. Material changes will
          be communicated through the Site or by email where appropriate.
          Continued use of the Site or the Services after a change takes effect
          constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="19. General">
        <p>
          If any provision of these Terms is found unenforceable, the remaining
          provisions remain in full force. Our failure to enforce a provision is
          not a waiver of it. These Terms, together with your service agreement
          and our{" "}
          <Link to="/privacy" className="text-primary underline">
            Privacy Policy
          </Link>
          , are the entire agreement between us on this subject.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
