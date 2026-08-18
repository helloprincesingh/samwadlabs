import {
  startCall,
  getCallStatus,
  getCallResult,
} from "../services/samvadApi";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  Mic,
  Phone,
  Play,
  Sparkles,
  Target,
  Users,
  Volume2,
  Workflow,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const conversation = [
  {
    speaker: "Samvad AI",
    text: "Hi Rahul, I'm calling from Acme. Is this a good time to talk?",
    type: "ai",
  },
  {
    speaker: "Rahul",
    text: "Yes, sure. What is this regarding?",
    type: "customer",
  },
  {
    speaker: "Samvad AI",
    text: "We received your interest in our enterprise plan. I'd like to understand what you're looking for.",
    type: "ai",
  },
  {
    speaker: "Rahul",
    text: "We need it for around 50 employees and our budget is about ₹15 lakh.",
    type: "customer",
  },
];

const features = [
  {
    icon: Bot,
    title: "AI Voice Agents",
    text: "Create intelligent agents that can understand and respond to customers naturally.",
  },
  {
    icon: Headphones,
    title: "Natural Conversations",
    text: "Give customers a conversational experience instead of rigid IVR flows.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    text: "Turn conversations into actions, follow-ups and business outcomes.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    text: "Handle repetitive conversations automatically and keep your team focused.",
  },
];

const useCases = [
  {
    title: "Lead Qualification",
    text: "Call new leads, understand their requirements and identify high-intent prospects.",
  },
  {
    title: "Customer Follow-ups",
    text: "Automatically follow up with customers without your team manually making every call.",
  },
  {
    title: "Appointment Booking",
    text: "Talk to customers, find suitable times and move appointments through your workflow.",
  },
  {
    title: "Customer Support",
    text: "Handle repetitive questions and route important conversations to your team.",
  },
];

