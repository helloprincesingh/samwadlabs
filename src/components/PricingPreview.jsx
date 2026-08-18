import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Building2 } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started with AI voice.",
    monthly: 49,
    yearly: 39,
    popular: false,
    features: [
      "1 AI voice agent",
      "500 minutes / month",
      "Basic conversation flows",
      "Call transcripts",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For teams ready to automate conversations at scale.",
    monthly: 149,
    yearly: 119,
    popular: true,
    features: [
      "5 AI voice agents",
      "2,500 minutes / month",
      "Advanced conversation flows",
      "Real-time transcripts",
      "Call analytics & insights",
      "Integrations & API access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For businesses with larger voice automation requirements.",
    monthly: null,
    yearly: null,
    popular: false,
    features: [
      "Unlimited AI agents",
      "Custom call volume",
      "Custom voice experiences",
      "Advanced analytics",
      "Dedicated integrations",
      "Security & compliance options",
      "Dedicated support",
    ],
  },
];

function PricingPreview() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#05050a] py-28">
      
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2 text-xs font-medium text-cyan-300">
            <Sparkles size={14} />
            Simple pricing
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Start small.
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Scale when you’re ready.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Choose a plan that fits your conversation volume and grow your
            AI voice operation as your business grows.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">

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
              className={`rounded-full px-5 py-2 text-xs font-medium transition ${
                yearly
                  ? "bg-white text-black"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Yearly
            </button>

            <span className="mr-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] font-medium text-emerald-400">
              SAVE 20%
            </span>

          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">

          {plans.map((plan, index) => {
            const price = yearly ? plan.yearly : plan.monthly;

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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="relative"
              >

                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <span className="rounded-full border border-cyan-400/20 bg-[#071019] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-7 transition duration-500 ${
                    plan.popular
                      ? "border-cyan-400/25 bg-gradient-to-b from-cyan-400/[0.07] to-white/[0.025] shadow-[0_0_50px_rgba(34,211,238,0.06)]"
                      : "border-white/8 bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >

                  <div className="flex-1">

                    {/* Plan name */}
                    <div className="flex items-center justify-between">

                      <h3 className="text-xl font-semibold">
                        {plan.name}
                      </h3>

                      {plan.name === "Enterprise" && (
                        <Building2
                          size={18}
                          className="text-white/25"
                        />
                      )}

                    </div>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/40">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-7">

                      {price === null ? (
                        <div>
                          <p className="text-4xl font-bold">
                            Custom
                          </p>

                          <p className="mt-2 text-xs text-white/30">
                            Talk to our team
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-end gap-2">

                          <span className="text-4xl font-bold">
                            ${price}
                          </span>

                          <span className="pb-1 text-xs text-white/30">
                            /month
                          </span>

                        </div>
                      )}

                    </div>

                    {/* CTA */}
                    <button
                      className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                        plan.popular
                          ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-white hover:scale-[1.02]"
                          : "border border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/[0.08] hover:text-white"
                      }`}
                    >
                      {plan.name === "Enterprise"
                        ? "Talk to Sales"
                        : "Get Started"}

                      <ArrowRight size={16} />
                    </button>

                    {/* Divider */}
                    <div className="my-7 border-t border-white/8" />

                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/25">
                      Includes
                    </p>

                    {/* Features */}
                    <div className="mt-5 space-y-4">

                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >

                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                            <Check
                              size={10}
                              className="text-emerald-400"
                            />
                          </div>

                          <span className="text-xs leading-5 text-white/50">
                            {feature}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-white/25">
            All plans can be customized based on your call volume and
            business requirements.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default PricingPreview;