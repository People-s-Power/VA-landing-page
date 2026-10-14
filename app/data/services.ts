import {
  Home as HomeIcon,
  Stethoscope,
  Calendar,
  Briefcase,
  TrendingUp,
  PhoneCall,
  Headset,
  Scale,
  Globe,
  Share2,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

/**
 * Service catalogue.
 *
 * Kept here rather than inline in the home route so the "More Trained
 * Professional Services" grid and the contact form's "Service of interest"
 * dropdown can never drift apart. Add a service in one place and both update.
 *
 * `serviceOptions` — the plain titles — is what the contact form uses, and is
 * also the value submitted to the CRM as `serviceInterest`.
 */
export interface AssistantService {
  title: string;
  value: string;
  image: string;
  Icon: LucideIcon;
}

export const assistantServices: AssistantService[] = [
  {
    title: "General Trained Professional",
    value: "Provides administrative support across various tasks and projects.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800",
    Icon: UserCheck,
  },
  {
    title: "Social Media Management",
    value:
      "Creates and schedules posts, engages with followers, and analyzes performance metrics.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    Icon: Share2,
  },
  {
    title: "Executive Assistant",
    value:
      "Discover expert-tier talent to help with presentations, proposals and more",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    Icon: Briefcase,
  },
  {
    title: "Personal Assistant",
    value: "Manages your calendar both at work and outside of it",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    Icon: Calendar,
  },
  {
    title: "Sales Development Rep",
    value: "Engages with prospects, grows your sales pipeline and drives sales",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    Icon: PhoneCall,
  },
  {
    title: "Customer Service Rep",
    value:
      "Delivers responsive and professional customer support for general queries, complaints and feedbacks",
    image:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800",
    Icon: Headset,
  },
  {
    title: "Digital Marketing Assistant",
    value: "Discover experts in ppc ads, email marketing and growth",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    Icon: TrendingUp,
  },
  {
    title: "Website Management",
    value: "Handles website updates, content management, and SEO optimization",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    Icon: Globe,
  },
  {
    title: "Real Estate Assistant",
    value: "All-round help for your property listings",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    Icon: HomeIcon,
  },
  {
    title: "Healthcare Assistant",
    value:
      "Helps co-ordinate appointments with patients, data-entry and insurance filing",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    Icon: Stethoscope,
  },
  {
    title: "Trained Professional for Lawyers",
    value:
      "Provides expert assistance for legal research, document preparation, and case management",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    Icon: Scale,
  },
];

/** Plain titles, used for the contact form's service dropdown. */
export const serviceOptions: string[] = assistantServices.map(
  (service) => service.title
);

