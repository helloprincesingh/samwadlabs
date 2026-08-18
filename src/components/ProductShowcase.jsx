import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Headphones,
  MoreHorizontal,
  Phone,
  Play,
  Sparkles,
  UserRound,
} from "lucide-react";

function ProductShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#030308] py-28">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/[0.05] blur-[160px]" />

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
            <Activity size={14} />
            Inside Samvad AI
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            See every conversation.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Understand every outcome.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Monitor your AI agents, follow live conversations and turn every
            call into structured business intelligence.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >

          {/* Glow */}
          <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08080e] shadow-2xl">

            {/* Browser bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <div className="hidden rounded-lg border border-white/5 bg-white/[0.03] px-10 py-1.5 text-[10px] text-white/25 sm:block">
                app.samvadlabs.ai
              </div>

              <MoreHorizontal
                size={16}
                className="text-white/30"
              />

            </div>

            {/* Dashboard */}
            <div className="grid min-h-[560px] lg:grid-cols-[210px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 bg-black/20 p-4 lg:block">

                <div className="flex items-center gap-2 px-2 py-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500">
                    <span className="text-xs font-black">
                      S
                    </span>
                  </div>

                  <span className="text-sm font-semibold">
                    SamvadLabs
                  </span>

                </div>

                <div className="mt-7 space-y-1">

                  {[
                    "Overview",
                    "AI Agents",
                    "Calls",
                    "Contacts",
                    "Analytics",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-xl px-3 py-2.5 text-xs ${
                        index === 2
                          ? "bg-white/[0.07] text-white"
                          : "text-white/35"
                      }`}
                    >
                      {item}
                    </div>
                  ))}

                </div>

                <div className="mt-8 border-t border-white/5 pt-6">

                  <p className="px-3 text-[9px] uppercase tracking-[0.18em] text-white/20">
                    Workspace
                  </p>

                  <div className="mt-3 flex items-center gap-2 px-3">

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-[9px] text-blue-300">
                      PK
                    </div>

                    <div>
                      <p className="text-[10px] text-white/60">
                        Your workspace
                      </p>
                      <p className="text-[9px] text-white/25">
                        Pro plan
                      </p>
                    </div>

                  </div>

                </div>

              </aside>

              {/* Main Dashboard */}
              <div className="min-w-0">

                {/* Header */}
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:px-7">

                  <div>

                    <p className="text-xs text-white/30">
                      Calls
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                      Live conversations
                    </h3>

                  </div>

                  <div className="flex gap-2">

                    <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/50">
                      Today
                      <ChevronDown size={13} />
                    </button>

                    <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold">
                      <Play size={12} />
                      New call
                    </button>

                  </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 border-b border-white/10 sm:grid-cols-4">

                  {[
                    ["128", "Total calls"],
                    ["94%", "Completion"],
                    ["76", "Qualified"],
                    ["4m 32s", "Avg. duration"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="border-r border-white/5 px-5 py-5 last:border-r-0"
                    >
                      <p className="text-xl font-semibold">
                        {value}
                      </p>

                      <p className="mt-1 text-[10px] text-white/30">
                        {label}
                      </p>
                    </div>
                  ))}

                </div>

                {/* Content */}
                <div className="grid gap-5 p-5 sm:p-7 xl:grid-cols-[1.25fr_0.75fr]">

                  {/* Conversation */}
                  <div className="rounded-2xl border border-white/8 bg-black/20">

                    <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">

                          <Headphones size={15} />

                          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full border-2 border-[#08080e] bg-emerald-400" />

                        </div>

                        <div>
                          <p className="text-xs font-medium">
                            Rahul Sharma
                          </p>

                          <p className="text-[10px] text-white/30">
                            AI Agent · Renewal
                          </p>
                        </div>

                      </div>

                      <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Live
                      </span>

                    </div>

                    {/* Transcript */}
                    <div className="space-y-5 p-5">

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-3"
                      >

                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                          <Sparkles
                            size={13}
                            className="text-cyan-300"
                          />
                        </div>

                        <div>

                          <p className="text-[9px] text-cyan-400">
                            Samvad AI
                          </p>

                          <p className="mt-1 max-w-md text-xs leading-6 text-white/55">
                            Hi Rahul, I’m calling regarding your
                            subscription renewal. Do you have a moment?
                          </p>

                        </div>

                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="flex justify-end"
                      >

                        <div className="max-w-md">

                          <p className="text-right text-[9px] text-white/25">
                            Rahul
                          </p>

                          <p className="mt-1 rounded-xl rounded-tr-sm bg-white/[0.06] px-4 py-3 text-xs leading-6 text-white/55">
                            Yes, I’m interested. What are the
                            available plans?
                          </p>

                        </div>

                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.6 }}
                        className="flex gap-3"
                      >

                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                          <Sparkles
                            size={13}
                            className="text-cyan-300"
                          />
                        </div>

                        <div>

                          <p className="text-[9px] text-cyan-400">
                            Samvad AI
                          </p>

                          <p className="mt-1 max-w-md text-xs leading-6 text-white/55">
                            We have two options that may work for
                            you. I can explain both and help you
                            choose.
                          </p>

                        </div>

                      </motion.div>

                    </div>

                    {/* Waveform */}
                    <div className="border-t border-white/8 px-5 py-4">

                      <div className="flex h-8 items-center justify-center gap-1">

                        {[
                          8,
                          14,
                          22,
                          12,
                          25,
                          18,
                          30,
                          15,
                          24,
                          10,
                          20,
                          28,
                          13,
                          23,
                          16,
                          26,
                          11,
                          19,
                        ].map((height, index) => (
                          <motion.span
                            key={index}
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
                              delay: index * 0.04,
                            }}
                            className="w-1 rounded-full bg-gradient-to-t from-cyan-400 via-blue-500 to-fuchsia-500"
                          />
                        ))}

                      </div>

                    </div>

                  </div>

                  {/* Outcome */}
                  <div className="space-y-5">

                    <div className="rounded-2xl border border-white/8 bg-black/20 p-5">

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">

                          <BarChart3
                            size={16}
                            className="text-blue-300"
                          />

                          <p className="text-xs font-medium">
                            Call outcome
                          </p>

                        </div>

                        <Check
                          size={16}
                          className="text-emerald-400"
                        />

                      </div>

                      <div className="mt-5">

                        <p className="text-2xl font-semibold">
                          Interested
                        </p>

                        <p className="mt-1 text-[10px] text-white/30">
                          Customer intent detected
                        </p>

                      </div>

                      <div className="mt-5 flex gap-2">

                        <span className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-[10px] text-emerald-400">
                          Positive
                        </span>

                        <span className="rounded-full border border-blue-400/10 bg-blue-400/5 px-3 py-1.5 text-[10px] text-blue-300">
                          High intent
                        </span>

                      </div>

                    </div>

                    <div className="rounded-2xl border border-white/8 bg-black/20 p-5">

                      <div className="flex items-center gap-2">

                        <Clock3
                          size={16}
                          className="text-cyan-300"
                        />

                        <p className="text-xs font-medium">
                          Call details
                        </p>

                      </div>

                      <div className="mt-5 space-y-4">

                        {[
                          ["Duration", "04:32"],
                          ["Agent", "Renewal Agent"],
                          ["Language", "English"],
                          ["Status", "Completed"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="flex items-center justify-between"
                          >

                            <span className="text-[10px] text-white/30">
                              {label}
                            </span>

                            <span className="text-[10px] text-white/65">
                              {value}
                            </span>

                          </div>
                        ))}

                      </div>

                    </div>

                    <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">

                          <UserRound
                            size={16}
                            className="text-cyan-300"
                          />

                        </div>

                        <div>

                          <p className="text-xs font-medium">
                            Next action
                          </p>

                          <p className="mt-1 text-[10px] text-white/35">
                            Schedule renewal follow-up
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* Bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center text-xs text-white/25"
        >
          Every call becomes data. Every conversation becomes an outcome.
        </motion.p>

      </div>
    </section>
  );
}

export default ProductShowcase;