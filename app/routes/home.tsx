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
import CalendlyEmbed from "~/components/CalendlyEmbed";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Calendar, Headset, PhoneCall, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assistantServices } from "~/data/services";
import {
  CALENDLY_STRATEGY_SESSION,
  SIGNUP_URL,
} from "~/lib/links";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ExpertHub Trained Professionals" },
    { name: "description", content: "Welcome to ExpertHub Trained Professionals!" },
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
    question: "Who is a Trained Professional?",
    answer:
      "A trained professional is an expert who provides remote support with tasks like admin, social media, research, and customer service—saving you time and energy.",
  },
  {
    question: "How does Experthub work?",
    answer:
      "We match you with a trained professional based on your business needs. You delegate tasks, and your professional handles them remotely.",
  },
  {
    question: "What tasks can I delegate to a trained professional?",
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
      "Simply choose your package, and we’ll match you with your VA within a week after booking.",
  },
];

// WebP, not PNG: each started life as a 1024x1024 RGBA PNG (795KB-1.2MB, 3.7MB
// for the set). They're displayed at 450 CSS px at most, so 960px covers 2x
// displays. Re-encoded to WebP q82 the four together are ~384KB (-90%) and
// pixel-identical at this size. All four load eagerly because the carousel
// crossfades into them on a 4s timer — deferring them would show a blank frame.
const heroImages = [
  "/images/hero_1.webp",
  "/images/healthcare-va.webp",
  "/images/tech_support_va.webp",
  "/images/marketing_va.webp",
];

