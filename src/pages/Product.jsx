

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  Settings2,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const capabilities = [
  {
    icon: Mic,
    title: "Natural voice conversations",
    description:
      "Create AI agents that can listen, understand context and respond naturally.",
  },
  {
    icon: Workflow,
    title: "Custom workflows",
    description:
      "Give your agent clear goals, instructions and actions for every conversation.",
  },
  {
    icon: Target,
    title: "Goal-driven calls",
    description:
      "Turn conversations into outcomes such as qualified leads, bookings or follow-ups.",
  },
  {
    icon: Zap,
    title: "Real-time responses",
    description:
      "Respond dynamically instead of forcing customers through rigid call scripts.",
  },
  {
    icon: Settings2,
    title: "Business controls",
    description:
      "Configure agent behavior, conversation rules and business-specific instructions.",
  },
  {
    icon: Clock3,
    title: "Always available",
    description:
      "Let your AI agents handle conversations whenever your customers need them.",
  },
];

const demoConversation = [
  {
    speaker: "AI",
    text: "Hi Rahul, I'm calling regarding your plan renewal. Is this a good time to talk?",
  },
  {
    speaker: "Customer",
    text: "Yes, sure. What plans do you have available?",
  },
  {
    speaker: "AI",
    text: "We have three plans available. I can help you find the one that fits your requirements.",
  },
  {
    speaker: "Customer",
    text: "We need something for around 50 employees.",
  },
  {
    speaker: "AI",
    text: "Got it. Based on that requirement, the Pro plan could be a good fit.",
  },
];

const demoResult = [
  {
    label: "Call Status",
    value: "Completed",
  },
  {
    label: "Customer Intent",
    value: "Interested",
  },
  {
    label: "Team Size",
    value: "50 employees",
  },
  {
    label: "Recommended Plan",
    value: "Pro",
  },
];

const callHistory = [
  {
    name: "Rahul Sharma",
    phone: "+91 98••••••42",
    status: "Qualified",
    intent: "High",
    duration: "04:32",
    time: "2 min ago",
  },
  {
    name: "Priya Verma",
    phone: "+91 87••••••19",
    status: "Follow-up",
    intent: "Medium",
    duration: "02:18",
    time: "18 min ago",
  },
  {
    name: "Aman Singh",
    phone: "+91 76••••••63",
    status: "Not Interested",
    intent: "Low",
    duration: "01:41",
    time: "42 min ago",
  },
];