function Home() {
  const [command, setCommand] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [stage, setStage] = useState("idle");
  const [messageIndex, setMessageIndex] = useState(0);

  const runAgent = () => {
    if (isRunning) return;

    setIsRunning(true);
    setStage("thinking");
    setMessageIndex(0);

    setTimeout(() => {
      setStage("calling");
    }, 1600);

    setTimeout(() => {
      setStage("conversation");
    }, 3000);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setStage("idle");
    setMessageIndex(0);
  };

  useEffect(() => {
    if (stage !== "conversation") return;

    const timer = setInterval(() => {
      setMessageIndex((previous) => {
        if (previous >= conversation.length - 1) {
          clearInterval(timer);
          return previous;
        }

        return previous + 1;
      });
    }, 2200);

    return () => clearInterval(timer);
  }, [stage]);

  return (
    <div className="min-h-screen bg-[#030308] text-white">

      <Navbar />

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.06] via-blue-500/[0.08] to-fuchsia-500/[0.06] blur-[150px]" />

        <div className="pointer-events-none absolute left-[10%] top-[30%] h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-[100px]" />

        <div className="pointer-events-none absolute right-[10%] top-[40%] h-40 w-40 rounded-full bg-fuchsia-400/[0.04] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Hero heading */}
          <div className="mx-auto max-w-5xl text-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2 text-xs text-cyan-300"
            >

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />

              </span>

              AI voice agents for modern businesses

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="mt-7 text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl"
            >

              Give your business

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                a voice that works.
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
            >

              Samvad AI lets you create intelligent voice agents that
              talk to customers, understand conversations and turn
              every call into a business outcome.

            </motion.p>

          </div>

          {/* Interactive Demo */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mx-auto mt-14 max-w-5xl"
          >

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#06060b] shadow-2xl shadow-cyan-500/[0.04]">

              {/* top bar */}
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500">

                    <Sparkles size={16} />

                  </div>

                  <div>

                    <p className="text-xs font-semibold">
                      Samvad AI
                    </p>

                    <p className="text-[10px] text-white/25">
                      AI Voice Agent
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2 text-[10px] text-white/25">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  System ready

                </div>

              </div>

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                {/* Command panel */}
                <div className="border-b border-white/5 p-6 lg:border-b-0 lg:border-r sm:p-8">

                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
                    Your instruction
                  </p>

                  <h2 className="mt-3 text-xl font-semibold">
                    Tell Samvad what to do.
                  </h2>

                  <p className="mt-2 text-xs leading-6 text-white/30">
                    Give your AI agent a simple business command.
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">

                    <textarea
                      value={command}
                      onChange={(event) =>
                        setCommand(event.target.value)
                      }
                      disabled={isRunning}
                      rows={5}
                      placeholder="Example: Call my new leads and qualify them..."
                      className="w-full resize-none bg-transparent text-sm leading-6 text-white/70 outline-none placeholder:text-white/15 disabled:opacity-50"
                    />

                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {[
                      "Call my new leads",
                      "Book appointments",
                      "Follow up with customers",
                    ].map((suggestion) => (

                      <button
                        key={suggestion}
                        disabled={isRunning}
                        onClick={() => setCommand(suggestion)}
                        className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2 text-[10px] text-white/30 transition hover:border-cyan-400/15 hover:text-cyan-300 disabled:opacity-30"
                      >
                        {suggestion}
                      </button>

                    ))}

                  </div>

                  <button
                    onClick={isRunning ? resetDemo : runAgent}
                    className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-5 py-3.5 text-xs font-semibold transition hover:scale-[1.01]"
                  >

                    {isRunning ? (
                      <>
                        Reset demo
                      </>
                    ) : (
                      <>
                        Run AI Agent

                        <ArrowRight
                          size={14}
                          className="transition group-hover:translate-x-1"
                        />
                      </>
                    )}

                  </button>

                </div>

                {/* Agent panel */}
                <div className="relative min-h-[460px] p-6 sm:p-8">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                        Live agent
                      </p>

                      <p className="mt-1 text-xs text-white/50">
                        {stage === "idle" && "Waiting for instruction"}
                        {stage === "thinking" && "Understanding your command"}
                        {stage === "calling" && "Connecting to customer"}
                        {stage === "conversation" && "Conversation in progress"}
                      </p>

                    </div>

                    <div
                      className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] ${
                        stage === "idle"
                          ? "border-white/8 text-white/25"
                          : "border-emerald-400/10 text-emerald-300"
                      }`}
                    >

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          stage === "idle"
                            ? "bg-white/20"
                            : "animate-pulse bg-emerald-400"
                        }`}
                      />

                      {stage === "idle" ? "Ready" : "Live"}

                    </div>

                  </div>

                  <AnimatePresence mode="wait">

                    {stage === "idle" && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        className="flex min-h-[370px] flex-col items-center justify-center text-center"
                      >

                        <div className="relative">

                          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

                          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/15 bg-cyan-400/[0.04]">

                            <Mic
                              size={30}
                              className="text-cyan-300"
                            />

                          </div>

                        </div>

                        <h3 className="mt-7 text-sm font-semibold">
                          Your AI agent is ready
                        </h3>

                        <p className="mt-2 max-w-xs text-xs leading-6 text-white/25">
                          Give Samvad a command and watch it turn the
                          instruction into a customer conversation.
                        </p>

                      </motion.div>
                    )}

                    {stage === "thinking" && (
                      <motion.div
                        key="thinking"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex min-h-[370px] flex-col items-center justify-center text-center"
                      >

                        <div className="relative flex h-24 w-24 items-center justify-center">

                          <div className="absolute inset-0 animate-ping rounded-full border border-cyan-400/10" />

                          <div className="absolute inset-2 rounded-full border border-blue-400/15" />

                          <BrainIcon />

                        </div>

                        <h3 className="mt-7 text-sm font-semibold">
                          Samvad is thinking...
                        </h3>

                        <p className="mt-2 text-xs text-white/25">
                          Understanding your instruction and planning the conversation.
                        </p>

                      </motion.div>
                    )}

                    {stage === "calling" && (
                      <motion.div
                        key="calling"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex min-h-[370px] flex-col items-center justify-center"
                      >

                        <div className="relative flex h-24 w-24 items-center justify-center">

                          <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/[0.04]" />

                          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-400/[0.04]">

                            <Phone
                              size={27}
                              className="text-emerald-300"
                            />

                          </div>

                        </div>

                        <h3 className="mt-7 text-sm font-semibold">
                          Calling customer...
                        </h3>

                        <div className="mt-5 flex items-center gap-1">

                          {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (

                            <motion.span
                              key={bar}
                              animate={{
                                height: [5, 18, 8, 25, 10],
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.8,
                                delay: bar * 0.06,
                              }}
                              className="w-1 rounded-full bg-gradient-to-t from-cyan-400 to-fuchsia-400"
                            />

                          ))}

                        </div>

                      </motion.div>
                    )}

                    {stage === "conversation" && (
                      <motion.div
                        key="conversation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-7"
                      >

                        <div className="mb-5 flex items-center justify-center gap-5">

                          <AgentAvatar
                            type="ai"
                            name="Samvad AI"
                            active={conversation[messageIndex].type === "ai"}
                          />

                          <div className="flex items-center gap-1">

                            {[1, 2, 3, 4, 5, 6].map((bar) => (

                              <motion.span
                                key={bar}
                                animate={{
                                  height: [4, 18, 7, 24, 5],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 0.7,
                                  delay: bar * 0.08,
                                }}
                                className="w-1 rounded-full bg-cyan-300"
                              />

                            ))}

                          </div>

                          <AgentAvatar
                            type="customer"
                            name="Customer"
                            active={conversation[messageIndex].type === "customer"}
                          />

                        </div>

                        <div className="space-y-3">

                          {conversation
                            .slice(0, messageIndex + 1)
                            .map((message, index) => (

                              <motion.div
                                key={index}
                                initial={{
                                  opacity: 0,
                                  y: 10,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                className={`flex ${
                                  message.type === "ai"
                                    ? "justify-start"
                                    : "justify-end"
                                }`}
                              >

                                <div
                                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                                    message.type === "ai"
                                      ? "rounded-bl-md border border-cyan-400/10 bg-cyan-400/[0.04]"
                                      : "rounded-br-md border border-white/8 bg-white/[0.035]"
                                  }`}
                                >

                                  <p
                                    className={`text-[9px] font-medium ${
                                      message.type === "ai"
                                        ? "text-cyan-300"
                                        : "text-white/30"
                                    }`}
                                  >
                                    {message.speaker}
                                  </p>

                                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                                    {message.text}
                                  </p>

                                </div>

                              </motion.div>

                            ))}

                        </div>

                        {messageIndex >= conversation.length - 1 && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 10,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-4"
                          >

                            <div className="flex items-center gap-2">

                              <Check
                                size={14}
                                className="text-emerald-300"
                              />

                              <span className="text-[10px] font-semibold text-emerald-300">
                                Lead qualified
                              </span>

                            </div>

                            <div className="mt-3 grid grid-cols-3 gap-2">

                              <ResultMini
                                label="Budget"
                                value="₹15L"
                              />

                              <ResultMini
                                label="Interest"
                                value="High"
                              />

                              <ResultMini
                                label="Follow-up"
                                value="Tomorrow"
                              />

                            </div>

                          </motion.div>
                        )}

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>

              </div>

            </div>

            <p className="mt-4 text-center text-[10px] text-white/15">
              Interactive product preview — no real call is placed.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* TRUST STRIP */}
      {/* ===================================================== */}

      <section className="border-y border-white/5 bg-[#05050a] px-6 py-7">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
            Built for teams that value every conversation
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-white/20">

            <span>SALES</span>
            <span>SUPPORT</span>
            <span>OPERATIONS</span>
            <span>HEALTHCARE</span>
            <span>FINTECH</span>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* HOW IT WORKS */}
      {/* ===================================================== */}

      <section className="border-b border-white/5 bg-[#030308] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              How it works
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

              From instruction

              <br />

              <span className="text-white/35">
                to outcome.
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-white/30">
              You define the goal. Samvad handles the conversation.
            </p>

          </div>

          <div className="relative mt-16 grid gap-5 md:grid-cols-3">

            <WorkStep
              number="01"
              icon={Target}
              title="Give an objective"
              text="Tell Samvad what you want your AI agent to accomplish."
            />

            <WorkStep
              number="02"
              icon={Phone}
              title="AI has the conversation"
              text="Your agent talks naturally, understands responses and follows the conversation."
            />

            <WorkStep
              number="03"
              icon={Check}
              title="Get the outcome"
              text="Receive the transcript, summary, result and next action."
            />

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FEATURES */}
      {/* ===================================================== */}

      <section className="border-b border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
                The platform
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

                Everything you need

                <br />

                <span className="text-white/35">
                  to automate conversations.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-white/30">
              Build, deploy and manage AI voice agents around the
              workflows your business already understands.
            </p>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
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
                    delay: index * 0.06,
                  }}
                  className="group rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-400/15"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10">

                    <Icon
                      size={19}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="mt-7 text-base font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/30">
                    {feature.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[10px] text-white/15 transition group-hover:text-cyan-300/60">

                    Explore

                    <ChevronRight size={12} />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* VOICE INTELLIGENCE SHOWCASE */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/5 bg-[#030308] px-6 py-28">

        <div className="pointer-events-none absolute right-[-150px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Voice intelligence
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

              Not just a voice.

              <br />

              <span className="text-white/35">
                An intelligent conversation.
              </span>

            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/35">

              Samvad is designed around conversations, not scripts.
              Your agent can understand context, respond naturally
              and keep the interaction moving toward the goal.

            </p>

            <div className="mt-8 space-y-3">

              {[
                "Understands customer intent",
                "Responds according to your instructions",
                "Handles natural back-and-forth conversation",
                "Produces structured outcomes",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/[0.06]">

                    <Check
                      size={12}
                      className="text-cyan-300"
                    />

                  </div>

                  <span className="text-xs text-white/40">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Voice visual */}
          <div className="relative rounded-[28px] border border-white/8 bg-white/[0.02] p-6 sm:p-8">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/[0.06]">

                  <Volume2
                    size={18}
                    className="text-cyan-300"
                  />

                </div>

                <div>

                  <p className="text-xs font-semibold">
                    Samvad Voice
                  </p>

                  <p className="text-[10px] text-white/20">
                    Listening...
                  </p>

                </div>

              </div>

              <span className="rounded-full border border-emerald-400/10 px-3 py-1 text-[9px] text-emerald-300">
                LIVE
              </span>

            </div>

            <div className="flex h-52 items-center justify-center">

              <div className="flex items-center gap-1.5">

                {Array.from({ length: 34 }).map((_, index) => (

                  <motion.span
                    key={index}
                    animate={{
                      height: [
                        8 + (index % 5) * 3,
                        18 + (index % 7) * 7,
                        10 + (index % 4) * 4,
                        24 + (index % 6) * 6,
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      delay: index * 0.025,
                      ease: "easeInOut",
                    }}
                    className="w-[3px] rounded-full bg-gradient-to-t from-cyan-400 via-blue-500 to-fuchsia-400"
                  />

                ))}

              </div>

            </div>

            <div className="grid grid-cols-3 gap-3">

              <Metric
                icon={Clock3}
                label="Response"
                value="< 1s"
              />

              <Metric
                icon={Users}
                label="Context"
                value="Aware"
              />

              <Metric
                icon={Target}
                label="Goal"
                value="Active"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* USE CASES */}
      {/* ===================================================== */}

      <section className="border-b border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
              Use cases
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

              Put AI to work

              <br />

              <span className="text-white/35">
                where conversations happen.
              </span>

            </h2>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">

            {useCases.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -15 : 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="group flex items-start justify-between gap-6 rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition hover:border-fuchsia-400/15"
              >

                <div>

                  <span className="text-[10px] text-white/15">
                    0{index + 1}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-xs leading-6 text-white/30">
                    {item.text}
                  </p>

                </div>

                <ArrowRight
                  size={17}
                  className="mt-2 shrink-0 text-white/15 transition group-hover:translate-x-1 group-hover:text-fuchsia-300"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#030308] px-6 py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.06] via-blue-500/[0.08] to-fuchsia-500/[0.06] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10">

            <Sparkles
              size={21}
              className="text-cyan-300"
            />

          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">

            Your next conversation

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              could be AI-powered.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35">

            Start with one workflow. Give Samvad the objective and
            let AI handle the conversation.

          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="/contact"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-7 py-4 text-sm font-semibold transition hover:scale-[1.03]"
            >

              Build with Samvad

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />

            </a>

            <a
              href="/docs"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-7 py-4 text-sm text-white/50 transition hover:bg-white/[0.05] hover:text-white"
            >

              Read the docs

            </a>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

/* ========================================================= */
/* COMPONENTS */
/* ========================================================= */

function BrainIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/10 bg-cyan-400/[0.04]">

      <div className="absolute inset-3 animate-pulse rounded-full border border-blue-400/10" />

      <Bot
        size={27}
        className="text-cyan-300"
      />

    </div>
  );
}

function AgentAvatar({
  type,
  name,
  active,
}) {
  return (
    <div className="text-center">

      <div
        className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full border ${
          active
            ? type === "ai"
              ? "border-cyan-300/30 bg-cyan-300/[0.08]"
              : "border-fuchsia-300/30 bg-fuchsia-300/[0.08]"
            : "border-white/8 bg-white/[0.02]"
        }`}
      >

        {type === "ai" ? (
          <Bot
            size={17}
            className={
              active
                ? "text-cyan-300"
                : "text-white/20"
            }
          />
        ) : (
          <Users
            size={17}
            className={
              active
                ? "text-fuchsia-300"
                : "text-white/20"
            }
          />
        )}

      </div>

      <p className="mt-2 text-[9px] text-white/25">
        {name}
      </p>

    </div>
  );
}

function ResultMini({
  label,
  value,
}) {
  return (
    <div className="rounded-xl bg-black/20 p-2.5">

      <p className="text-[8px] uppercase tracking-wider text-white/20">
        {label}
      </p>

      <p className="mt-1 text-[10px] font-medium text-white/55">
        {value}
      </p>

    </div>
  );
}

function WorkStep({
  number,
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="relative rounded-3xl border border-white/8 bg-white/[0.025] p-7">

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/[0.06]">

          <Icon
            size={19}
            className="text-cyan-300"
          />

        </div>

        <span className="text-[10px] text-white/15">
          {number}
        </span>

      </div>

      <h3 className="mt-7 text-base font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-white/30">
        {text}
      </p>

    </div>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="rounded-xl border border-white/6 bg-white/[0.02] p-3">

      <div className="flex items-center gap-2">

        <Icon
          size={12}
          className="text-cyan-300/70"
        />

        <span className="text-[9px] text-white/20">
          {label}
        </span>

      </div>

      <p className="mt-2 text-xs font-semibold text-white/55">
        {value}
      </p>

    </div>
  );
}

export default Home;