import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  Phone,
  RotateCcw,
  Sparkles,
  UserRound,
} from "lucide-react";
import logo from "../assets/logo/samvadlabs-icon.png";

function Hero() {
  const [task, setTask] = useState(
    "Call Rahul and ask if he wants to renew his subscription."
  );

  const [status, setStatus] = useState("idle");

  const statusText = {
    idle: "Ready to run",
    preparing: "Preparing AI agent...",
    calling: "Calling Rahul...",
    speaking: "AI is speaking...",
    listening: "Listening to customer...",
    completed: "Task completed",
  };

  const isRunning =
    status === "preparing" ||
    status === "calling" ||
    status === "speaking" ||
    status === "listening";

  const runTask = () => {
    if (!task.trim() || isRunning) return;

    setStatus("preparing");

    setTimeout(() => {
      setStatus("calling");
    }, 1200);

    setTimeout(() => {
      setStatus("speaking");
    }, 2800);

    setTimeout(() => {
      setStatus("listening");
    }, 4400);

    setTimeout(() => {
      setStatus("completed");
    }, 6200);
  };

  const resetTask = () => {
    setStatus("idle");
  };

  useEffect(() => {
    return () => {};
  }, []);

  const waveformActive =
    status === "calling" ||
    status === "speaking" ||
    status === "listening";

  return (
    <section className="relative min-h-screen overflow-hidden pt-32">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute -left-40 top-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute -right-40 top-1/3 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= BADGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex justify-center"
        >
          <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-xl">

            <Sparkles
              size={15}
              className="text-cyan-400"
            />

            <span>
              AI Voice Automation for modern teams
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

          </div>
        </motion.div>

        {/* ================= HERO HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >

          <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">

            Give AI a task.

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Let it handle the conversation.
            </span>

          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            SamvadLabs lets you deploy AI voice agents that call, talk,
            understand and act — so your team doesn't have to.
          </p>

          {/* ================= CTA ================= */}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <button
              onClick={runTask}
              disabled={isRunning}
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3.5 font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.2)] transition duration-300 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isRunning
                ? "Running AI Task..."
                : "Try Samvad AI"}

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-medium text-white/80 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Watch Demo
            </button>

          </div>

        </motion.div>

        {/* ================= INTERACTIVE DEMO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="relative mx-auto mt-20 max-w-5xl"
        >

          {/* Glow */}

          <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 blur-3xl" />

          {/* Main Card */}

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08080e]/90 shadow-2xl backdrop-blur-2xl">

            {/* ================= TOP BAR ================= */}

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">

              <div className="flex items-center gap-3">

                <div className="h-10 w-10 overflow-hidden rounded-xl">
                  <img
                    src={logo}
                    alt="Samvad AI"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Samvad AI
                  </p>

                  <p className="text-xs text-white/40">
                    Voice Agent
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2 text-xs">

                <span
                  className={`h-2 w-2 rounded-full ${
                    status === "completed"
                      ? "bg-emerald-400"
                      : status === "idle"
                      ? "bg-white/20"
                      : "animate-pulse bg-cyan-400"
                  }`}
                />

                <span className="text-white/50">
                  {status === "idle"
                    ? "Ready"
                    : statusText[status]}
                </span>

              </div>

            </div>

            {/* ================= MAIN GRID ================= */}

            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">

              {/* ================= USER INSTRUCTION ================= */}

              <div className="flex flex-col justify-center">

                <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/35">

                  <UserRound size={14} />

                  Your instruction

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">

                  <textarea
                    value={task}
                    onChange={(event) =>
                      setTask(event.target.value)
                    }
                    disabled={isRunning}
                    rows={4}
                    className="w-full resize-none bg-transparent text-sm leading-6 text-white/80 outline-none placeholder:text-white/25 disabled:cursor-not-allowed"
                    placeholder="Tell Samvad AI what you want it to do..."
                  />

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">

                    <button
                      onClick={runTask}
                      disabled={
                        isRunning ||
                        !task.trim()
                      }
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
                    >

                      <Phone size={15} />

                      {isRunning
                        ? "Running..."
                        : "Run Task"}

                    </button>

                    {status === "completed" && (
                      <button
                        onClick={resetTask}
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                      >

                        <RotateCcw size={15} />

                        Reset

                      </button>
                    )}

                  </div>

                </div>

                {/* ================= STATUS ================= */}

                <motion.div
                  key={status}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-4 flex items-center gap-2 text-xs"
                >

                  {status === "completed" ? (
                    <>
                      <Check
                        size={14}
                        className="text-emerald-400"
                      />

                      <span className="text-emerald-400">
                        AI task completed successfully
                      </span>
                    </>
                  ) : status === "idle" ? (
                    <>
                      <Sparkles
                        size={14}
                        className="text-cyan-400"
                      />

                      <span className="text-white/35">
                        Give Samvad AI an instruction
                        to get started.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                      <span className="text-cyan-400">
                        {statusText[status]}
                      </span>
                    </>
                  )}

                </motion.div>

              </div>

              {/* ================= CONVERSATION ================= */}

              <div>

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-xs font-medium uppercase tracking-wider text-white/35">
                    Live conversation
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-white/35">
                    <Phone size={12} />
                    AI Call
                  </span>

                </div>

                <div className="min-h-[390px] rounded-2xl border border-white/10 bg-black/30 p-5">

                  {/* ================= CALL STATUS ================= */}

                  <motion.div
                    animate={{
                      scale: waveformActive
                        ? [1, 1.03, 1]
                        : 1,
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: waveformActive
                        ? Infinity
                        : 0,
                    }}
                    className="flex flex-col items-center justify-center pt-4"
                  >

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-fuchsia-500/20">

                      <Phone
                        size={28}
                        className={
                          waveformActive
                            ? "text-cyan-300"
                            : "text-white/30"
                        }
                      />

                      {waveformActive && (
                        <>
                          <span className="absolute inset-0 animate-ping rounded-full border border-cyan-400/20" />

                          <span className="absolute -inset-3 rounded-full border border-blue-500/10" />
                        </>
                      )}

                    </div>

                    <p className="mt-4 text-sm font-semibold">
                      {status === "idle"
                        ? "Ready to call"
                        : statusText[status]}
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      Customer: Rahul
                    </p>

                    {/* ================= WAVEFORM ================= */}

                    <div className="mt-6 flex h-12 items-center justify-center gap-1">

                      {[
                        18,
                        30,
                        42,
                        24,
                        36,
                        48,
                        27,
                        40,
                        20,
                        34,
                        45,
                        25,
                        38,
                        18,
                        30,
                      ].map(
                        (height, index) => (
                          <motion.span
                            key={index}
                            animate={
                              waveformActive
                                ? {
                                    height: [
                                      `${height * 0.4}px`,
                                      `${height}px`,
                                      `${height * 0.55}px`,
                                    ],
                                  }
                                : {
                                    height: "4px",
                                  }
                            }
                            transition={{
                              duration: 0.8,
                              repeat:
                                waveformActive
                                  ? Infinity
                                  : 0,
                              delay: index * 0.05,
                              ease: "easeInOut",
                            }}
                            className="w-1 rounded-full bg-gradient-to-t from-cyan-400 via-blue-500 to-fuchsia-500"
                          />
                        )
                      )}

                    </div>

                  </motion.div>

                  {/* ================= CONVERSATION MESSAGES ================= */}

                  {status !== "idle" && (
                    <div className="mt-8 space-y-5">

                      {/* AI MESSAGE */}

                      {(status === "speaking" ||
                        status === "listening" ||
                        status === "completed") && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          className="flex gap-3"
                        >

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">

                            <span className="text-[10px] font-bold">
                              AI
                            </span>

                          </div>

                          <div className="max-w-[85%]">

                            <p className="mb-1 text-[11px] text-cyan-400">
                              Samvad AI
                            </p>

                            <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-white/70">

                              Hi Rahul, I'm calling regarding your
                              subscription renewal.

                            </div>

                          </div>

                        </motion.div>
                      )}

                      {/* CUSTOMER MESSAGE */}

                      {(status === "listening" ||
                        status === "completed") && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: 15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          className="flex justify-end"
                        >

                          <div className="max-w-[80%]">

                            <p className="mb-1 text-right text-[11px] text-white/35">
                              Rahul
                            </p>

                            <div className="rounded-2xl rounded-tr-md bg-white/[0.08] px-4 py-3 text-sm leading-6 text-white/75">

                              Yes, I'm interested. Can you tell me
                              the options?

                            </div>

                          </div>

                        </motion.div>
                      )}

                      {/* SECOND AI MESSAGE */}

                      {status === "completed" && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          className="flex gap-3"
                        >

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">

                            <span className="text-[10px] font-bold">
                              AI
                            </span>

                          </div>

                          <div className="max-w-[85%]">

                            <p className="mb-1 text-[11px] text-cyan-400">
                              Samvad AI
                            </p>

                            <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-white/70">

                              Absolutely. I can help you with
                              that.

                            </div>

                          </div>

                        </motion.div>
                      )}

                    </div>
                  )}

                </div>

              </div>

            </div>

            {/* ================= RESULT ================= */}

            <motion.div
              initial={false}
              animate={{
                opacity:
                  status === "completed"
                    ? 1
                    : 0.45,
              }}
              className="border-t border-white/10 p-5 sm:p-7"
            >

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      status === "completed"
                        ? "bg-emerald-400/10"
                        : "bg-white/5"
                    }`}
                  >

                    <Check
                      className={
                        status === "completed"
                          ? "text-emerald-400"
                          : "text-white/20"
                      }
                      size={20}
                    />

                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      {status === "completed"
                        ? "Call completed"
                        : "Call result"}
                    </p>

                    <p className="mt-1 text-xs text-white/40">

                      {status === "completed"
                        ? "Rahul is interested in renewing his subscription."
                        : "Your AI-generated result will appear here."}

                    </p>

                  </div>

                </div>

                <div className="flex gap-2 text-xs">

                  <span className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-emerald-400">
                    Positive
                  </span>

                  <span className="rounded-full border border-blue-400/10 bg-blue-400/5 px-3 py-1.5 text-blue-400">
                    Interested
                  </span>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* ================= BOTTOM TEXT ================= */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pb-20 pt-8 text-center text-xs text-white/25"
        >
          From instruction to conversation to outcome — automatically.
        </motion.p>

      </div>
    </section>
  );
}

export default Hero;