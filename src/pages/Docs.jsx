import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Code2,
  Copy,
  ExternalLink,
  Menu,
  MessageSquare,
  Search,
  Sparkles,
  Terminal,
  Webhook,
  X,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const sections = [
  {
    title: "Introduction",
    items: ["Overview", "How Samvad works"],
  },
  {
    title: "Getting Started",
    items: ["Quick Start", "Create an Agent", "First Call"],
  },
  {
    title: "Configuration",
    items: ["Voice", "Instructions", "Knowledge"],
  },
  {
    title: "Developer",
    items: ["API Reference", "Webhooks", "SDKs"],
  },
];

const codeExample = `const response = await fetch(
  "https://api.samvadlabs.ai/v1/calls",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      agent_id: "agent_123",
      phone_number: "+919876543210"
    })
  }
);

const data = await response.json();`;

function Docs() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030308] text-white">

      {/* Navbar */}
     <Navbar />
     
      {/* Docs Header */}
      <section className="border-b border-white/5 px-6 pb-10 pt-36">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex items-center gap-2 text-xs text-white/30">

                <BookOpen size={14} />

                Documentation

                <ChevronRight size={13} />

                Developers

              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

                Build with

                <span className="ml-2 bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Samvad AI.
                </span>

              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">

                Everything you need to create, configure and integrate
                AI voice agents into your products and workflows.

              </p>

            </div>

            {/* Search */}
            <div className="relative w-full max-w-sm">

              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.025] py-3 pl-11 pr-4 text-xs text-white outline-none placeholder:text-white/20 focus:border-cyan-400/30"
              />

              <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/10 px-2 py-1 text-[9px] text-white/20 sm:block">
                /
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* Mobile sidebar button */}
      <div className="mx-auto max-w-7xl px-6 pt-6 lg:hidden">

        <button
          onClick={() => setSidebarOpen(true)}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs text-white/60"
        >

          <Menu size={15} />

          Documentation Menu

        </button>

      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm lg:hidden">

          <div className="absolute left-0 top-0 h-full w-[300px] overflow-y-auto border-r border-white/10 bg-[#05050a] p-6">

            <div className="flex items-center justify-between">

              <span className="text-sm font-semibold">
                Documentation
              </span>

              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white/40 hover:text-white"
              >
                <X size={18} />
              </button>

            </div>

            <DocsSidebar
              activeItem={activeItem}
              setActiveItem={(item) => {
                setActiveItem(item);
                setSidebarOpen(false);
              }}
            />

          </div>

        </div>
      )}

      {/* Main Docs Layout */}
      <main className="mx-auto flex max-w-7xl px-6">

        {/* Desktop Sidebar */}
        <aside className="hidden w-60 shrink-0 border-r border-white/5 py-10 pr-7 lg:block">

          <DocsSidebar
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />

        </aside>

        {/* Content */}
        <article className="min-w-0 flex-1 px-0 py-10 lg:pl-12 lg:pr-16">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] text-white/25">

            Docs

            <ChevronRight size={12} />

            Introduction

            <ChevronRight size={12} />

            {activeItem}

          </div>

          {/* Intro */}
          <section className="mt-8">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/[0.06]">

              <Sparkles
                size={20}
                className="text-cyan-300"
              />

            </div>

            <h2 className="text-3xl font-bold tracking-tight">
              Welcome to Samvad AI
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/40">

              Samvad AI lets you create voice agents that can have
              natural conversations with customers and perform
              business-specific tasks.

            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/40">

              Give your agent instructions, configure its voice,
              connect your workflows and start handling conversations
              automatically.

            </p>

          </section>

          {/* Quick start cards */}
          <section className="mt-14">

            <h3 className="text-xl font-semibold">
              Quick Start
            </h3>

            <p className="mt-3 text-sm text-white/35">
              Get your first AI voice agent running in a few steps.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">

              <QuickCard
                number="01"
                icon={Zap}
                title="Create an agent"
                text="Choose a name, voice and behavior for your AI agent."
              />

              <QuickCard
                number="02"
                icon={MessageSquare}
                title="Add instructions"
                text="Tell your agent what it should say, ask and do."
              />

              <QuickCard
                number="03"
                icon={Terminal}
                title="Make a call"
                text="Trigger a conversation through the API."
              />

            </div>

          </section>

          {/* Agent */}
          <section className="mt-16 border-t border-white/5 pt-12">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/[0.08]">

                <Code2
                  size={17}
                  className="text-blue-300"
                />

              </div>

              <div>

                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Getting Started
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  Create your first agent
                </h3>

              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-white/40">

              An agent is the intelligence behind every Samvad
              conversation. Define its personality, instructions and
              business objective before connecting it to a phone number
              or workflow.

            </p>

            <div className="mt-8 space-y-4">

              <Step
                number="01"
                title="Choose a voice"
                text="Select the voice and language that best matches your customer experience."
              />

              <Step
                number="02"
                title="Write agent instructions"
                text="Describe what the agent should do, what questions it should ask and how it should respond."
              />

              <Step
                number="03"
                title="Connect your workflow"
                text="Connect your API, CRM or business workflow so the conversation can trigger real actions."
              />

            </div>

          </section>

          {/* API */}
          <section className="mt-16 border-t border-white/5 pt-12">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/[0.08]">

                <Terminal
                  size={17}
                  className="text-fuchsia-300"
                />

              </div>

              <div>

                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Developer
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  Start a conversation
                </h3>

              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-white/40">

              Trigger an outbound conversation using the Samvad API.
              Replace the example values with your agent and customer
              details.

            </p>

            {/* Code block */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#010104]">

              <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                  <span className="h-2 w-2 rounded-full bg-green-400/60" />

                  <span className="ml-2 text-[10px] text-white/25">
                    JavaScript
                  </span>

                </div>

                <button
                  onClick={copyCode}
                  className="flex items-center gap-2 text-[10px] text-white/30 transition hover:text-white"
                >

                  {copied ? (
                    <>
                      <Check size={13} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      Copy
                    </>
                  )}

                </button>

              </div>

              <pre className="overflow-x-auto p-5 text-xs leading-7 text-white/50">
                <code>{codeExample}</code>
              </pre>

            </div>

            <div className="mt-5 flex gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">

              <Zap
                size={17}
                className="mt-0.5 shrink-0 text-cyan-300"
              />

              <div>

                <p className="text-xs font-semibold text-white/70">
                  API keys
                </p>

                <p className="mt-1 text-xs leading-6 text-white/30">
                  Keep your API keys private and store them securely
                  on your backend. Never expose secret keys in frontend
                  code.
                </p>

              </div>

            </div>

          </section>

          {/* Webhooks */}
          <section className="mt-16 border-t border-white/5 pt-12">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/[0.07]">

                <Webhook
                  size={17}
                  className="text-cyan-300"
                />

              </div>

              <div>

                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Events
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  Webhooks
                </h3>

              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-white/40">

              Receive real-time events from your conversations and
              connect them to your own backend systems.

            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <EventCard
                event="call.started"
                text="A conversation has started."
              />

              <EventCard
                event="call.completed"
                text="A conversation has ended."
              />

              <EventCard
                event="call.failed"
                text="A conversation could not be completed."
              />

              <EventCard
                event="transcript.ready"
                text="Conversation transcript is available."
              />

            </div>

          </section>

          {/* Next */}
          <section className="mt-16 border-t border-white/5 pt-10">

            <div className="flex flex-col justify-between gap-5 rounded-2xl border border-white/8 bg-white/[0.025] p-6 sm:flex-row sm:items-center">

              <div>

                <p className="text-xs text-white/25">
                  Next
                </p>

                <h3 className="mt-1 text-sm font-semibold">
                  Build your first AI voice agent
                </h3>

              </div>

              <a
                href="/contact"
                className="group flex items-center gap-2 text-xs font-medium text-cyan-300"
              >

                Get Started

                <ArrowRight
                  size={14}
                  className="transition group-hover:translate-x-1"
                />

              </a>

            </div>

          </section>

        </article>

      </main>

      {/* Developer CTA */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-24">

        <div className="mx-auto max-w-5xl rounded-3xl border border-white/8 bg-white/[0.02] p-8 text-center sm:p-12">

          <ExternalLink
            size={20}
            className="mx-auto text-cyan-300"
          />

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Ready to build with Samvad?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/35">

            Create an AI voice agent, connect your workflow and let
            your application start the conversation.

          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.03]"
          >

            Start Building

            <ArrowRight size={16} />

          </a>

        </div>

      </section>

      {/* Footer */}
            {/* Developer CTA */}

      <Footer />

    

    </div>
  );
}

