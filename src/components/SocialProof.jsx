import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageSquareQuote,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    value: "10x",
    label: "More conversations",
    description: "than a manual calling workflow",
  },
  {
    value: "24/7",
    label: "AI availability",
    description: "without adding another shift",
  },
  {
    value: "<1s",
    label: "Response time",
    description: "for real-time AI conversations",
  },
  {
    value: "100%",
    label: "Automated workflow",
    description: "from instruction to outcome",
  },
];

const testimonials = [
  {
    quote:
      "Instead of spending hours following up with leads, we can let the AI handle the first conversation and focus on the prospects that actually matter.",
    name: "Aarav Mehta",
    role: "Growth Lead",
    company: "Demo Company",
    initials: "AM",
  },
  {
    quote:
      "The biggest advantage is not just making calls. It is turning every conversation into structured information our team can actually use.",
    name: "Riya Sharma",
    role: "Operations Manager",
    company: "Demo Company",
    initials: "RS",
  },
  {
    quote:
      "We wanted something that could understand conversations instead of following a rigid script. That is exactly the direction Samvad AI is built for.",
    name: "Karan Verma",
    role: "Founder",
    company: "Demo Company",
    initials: "KV",
  },
];

function SocialProof() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#030308] py-28">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

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
            <TrendingUp size={14} />
            Built for scale
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let your team focus on
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              what matters.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Automate repetitive conversations and give your team more time
            for the work that actually needs people.
          </p>

        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] lg:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`p-6 sm:p-8 ${
                index !== stats.length - 1
                  ? "border-r border-white/8"
                  : ""
              } ${
                index < 2
                  ? "border-b lg:border-b-0"
                  : ""
              }`}
            >

              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-medium text-white/70">
                {stat.label}
              </p>

              <p className="mt-1 text-xs leading-5 text-white/30">
                {stat.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Testimonials heading */}
        <motion.div
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
            duration: 0.6,
          }}
          className="mt-24 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >

          <div>

            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/25">
              <MessageSquareQuote size={14} />
              What teams are saying
            </div>

            <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Conversations,
              <span className="text-white/35">
                {" "}reimagined.
              </span>
            </h3>

          </div>

          <div className="flex items-center gap-2 text-xs text-white/30">

            <div className="flex gap-0.5">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={13}
                  className="fill-cyan-300 text-cyan-300"
                />
              ))}

            </div>

            Built around better conversations

          </div>

        </motion.div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                duration: 0.55,
                delay: index * 0.1,
              }}
              className="group"
            >

              <div className="relative flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">

                {/* Quote */}
                <div className="flex items-center justify-between">

                  <div className="flex gap-0.5">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={13}
                        className="fill-cyan-300 text-cyan-300"
                      />
                    ))}

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-white/15 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                  />

                </div>

                <p className="mt-7 flex-1 text-sm leading-7 text-white/55">
                  “{testimonial.quote}”
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-3 border-t border-white/8 pt-5">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-fuchsia-500/20 text-xs font-semibold text-cyan-200">
                    {testimonial.initials}
                  </div>

                  <div>

                    <p className="text-xs font-medium text-white/75">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[10px] text-white/30">
                      {testimonial.role} · {testimonial.company}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 text-center"
        >

          <div className="inline-flex items-center gap-2 text-xs text-white/25">

            <Sparkles
              size={13}
              className="text-cyan-400"
            />

            Your conversations are your competitive advantage.

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default SocialProof;