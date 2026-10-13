import React, { useEffect, useRef, useState } from "react";
import { CALENDLY_EMBED_URL, CALENDLY_STRATEGY_SESSION } from "~/lib/links";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Loads Calendly's widget.js exactly once, however many embeds are on the page
 * and however many times the user navigates between routes.
 */
let scriptPromise: Promise<void> | null = null;

function loadCalendlyScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );

    if (existing) {
      if (window.Calendly) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Calendly widget failed to load"))
      );
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly widget failed to load"));
    document.head.appendChild(script);
  }).catch((error) => {
    // Don't cache the failure — a later mount can retry.
    scriptPromise = null;
    throw error;
  });

  return scriptPromise;
}

interface CalendlyEmbedProps {
  /** Override the default strategy-session booking URL. */
  url?: string;
  /** Widget height. Calendly recommends at least 700px for the month view. */
  height?: number;
  className?: string;
}

/**
 * Renders the Calendly inline scheduling widget.
 *
 * Two subtleties this handles that the copy-paste snippet doesn't:
 *
 * 1. The element MUST carry `data-url`. Calendly's widget.js auto-initialises
 *    any `.calendly-inline-widget` it finds when it loads, and if the element
 *    has no `data-url` it marks the element processed and renders nothing —
 *    leaving a permanently blank calendar.
 *
 * 2. Auto-initialisation only happens once, at script load. Navigating
 *    client-side into a page containing the widget afterwards would leave it
 *    blank, so we initialise explicitly — but only if Calendly hasn't already
 *    done so. Calling `initInlineWidget` on an already-initialised element, or
 *    clearing the element's contents, destroys the calendar.
 */
const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url = CALENDLY_EMBED_URL,
  height = 700,
  className = "",
}) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "failed">(
    "loading"
  );
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let timer: number | undefined;

    const markReady = () => {
      if (cancelled) return;
      window.clearTimeout(timer);
      setStatus("ready");
      setShowFallback(false);
    };

    // Calendly injects an <iframe> once the widget is live; that's our signal.
    const observer = new MutationObserver(() => {
      if (host.querySelector("iframe")) markReady();
    });
    observer.observe(host, { childList: true, subtree: true });
    if (host.querySelector("iframe")) markReady();

    loadCalendlyScript()
      .then(() => {
        if (cancelled || !window.Calendly || !hostRef.current) return;

        if (!host.hasAttribute("data-processed")) {
          window.Calendly.initInlineWidget({ url, parentElement: host });
          host.setAttribute("data-processed", "true");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("failed");
        return;
      })
      .finally(() => {
        if (cancelled) return;
        // If the calendar still hasn't appeared (blocked, slow, or Calendly is
        // having a bad day), offer the direct link — without removing the
        // widget, in case it's simply still loading.
        timer = window.setTimeout(() => {
          if (!cancelled && !host.querySelector("iframe")) setShowFallback(true);
        }, 8000);
      });

    return () => {
      cancelled = true;
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [url]);

  if (status === "failed") {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white p-8 text-center ${className}`}
      >
        <p className="text-gray-600">
          Our scheduling calendar couldn&apos;t load — this is usually a browser
          extension blocking it.
        </p>
        <a
          href={CALENDLY_STRATEGY_SESSION}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:brightness-90"
        >
          Open the scheduling page
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      {/*
        Calendly's snippet hard-codes `min-width: 320px`. On a 360px phone the
        pricing card leaves only ~296px of content width, so that min-width
        overflows and gets clipped by the section's `overflow-hidden`. Allow it
        to shrink below `sm` and keep Calendly's recommended 320px above that.
        `data-url` is required for Calendly's auto-init — see the note above.
      */}
      <div
        ref={hostRef}
        className="calendly-inline-widget w-full min-w-0 sm:min-w-[320px]"
        data-url={url}
        style={{ height, position: "relative" }}
      />
      {status === "loading" && !showFallback && (
        <p className="mt-2 text-center text-sm text-gray-500">
          Loading available times…
        </p>
      )}
      {showFallback && (
        <p className="mt-3 text-center text-sm text-gray-600">
          Not seeing the calendar?{" "}
          <a
            href={CALENDLY_STRATEGY_SESSION}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline"
          >
            Open the scheduling page
          </a>
          .
        </p>
      )}
    </div>
  );
};

export default CalendlyEmbed;
