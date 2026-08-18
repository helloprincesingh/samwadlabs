import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  Phone,
  Play,
  Rocket,
  Search,
  Sparkles,
  Target,
  UserCheck,
  Workflow,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const solutions = [
  {
    icon: Target,
    title: "Lead Qualification",
    description:
      "Automatically talk to new leads, understand their requirements and identify high-intent prospects.",
    points: [
      "Ask qualifying questions",
      "Understand customer intent",
      "Score and categorize leads",
      "Trigger follow-ups",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Let AI handle repetitive customer conversations while your team focuses on complex problems.",
    points: [
      "Answer common questions",
      "Understand customer issues",
      "Provide guided assistance",
      "Escalate when required",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description:
      "Turn conversations into scheduled appointments without requiring your team to manually coordinate every call.",
    points: [
      "Ask for preferred timings",
      "Confirm requirements",
      "Handle booking workflows",
      "Send follow-up information",
    ],
  },
  {
    icon: Rocket,
    title: "Sales & Follow-ups",
    description:
      "Automatically reconnect with prospects and customers at the right stage of the sales journey.",
    points: [
      "Follow up with prospects",
      "Handle objections",
      "Share relevant information",
      "Capture next actions",
    ],
  },
];

const workflow = [
  {
    number: "01",
    icon: Phone,
    title: "AI starts the conversation",
    text: "Your agent reaches the customer using the workflow you define.",
  },
  {
    number: "02",
    icon: Search,
    title: "Understands the intent",
    text: "The conversation adapts according to what the customer says.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Follows your workflow",
    text: "The agent follows business rules and takes the appropriate action.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Delivers the outcome",
    text: "The conversation becomes a structured business result.",
  },
];

function Solutions() {
  return (
    <div className="min-h-screen bg-[#030308] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[160px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/10 bg-fuchsia-400/[0.04] px-4 py-2 text-xs text-fuchsia-300">
              <Sparkles size={14} />
              AI solutions for real businesses
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

              Put AI to work

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                where conversations happen.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              From qualifying leads to supporting customers, Samvad AI
              helps businesses automate conversations and turn them into
              measurable outcomes.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="/contact"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.03]"
              >
                Explore Solutions

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
                See How It Works
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Problem / Solution */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                The problem
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Your team shouldn't have to
                <br />
                handle every conversation.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                Repetitive calls, follow-ups, qualification questions and
                scheduling tasks consume valuable time. Samvad AI can
                automate these conversations while keeping your team in
                control.
              </p>

            </div>

            <div className="grid gap-3">

              {[
                "Missed calls and delayed follow-ups",
                "Repetitive customer questions",
                "Manual lead qualification",
                "Time-consuming appointment coordination",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-5"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-400/[0.06]">

                    <span className="h-2 w-2 rounded-full bg-red-400/70" />

                  </div>

                  <span className="text-sm text-white/50">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Solutions */}
      <section className="border-t border-white/5 bg-[#030308] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Solutions
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              One voice platform.
              <br />

              <span className="text-white/35">
                Multiple business outcomes.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {solutions.map((solution, index) => {

              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-white/8 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/15 hover:bg-white/[0.035] sm:p-8"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10">

                      <Icon
                        size={21}
                        className="text-cyan-300"
                      />

                    </div>

                    <span className="text-[10px] text-white/15">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {solution.description}
                  </p>

                  <div className="mt-7 space-y-3">

                    {solution.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-cyan-400/70"
                        />

                        <span className="text-xs text-white/40">
                          {point}
                        </span>

                      </div>
                    ))}

                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs text-white/25 transition group-hover:text-cyan-300">

                    Explore solution

                    <ArrowRight
                      size={13}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Workflow */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] px-4 py-2 text-xs text-blue-300">
              <Workflow size={14} />
              Conversation workflow
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Every conversation has
              <br />
              a purpose.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/35 sm:text-base">
              Define the goal. Let the AI handle the conversation.
              Capture the result.
            </p>

          </div>

          <div className="relative mt-16 grid gap-5 md:grid-cols-4">

            <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-fuchsia-500/20 md:block" />

            {workflow.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >

                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#05050a]">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10">

                      <Icon
                        size={19}
                        className="text-cyan-300"
                      />

                    </div>

                  </div>

                  <span className="mt-6 block text-[10px] font-semibold text-cyan-300/70">
                    {item.number}
                  </span>

                  <h3 className="mt-2 text-sm font-semibold">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[220px] text-xs leading-6 text-white/30">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="border-t border-white/5 bg-[#030308] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 lg:grid-cols-3">

            {[
              {
                icon: Zap,
                title: "Automate repetitive work",
                text: "Let AI handle high-volume conversations so your team can focus on work that actually needs people.",
              },
              {
                icon: UserCheck,
                title: "Keep humans in control",
                text: "Design clear rules for when your AI should handle a conversation and when it should involve your team.",
              },
              {
                icon: Target,
                title: "Focus on outcomes",
                text: "Build conversations around business goals instead of simply answering calls.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="rounded-3xl border border-white/8 bg-white/[0.025] p-7"
                >

                  <Icon
                    size={20}
                    className="text-fuchsia-300"
                  />

                  <h3 className="mt-7 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/35">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#05050a] px-6 py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.07] via-blue-500/[0.07] to-fuchsia-500/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <Sparkles
            size={22}
            className="mx-auto text-cyan-300"
          />

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Find the right
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              conversation to automate.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
            Start with one workflow. Turn it into an AI-powered
            conversation system that scales with your business.
          </p>

          <a
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-7 py-4 text-sm font-semibold transition hover:scale-[1.03]"
          >
            Talk to our team

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

export default Solutions;