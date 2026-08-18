import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HelpCircle,
  Minus,
  Sparkles,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "For experimenting with AI voice automation.",
    monthly: 29,
    yearly: 24,
    popular: false,
    features: [
      "1 AI voice agent",
      "500 conversation minutes",
      "Basic voice configuration",
      "Conversation transcripts",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For teams ready to automate real workflows.",
    monthly: 99,
    yearly: 79,
    popular: true,
    features: [
      "5 AI voice agents",
      "2,500 conversation minutes",
      "Custom agent instructions",
      "Advanced analytics",
      "Workflow automation",
      "Integrations",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For businesses running voice automation at scale.",
    monthly: 249,
    yearly: 199,
    popular: false,
    features: [
      "Unlimited AI agents",
      "10,000+ conversation minutes",
      "Advanced workflows",
      "Custom integrations",
      "Team access",
      "Dedicated support",
      "Enterprise controls",
    ],
  },
];

const comparison = [
  ["AI voice agents", "1", "5", "Unlimited"],
  ["Conversation minutes", "500", "2,500", "10,000+"],
  ["Custom instructions", true, true, true],
  ["Conversation transcripts", true, true, true],
  ["Analytics", "Basic", "Advanced", "Advanced"],
  ["Workflow automation", false, true, true],
  ["Integrations", false, true, true],
  ["Team access", false, false, true],
  ["Priority support", false, true, true],
  ["Custom integrations", false, false, true],
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-[#030308] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-40">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[160px]" />

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

              Simple, scalable pricing

            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

              Start small.

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                Scale your conversations.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">

              Choose a plan that matches your AI voice automation
              requirements. Upgrade as your conversations grow.

            </p>

          </motion.div>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] p-1.5">

            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-xs font-medium transition ${
                !yearly
                  ? "bg-white text-black"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition ${
                yearly
                  ? "bg-white text-black"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Yearly

              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] text-emerald-400">
                Save 20%
              </span>

            </button>

          </div>

        </div>

      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-28">

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">

          {plans.map((plan, index) => {

            const price = yearly
              ? plan.yearly
              : plan.monthly;

            return (
              <motion.div
                key={plan.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`relative rounded-[28px] border p-7 sm:p-8 ${
                  plan.popular
                    ? "border-cyan-400/25 bg-gradient-to-b from-cyan-400/[0.06] to-white/[0.025] shadow-[0_0_70px_rgba(34,211,238,0.06)]"
                    : "border-white/8 bg-white/[0.025]"
                }`}
              >

                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">

                    <span className="rounded-full border border-cyan-400/20 bg-[#05050a] px-4 py-1.5 text-[10px] font-semibold text-cyan-300">
                      MOST POPULAR
                    </span>

                  </div>
                )}

                <div className="flex items-center justify-between">

                  <h2 className="text-xl font-semibold">
                    {plan.name}
                  </h2>

                  {plan.popular && (
                    <Zap
                      size={17}
                      className="text-cyan-300"
                    />
                  )}

                </div>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/35">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-1">

                  <span className="text-5xl font-bold tracking-tight">
                    ${price}
                  </span>

                  <span className="mb-2 text-xs text-white/25">
                    / month
                  </span>

                </div>

                {yearly && (
                  <p className="mt-2 text-[10px] text-emerald-400">
                    Billed annually
                  </p>
                )}

                <a
                  href="/contact"
                  className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 hover:scale-[1.02]"
                      : "border border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >

                  {plan.name === "Scale"
                    ? "Talk to Sales"
                    : "Get Started"}

                  <ArrowRight size={15} />

                </a>

                <div className="mt-8 border-t border-white/8 pt-7">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                    Includes
                  </p>

                  <div className="mt-5 space-y-3.5">

                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >

                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/[0.07]">

                          <Check
                            size={11}
                            className="text-cyan-300"
                          />

                        </div>

                        <span className="text-xs text-white/40">
                          {feature}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* Comparison */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Compare plans
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need
              <br />
              <span className="text-white/35">
                to choose confidently.
              </span>
            </h2>

          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/8">

            <div className="min-w-[700px]">

              {/* Header */}
              <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] border-b border-white/8 bg-white/[0.025]">

                <div className="px-5 py-5 text-xs font-medium text-white/40">
                  Features
                </div>

                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="px-5 py-5 text-center text-xs font-semibold"
                  >
                    {plan.name}
                  </div>
                ))}

              </div>

              {/* Rows */}
              {comparison.map((row, rowIndex) => (
                <div
                  key={row[0]}
                  className={`grid grid-cols-[1.5fr_repeat(3,1fr)] ${
                    rowIndex !== comparison.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }`}
                >

                  <div className="px-5 py-4 text-xs text-white/40">
                    {row[0]}
                  </div>

                  {row.slice(1).map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-5 py-4 text-xs"
                    >

                      {typeof value === "boolean" ? (
                        value ? (
                          <Check
                            size={15}
                            className="text-cyan-300"
                          />
                        ) : (
                          <Minus
                            size={15}
                            className="text-white/10"
                          />
                        )
                      ) : (
                        <span className="text-white/35">
                          {value}
                        </span>
                      )}

                    </div>
                  ))}

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FAQ note */}
      <section className="border-t border-white/5 bg-[#030308] px-6 py-24">

        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl border border-white/8 bg-white/[0.025] p-7 sm:p-9">

            <div className="flex gap-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/[0.05]">

                <HelpCircle
                  size={19}
                  className="text-cyan-300"
                />

              </div>

              <div>

                <h3 className="text-lg font-semibold">
                  Need a custom plan?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  If your business needs higher conversation volumes,
                  custom integrations, dedicated infrastructure or
                  specialized workflows, talk to our team about a
                  tailored setup.
                </p>

                <a
                  href="/contact"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
                >
                  Talk to sales

                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />

                </a>

              </div>

            </div>

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

            Ready to let AI

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              handle the conversation?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
            Start with one AI voice agent and scale when your
            conversations grow.
          </p>

          <a
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-7 py-4 text-sm font-semibold transition hover:scale-[1.03]"
          >
            Get Started

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

export default Pricing;