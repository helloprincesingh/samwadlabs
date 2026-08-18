



import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Landmark,
  MessageSquare,
  Play,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Qualify property enquiries, answer questions, schedule visits and follow up with potential buyers.",
    tasks: [
      "Lead qualification",
      "Property enquiries",
      "Site visit scheduling",
      "Lead follow-ups",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Automate appointment conversations, reminders and basic patient communication.",
    tasks: [
      "Appointment booking",
      "Patient reminders",
      "Basic enquiries",
      "Follow-up calls",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Connect with students, answer admission questions and automate counselling follow-ups.",
    tasks: [
      "Admission enquiries",
      "Student counselling",
      "Course information",
      "Application follow-ups",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Handle order-related conversations, customer questions and post-purchase communication.",
    tasks: [
      "Order enquiries",
      "Customer support",
      "Delivery updates",
      "Feedback collection",
    ],
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    description:
      "Support customers with routine conversations and guide them through predefined workflows.",
    tasks: [
      "Customer assistance",
      "Product enquiries",
      "Lead qualification",
      "Follow-ups",
    ],
  },
  {
    icon: Store,
    title: "Retail",
    description:
      "Automate customer conversations across stores, products, enquiries and service workflows.",
    tasks: [
      "Product enquiries",
      "Customer support",
      "Feedback calls",
      "Promotional follow-ups",
    ],
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Keep customers informed and automate repetitive delivery and service conversations.",
    tasks: [
      "Delivery enquiries",
      "Status updates",
      "Customer calls",
      "Service follow-ups",
    ],
  },
  {
    icon: Users,
    title: "SaaS & Services",
    description:
      "Automate customer onboarding, qualification, support and account-related conversations.",
    tasks: [
      "Lead qualification",
      "Onboarding",
      "Customer support",
      "Renewal follow-ups",
    ],
  },
];

const conversationExamples = [
  {
    industry: "Real Estate",
    color: "cyan",
    user: "I am looking for a 2BHK apartment.",
    ai: "Sure. What's your preferred location and budget?",
  },
  {
    industry: "Education",
    color: "blue",
    user: "I want to know about your AI course.",
    ai: "Absolutely. I can help you with the course details and admission process.",
  },
  {
    industry: "Healthcare",
    color: "fuchsia",
    user: "I need an appointment for tomorrow.",
    ai: "I can help with that. What time would work best for you?",
  },
];

function Industries() {
  return (
    <div className="min-h-screen bg-[#030308] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.05] via-blue-500/[0.07] to-fuchsia-500/[0.05] blur-[160px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2 text-xs text-cyan-300">

              <Sparkles size={14} />

              Built for real-world conversations

            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

              AI conversations

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                for every industry.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">

              Build voice agents around the workflows your business
              already depends on — from sales and support to bookings,
              follow-ups and customer service.

            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="/contact"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.03]"
              >

                Build Your Agent

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />

              </a>

              <a
                href="/product"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
              >

                <Play size={15} />

                Explore Product

              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Industries */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Industries
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

              One platform.

              <br />

              <span className="text-white/35">
                Many possibilities.
              </span>

            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/35 sm:text-base">

              Start with the conversations that matter most to your
              business and create an AI workflow around them.

            </p>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {industries.map((industry, index) => {

              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="group rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/15 hover:bg-white/[0.04]"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10">

                      <Icon
                        size={19}
                        className="text-cyan-300"
                      />

                    </div>

                    <span className="text-[10px] text-white/15">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/35">
                    {industry.description}
                  </p>

                  <div className="mt-6 space-y-2.5">

                    {industry.tasks.map((task) => (
                      <div
                        key={task}
                        className="flex items-center gap-2.5"
                      >

                        <CheckCircle2
                          size={13}
                          className="shrink-0 text-cyan-400/60"
                        />

                        <span className="text-[11px] text-white/30">
                          {task}
                        </span>

                      </div>
                    ))}

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Conversation examples */}
      <section className="border-t border-white/5 bg-[#030308] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] px-4 py-2 text-xs text-blue-300">

              <MessageSquare size={14} />

              Real conversations

            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">

              The conversation changes.

              <br />

              <span className="text-white/35">
                The intelligence stays.
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-white/35">

              Your AI agent adapts its conversation to the context
              instead of forcing every customer through the same script.

            </p>

          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">

            {conversationExamples.map((example, index) => (
              <motion.div
                key={example.industry}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/8 bg-white/[0.025] p-6"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-semibold">
                    {example.industry}
                  </span>

                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    AI active

                  </div>

                </div>

                {/* Customer */}
                <div className="mt-8 flex justify-end">

                  <div className="max-w-[85%] rounded-2xl rounded-br-md border border-white/8 bg-white/[0.04] px-4 py-3">

                    <p className="text-xs leading-6 text-white/50">
                      {example.user}
                    </p>

                  </div>

                </div>

                {/* AI */}
                <div className="mt-4 flex items-end gap-3">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">

                    <span className="text-[10px] font-black">
                      S
                    </span>

                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-cyan-400/10 bg-cyan-400/[0.035] px-4 py-3">

                    <p className="text-xs leading-6 text-white/50">
                      {example.ai}
                    </p>

                  </div>

                </div>

                {/* Wave */}
                <div className="mt-7 flex h-8 items-center gap-1">

                  {[10, 18, 13, 25, 16, 29, 20, 12, 22, 15].map(
                    (height, waveIndex) => (
                      <motion.span
                        key={waveIndex}
                        animate={{
                          height: [
                            `${height * 0.5}px`,
                            `${height}px`,
                            `${height * 0.6}px`,
                          ],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: waveIndex * 0.05,
                        }}
                        className="w-1 rounded-full bg-gradient-to-t from-cyan-400 via-blue-500 to-fuchsia-500"
                      />
                    )
                  )}

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Samvad */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
                Built for business
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

                Don't just automate calls.

                <br />

                <span className="text-white/35">
                  Automate outcomes.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">

                Samvad AI is designed around business workflows. Your
                agent doesn't simply talk — it follows instructions,
                understands context and moves the conversation toward
                a goal.

              </p>

              <a
                href="/product"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
              >

                Explore the platform

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />

              </a>

            </div>

            <div className="grid gap-4">

              {[
                {
                  icon: Zap,
                  title: "Fast conversations",
                  text: "Reduce waiting time and respond to customers when they are ready to talk.",
                },
                {
                  icon: MessageSquare,
                  title: "Context-aware responses",
                  text: "Build agents that can adapt their responses according to the conversation.",
                },
                {
                  icon: Users,
                  title: "Human handoff",
                  text: "Keep your team involved whenever a conversation needs human attention.",
                },
                {
                  icon: Workflow,
                  title: "Workflow automation",
                  text: "Connect conversations with the actions your business already performs.",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex gap-5 rounded-2xl border border-white/8 bg-white/[0.025] p-5"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/[0.05]">

                      <Icon
                        size={17}
                        className="text-cyan-300"
                      />

                    </div>

                    <div>

                      <h3 className="text-sm font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-white/30">
                        {item.text}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#030308] px-6 py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.07] via-blue-500/[0.07] to-fuchsia-500/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <Sparkles
            size={22}
            className="mx-auto text-cyan-300"
          />

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">

            Your industry has

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              conversations to automate.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">

            Start with one workflow and build an AI voice agent around
            the conversations that matter to your business.

          </p>

          <a
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-7 py-4 text-sm font-semibold transition hover:scale-[1.03]"
          >

            Build Your AI Agent

            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />

          </a>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Industries;