import React from "react";
import { Link } from "react-router";
import {
  COMPANY_NAME,
  CONTACT_URL,
  DALLAS_ADDRESS,
  EBOOK_URL,
  TAGLINE,
} from "~/lib/links";
import { sortedPosts } from "~/lib/blog";

const FOOTER_LINK_CLASS = "hover:underline";

const FooterNav = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="p-4 text-sm py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">
          <div className="flex flex-col items-start">
            <div className="mb-3 flex gap-2">
              <img
                src="https://www.experthubllc.com/_next/image?url=%2Fimages%2Fnew-home%2Flogo.png&w=48&q=75"
                alt=""
              />
              <span className="text-2xl font-bold">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm mb-6">{TAGLINE}</p>
            <div className="space-y-6 text-gray-400">
              <div>
                <h4 className="text-white font-semibold mb-1">
                  {DALLAS_ADDRESS.label}
                </h4>
                <a
                  href={DALLAS_ADDRESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  {DALLAS_ADDRESS.street}, {DALLAS_ADDRESS.city},{" "}
                  <br /> {DALLAS_ADDRESS.state} {DALLAS_ADDRESS.zip},{" "}
                  {DALLAS_ADDRESS.country}
                </a>
                <p className="mt-1">
                  Phone:{" "}
                  <a
                    href={DALLAS_ADDRESS.phoneHref}
                    className="hover:text-white transition-colors"
                  >
                    {DALLAS_ADDRESS.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className={FOOTER_LINK_CLASS}>
                  About Us
                </Link>
              </li>
              {/* Points at the same in-page section as "Services" in the header. */}
              <li>
                <Link to="/#learn-more" className={FOOTER_LINK_CLASS}>
                  Services
                </Link>
              </li>
              <li>
                {CONTACT_URL.startsWith("http") ? (
                  <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={FOOTER_LINK_CLASS}
                  >
                    Contact
                  </a>
                ) : (
                  <Link to={CONTACT_URL} className={FOOTER_LINK_CLASS}>
                    Contact
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href={EBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={FOOTER_LINK_CLASS}
                >
                  Download Our eBook
                </a>
              </li>
              <li>
                <Link to="/blog" className={FOOTER_LINK_CLASS}>
                  Blog
                </Link>
              </li>
              {sortedPosts.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className={FOOTER_LINK_CLASS}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/privacy" className={FOOTER_LINK_CLASS}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className={FOOTER_LINK_CLASS}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy#cookies" className={FOOTER_LINK_CLASS}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-3">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} {COMPANY_NAME} All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
