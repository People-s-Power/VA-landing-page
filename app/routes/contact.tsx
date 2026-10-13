import type { Route } from "./+types/contact";
import PageLayout from "~/components/PageLayout";
import ContactForm from "~/components/ContactForm";
import CalendlyEmbed from "~/components/CalendlyEmbed";
import { DALLAS_ADDRESS } from "~/lib/links";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | HireExpertHub" },
    {
      name: "description",
      content:
        "Talk to HireExpertHub about a full-time Trained Professional for your business. Send us a message or book a free strategy session.",
    },
  ];
}

export default function Contact() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Let&apos;s talk about what you can hand over
          </h1>
          <p className="text-gray-600">
            Tell us a little about your business and the work that&apos;s eating
            your week. We&apos;ll come back to you with the right Trained
            Professional and a clear next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-primary/10 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Prefer to talk it through?
              </h2>
              <p className="text-gray-600 mb-5 text-sm">
                Book a free strategy session and pick a time that suits you —
                the calendar below shows real availability.
              </p>
              <div className="overflow-hidden rounded-xl bg-white p-1">
                <CalendlyEmbed height={620} />
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {DALLAS_ADDRESS.label}
              </h2>
              <address className="not-italic text-gray-600 text-sm space-y-2">
                <p>
                  <a
                    href={DALLAS_ADDRESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {DALLAS_ADDRESS.street}
                    <br />
                    {DALLAS_ADDRESS.city}, {DALLAS_ADDRESS.state}{" "}
                    {DALLAS_ADDRESS.zip}
                    <br />
                    {DALLAS_ADDRESS.country}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={DALLAS_ADDRESS.phoneHref}
                    className="hover:text-primary transition-colors"
                  >
                    {DALLAS_ADDRESS.phone}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
