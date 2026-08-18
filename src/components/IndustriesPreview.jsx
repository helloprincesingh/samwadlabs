import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  ShoppingCart,
  WalletCards,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Qualify property leads, schedule site visits and follow up with prospects automatically.",
    example: "New lead → AI qualification → Site visit",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Handle appointment calls, reminders and patient follow-ups with AI voice agents.",
    example: "Patient call → Appointment → Reminder",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Connect with students, answer routine questions and follow up with admissions leads.",
    example: "Student lead → Qualification → Counselling",
  },
  {
    icon: WalletCards,
    title: "Finance",
    description:
      "Automate customer outreach, payment reminders and service-related conversations.",
    example: "Customer → Reminder → Resolution",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Engage customers through order updates, feedback calls and personalized follow-ups.",
    example: "Order → Call → Customer feedback",
  },
  {
    icon: Building2,
    title: "SaaS & Businesses",
    description:
      "Automate onboarding, customer success and sales conversations at scale.",
    example: "Lead → Demo → Follow-up",
  },
];

function IndustriesPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#05050a] py-28">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.045] blur-[150px]" />

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
            <Sparkles size={14} />
            Built for your industry
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            AI voice that fits
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              your business.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Create specialized AI agents for the conversations that matter
            most to your customers and your team.
          </p>

        </motion.div>

        {/* Industry Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group"
              >

                <div className="relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]">

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10">

                      <Icon
                        size={22}
                        className="text-cyan-300 transition duration-500 group-hover:scale-110"
                      />

                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-white/15 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                    />

                  </div>

                  {/* Content */}
                  <h3 className="relative mt-7 text-xl font-semibold">
                    {industry.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-white/45">
                    {industry.description}
                  </p>

                  {/* Example */}
                  <div className="relative mt-6 rounded-2xl border border-white/8 bg-black/30 px-4 py-3">

                    <p className="text-[10px] uppercase tracking-wider text-white/20">
                      Example workflow
                    </p>

                    <p className="mt-2 text-xs text-white/55">
                      {industry.example}
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom CTA */}
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
          className="mt-14 text-center"
        >

          <p className="text-sm text-white/30">
            Don't see your industry?
          </p>

          <p className="mt-2 text-sm text-white/55">
            If your business depends on conversations,
            <span className="text-cyan-300">
              {" "}Samvad AI can automate them.
            </span>
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default IndustriesPreview;