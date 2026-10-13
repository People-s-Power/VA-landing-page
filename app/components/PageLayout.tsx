import React from "react";
import HeaderNav from "~/components/HeaderNav";
import FooterNav from "~/components/FooterNav";

/**
 * Shared chrome for every page other than the home page.
 *
 * HeaderNav is `fixed` and transparent until the user scrolls, so inner pages
 * need their own top clearance — the home page's hero supplies this itself.
 */
const PageLayout: React.FC<{
  children: React.ReactNode;
  /** Extra classes for the content wrapper. */
  className?: string;
}> = ({ children, className = "" }) => (
  <div className="min-h-screen flex flex-col">
    <HeaderNav />
    <main className={`flex-1 pt-28 md:pt-32 ${className}`}>{children}</main>
    <FooterNav />
  </div>
);

export default PageLayout;
