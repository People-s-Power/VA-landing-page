/**
 * Single source of truth for every outbound link and shared business detail on
 * the site. If a URL changes, change it here — never inline it in a component.
 */

/** Every "Book…" / strategy-session CTA on the site points here. */
export const CALENDLY_STRATEGY_SESSION =
  "https://calendly.com/hireexperthub/dss";

/** Same booking page, with the yellow brand colour applied to the inline widget. */
export const CALENDLY_EMBED_URL = `${CALENDLY_STRATEGY_SESSION}?primary_color=fdc332`;

/** eBook download (hosted on the parent site). */
export const EBOOK_URL = "https://www.experthubllc.com/form/ebook";

/** Client signup flow. Signup is NOT a booking, so it does not use Calendly. */
export const SIGNUP_URL =
  "https://www.experthubllc.com/auth?mode=signup&createorg=true&VA=true";

/** Existing client login. */
export const LOGIN_URL = "https://www.experthubllc.com/auth?VA=true";

/** Professionals applying to be trained / listed. */
export const BECOME_PRO_URL =
  "https://project.experthubllc.com/professional/auth/signup";

export const COMPANY_NAME = "ExpertHub Inc.";
export const SITE_NAME = "HireExpertHub.com";
export const SITE_URL = "https://www.hireexperthub.com";

export const TAGLINE =
  "Connecting professionals through expert services, workspace, training, and events";

/** Dallas is the only office listed publicly — the Houston location was removed. */
export const DALLAS_ADDRESS = {
  label: "Dallas Office",
  street: "910 S. Pearl Expy",
  city: "Dallas",
  state: "TX",
  zip: "75201",
  country: "USA",
  phone: "214-432-3113",
  phoneHref: "tel:2144323113",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=910+S.+Pearl+Expy,+Dallas,+TX+75201,+USA",
} as const;

/** Date shown on the legal pages. Update when the copy materially changes. */
export const LEGAL_LAST_UPDATED = "October 13, 2026";