export default function Home() {
  const [showAllServices, setShowAllServices] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Transition every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Header/footer links such as "/#learn-more" and "/#pricing" are deep links
  // into this page. When they're clicked from another route the browser doesn't
  // scroll to the anchor, so do it manually once this page has mounted.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      // Wait a frame so layout is settled before measuring.
      requestAnimationFrame(() =>
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    }
  }, []);

  return (
    <>
      <HeaderNav />
      <main>
        <section className="bg-primary/10 overflow-hidden">
          <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 py-10 md:py-16 px-4">
            <motion.div 
              className="md:my-auto mt-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* <p className="mb-4">FULLY MANAGED</p> */}
              <h2 className="md:text-5xl text-4xl leading-tight font-bold text-gray-800 mb-4">
                Work Smarter, Grow
                <br />
                Faster with ExpertHub
                <br />
                <span className="text-primary">Trained Professionals</span>
              </h2>
              <p className="text-gray-600 text-sm">
                Reliable support from trained professionals for entrepreneurs, small
                businesses, and busy professionals so you can focus on growth.
              </p>
              <div className="flex gap-3 mt-4">
                <Link to={CALENDLY_STRATEGY_SESSION} target="_blank">
                  <button className="md:px-8 px-4 py-2 bg-primary text-white rounded-full">
                    Book Strategy Session
                  </button>
                </Link>
                <Link to={"#learn-more"}>
                  <button className="md:px-8 px-4 py-2 border border-primary text-primary rounded-full">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="relative w-full min-h-[400px] flex items-center justify-center py-10 mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Outer Anti-Clockwise Ring */}
              <div 
                className="absolute border-[3px] border-dashed border-primary/30 rounded-full w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px] animate-[spin_25s_linear_infinite_reverse]" 
              />
              
              {/* Inner Clockwise Ring (Narrow Gap) */}
              <div 
                className="absolute border-[2px] border-dashed border-orange-400/60 rounded-full w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[430px] lg:h-[430px] animate-[spin_15s_linear_infinite]" 
              />
              
              {/* Floating 2D Elements (Live Vector Icons) */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center z-20 pointer-events-none">
                {/* Element 1: Top Left - Phone */}
                <div className="absolute top-10 left-16 sm:left-28 lg:left-44 bg-white p-4 rounded-full shadow-xl border border-primary/10 animate-[bounce_4s_infinite]" style={{ animationDelay: '0ms' }}>
                  <PhoneCall className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                
                {/* Element 2: Top Right - Calendar */}
                <div className="absolute top-16 right-12 sm:right-24 lg:right-40 bg-white p-3 rounded-full shadow-lg border border-primary/10 animate-[bounce_4s_infinite]" style={{ animationDelay: '1000ms' }}>
                  <Calendar className="w-5 h-5 text-orange-400" strokeWidth={2} />
                </div>

                {/* Element 3: Bottom Left - Headset */}
                <div className="absolute bottom-10 left-6 sm:left-12 lg:left-24 bg-white p-3 rounded-full shadow-lg border border-primary/10 animate-[bounce_4s_infinite]" style={{ animationDelay: '2000ms' }}>
                  <Headset className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                
                {/* Element 4: Bottom Right - Trending */}
                <div className="absolute bottom-4 right-8 sm:right-16 lg:right-32 bg-white p-4 rounded-full shadow-xl border border-primary/10 animate-[bounce_4s_infinite]" style={{ animationDelay: '1500ms' }}>
                  <TrendingUp className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
              </div>
              
              {/* Soft glow behind character */}
              <div className="absolute bg-primary/10 blur-3xl rounded-full w-[250px] h-[250px]" />

              {/* Image Transition Sequence */}
              <div className="relative z-10 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px]">
                {heroImages.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Trained Professional ${idx + 1}`}
                    width={960}
                    height={960}
                    decoding="async"
                    /* The first frame is the LCP element — let it win the
                       bandwidth race against the three behind it. */
                    fetchPriority={idx === 0 ? "high" : "auto"}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                      idx === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="learn-more" className="py-16 overflow-hidden">
          <motion.div 
            className="max-w-7xl mx-auto px-4"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What we do
              </h2>
              <p className="text-gray-600 mb-3">
                ExpertHub's trained professionals are your right-hand resource for
                everything that matters.
              </p>

              <p className="text-gray-600">
                We handle the daily tasks that drain your time so that you can
                focus on strategy, clients, and growth. Our services include:
              </p>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasks.map((task, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 flex gap-3"
                  variants={fadeInUp}
                >
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
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="flex justify-center mt-12"
              variants={fadeInUp}
            >
              <Link
                to={CALENDLY_STRATEGY_SESSION}
                target="_blank"
              >
                <button className="md:px-10 px-6 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all duration-300">
                  Book Strategy Session
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <motion.section 
          className="py-20 max-w-7xl mx-auto overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="max-w-4xl px-4 mx-auto text-center mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Why Work With ExpertHub?
            </h2>
            <p className="text-gray-600 mb-4">
              Your Time Is Priceless — Let’s Help You Protect It. ExpertHub's
              trained professionals are selected based on your unique requirements,
              so no more drowning in admin tasks, endless emails, and
              overwhelming social media. We take care of the details so you can
              do what truly matters—grow and scale your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/img-1.png" alt="" />
            </motion.div>
            <motion.div className="my-auto" variants={fadeInUp}>
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
                  "Ongoing training to ensure our trained professionals stay top-notch",
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
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 md:p-8 my-10">
            <motion.div className="my-auto" variants={fadeInUp}>
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
                    body: `Your assistant isn't alone. They're supervised by both ExpertHub's Team Captains and Supervisors. 

                    Additionally, you can opt-in to use sophisticated artificial intelligence technology that flags potential issues ahead of time to our supervisory team, who work to proactively resolve issues.

                    If quality is your goal, ExpertHub remains the best choice in this industry. `,
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/img-2.png" alt="" />
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="my-10 mx-4 max-w-7xl md:mx-auto bg-primary/20 rounded-xl p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="md:my-auto my-10" variants={fadeInUp}>
            <h2 className="md:text-4xl text-3xl font-bold">
              Effortless Remote Work Management With ExpertHub
            </h2>
            <p className="my-8">
              Stop spending another day overwhelmed. Let ExpertHub Trained
              Professionals lift the load so you can focus on what matters the
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
              to={CALENDLY_STRATEGY_SESSION}
              target="_blank"
            >
              <button className="bg-transparent border border-black rounded-full px-8 text-black py-3 mt-4">
                Book Your Trained Professional Today
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/img-2.png" alt="" />
          </motion.div>
        </motion.section>

        <motion.section 
          className="max-w-7xl mx-auto my-20 overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Hundreds of Stellar Client Reviews
          </h2>
          <div className="md:m-auto m-4">
            <ReviewSlider />
          </div>
        </motion.section>

        <motion.section
          id="pricing"
          className="bg-primary/20 py-20 overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="max-w-4xl px-4 mx-auto text-center mb-10"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              General Trained Professional Pricing
            </h2>
            <p>
              An ExpertHub General Trained Professional (GTP) will take care of your
              administrative and personal work and help you streamline your
              day-to-day operations so you can focus on growing your business
              and achieving your goals.
            </p>
          </motion.div>
          {/*
            Three tracks rather than a plain 3-col grid: "Need help?" stays narrow,
            the plan keeps its width, and the calendar takes whatever is left. The
            calendar has a hard 320px min-width (Calendly's own requirement), so
            the three-up row only switches on at the `wide` breakpoint (1200px) —
            below that the calendar spans the full row rather than being squeezed.
          */}
          <div className="shadow-xl my-6 grid grid-cols-1 md:grid-cols-2 wide:grid-cols-[minmax(0,17rem)_minmax(0,22rem)_minmax(20rem,1fr)] gap-5 bg-white rounded-2xl p-4 md:p-10 max-w-[86rem] md:mx-auto mx-4">
            <motion.div className="p-4 wide:border-r border-r-gray-200" variants={fadeInUp}>
              <h2 className="text-xl font-bold mb-4">Need help?</h2>
              <Link to={CALENDLY_STRATEGY_SESSION} target="_blank">
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
                    <p className="text-sm">
                      Limited slots available — reserve yours today
                    </p>
                  </div>
                </div>
              </Link>
{/* <Link to={"https://www.experthubllc.com/home#contact"}>
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
              </Link> */}
            </motion.div>
            <motion.div className="p-4" variants={fadeInUp}>
              <h2 className="text-xl font-bold">GTP Full-Time</h2>
              <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 my-3">
                <span className="text-xs font-bold uppercase tracking-wide text-gray-800">
                  New Partner Pricing
                </span>
              </div>
              <p className="my-2 flex flex-col items-start">
                <span className="text-gray-400 font-semibold text-2xl line-through">
                  $850/Month
                </span>
                <span className="text-primary font-bold text-3xl">
                  $499/Month
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Save $351 every month on a dedicated full-time Trained
                Professional.
              </p>
              <Link to={SIGNUP_URL}>
                <button className="bg-primary text-white w-full rounded-full px-4 py-2">
                  Sign Up
                </button>
              </Link>

              <ul className="pl-0 space-y-3 mt-4">
                {[
                  "160 Hours per month",
                  "Dedicated Trained Professional",
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
            </motion.div>

            {/* Third column — the live calendar (replaces the retired Part-Time tier). */}
            <motion.div
              className="p-4 flex flex-col md:col-span-2 wide:col-span-1"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Pick a time that works for you
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Book a free strategy session and we&apos;ll scope the right
                Trained Professional for your business.
              </p>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                {/* Taller than Calendly's 700px default: in a single column the
                    widget stacks its header above the date picker, which needs
                    more vertical room before the time slots start scrolling. */}
                <CalendlyEmbed height={780} />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="py-20 max-w-7xl mx-auto overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-10 px-4"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              More Trained Professional Services
            </h2>
            <p className="mb-4 max-w-2xl mx-auto text-gray-600">
              We offer 25+ distinct plans across sales, marketing, and operations. Speak to an expert to find the perfect fit.
            </p>
          </motion.div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 p-4 max-w-6xl mx-auto mt-10"
          >
            <AnimatePresence mode="popLayout">
              {assistantServices.slice(0, showAllServices ? assistantServices.length : 6).map((service) => (
                <motion.div 
                  key={service.title} 
                  layout
                  className="flex gap-5 items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                <div className="bg-primary/5 border border-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md shrink-0">
                  {service.Icon ? <service.Icon className="w-7 h-7" strokeWidth={1.5} /> : null}
                </div>
                <div className="flex flex-col h-full bg-white transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {service.value}
                  </p>
                  <div className="mt-auto">
                    <Link to={CALENDLY_STRATEGY_SESSION} target="_blank" className="inline-flex items-center gap-1 font-semibold text-sm text-primary group-hover:text-primary/80 transition-colors group/btn">
                      Book a Call
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>

          {/* Show More / Show Less Button */}
          {assistantServices.length > 6 && (
            <motion.div 
              className="flex justify-center mt-12"
              variants={fadeInUp}
            >
              <button 
                onClick={() => setShowAllServices(!showAllServices)}
                className="bg-white text-gray-700 font-semibold px-8 py-3 rounded-full shadow border border-gray-200 hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {showAllServices ? "View Less" : `View All ${assistantServices.length} Services`}
              </button>
            </motion.div>
          )}
        </motion.section>

        <motion.section 
          className="max-w-7xl mx-auto py-16 px-4 overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
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
        </motion.section>
      </main>
      <FooterNav />
    </>
  );
}
