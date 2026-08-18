import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Globe2,
  Heart,
  Lightbulb,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const principles = [
  {
    icon: MessageSquare,
    title: "Conversation first",
    text: "We believe AI becomes useful when it can understand people naturally and respond with purpose.",
  },
  {
    icon: Target,
    title: "Outcome driven",
    text: "Every agent should have a clear objective instead of simply generating conversations.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    text: "AI should help businesses respond faster, follow up sooner and reduce repetitive work.",
  },
  {
    icon: Users,
    title: "Human + AI",
    text: "Automation should empower people, not remove the human from important decisions.",
  },
];

const technology = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Intelligent models help agents understand context, intent and conversation flow.",
  },
  {
    icon: MessageSquare,
    title: "Voice Intelligence",
    text: "Natural voice interactions make customer conversations feel more human.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Conversations can become actions through structured business workflows.",
  },
  {
    icon: Code2,
    title: "Developer APIs",
    text: "Developers can connect voice agents with applications and existing systems.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-[#030308] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-28 pt-40">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.05] via-blue-500/[0.07] to-fuchsia-500/[0.05] blur-[160px]" />

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

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/10 bg-fuchsia-400/[0.04] px-4 py-2 text-xs text-fuchsia-300">

              <Sparkles size={14} />

              Building the future of voice AI

            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

              We're building AI

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                that knows how to talk.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">

              SamvadLabs is building intelligent voice automation
              technology that helps businesses turn everyday
              conversations into meaningful outcomes.

            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="/product"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.03]"
              >

                Explore our product

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />

              </a>

              <a
                href="/contact"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
              >

                Talk to us

              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* What is Samvad */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                About SamvadLabs
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

                Conversation is one of

                <br />

                <span className="text-white/35">
                  the most powerful interfaces.
                </span>

              </h2>

            </div>

            <div>

              <p className="text-sm leading-8 text-white/40 sm:text-base">

                People communicate naturally through conversation.
                Businesses, however, still rely heavily on forms,
                repetitive manual calls and fragmented workflows.

              </p>

              <p className="mt-5 text-sm leading-8 text-white/40 sm:text-base">

                SamvadLabs is focused on bridging that gap by creating
                AI voice agents that can understand conversations,
                follow instructions and help businesses automate
                meaningful interactions.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Mission / Vision */}
      <section className="border-t border-white/5 bg-[#030308] px-6 py-28">

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">

          {/* Mission */}
          <motion.div
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
            }}
            className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.05] via-white/[0.02] to-transparent p-8 sm:p-10"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/[0.07]">

              <Target
                size={21}
                className="text-cyan-300"
              />

            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/70">
              Our Mission
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Make intelligent conversations accessible.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/35">

              We want businesses of every size to be able to use
              intelligent voice automation without needing to build
              complex AI infrastructure from scratch.

            </p>

          </motion.div>

          {/* Vision */}
          <motion.div
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
            }}
            transition={{
              delay: 0.1,
            }}
            className="relative overflow-hidden rounded-3xl border border-fuchsia-400/10 bg-gradient-to-br from-fuchsia-400/[0.05] via-white/[0.02] to-transparent p-8 sm:p-10"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/[0.07]">

              <Globe2
                size={21}
                className="text-fuchsia-300"
              />

            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300/70">
              Our Vision
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              A world where businesses can talk to customers at scale.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/35">

              We imagine a future where intelligent agents handle
              routine conversations instantly while people focus on
              creativity, relationships and decisions that truly need
              human judgment.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Principles */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Our principles
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

              How we think

              <br />

              <span className="text-white/35">
                about AI.
              </span>

            </h2>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {principles.map((item, index) => {

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
                    delay: index * 0.07,
                  }}
                  className="rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition hover:border-cyan-400/15 hover:bg-white/[0.035]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10">

                    <Icon
                      size={19}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/30">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Technology */}
      <section className="border-t border-white/5 bg-[#030308] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
                Technology
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

                Intelligence behind

                <br />

                <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                  every conversation.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">

                SamvadLabs combines conversational intelligence,
                voice technology and workflow automation into a
                platform designed around real business interactions.

              </p>

              <div className="mt-8 flex items-center gap-3 text-xs text-white/30">

                <ShieldCheck
                  size={16}
                  className="text-cyan-300"
                />

                Designed with security and control in mind.

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {technology.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"
                  >

                    <Icon
                      size={19}
                      className="text-cyan-300"
                    />

                    <h3 className="mt-5 text-sm font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-white/30">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* Journey */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-5xl text-center">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/[0.06] mx-auto">

            <Rocket
              size={21}
              className="text-cyan-300"
            />

          </div>

          <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            The journey
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Start with one conversation.
            <br />
            <span className="text-white/35">
              Build from there.
            </span>
          </h2>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 text-left">

            {[
              "Identify a repetitive conversation in your business.",
              "Design an AI agent around the desired outcome.",
              "Connect the agent to your existing workflow.",
              "Measure the results and continuously improve.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-5"
              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/[0.06] text-[10px] font-semibold text-cyan-300">
                  0{index + 1}
                </div>

                <span className="text-sm text-white/40">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#030308] px-6 py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.07] via-blue-500/[0.07] to-fuchsia-500/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <Heart
            size={22}
            className="mx-auto text-fuchsia-300"
          />

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">

            Let's build the future

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              of conversations.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">

            Have a workflow you want to automate? Start a conversation
            with the SamvadLabs team.

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

export default About;