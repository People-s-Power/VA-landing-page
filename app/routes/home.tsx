import HeaderNav from "~/components/HeaderNav";
import type { Route } from "./+types/home";
import FooterNav from "~/components/FooterNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/Accordion";
import ReviewSlider from "~/components/ReviewSlider";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ExpertHub Virtual Assistant" },
    { name: "description", content: "Welcome to ExpertHub Virtual Assistant!" },
  ];
}

const tasks = [
  {
    title: "Admin Support",
    body: "Inbox management, scheduling, and data entry",
  },
  {
    title: "Social Media Management",
    body: "Content creation, scheduling, and audience engagement",
  },
  {
    title: "Customer Support",
    body: "Inbox & chat response, customer follow-up",
  },
  {
    title: "Research & Reports",
    body: "Market & competitor insights to keep you ahead",
  },
  {
    title: "Personal Assistance",
    body: "Travel bookings, reminders, and lifestyle management",
  },
  {
    title: "Website Management",
    body: "Website design, development, and maintenance",
  },
];

const faqs = [
  {
    question: "Who is a Virtual Assistant (VA)?",
    answer:
      "A Virtual Assistant is a professional who provides remote support with tasks like admin, social media, research, and customer service—saving you time and energy.",
  },
  {
    question: "How does Experthub work?",
    answer:
      "We match you with a trained virtual assistant based on your business needs. You delegate tasks, and your VA handles them remotely.",
  },
  {
    question: "What tasks can I delegate to a Virtual Assistant?",
    answer:
      "You can delegate admin work, email management, calendar scheduling, data entry, social media management, customer service, research, and more.",
  },
  {
    question: "How do I know I’m getting the right VA for my needs?",
    answer:
      "We carefully assess your requirements and assign a VA with the right skills and experience for your tasks.",
  },
  {
    question: "How do I communicate with my VA?",
    answer:
      "Communication can be done through email, Slack, Zoom, WhatsApp, or any tool you prefer.",
  },
  {
    question: "How secure is my business information?",
    answer:
      "We take confidentiality seriously. All VAs sign NDAs (Non-Disclosure Agreements) and follow strict privacy guidelines.",
  },
  {
    question: "Do I need to train my VA?",
    answer:
      "Our VAs come pre-trained for general tasks. If you have specific processes, you can provide short onboarding to align them with your workflow.",
  },
  {
    question: "What time zones do your VAs work in?",
    answer: "Our VAs are flexible and can adjust to your preferred time zone.",
  },
  {
    question: "Can my VA handle multiple tasks at once?",
    answer:
      "Yes! Your VA can juggle different tasks, as long as they’re within the agreed scope and work hours.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with entrepreneurs, startups, coaches, consultants, e-commerce businesses, and busy professionals across industries.",
  },
  {
    question: "What’s the cost of hiring a VA?",
    answer:
      "Pricing depends on your package. We keep it affordable and tailored to your needs.",
  },
  {
    question: "What makes your agency different from others?",
    answer:
      "We provide highly vetted, professional VAs, personalized matching, affordable plans, and ongoing support to ensure smooth collaboration.",
  },
  {
    question: "Can my VA work with my existing tools and software?",
    answer:
      "Absolutely. Our VAs are trained to adapt quickly to your preferred platforms (Trello, Asana, Canva, CRM tools, etc.).",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply choose your package, and we’ll match you with your VA within 48–72 hours after booking.",
  },
];

