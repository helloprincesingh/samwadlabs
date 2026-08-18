import { motion } from "framer-motion";
import {
  ArrowRight,
  Mic2,
  Phone,
  Sparkles,
  WandSparkles,
} from "lucide-react";

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#05050a] py-32">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.08] via-blue-500/[0.08] to-fuchsia-500/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.025] px-6 py-16 text-center shadow-2xl sm:px-12 lg:px-20"
        >

          {/* Decorative icons */}
          <div className="absolute left-8 top-8 hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] sm:flex">
            <Mic2
              size={20}
              className="text-cyan-400/50"
            />
          </div>

          <div className="absolute bottom-8 right-8 hidden h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/10 bg-fuchsia-400/[0.03] sm:flex">
            <Phone
              size={20}
              className="text-fuchsia-400/50"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2 text-xs font-medium text-cyan-300">
            <WandSparkles size={14} />
            Start building
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

            Your next conversation
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              should be handled by AI.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
            Give Samvad AI a task and let it handle the conversation,
            understand the response and deliver the outcome.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.18)] transition duration-300 hover:scale-[1.03]">

              Build Your AI Agent

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/65 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white">

              <Sparkles size={16} />

              Explore Demo

            </button>

          </div>

          {/* Bottom note */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-white/25">

            <span>No complicated setup</span>

            <span className="h-1 w-1 rounded-full bg-white/15" />

            <span>AI-powered conversations</span>

            <span className="h-1 w-1 rounded-full bg-white/15" />

            <span>Built to scale</span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default FinalCTA;