function Product() {
  
  const [agentName, setAgentName] = useState("Renewal Assistant");

  const [voice, setVoice] = useState("Nova");

  const [goal, setGoal] = useState(
    "Identify customers who are ready to renew."
  );

  const [saved, setSaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
const [transcript, setTranscript] = useState("");
  const [availableVoices, setAvailableVoices] = useState([]);
  
useEffect(() => {
  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    setAvailableVoices(voices);
  };

  loadVoices();

  window.speechSynthesis.onvoiceschanged = loadVoices;

  return () => {
    window.speechSynthesis.onvoiceschanged = null;
  };
}, []);

const previewVoice = () => {
  window.speechSynthesis.cancel();

  const text =
    "Hi, I'm your Samvad AI voice agent. I can talk to your customers, understand their requirements, and help your team automate conversations.";

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = availableVoices;

  let selectedVoice;

  if (voice === "Nova") {
    selectedVoice = voices.find((v) =>
      /female|zira|samantha|aria/i.test(v.name)
    );
  }

  if (voice === "Aria") {
    selectedVoice = voices.find((v) =>
      /female|samantha|zira|google uk english female/i.test(v.name)
    );
  }

  if (voice === "Atlas") {
    selectedVoice = voices.find((v) =>
      /male|david|alex|google uk english male/i.test(v.name)
    );
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.onstart = () => {
    setIsPlaying(true);
  };

  utterance.onend = () => {
    setIsPlaying(false);
  };

  utterance.onerror = () => {
    setIsPlaying(false);
  };

  window.speechSynthesis.speak(utterance);
};
const startListening = () => {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition is not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    setIsListening(true);
  };

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    setTranscript(text);
  };

recognition.onerror = (event) => {
  console.log("Speech recognition:", event.error);

  if (event.error === "not-allowed") {
    alert("Microphone permission allow karo.");
  }

  if (event.error === "audio-capture") {
    alert("Microphone detect nahi ho raha.");
  }

  if (event.error === "aborted") {
    console.log("Speech recognition stopped.");
  }

  setIsListening(false);
};

  recognition.onend = () => {
    setIsListening(false);
  };
  setTranscript("");
setIsListening(true);

  recognition.start();
};

  const [conversationStarted, setConversationStarted] = useState(false);
  const [conversationStep, setConversationStep] = useState(0);
  
  const startConversation = () => {
  setConversationStarted(true);
  setConversationStep(0);

  let step = 0;

  const interval = setInterval(() => {
    step += 1;

    if (step >= demoConversation.length) {
      clearInterval(interval);
      return;
    }

    setConversationStep(step);
  }, 1800);
};
  return (
  
    <div className="min-h-screen bg-[#030308] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[160px]" />

        <div className="relative mx-auto max-w-6xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2 text-xs text-cyan-300">
              <Sparkles size={14} />
              Samvad AI Voice Agents
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

              Give AI a task.

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                Let it handle the conversation.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
              Build AI voice agents that call customers, understand what
              they need, follow your instructions and turn conversations
              into real business outcomes.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="/contact"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.03]"
              >
                Build Your AI Agent
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
              >
                <Play size={15} />
                Watch Demo
              </a>

            </div>

          </motion.div>

        </div>

        {/* Agent Builder */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="relative mx-auto mt-20 max-w-6xl"
        >

          <div className="absolute -inset-10 rounded-[50px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08080e] shadow-2xl">

            {/* Browser */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">

              <div className="flex gap-1.5">

                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

              </div>

              <span className="hidden rounded-lg border border-white/5 bg-white/[0.03] px-10 py-1.5 text-[10px] text-white/20 sm:block">
                app.samvadlabs.ai/agents
              </span>

              <div className="h-4 w-4" />

            </div>

            {/* Dashboard */}
            <div className="grid min-h-[500px] lg:grid-cols-[230px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 p-5 lg:block">

                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500">
                    <span className="text-xs font-black">
                      S
                    </span>
                  </div>

                  <span className="text-xs font-semibold">
                    Agent Studio
                  </span>

                </div>

                <div className="mt-8 space-y-1">

                  {[
                    "Overview",
                    "Agents",
                    "Calls",
                    "Knowledge",
                    "Integrations",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-xl px-3 py-2.5 text-xs ${
                        index === 1
                          ? "bg-white/[0.07] text-white"
                          : "text-white/30"
                      }`}
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </aside>

              {/* Builder */}
              <div className="min-w-0">

                <div className="border-b border-white/10 px-5 py-5 sm:px-7">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] text-white/25">
                        AI Agents
                      </p>

                      <input
                    value={agentName}
                    onChange={(e) => {
                        setAgentName(e.target.value);
                        setSaved(false);
                    }}
                    className="mt-1 w-full max-w-xs bg-transparent text-lg font-semibold text-white outline-none placeholder:text-white/20"
                    placeholder="Agent name"
                    />
                    </div>

                    <div className="flex items-center gap-2">

                      <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-[9px] text-emerald-400">

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        Active

                      </span>

                    </div>

                  </div>

                </div>

                <div className="grid gap-5 p-5 sm:p-7 xl:grid-cols-[1fr_0.8fr]">

                  {/* Instructions */}
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-5">

                    <div className="flex items-center gap-2">

                      <Bot
                        size={17}
                        className="text-cyan-300"
                      />

                      <p className="text-xs font-medium">
                        Agent instructions
                      </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.02] p-4">

                      <p className="text-[1px] leading-6 text-white/45">
                        <textarea
                            defaultValue=
                            {`You are a customer renewal assistant.
                            Speak naturally and politely.
                            Understand the customer's requirements,
                            explain available plans and identify
                            customers who are ready to renew.`}
                            rows={7}
                            className="w-full resize-none bg-transparent text-[10px] leading-6 text-white/45 outline-none"
                            />
                      </p>

                    </div>
                    <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 p-5">

  <div className="flex items-center gap-2">

    <Target
      size={15}
      className="text-fuchsia-300"
    />

    <p className="text-xs font-medium">
      Agent goal
    </p>

  </div>

  <textarea
    value={goal}
    onChange={(e) => {
      setGoal(e.target.value);
      setSaved(false);
    }}
    rows={3}
    className="mt-4 w-full resize-none rounded-xl border border-white/8 bg-white/[0.02] p-3 text-[10px] leading-5 text-white/40 outline-none focus:border-cyan-400/20"
  />

</div>

                    <div className="mt-5 space-y-3">

                      {[
                        "Understand customer intent",
                        "Answer plan-related questions",
                        "Offer relevant options",
                        "Create follow-up when required",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                            

                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10">
                            <Check
                              size={11}
                              className="text-emerald-400"
                            />
                          </div>
                          

                          <span className="text-xs text-white/40">
                            {item}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>
                  <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 p-5">

  <div className="flex items-center justify-between">

    <div>
      <p className="text-xs font-medium">
        Voice
      </p>

      <p className="mt-1 text-[10px] text-white/25">
        Choose how your agent sounds.
      </p>
    </div>

<button
  type="button"
  onClick={startListening}
  className={`transition ${
    isListening
      ? "text-red-400"
      : "text-cyan-300"
  }`}
>
  <Mic size={18} />
</button>

  </div>

  <div className="mt-4 grid grid-cols-3 gap-2">

    {["Nova", "Aria", "Atlas"].map((item) => (

      <button
        key={item}
        onClick={() => {
          setVoice(item);
          setSaved(false);
        }}
        className={`rounded-xl border px-3 py-2 text-[10px] transition ${
          voice === item
            ? "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"
            : "border-white/8 bg-white/[0.02] text-white/30 hover:text-white"
        }`}
      >
        {item}
      </button>

    ))}

  </div>

</div>

                  {/* Agent preview */}
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-5">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">

                          <Headphones size={16} />

                          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#08080e] bg-emerald-400" />

                        </div>

                        <div>

                          <p className="text-xs font-medium">
                            {voice} Voice Agent
                          
                          </p>

                          <p
                            className={`text-[10px] ${
                              isPlaying
                                ? "text-cyan-300"
                                : "text-emerald-400"
                            }`}
                          >
                            {isPlaying ? "Previewing voice" : "Ready"}
                          </p>

                        </div>

                      </div>
                      

                      <button
                        onClick={() => {
                          if (isPlaying) {
                            window.speechSynthesis.cancel();
                            setIsPlaying(false);
                          } else {
                            previewVoice();
                          }
                        }}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border transition ${
                            isPlaying
                            ? "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"
                            : "border-white/10 bg-white/[0.03] text-white"
                        }`}
                        >
                        {isPlaying ? (
                            <span className="text-[10px] font-bold">II</span>
                        ) : (
                            <Play size={12} />
                        )}
                        </button>

                    </div>
                    <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 p-5">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs font-medium">
                          Voice
                        </p>

                        <p className="mt-1 text-[10px] text-white/25">
                          Choose how your agent sounds.
                        </p>
                      </div>

                  <button
                    type="button"
                    onClick={startListening}
                    className={`transition ${
                      isListening
                        ? "text-red-400"
                        : "text-cyan-300"
                    }`}

                    
                  >
                    <Mic size={18} />
                  </button>

                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">

                      {["Nova", "Aria", "Atlas"].map((item) => (

                        <button
                          key={item}
                          onClick={() => {
                            setVoice(item);
                            setSaved(false);
                          }}
                          className={`rounded-xl border px-3 py-2 text-[10px] transition ${
                            voice === item
                              ? "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"
                              : "border-white/8 bg-white/[0.02] text-white/30 hover:text-white"
                          }`}
                        >
                          {item}
                        </button>
                        

                      ))}
{transcript && (
  <div className="mt-4 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] p-4">
    <p className="text-[9px] uppercase tracking-wider text-cyan-300/60">
      You said
    </p>

    <p className="mt-2 text-xs leading-5 text-white/50">
      {transcript}
    </p>
  </div>
)}
                    </div>

                  </div>

                    {/* Wave */}
                    <div className="mt-10 flex h-20 items-center justify-center gap-1">

                      {[
                        12,
                        24,
                        18,
                        35,
                        22,
                        42,
                        28,
                        17,
                        32,
                        20,
                        38,
                        25,
                        15,
                        30,
                        20,
                      ].map((height, index) => (
                        <motion.span
                          key={index}
                          animate={
                            isPlaying
                              ? {
                                  height: [
                                    `${height * 0.4}px`,
                                    `${height}px`,
                                    `${height * 0.5}px`,
                                    `${height * 0.8}px`,
                                  ],
                                }
                              : {
                                  height: `${height * 0.35}px`,
                                }
                          }
                          transition={{
                            duration: isPlaying ? 0.7 : 0.3,
                            repeat: isPlaying ? Infinity : 0,
                            delay: index * 0.05,
                          }}
                          className="w-1 rounded-full bg-gradient-to-t from-cyan-400 via-blue-500 to-fuchsia-500"
                        />
                      ))}

                    </div>

                    <div className="mt-7 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] p-4">

                      <div className="flex items-center gap-2">

                        <Phone
                          size={14}
                          className="text-cyan-300"
                        />

                        <span className="text-[10px] text-cyan-300">
                          {isPlaying
                            ? `Previewing ${voice} voice`
                            : "Agent ready to call"}
                        </span>

                      </div>

                        <p className="mt-2 text-[10px] leading-5 text-white/30">
                          {isPlaying
                            ? `${voice} is speaking naturally according to your agent instructions.`
                            : "Your AI agent will follow the instructions and adapt to the customer's responses."}
                        </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* How it works */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From instruction
              <br />
              to conversation.
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                icon: Bot,
                title: "Define your agent",
                text: "Tell Samvad AI who your agent is, what it should say and what outcome it needs to achieve.",
              },
              {
                number: "02",
                icon: Phone,
                title: "Start conversations",
                text: "Your AI agent handles calls and interacts with customers using natural voice conversations.",
              },
              {
                number: "03",
                icon: Target,
                title: "Get the outcome",
                text: "Every conversation can produce structured outcomes, insights and follow-up actions.",
              },
            ].map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    delay: index * 0.1,
                  }}
                  className="relative rounded-3xl border border-white/8 bg-white/[0.025] p-7"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-white/20">
                      {step.number}
                    </span>

                    <Icon
                      size={19}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="mt-12 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {step.text}
                  </p>

                  {index !== 2 && (
                    <ChevronRight
                      size={18}
                      className="absolute -right-3 top-1/2 hidden text-white/10 md:block"
                    />
                  )}

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Capabilities */}
      <section className="border-t border-white/5 bg-[#030308] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/10 bg-fuchsia-400/[0.04] px-4 py-2 text-xs text-fuchsia-300">
              <Sparkles size={14} />
              Capabilities
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              More than a voice.
              <br />

              <span className="text-white/35">
                It's an AI worker.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item, index) => {

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
                  className="group rounded-3xl border border-white/8 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/15"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10">

                    <Icon
                      size={20}
                      className="text-cyan-300"
                    />

                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Conversation Simulator */}

