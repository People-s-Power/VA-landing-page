/**
 * Client reviews shown in the "Hundreds of Stellar Client Reviews" slider on the
 * home page.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │  ⚠️  THE ENTRIES BELOW ARE PLACEHOLDERS — REPLACE THEM BEFORE LAUNCH.    │
 * │                                                                          │
 * │  They are carried over from the original template and use stock portrait │
 * │  photos with invented names and companies. Publishing invented           │
 * │  testimonials is a credibility and legal risk, so swap in your real      │
 * │  reviews before this goes live.                                          │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * HOW TO ADD A REAL REVIEW
 *
 * 1. Put the client's photo in `public/images/reviews/` (square, ideally
 *    256×256 or larger — it renders in a 64px circle). Then reference it as
 *    "/images/reviews/their-file.jpg".
 *    If a client has no photo, use "" and the slider renders their initials
 *    instead of a broken image.
 *
 * 2. Add an object below. `name` and `org` must match the person and company
 *    the photo actually depicts — never pair a stock portrait with a real
 *    client's name, and never attribute a quote to someone who didn't give it.
 *
 * 3. `role` is their job title at `org`, e.g. "Founder", "Practice Manager".
 *
 * 4. `stars` is 1–5. `review` is the quote, kept to roughly 1–2 sentences so
 *    the cards stay the same height.
 */

export interface Review {
  /** Full name of the reviewer. */
  name: string;
  /** Their job title at the company. */
  role: string;
  /** Company name. Should match the reviewer's actual employer. */
  org: string;
  /** Path under /public, or "" to fall back to initials. */
  image: string;
  /** The quote itself. */
  review: string;
  /** Rating out of 5. */
  stars: number;
}

export const reviews: Review[] = [
  // PLACEHOLDER — awaiting a real review
  {
    name: "Jane Doe",
    role: "CEO",
    org: "Acme Corp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "ExpertHub VA has transformed my workflow. Highly recommended!",
    stars: 5,
  },
  // PLACEHOLDER — awaiting a real review
  {
    name: "John Smith",
    role: "Founder",
    org: "StartupX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Efficient, reliable, and professional. My business runs smoother than ever.",
    stars: 5,
  },
  // PLACEHOLDER — awaiting a real review
  {
    name: "Emily Chen",
    role: "COO",
    org: "TechFlow",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "The best trained professional service I've used. Great support team!",
    stars: 4,
  },
  // PLACEHOLDER — awaiting a real review
  {
    name: "Carlos Ruiz",
    role: "Operations Manager",
    org: "BizOps",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    review: "ExpertHub VA is a game changer for remote teams.",
    stars: 5,
  },
];
