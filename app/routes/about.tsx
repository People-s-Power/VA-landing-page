import type { Route } from "./+types/about";
import { Link } from "react-router";
import PageLayout from "~/components/PageLayout";
import {
  CALENDLY_STRATEGY_SESSION,
  COMPANY_NAME,
  DALLAS_ADDRESS,
} from "~/lib/links";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | HireExpertHub" },
    {
      name: "description",
      content:
        "HireExpertHub places dedicated full-time Trained Professionals with US small businesses — vetted, supervised, and matched to your time zone.",
    },
  ];
}

const pillars = [
  {
    title: "Matched to the work, not a job board",
    body: "We start with the tasks that are actually costing you time, then match a Trained Professional whose skills and experience fit those specific tasks. You're not scrolling profiles or running interviews.",
  },
  {
    title: "Dedicated and full-time",
    body: "Your Trained Professional works for you — same person, every day, in your time zone. Continuity is what makes delegation compound instead of creating a new management job for you.",
  },
  {
    title: "Supervised, not left to drift",
    body: "You get a dedicated Client Success Manager as a single point of contact, plus Team Captains and Supervisors reviewing quality. If something isn't right, you raise it once and we own it.",
  },
  {
    title: "Trained, and kept current",
    body: "Our professionals come pre-trained for general business tasks and receive ongoing training. Bring your own processes and tools and they'll adapt to how your business already works.",
  },
  {
    title: "Confidentiality as standard",
    body: "Every engagement is covered by a Non-Disclosure Agreement, and our professionals follow strict privacy guidelines when handling your inbox, your clients, and your data.",
  },
  {
    title: "Replacement without the restart",
    body: "If the fit isn't right, we run the replacement. You don't go back to writing job posts, screening resumes, and re-onboarding from scratch.",
  },
];

export default function About() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
            About us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
            Full-time support for US businesses that have outgrown doing it all
          </h1>
          <p className="text-gray-600 text-lg">
            {COMPANY_NAME} places dedicated, full-time Trained Professionals
            with small businesses, practices, and busy operators across the
            United States. You hand over the work that drains your week; we
            handle the finding, the vetting, the training, and the supervision.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why we focus on full-time
          </h2>
          <p className="text-gray-600 mb-4">
            A great deal of virtual support is sold by the hour or by the task.
            That model works for one-off projects, but it quietly fails for the
            work that actually fills a business owner&apos;s day — the inbox,
            the calendar, the follow-ups, the recurring admin.
          </p>
          <p className="text-gray-600 mb-4">
            That work is only worth delegating if someone owns it. Fragmented
            hours and rotating freelancers mean re-briefing, re-explaining, and
            re-checking — which costs you the very time you were trying to buy
            back.
          </p>
          <p className="text-gray-600">
            So we place full-time, dedicated professionals instead. One person
            who knows your clients, your preferences, and your way of working,
            and who gets better at the job every month because they&apos;re the
            one doing it.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
            What you get with every placement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What we&apos;ll ask you
          </h2>
          <p className="text-gray-600 mb-4">
            We&apos;re deliberate about matching, which means we ask questions
            before we place anyone. Expect us to want to understand:
          </p>
          <ul className="space-y-3 text-gray-600">
            {[
              "The specific tasks you want off your plate first, and roughly how much time they take.",
              "The tools you already use, so your new professional works inside your existing systems.",
              "The hours you need covered and the time zone you work in.",
              "Anything sensitive — client data, health information, financial records — so confidentiality is scoped properly from day one.",
              "How you prefer to communicate, and what you consider urgent.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-primary shrink-0" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7.629 15.314a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 1 1 1.414-1.414l3.536 3.536 7.778-7.778a1 1 0 0 1 1.414 1.414l-8.485 8.485z" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl bg-primary/10 p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Based in Dallas, working wherever you are
          </h2>
          <p className="text-gray-600 mb-6">
            Our team operates from {DALLAS_ADDRESS.city},{" "}
            {DALLAS_ADDRESS.state}, and places Trained Professionals with
            businesses across the United States. Every engagement is scoped to
            your working hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={CALENDLY_STRATEGY_SESSION} target="_blank">
              <button className="w-full sm:w-auto rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:brightness-90">
                Book Strategy Session
              </button>
            </Link>
            <Link to="/#pricing">
              <button className="w-full sm:w-auto rounded-full border border-primary px-8 py-3 font-semibold text-primary transition hover:bg-primary/10">
                See Pricing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
