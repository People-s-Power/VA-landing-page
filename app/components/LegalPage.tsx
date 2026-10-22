import React from "react";
import { Link } from "react-router";
import PageLayout from "~/components/PageLayout";
import {
  COMPANY_NAME,
  CONTACT_URL,
  DALLAS_ADDRESS,
  LEGAL_LAST_UPDATED,
} from "~/lib/links";

/**
 * Shared presentation for the legal pages (Terms of Use, Privacy Policy).
 *
 * ⚠️ TEMPLATE NOTICE — The copy in app/routes/terms.tsx and
 * app/routes/privacy.tsx is a solid, US-appropriate starting point written to
 * match what this site actually does. It is NOT legal advice. Messaging consent
 * (TCPA), arbitration clauses, and limitation-of-liability wording are exactly
 * where generic boilerplate creates real exposure. Have a qualified attorney
 * review both documents before launch, and re-review whenever you change what
 * data you collect or how you contact people.
 */

export const LegalLayout: React.FC<{
  title: string;
  intro: string;
  children: React.ReactNode;
}> = ({ title, intro, children }) => (
  <PageLayout>
    <div className="max-w-3xl mx-auto px-4 pb-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">{title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: {LEGAL_LAST_UPDATED}
      </p>
      <p className="text-gray-600 mb-10 leading-relaxed">{intro}</p>
      <div className="space-y-10">{children}</div>

      <div className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Questions?</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Contact {COMPANY_NAME} at{" "}
          <a
            href={DALLAS_ADDRESS.phoneHref}
            className="text-primary underline"
          >
            {DALLAS_ADDRESS.phone}
          </a>{" "}
          or through our{" "}
          {CONTACT_URL.startsWith("http") ? (
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              contact form
            </a>
          ) : (
            <Link to={CONTACT_URL} className="text-primary underline">
              contact form
            </Link>
          )}
          , or write to us at {DALLAS_ADDRESS.street},{" "}
          {DALLAS_ADDRESS.city}, {DALLAS_ADDRESS.state}{" "}
          {DALLAS_ADDRESS.zip}, {DALLAS_ADDRESS.country}.
        </p>
      </div>
    </div>
  </PageLayout>
);

export const LegalSection: React.FC<{
  id?: string;
  heading: string;
  children: React.ReactNode;
}> = ({ id, heading, children }) => (
  <section id={id} className="scroll-mt-32">
    <h2 className="text-xl font-bold text-gray-800 mb-3">{heading}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed">{children}</div>
  </section>
);

export const LegalList: React.FC<{ items: React.ReactNode[] }> = ({
  items,
}) => (
  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
