import type { Route } from "./+types/contact";
import { useEffect } from "react";
import { CRM_ENDPOINT } from "~/lib/crm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | HireExpertHub" },
    {
      name: "description",
      content:
        "Talk to HireExpertHub about a full-time Trained Professional for your business.",
    },
  ];
}

export function clientLoader({}: Route.ClientLoaderArgs) {
  if (typeof window !== "undefined" && CRM_ENDPOINT) {
    window.location.replace(CRM_ENDPOINT);
  }
  return null;
}

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined" && CRM_ENDPOINT) {
      window.location.replace(CRM_ENDPOINT);
    }
  }, []);

  return null;
}