const assistantServices = [
  {
    title: "Real Estate Assistant",
    value: "All-round help for your property listings",
  },
  {
    title: "Healthcare Assistant",
    value:
      "Helps co-ordinate appointments with patients, data-entry and insurance filing",
  },
  {
    title: "Personal Assistant",
    value: "Manages your calendar both at work and outside of it",
  },
  {
    title: "Executive Assistant",
    value:
      "Discover expert-tier talent to help with presentations, proposals and more",
  },
  {
    title: "Digi. Marketing Assistant",
    value: "Discover experts in ppc ads, email marketing and growth",
  },
  {
    title: "Sales Development Rep",
    value: "Engages with prospects, grows your sales pipeline and drives sales",
  },
  {
    title: "Bookkeeping Assistant",
    value: "Tracks expenses, maintain your books and reconcile statements",
  },
  {
    title: "Customer Service Rep",
    value:
      "Delivers responsive and professional customer support for general queries, complaints and feedbacks",
  },
  {
    title: "Virtual Assistant for lawyers",
    value:
      "Provides expert assistance for legal research, document preparation, and case management",
  },
  {
    title: "Website Management",
    value: "Handles website updates, content management, and SEO optimization",
  },
  {
    title: "Social Media Management",
    value:
      "Creates and schedules posts, engages with followers, and analyzes performance metrics.",
  },
  {
    title: "General Virtual Assistant",
    value: "Provides administrative support across various tasks and projects.",
  },
];

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main>
        <section className="bg-primary/10 animate-fade-in">
          <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-4">
            <div className="md:my-auto mt-20">
              {/* <p className="mb-4">FULLY MANAGED</p> */}
              <h2 className="md:text-5xl text-4xl leading-tight font-bold text-gray-800 mb-4">
                Work Smarter, Grow
                <br />
                Faster with ExpertHub
                <br />
                <span className="text-primary">Virtual Assistants</span>
              </h2>
              <p className="text-gray-600 text-sm">
                Reliable virtual assistant support for entrepreneurs, small
                businesses, and busy professionals so you can focus on growth.
              </p>
              <div className="flex gap-3 mt-4">
                <Link
                  to={
                    "https://www.experthubllc.com/?mode=signup&createorg=true"
                  }
                >
                  <button className="md:px-8 px-4 py-2 bg-primary text-white rounded-full">
                    Hire Now
                  </button>
                </Link>
                <Link to={"#learn-more"}>
                  <button className="md:px-8 px-4 py-2 border border-primary text-primary rounded-full">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src="/images/hero.png" alt="" />
            </div>
          </div>
        </section>

        <section id="learn-more" className="py-16 animate-fade-in delay-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What we do
              </h2>
              <p className="text-gray-600 mb-3">
                ExpertHub virtual assistance is your right-hand man for
                everything that matters.
              </p>

              <p className="text-gray-600 mb-8">
                We handle the daily tasks that drain your time so that you can
                focus on strategy, clients, and growth. Our services include:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasks.map((task, index) => (
                <div key={index} className="p-4 flex gap-3">
                  {/* Use appropriate icons for each task */}
                  {index === 0 && (
                    <svg
                      className="md:w-16 w-10 md:h-16 h-10 my-auto text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="3"
                        y="6"
                        width="18"
                        height="13"
                        rx="2"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <path
                        d="M16 2v4M8 2v4"
                        strokeWidth="2"
                        stroke="currentColor"
                      />
                      <path
                        d="M3 10h18"
                        strokeWidth="2"
                        stroke="currentColor"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="md:w-16 w-10 md:h-16 h-10 my-auto text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="4"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <path
                        d="M8 12h8M8 16h8M8 8h8"
                        strokeWidth="2"
                        stroke="currentColor"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="md:w-16 w-10 md:h-16 h-10 my-auto text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <path
                        d="M8 12h8M12 8v8"
                        strokeWidth="2"
                        stroke="currentColor"
                      />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg
                      className="md:w-16 w-10 md:h-16 h-10 my-auto text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M3 6h18M3 12h18M3 18h18"
                        strokeWidth="2"
                        stroke="currentColor"
                      />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg
                      className="md:w-16 w-10 md:h-16 h-10 my-auto text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="2.5"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  )}

                  {index === 5 && (
                    <svg
                      className="md:w-16 w-10 md:h-16 h-10 my-auto text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <rect
                        x="7"
                        y="9"
                        width="10"
                        height="2"
                        rx="1"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <rect
                        x="7"
                        y="13"
                        width="6"
                        height="2"
                        rx="1"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <circle cx="17" cy="14" r="1" fill="currentColor" />
                    </svg>
                  )}
                  <div>
                    <h3 className="font-bold text-lg">{task.title}</h3>
                    <p className="text-gray-600">{task.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto animate-fade-in delay-200">
          <div className="max-w-4xl px-4 mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Why Work With ExpertHub?
            </h2>
            <p className="text-gray-600 mb-4">
              Your Time Is Priceless — Let’s Help You Protect It. Experthub
              virtual assistants are selected based on your unique requirements,
              so no more drowning in admin tasks, endless emails, and
              overwhelming social media. We take care of the details so you can
              do what truly matters—grow and scale your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-8">
            <div>
              <img src="/images/img-1.png" alt="" />
            </div>
            <div className="my-auto">
              {/* <h2 className="text-3xl font-bold">
                Enterprise-Grade Talent Services Tailored for Founders at Every
                Stage
              </h2>
              <p className="my-8">
                Wing offers exceptional talents and enterprise-level resources,
                security and flexibility to businesses of all sizes.
              </p> */}

              <Accordion type="single">
                {[
                  "Professional, reliable, and always on time",
                  "Flexible & affordable plans that grow with your business",
                  "Customized solutions designed around your unique needs",
                  "A trained team working in a professional, distraction-free environment",
                  "Ongoing training to ensure our virtual assistants stay top-notch",
                ].map((feature, i) => (
                  <AccordionItem
                    key={i}
                    value={`feature-${i + 1}`}
                    className="border-b border-gray-500 mb-4 px-3"
                  >
                    <AccordionTrigger className="font-bold [&>svg]:hidden">
                      <div className="flex justify-start gap-2">
                        <span className="text-primary">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            stroke="currentColor"
                          >
                            <path
                              d="M7.629 15.314a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 1 1 1.414-1.414l3.536 3.536 7.778-7.778a1 1 0 0 1 1.414 1.414l-8.485 8.485z"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {feature}
                      </div>
                    </AccordionTrigger>
                    {/* <AccordionContent>
                      {feature}
                    </AccordionContent> */}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-8 my-10">
            <div className="my-auto">
              <h2 className="text-3xl font-bold">
                We Meet Challenging Talent Needs and Ensure Ongoing Success
              </h2>
              <p className="my-8">
                Our resources and systems are designed to deliver tailored
                solutions that go beyond the basics, empowering your business to
                thrive.
              </p>

              <Accordion type="single" collapsible>
                {[
                  {
                    title: "Customer Success Manager",
                    body: "Benefit from a dedicated Client Success Manager (CSM) who will be your single point of contact for all your needs. Your CSM will ensure smooth onboarding, provide ongoing support, and proactively address any concerns to maximize the value of our services.",
                  },
                  {
                    title: "Free Replacements",
                    body: "We can work with you to analyze your requirements, and can launch new recruitment processes/ roles exclusively tailored to your needs, in your budget.",
                  },
                  {
                    title: "Quality Control & Supervision",
                    body: `Your assistant isn't alone. They're supervised by both Wing's Team Captains and Supervisors. 

                    Additionally, you can opt-in to use sophisticated artificial intelligence technology that flags potential issues ahead of time to our supervisory team, who work to proactively resolve issues.

                    If quality is your goal, Wing remains the best choice in this industry. `,
                  },
                  {
                    title: "Custom Roles",
                    body: "We can work with you to analyze your requirements, and can launch new recruitment processes/ roles exclusively tailored to your needs, in your budget.",
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i + 1}`}
                    className="border-b border-gray-500 mb-4 px-3"
                  >
                    <AccordionTrigger className="font-bold">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>{item.body}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div>
              <img src="/images/img-2.png" alt="" />
            </div>
          </div>
        </section>

        <section className="my-10 mx-4 max-w-7xl md:mx-auto bg-primary/20 rounded-xl p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in delay-300">
          <div className="md:my-auto my-10">
            <h2 className="md:text-4xl text-3xl font-bold">
              Effortless Remote Work Management With ExpertHub
            </h2>
            <p className="my-8">
              Stop spending another day overwhelmed. Let ExpertHub Virtual
              Assistants lift the load so you can focus on what matters the
              most.{" "}
            </p>
            {/* <ul className="list-disc pl-5">
              <li>Screen recording</li>
              <li>Task tracking, KANBAN boards</li>
              <li>Chat</li>
              <li>File sharing</li>
              <li>Upskilling and training</li>
            </ul> */}
            <Link
              to={"https://www.experthubllc.com/?mode=signup&createorg=true"}
            >
              <button className="bg-transparent border border-black rounded-full px-8 text-black py-3 mt-4">
                Book Your Virtual Assistant Today
              </button>
            </Link>
          </div>
          <div>
            <img src="/images/img-2.png" alt="" />
          </div>
        </section>

        <section className="max-w-7xl mx-auto my-20 animate-fade-in delay-400">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Hundreds of Stellar Client Reviews
          </h2>
          <div className="md:m-auto m-4">
            <ReviewSlider />
          </div>
        </section>

        <section
          id="pricing"
          className="bg-primary/20 py-20 animate-fade-in delay-500"
        >
          <div className="max-w-4xl px-4 mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              General Virtual Assistant Pricing
            </h2>
            <p>
              A ExpertHub General Virtual Assistant (GVA) will take care of your
              administrative and personal work and help you streamline your
              day-to-day operations so you can focus on growing your business
              and achieving your goals.
            </p>
          </div>
          <div className="shadow-xl my-6 grid grid-cols-1 md:grid-cols-3 gap-5 bg-white rounded-2xl p-4 md:p-10 max-w-6xl md:mx-auto mx-4">
            <div className="p-4 lg:border-r border-r-gray-200">
              <h2 className="text-xl font-bold mb-4">Need help?</h2>
              <Link to={"https://www.experthubllc.com/home#contact"}>
                <div className="border flex gap-3 border-primary p-5 rounded-xl mb-4">
                  <span className="my-auto text-primary">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <path
                        d="M16 3v4M8 3v4"
                        strokeWidth="2"
                        stroke="currentColor"
                      />
                      <path d="M3 9h18" strokeWidth="2" stroke="currentColor" />
                    </svg>
                  </span>

                  <div>
                    <p className="font-medium">Book a meeting</p>
                    <p className="text-sm">Book anytime, today, or this week</p>
                  </div>
                </div>
              </Link>
              <Link to={"https://www.experthubllc.com/home#contact"}>
                <div className="border flex gap-3 border-primary p-5 rounded-xl mb-4">
                  <span className="my-auto text-primary">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                      <circle cx="8" cy="10" r="1" fill="currentColor" />
                      <circle cx="12" cy="10" r="1" fill="currentColor" />
                      <circle cx="16" cy="10" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm">
                      Available between 6 to 9 PM GMT weekdays
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 lg:border-r border-r-gray-200">
              <h2 className="text-xl font-bold">GVA Full-Time</h2>
              <p className="text-primary font-bold text-3xl my-4">$850/Month</p>
              <Link
                to={"https://www.experthubllc.com/?mode=signup&createorg=true"}
              >
                <button className="bg-primary text-white w-full rounded-full px-4 py-2">
                  Sign Up
                </button>
              </Link>

              <ul className="pl-0 space-y-3 mt-4">
                {[
                  "160 Hours per month",
                  "Dedicated Virtual Assistant",
                  "Free replacement",
                  "Customer Success Manager",
                  "Rigorous quality control and supervision",
                  "ExpertHub Workspace App",
                  "Your timezone",
                  "Any hours you want",
                  "Share with colleagues",
                  "Unlimited file sharing/storage",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-primary">
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
            <div className="p-4">
              <h2 className="text-xl font-bold">GVA Part-Time</h2>
              <p className="text-primary font-bold text-3xl my-4">$450/Month</p>
              <Link
                to={"https://www.experthubllc.com/?mode=signup&createorg=true"}
              >
                <button className="bg-primary text-white w-full rounded-full px-4 py-2">
                  Sign Up
                </button>
              </Link>

              <ul className="pl-0 space-y-3 mt-4">
                {[
                  "80 Hours per month",
                  "Dedicated Virtual Assistant",
                  "Free replacement",
                  "Customer Success Manager",
                  "Rigorous quality control and supervision",
                  "ExpertHub Workspace App",
                  "Your timezone",
                  "Choose from designated slots",
                  "Sharing is limited",
                  "10 GB file sharing/storage limit",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-primary">
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
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto animate-fade-in delay-600">
          <div className="max-w-4xl mx-auto text-center mb-10 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              More Virtual Assistant Services
            </h2>
            <p className="mb-4">
              We offer 25+ distinct plans in sales, marketing, customer service,
              and other operational areas. We also have dedicated
              industry-focused services such as Real Estate Assistants,
              Healthcare Virtual Assistants and E-Commerce Virtual Assistants.
            </p>
            <p>Speak to an Expert and find the right fit for your business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {assistantServices.map((service, i) => (
              <div
                key={i}
                className="group [perspective:1000px] h-full mb-8"
                style={{ minHeight: "320px" }}
              >
                <div className="relative w-full h-full min-h-[320px] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute cursor-pointer inset-0 bg-primary/20 rounded-lg text-center flex flex-col justify-between [backface-visibility:hidden] h-full">
                    <img
                      src="https://wingassistant.com/wp-content/uploads/2025/01/03.png"
                      alt=""
                      className="mx-auto"
                    />
                    <div className="bg-primary rounded-b-lg p-4">
                      <h3 className="text-lg text-white font-semibold mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 rounded-lg bg-primary flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] h-full z-10">
                    <h3 className="text-lg text-white font-semibold">
                      {service.title}
                    </h3>

                    <p className="text-center text-white p-3">
                      {service.value}
                    </p>
                    <Link to={"https://www.experthubllc.com/home#contact"}>
                      <button className="bg-white text-primary font-bold px-6 py-2 rounded-full shadow hover:bg-primary hover:text-white transition">
                        Book a Call
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16 px-4 animate-fade-in delay-700">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Popular Questions:
          </h1>
          <Accordion
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            type="single"
            collapsible
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i + 1}`}
                className="border border-gray-500 mb-auto rounded-md px-3"
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <FooterNav />
    </>
  );
}
