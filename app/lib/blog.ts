/**
 * Blog content.
 *
 * Posts are plain data — metadata plus a typed list of content blocks — so no
 * Markdown dependency or CMS is needed and every article renders with identical
 * typography. Add a post by appending to `posts`; the index page, the
 * /blog/:slug route and the footer links all pick it up automatically.
 *
 * EDITORIAL RULE: do not add invented statistics, client counts, awards or
 * testimonials. Numbers on a commercial site are a credibility and legal risk
 * if they can't be substantiated. Describe ranges qualitatively, or cite a
 * source you can actually point to.
 */

import { CALENDLY_STRATEGY_SESSION } from "~/lib/links";

export type ContentBlock =  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "cta"; text: string; href: string; external?: boolean };

export interface BlogPost {
  slug: string;
  title: string;
  /** Shown on the index card and used as the meta description. */
  excerpt: string;
  /** ISO date, used for sorting (newest first). */
  date: string;
  /** Human-readable date shown on the page. */
  dateDisplay: string;
  readTime: string;
  body: ContentBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: "virtual-assistant-cost-us-small-business",
    title: "What a Full-Time Virtual Assistant Actually Costs a US Small Business",
    excerpt:
      "Salary is the smallest part of the bill. Here's the full cost picture of a full-time hire versus a dedicated virtual assistant, and the line items most owners forget to count.",
    date: "2026-10-13",
    dateDisplay: "October 13, 2026",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "When business owners ask what a virtual assistant costs, they usually have one number in mind: the hourly rate or the monthly retainer. But the real comparison isn't rate against rate — it's the fully loaded cost of getting the work done, and for a full-time in-house hire that number is substantially larger than the salary you negotiate.",
      },
      { type: "h2", text: "The costs owners forget to count" },
      {
        type: "p",
        text: "A salaried employee is not a flat monthly cost. Alongside base pay you carry payroll taxes, unemployment insurance, workers' compensation, and any benefits you offer. Industry guidance commonly puts total employer overhead meaningfully above base salary once those items and paid time off are included — the exact figure depends on your state and your benefits package, so run it with your accountant rather than trusting a rule of thumb.",
      },
      {
        type: "p",
        text: "Then there are the soft costs, which are easy to miss because they never appear on an invoice:",
      },
      {
        type: "ul",
        items: [
          "Recruiting — writing the role, screening applicants, and interviewing, all of which lands on you or a recruiter you pay.",
          "Ramp time — a new hire is rarely productive in week one, and the training is usually your time.",
          "Equipment and software — a laptop, a seat, and per-user licences for every tool they touch.",
          "Management overhead — someone has to assign work, review it, and handle performance conversations.",
          "Replacement cost — if it doesn't work out, the recruiting and ramp cycle starts over.",
        ],
      },
      { type: "h2", text: "What a dedicated assistant changes" },
      {
        type: "p",
        text: "A dedicated virtual assistant on a monthly plan replaces most of those line items with a single predictable number. There's no payroll to run, no benefits to administer, no seat to buy, and typically no recruiting cycle — and if the fit isn't right, a replacement is handled for you rather than restarted by you.",
      },
      {
        type: "p",
        text: "What it does not replace is the need for good delegation. An assistant with no clear priorities and no documented processes will underperform, and that is true of an in-house hire too. The difference is that you can course-correct a monthly engagement far more cheaply than you can unwind a bad full-time hire.",
      },
      { type: "h2", text: "How to actually compare the two" },
      {
        type: "p",
        text: "Write down your fully loaded annual cost for an in-house hire — salary plus taxes plus benefits plus tools plus a realistic estimate of your own recruiting and management hours, valued at what your time is worth. Then compare that to an annualised monthly plan. For most small businesses the comparison is not close, but the exercise is worth doing with your own numbers rather than someone else's.",
      },
      {
        type: "callout",
        text: "Our current New Partner Pricing for a dedicated full-time Trained Professional is $499/month for 160 hours — down from the standard $850/month. See the pricing section for what's included.",
      },
      {
        type: "p",
        text: "If you want help working out which tasks are worth handing over first, that's exactly what a strategy session is for.",
      },
      {
        type: "cta",
        text: "Book a strategy session",
        href: CALENDLY_STRATEGY_SESSION,
        external: true,
      },
    ],
  },
  {
    slug: "full-time-va-vs-part-time-vs-freelancer-vs-agency",
    title: "Full-Time VA vs. Part-Time vs. Freelancer vs. Agency: Which Fits?",
    excerpt:
      "Four ways to buy administrative support, and the trade-off each one actually makes. A practical comparison for US small businesses.",
    date: "2026-10-13",
    dateDisplay: "October 13, 2026",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "Most owners reach for the same solution — \"I'll hire a VA\" — without deciding which of four quite different models they mean. They differ in cost, continuity, management burden, and how much risk you carry if it goes wrong.",
      },
      {
        type: "table",
        headers: ["Model", "Best for", "Main trade-off"],
        rows: [
          [
            "Full-time dedicated",
            "A steady, predictable workload across several functions",
            "Higher monthly commitment; needs enough work to fill the hours",
          ],
          [
            "Part-time dedicated",
            "A smaller recurring workload",
            "Availability is usually limited to set slots, and continuity suffers when hours are scarce",
          ],
          [
            "Freelancer / marketplace",
            "One-off or highly specialised tasks",
            "You recruit, vet, onboard, and insure continuity yourself — and cover gaps when they're unavailable",
          ],
          [
            "Agency / managed service",
            "Teams, supervision, and someone accountable when things break",
            "You pay for the management layer, and you may not pick the specific individual",
          ],
        ],
      },
      { type: "h2", text: "The variable that matters most: continuity" },
      {
        type: "p",
        text: "Cost dominates these conversations, but continuity is what determines whether the arrangement actually saves you time. An assistant who knows your calendar, your clients, and your preferences compounds in value every month. One who has to be re-briefed — because hours were too scattered, or because a freelancer moved on — quietly costs you the very time you were trying to buy back.",
      },
      {
        type: "p",
        text: "This is the argument for a dedicated full-time arrangement once your workload can support it. A single person owning your inbox, calendar, and recurring operations accumulates context that a rotating cast never will.",
      },
      { type: "h2", text: "What to look for whichever route you choose" },
      {
        type: "ul",
        items: [
          "Supervision — is anyone reviewing the quality of the work besides you?",
          "Replacement terms — what happens, and at what cost, if the fit is wrong?",
          "Confidentiality — is there a signed NDA, and who holds it?",
          "Your time zone — will they be working when you are, or will every hand-off cost you a day?",
          "A single point of contact — one person accountable for the relationship, not a ticket queue.",
        ],
      },
      {
        type: "callout",
        text: "Experthub currently offers dedicated full-time Trained Professional placements, each with a Client Success Manager, quality supervision, free replacement, and coverage in your time zone.",
      },
      {
        type: "p",
        text: "Not sure which model fits your workload? That's the conversation.",
      },
      {
        type: "cta",
        text: "Book a strategy session",
        href: CALENDLY_STRATEGY_SESSION,
        external: true,
      },
    ],
  },
  {
    slug: "what-to-delegate-first-30-days",
    title: "What to Delegate in Your First 30 Days",
    excerpt:
      "A week-by-week plan for handing over work without losing control of it — starting with access, then recurring tasks, then the systems that keep it running.",
    date: "2026-10-13",
    dateDisplay: "October 13, 2026",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "The most common failure mode in a new assistant relationship isn't a bad hire — it's a vague start. Work gets handed over in fragments, nothing gets fully owned, and within a month the owner has concluded that delegation doesn't work. The fix is sequencing: access first, then recurring work, then documentation.",
      },
      { type: "h2", text: "Week 1 — Access and the inbox" },
      {
        type: "p",
        text: "Start with the plumbing and one high-volume task. Access means the tools they'll need on day one and nothing more — a password manager with scoped credentials is the right way to do this, not a shared document full of plaintext logins. Pair it with your inbox, which is usually the single largest source of low-value interruptions you face.",
      },
      {
        type: "ul",
        items: [
          "Share credentials through a password manager, granting only what's needed for current tasks.",
          "Agree on how your inbox should be triaged, and what they're allowed to reply to without asking.",
          "Set your communication norms: which channel, expected response time, and what counts as urgent.",
        ],
      },
      { type: "h2", text: "Week 2 — Recurring tasks" },
      {
        type: "p",
        text: "Move the work that happens on a schedule: appointment setting, data entry, invoicing, supplier follow-ups, travel booking, social scheduling. Recurring tasks are ideal early delegations because they're predictable — you notice quickly when they slip, and the feedback loop is short.",
      },
      {
        type: "p",
        text: "Resist the urge to hand over everything at once. Two or three recurring tasks done reliably build more trust than ten done inconsistently.",
      },
      { type: "h2", text: "Week 3 — Documentation" },
      {
        type: "p",
        text: "This is the week that determines whether the arrangement lasts. Have your assistant write down how each task is done as they do it — the steps, the logins, the judgement calls, the exceptions. The goal is that a competent replacement could pick up the work from those notes alone.",
      },
      {
        type: "callout",
        text: "Documentation is also how you protect yourself. If the process lives only in one person's head, you have a single point of failure wearing a job title.",
      },
      { type: "h2", text: "Week 4 — Review and expand" },
      {
        type: "p",
        text: "Sit down together and review what's working. Ask what's still landing back on your desk, and move the next layer over. If something keeps bouncing back to you, the instructions are usually the problem, not the person — clarify the decision rules rather than taking the task back.",
      },
      {
        type: "ol",
        items: [
          "List everything that returned to you this month.",
          "For each one, decide: needs better instructions, needs more authority, or genuinely must stay with you.",
          "Hand over the first two categories, then repeat the cycle next month.",
        ],
      },
      {
        type: "cta",
        text: "See pricing and get started",
        href: "/#pricing",
      },
    ],
  },
];

/** Newest first. */
export const sortedPosts = [...posts].sort((a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0
);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