/* -------------------------------- */
/* Sidebar */
/* -------------------------------- */

function DocsSidebar({
  activeItem,
  setActiveItem,
}) {
  return (
    <div className="space-y-7">

      {sections.map((section) => (
        <div key={section.title}>

          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20">
            {section.title}
          </p>

          <div className="space-y-1">

            {section.items.map((item) => (

              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition ${
                  activeItem === item
                    ? "bg-cyan-400/[0.07] text-cyan-300"
                    : "text-white/35 hover:bg-white/[0.03] hover:text-white/70"
                }`}
              >

                <span>
                  {item}
                </span>

                {activeItem === item && (
                  <ChevronRight size={13} />
                )}

              </button>

            ))}

          </div>

        </div>
      ))}

    </div>
  );
}

/* -------------------------------- */
/* Quick Card */
/* -------------------------------- */

function QuickCard({
  number,
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">

      <div className="flex items-center justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/[0.05]">

          <Icon
            size={16}
            className="text-cyan-300"
          />

        </div>

        <span className="text-[10px] text-white/15">
          {number}
        </span>

      </div>

      <h4 className="mt-5 text-sm font-semibold">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-6 text-white/30">
        {text}
      </p>

    </div>
  );
}

/* -------------------------------- */
/* Step */
/* -------------------------------- */

function Step({
  number,
  title,
  text,
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-5">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-[10px] font-semibold text-cyan-300">
        {number}
      </div>

      <div>

        <h4 className="text-sm font-semibold">
          {title}
        </h4>

        <p className="mt-2 text-xs leading-6 text-white/30">
          {text}
        </p>

      </div>

    </div>
  );
}

/* -------------------------------- */
/* Event Card */
/* -------------------------------- */

function EventCard({
  event,
  text,
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">

      <div className="flex items-center gap-2">

        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

        <code className="text-xs text-cyan-300">
          {event}
        </code>

      </div>

      <p className="mt-3 text-xs leading-6 text-white/30">
        {text}
      </p>

    </div>
  );
}

export default Docs;