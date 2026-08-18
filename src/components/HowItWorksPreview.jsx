import { motion } from "framer-motion";
import {
  ArrowDown,
  CheckCircle2,
  MessageSquareText,
  PhoneCall,
  Sparkles,
  Target,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Give AI an instruction",
    description:
      "Tell Samvad AI what you want done in plain language. No complicated workflows required.",
    example: '"Call every new lead and qualify their interest."',
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "AI handles the conversation",
    description:
      "Your AI agent calls the customer, speaks naturally, listens to responses and adapts in real time.",
    example: '"Hi Rahul, I’m calling from SamvadLabs..."',
  },
  {
    number: "03",
    icon: Target,
    title: "Get the outcome",
    description:
      "Once the conversation is complete, Samvad AI gives you the result, intent and next action.",
    example: "Interested → Follow-up required",
  },
];

function HowItWorksPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#05050a] py-28">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] px-4 py-2 text-xs font-medium text-blue-300">
            <Sparkles size={14} />
            How it works
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            From instruction
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}to outcome.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Samvad AI takes care of the conversation so your team can focus
            on what actually matters.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20">

          {/* Connector line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-14 hidden h-px bg-gradient-to-r from-cyan-400/20 via-blue-500/30 to-fuchsia-500/20 lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="group relative"
                >

                  {/* Number */}
                  <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-[#08080e] shadow-2xl transition duration-500 group-hover:border-cyan-400/30">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 via-blue-500/15 to-fuchsia-500/15">

                      <Icon
                        size={28}
                        className="text-cyan-300 transition duration-500 group-hover:scale-110"
                      />

                    </div>

                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#101018] text-[10px] font-bold text-white/50">
                      {step.number}
                    </span>

                  </div>

                  {/* Card */}
                  <div className="mt-8 rounded-3xl border border-white/8 bg-white/[0.025] p-7 transition duration-500 group-hover:-translate-y-1 group-hover:border-white/15 group-hover:bg-white/[0.04]">

                    <h3 className="text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/45">
                      {step.description}
                    </p>

                    {/* Example */}
                    <div className="mt-6 rounded-2xl border border-white/8 bg-black/30 p-4">

                      <div className="flex items-start gap-3">

                        {index === 2 ? (
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />
                        ) : (
                          <Sparkles
                            size={17}
                            className="mt-0.5 shrink-0 text-cyan-400"
                          />
                        )}

                        <p className="text-xs leading-6 text-white/55">
                          {step.example}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-5 lg:hidden">
                      <ArrowDown
                        size={20}
                        className="text-white/15"
                      />
                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-white/30">
            No complicated workflows. Just tell your AI what needs to be done.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default HowItWorksPreview;