<section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

  <div className="mx-auto max-w-7xl">

    <div className="mx-auto max-w-3xl text-center">

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2 text-xs text-cyan-300">

        <Phone size={14} />

        Conversation Preview

      </div>

      <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">

        See your agent

        <br />

        <span className="text-white/35">
          handle a real conversation.
        </span>

      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/30">

        Preview how your AI agent can understand customers,
        respond naturally and move the conversation toward your goal.

      </p>

    </div>


    {/* Simulator */}

    <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#08080e]">

      {/* Simulator Header */}

      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-7">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500">

            <Bot size={18} />

          </div>

          <div>

            <p className="text-xs font-semibold">
              {agentName}
            </p>

            <p className="text-[10px] text-white/25">
              {voice} voice · AI agent
            </p>

          </div>

        </div>


        <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.03] px-3 py-1.5">

          <span
            className={`h-1.5 w-1.5 rounded-full ${
              conversationStarted
                ? "animate-pulse bg-emerald-400"
                : "bg-white/20"
            }`}
          />

          <span className="text-[9px] text-white/30">

            {conversationStarted
              ? "Conversation active"
              : "Ready"}

          </span>

        </div>

      </div>


      {/* Conversation */}

      <div className="min-h-[420px] space-y-4 p-5 sm:p-8">

        {!conversationStarted ? (

          <div className="flex min-h-[340px] flex-col items-center justify-center text-center">

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/10 bg-cyan-400/[0.04]">

              <div className="absolute inset-0 animate-ping rounded-full border border-cyan-400/10" />

              <Headphones
                size={27}
                className="text-cyan-300"
              />

            </div>

            <h3 className="mt-6 text-sm font-semibold">
              Ready to simulate a call
            </h3>

            <p className="mt-2 max-w-sm text-xs leading-6 text-white/25">

              Start the preview and watch Samvad AI
              handle a conversation step by step.

            </p>

            <button
              onClick={startConversation}
              className="mt-7 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3 text-xs font-semibold transition hover:scale-[1.03]"
            >

              <Play size={13} />

              Start Conversation

            </button>

          </div>

        ) : (

          <AnimatePresence initial={false}>

            {demoConversation
              .slice(0, conversationStep + 1)
              .map((message, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex ${
                    message.speaker === "AI"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.speaker === "AI"
                        ? "rounded-bl-md border border-cyan-400/10 bg-cyan-400/[0.04]"
                        : "rounded-br-md border border-white/8 bg-white/[0.035]"
                    }`}
                  >

                    <div className="flex items-center gap-2">

                      {message.speaker === "AI" ? (
                        <Bot
                          size={12}
                          className="text-cyan-300"
                        />
                      ) : (
                        <Users
                          size={12}
                          className="text-fuchsia-300"
                        />
                      )}

                      <span
                        className={`text-[9px] font-semibold ${
                          message.speaker === "AI"
                            ? "text-cyan-300"
                            : "text-fuchsia-300"
                        }`}
                      >
                        {message.speaker}
                      </span>

                    </div>

                    <p className="mt-2 text-xs leading-6 text-white/45">
                      {message.text}
                    </p>

                  </div>

                </motion.div>

              ))}

          </AnimatePresence>

        )}

      </div>


      {/* Bottom Status */}

      {conversationStarted && (
        <div className="border-t border-white/8 px-5 py-4 sm:px-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <div className="flex items-center gap-2">

                <Mic
                  size={13}
                  className="text-cyan-300"
                />

                <span className="text-[10px] text-white/35">
                  {conversationStep >= demoConversation.length - 1
                    ? "Conversation complete"
                    : `${voice} is speaking...`}
                </span>
                {conversationStarted &&
  conversationStep >= demoConversation.length - 1 && (

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="border-t border-white/8 p-5 sm:p-7"
    >

      {/* Result heading */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="flex items-center gap-2">

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/10">

              <Check
                size={14}
                className="text-emerald-300"
              />

            </div>

            <p className="text-sm font-semibold">
              Conversation analyzed
            </p>

          </div>

          <p className="mt-2 text-[10px] text-white/25">
            Samvad converted the conversation into a structured outcome.
          </p>

        </div>

        <span className="w-fit rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1.5 text-[9px] text-emerald-300">
          QUALIFIED
        </span>

      </div>


      {/* Result metrics */}

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

        {demoResult.map((result) => (

          <div
            key={result.label}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-4"
          >

            <p className="text-[9px] uppercase tracking-[0.12em] text-white/20">
              {result.label}
            </p>

            <p className="mt-2 text-xs font-medium text-white/65">
              {result.value}
            </p>

          </div>

        ))}

      </div>


      {/* AI Summary */}

      <div className="mt-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">

        <div className="flex items-center gap-2">

          <Sparkles
            size={14}
            className="text-cyan-300"
          />

          <p className="text-[10px] font-semibold text-cyan-300">
            AI Summary
          </p>

        </div>

        <p className="mt-3 text-xs leading-6 text-white/40">

          Customer is interested in renewing the service for a team
          of approximately 50 employees. Based on the conversation,
          the Pro plan appears to match the customer's current
          requirement. A sales follow-up is recommended.

        </p>

      </div>


      {/* Next action */}

      <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-fuchsia-400/10 bg-fuchsia-400/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-[9px] uppercase tracking-[0.14em] text-fuchsia-300">
            Recommended next action
          </p>

          <p className="mt-2 text-xs text-white/50">
            Schedule a sales follow-up with the customer.
          </p>

        </div>

        <button className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-fuchsia-400/15 bg-fuchsia-400/[0.05] px-4 py-2.5 text-[10px] text-fuchsia-200 transition hover:bg-fuchsia-400/[0.1]">

          Create Follow-up

          <ArrowRight size={12} />

        </button>

      </div>

    </motion.div>

  )}

              </div>

              <div className="mt-3 flex items-center gap-1">

                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bar) => (

                  <motion.span
                    key={bar}
                    animate={{
                      height: [
                        4,
                        8 + (bar % 5) * 4,
                        5,
                        10 + (bar % 3) * 3,
                      ],
                    }}
                    transition={{
                      repeat:
                        conversationStep <
                        demoConversation.length - 1
                          ? Infinity
                          : 0,
                      duration: 0.7,
                      delay: bar * 0.05,
                    }}
                    className="w-1 rounded-full bg-cyan-300"
                  />

                ))}

              </div>

            </div>


            {conversationStep >= demoConversation.length - 1 && (

              <div className="flex items-center gap-2 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] px-4 py-2.5">

                <Check
                  size={13}
                  className="text-emerald-300"
                />

                <span className="text-[10px] text-emerald-300">
                  Goal identified
                </span>

              </div>

            )}

          </div>

        </div>
      )}

    </div>

  </div>

</section>
{/* Call History Dashboard */}

<section className="border-t border-white/5 bg-[#030308] px-6 py-28">

  <div className="mx-auto max-w-7xl">

    {/* Heading */}

    <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

      <div>

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] px-4 py-2 text-xs text-blue-300">

          <Workflow size={13} />

          AI Call Intelligence

        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">

          Every conversation.

          <br />

          <span className="text-white/35">
            One clear outcome.
          </span>

        </h2>

      </div>

      <p className="max-w-md text-sm leading-7 text-white/30">

        Samvad turns every customer conversation into structured
        data your team can actually use.

      </p>

    </div>


    {/* Dashboard */}

    <div className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-[#07070d]">

      {/* Dashboard Header */}

      <div className="flex flex-col gap-4 border-b border-white/8 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

        <div>

          <p className="text-xs font-semibold">
            Call History
          </p>

          <p className="mt-1 text-[10px] text-white/20">
            Recent AI-powered conversations
          </p>

        </div>

        <div className="flex items-center gap-2">

          <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2">

            <SearchIcon />

            <span className="text-[10px] text-white/20">
              Search calls
            </span>

          </div>

          <button className="rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2 text-[10px] text-white/30">
            Filter
          </button>

        </div>

      </div>


      {/* Stats */}

      <div className="grid border-b border-white/8 sm:grid-cols-3">

        <DashboardStat
          label="Total calls"
          value="1,284"
          change="+18.4%"
        />

        <DashboardStat
          label="Qualified leads"
          value="327"
          change="+24.7%"
        />

        <DashboardStat
          label="Avg. duration"
          value="03:42"
          change="-12.1%"
        />

      </div>


      {/* Call rows */}

      <div className="divide-y divide-white/5">

        {callHistory.map((call, index) => (

          <motion.div
            key={call.name}
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="grid gap-4 px-5 py-5 transition hover:bg-white/[0.015] sm:grid-cols-[1.4fr_1fr_0.8fr_0.7fr_0.7fr] sm:items-center sm:px-7"
          >

            {/* Customer */}

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/[0.025]">

                <Users
                  size={15}
                  className="text-white/30"
                />

              </div>

              <div>

                <p className="text-xs font-medium">
                  {call.name}
                </p>

                <p className="mt-1 text-[9px] text-white/20">
                  {call.phone}
                </p>

              </div>

            </div>


            {/* Status */}

            <div>

              <p className="mb-1 text-[8px] uppercase tracking-wider text-white/15 sm:hidden">
                Status
              </p>

              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] ${
                  call.status === "Qualified"
                    ? "border-emerald-400/10 bg-emerald-400/[0.03] text-emerald-300"
                    : call.status === "Follow-up"
                      ? "border-amber-400/10 bg-amber-400/[0.03] text-amber-300"
                      : "border-white/8 bg-white/[0.02] text-white/25"
                }`}
              >
                {call.status}
              </span>

            </div>


            {/* Intent */}

            <div>

              <p className="mb-1 text-[8px] uppercase tracking-wider text-white/15 sm:hidden">
                Intent
              </p>

              <div className="flex items-center gap-2">

                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    call.intent === "High"
                      ? "bg-emerald-400"
                      : call.intent === "Medium"
                        ? "bg-amber-400"
                        : "bg-white/20"
                  }`}
                />

                <span className="text-[10px] text-white/35">
                  {call.intent}
                </span>

              </div>

            </div>


            {/* Duration */}

            <div>

              <p className="mb-1 text-[8px] uppercase tracking-wider text-white/15 sm:hidden">
                Duration
              </p>

              <div className="flex items-center gap-2">

                <Clock3
                  size={12}
                  className="text-white/20"
                />

                <span className="text-[10px] text-white/30">
                  {call.duration}
                </span>

              </div>

            </div>


            {/* Time */}

            <div className="flex items-center justify-between sm:block">

              <p className="text-[10px] text-white/20">
                {call.time}
              </p>

              <button className="text-[10px] text-cyan-300/60 transition hover:text-cyan-300">
                View
              </button>

            </div>

          </motion.div>

        ))}

      </div>


      {/* Dashboard Footer */}

      <div className="flex flex-col gap-4 border-t border-white/8 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

        <p className="text-[10px] text-white/20">
          Showing recent AI conversations
        </p>

        <button className="flex items-center gap-2 text-[10px] text-cyan-300/70 transition hover:text-cyan-300">

          View all calls

          <ArrowRight size={12} />

        </button>

      </div>

    </div>

  </div>

</section>


      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#05050a] px-6 py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <Sparkles
            size={22}
            className="mx-auto text-cyan-300"
          />

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Build your first
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              AI voice agent.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
            Give your agent a goal. Samvad AI handles the conversation.
          </p>

          <a
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-7 py-4 text-sm font-semibold transition hover:scale-[1.03]"
          >
            Get Started
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
function DashboardStat({
  label,
  value,
  change,
}) {
  return (
    <div className="border-b border-white/8 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-6">

      <p className="text-[9px] uppercase tracking-[0.14em] text-white/20">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-3">

        <p className="text-2xl font-semibold tracking-tight">
          {value}
        </p>

        <span className="mb-1 text-[9px] text-emerald-300">
          {change}
        </span>

      </div>

    </div>
  );
}


function SearchIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-white/20"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
      />

      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
export default Product;