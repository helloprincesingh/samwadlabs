import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Globe2,
  Headphones,
  Link2,
  MessageSquareText,
  Mic2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Intelligent Conversations",
    description:
      "Samvad AI understands context, follows instructions and responds naturally instead of simply reading a script.",
    size: "large",
  },
  {
    icon: Mic2,
    title: "Natural AI Voice",
    description:
      "Create voice experiences that feel natural, responsive and engaging.",
    size: "small",
  },
  {
    icon: Zap,
    title: "Real-time Responses",
    description:
      "AI listens and responds dynamically while the conversation is happening.",
    size: "small",
  },
  {
    icon: MessageSquareText,
    title: "Dynamic Conversation Flow",
    description:
      "Handle different customer responses without creating hundreds of fixed conversation paths.",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Call Analytics",
    description:
      "Turn every conversation into structured outcomes, insights and actionable data.",
    size: "small",
  },
  {
    icon: Globe2,
    title: "Multilingual",
    description:
      "Build voice experiences for customers across languages and regions.",
    size: "small",
  },
  {
    icon: Link2,
    title: "Easy Integrations",
    description:
      "Connect your AI agents with the tools and systems your business already uses.",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Built for Scale",
    description:
      "Create reliable AI voice workflows that can grow with your business.",
    size: "small",
  },
];

function FeaturesPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#05050a] py-28">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-fuchsia-500/[0.04] blur-[120px]" />

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
            Powerful by design
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              automate conversations.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Build AI voice agents that understand, communicate and take
            action — without making your team manage every conversation.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            const isLarge = feature.size === "large";

            return (
              <motion.div
                key={feature.title}
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
                  delay: index * 0.06,
                }}
                className={isLarge ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] ${
                    isLarge ? "p-8" : "p-6"
                  }`}
                >

                  {/* Gradient glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

                  {/* Icon */}
                  <div
                    className={`relative flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10 ${
                      isLarge
                        ? "h-14 w-14"
                        : "h-11 w-11"
                    }`}
                  >
                    <Icon
                      size={isLarge ? 26 : 20}
                      className="text-cyan-300 transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">

                    <h3
                      className={`font-semibold ${
                        isLarge
                          ? "mt-8 text-2xl"
                          : "mt-6 text-lg"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`leading-7 text-white/40 ${
                        isLarge
                          ? "mt-4 max-w-md text-sm"
                          : "mt-3 text-sm"
                      }`}
                    >
                      {feature.description}
                    </p>

                  </div>

                  {/* Special visual for first card */}
                  {isLarge && (
                    <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/8 bg-black/30 p-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
                          <Headphones
                            size={16}
                            className="text-white"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-medium text-white/70">
                            Samvad AI
                          </p>

                          <p className="text-[11px] text-white/30">
                            Understanding conversation...
                          </p>
                        </div>

                        <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                      </div>

                      {/* Animated waveform */}
                      <div className="mt-6 flex h-12 items-center justify-center gap-1">

                        {[
                          14,
                          25,
                          38,
                          20,
                          32,
                          45,
                          27,
                          40,
                          18,
                          35,
                          24,
                          42,
                          17,
                          30,
                          22,
                        ].map((height, barIndex) => (
                          <motion.span
                            key={barIndex}
                            animate={{
                              height: [
                                `${height * 0.45}px`,
                                `${height}px`,
                                `${height * 0.55}px`,
                              ],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: barIndex * 0.04,
                              ease: "easeInOut",
                            }}
                            className="w-1 rounded-full bg-gradient-to-t from-cyan-400 via-blue-500 to-fuchsia-500"
                          />
                        ))}

                      </div>

                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-white/25">
            One platform. One AI. Every conversation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturesPreview;