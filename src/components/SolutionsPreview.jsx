import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  Headphones,
  MessageCircleMore,
  PhoneOutgoing,
  RefreshCcw,
  SearchCheck,
  Star,
} from "lucide-react";

const solutions = [
  {
    icon: SearchCheck,
    title: "Lead Qualification",
    description:
      "Automatically call new leads, understand their requirements and identify high-intent prospects.",
    tag: "Sales",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description:
      "Let AI call customers, check availability and schedule appointments without manual follow-ups.",
    tag: "Bookings",
  },
  {
    icon: RefreshCcw,
    title: "Customer Follow-ups",
    description:
      "Never miss a follow-up. Samvad AI can reconnect with customers at the right time.",
    tag: "Engagement",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Handle repetitive customer conversations with an AI voice agent that responds naturally.",
    tag: "Support",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Campaigns",
    description:
      "Run personalized voice campaigns at scale without requiring your team to make every call.",
    tag: "Automation",
  },
  {
    icon: MessageCircleMore,
    title: "Surveys & Feedback",
    description:
      "Collect customer feedback through natural conversations and turn responses into useful insights.",
    tag: "Insights",
  },
];

function SolutionsPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#030308] py-28">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/10 bg-fuchsia-400/[0.04] px-4 py-2 text-xs font-medium text-fuchsia-300">
            <Star size={14} />
            Built for real conversations
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            One AI.
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Endless possibilities.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            From sales calls to customer support, Samvad AI handles
            conversations that keep your business moving.
          </p>

        </motion.div>

        {/* Solution Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
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
                  delay: index * 0.08,
                }}
                className="group relative"
              >

                <div className="relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]">

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10">

                      <Icon
                        size={22}
                        className="text-cyan-300 transition-transform duration-500 group-hover:scale-110"
                      />

                    </div>

                    <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/30">
                      {solution.tag}
                    </span>

                  </div>

                  {/* Content */}
                  <h3 className="relative mt-7 text-xl font-semibold">
                    {solution.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-white/45">
                    {solution.description}
                  </p>

                  {/* Bottom link */}
                  <div className="relative mt-7 flex items-center gap-2 text-xs font-medium text-white/35 transition group-hover:text-cyan-300">

                    Explore workflow

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-2xl text-center"
        >

          <p className="text-sm leading-7 text-white/30">
            If a conversation can be handled over the phone,
            <span className="text-white/55">
              {" "}Samvad AI can help automate it.
            </span>
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default SolutionsPreview;