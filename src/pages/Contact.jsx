import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const nextSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell us about your workflow",
    text: "Share the conversation or business process you want to automate.",
  },
  {
    number: "02",
    icon: Users,
    title: "Talk with our team",
    text: "We'll understand your requirements and discuss the right approach.",
  },
  {
    number: "03",
    icon: Calendar,
    title: "See Samvad in action",
    text: "Get a personalized walkthrough of how an AI voice agent can work for you.",
  },
];

const faqs = [
  {
    question: "What can I automate with Samvad AI?",
    answer:
      "You can automate many repetitive voice conversations such as lead qualification, customer support, appointment booking, follow-ups and other business workflows.",
  },
  {
    question: "Can the AI agent be customized?",
    answer:
      "Yes. Agents can be designed around your business instructions, conversation goals, voice and workflow requirements.",
  },
  {
    question: "Can Samvad connect with our existing systems?",
    answer:
      "Samvad is designed to work with APIs, webhooks and business workflows so it can connect with systems you already use.",
  },
  {
    question: "Can a human take over a conversation?",
    answer:
      "Yes. Human involvement can be part of the workflow whenever a conversation requires additional attention.",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    useCase: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#030308] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">

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

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2 text-xs text-cyan-300">

              <Sparkles size={14} />

              Let's build something intelligent

            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

              Let's talk about

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                your conversations.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">

              Tell us what you want to automate and we'll help you
              explore how Samvad AI can fit into your workflow.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Contact section */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}
          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Talk to SamvadLabs
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

              Have a workflow

              <br />

              <span className="text-white/35">
                worth automating?
              </span>

            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/35">

              Whether you're exploring voice AI for the first time or
              already have a production workflow, we'd love to hear
              what you're building.

            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-3">

              <ContactInfo
                icon={Mail}
                title="Email"
                value="hello@samvadlabs.ai"
              />

              <ContactInfo
                icon={Phone}
                title="Phone"
                value="+91 00000 00000"
              />

              <ContactInfo
                icon={Clock}
                title="Response time"
                value="Usually within 1 business day"
              />

              <ContactInfo
                icon={MapPin}
                title="Location"
                value="India"
              />

            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">

              <div className="flex items-start gap-3">

                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <p className="text-xs leading-6 text-white/35">

                  No complicated sales process. Tell us what you're
                  trying to achieve and we'll start from there.

                </p>

              </div>

            </div>

          </div>

          {/* Form */}
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
            className="rounded-[28px] border border-white/8 bg-white/[0.025] p-6 sm:p-8"
          >

            {submitted ? (
              <div className="flex min-h-[620px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/[0.08]">

                  <CheckCircle2
                    size={30}
                    className="text-emerald-400"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  Message received.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/35">

                  Thanks for reaching out. Our team will review your
                  message and get back to you.

                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-xs text-cyan-300 hover:text-cyan-200"
                >
                  Send another message
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-fuchsia-500/10">

                    <Send
                      size={17}
                      className="text-cyan-300"
                    />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold">
                      Book a conversation
                    </h3>

                    <p className="text-xs text-white/25">
                      Tell us a little about your project.
                    </p>

                  </div>

                </div>

                {/* Name + Email */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <Input
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />

                  <Input
                    label="Work email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                  />

                </div>

                {/* Company + Phone */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2">

                  <Input
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />

                  <Input
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91"
                  />

                </div>

                {/* Use case */}
                <div className="mt-4">

                  <label className="mb-2 block text-[11px] font-medium text-white/40">
                    What are you interested in?
                  </label>

                  <select
                    name="useCase"
                    value={form.useCase}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#08080e] px-4 py-3 text-xs text-white/60 outline-none transition focus:border-cyan-400/30"
                  >

                    <option value="">
                      Select a use case
                    </option>

                    <option value="lead-generation">
                      Lead Generation
                    </option>

                    <option value="customer-support">
                      Customer Support
                    </option>

                    <option value="appointment">
                      Appointment Booking
                    </option>

                    <option value="sales">
                      Sales & Follow-ups
                    </option>

                    <option value="other">
                      Something else
                    </option>

                  </select>

                </div>

                {/* Message */}
                <div className="mt-4">

                  <label className="mb-2 block text-[11px] font-medium text-white/40">
                    Tell us about your workflow
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like your AI voice agent to do?"
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#08080e] px-4 py-3 text-xs leading-6 text-white/60 outline-none transition placeholder:text-white/20 focus:border-cyan-400/30"
                  />

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold transition hover:scale-[1.01]"
                >

                  Send Message

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />

                </button>

                <p className="mt-4 text-center text-[10px] leading-5 text-white/20">

                  By submitting this form, you agree to be contacted
                  about SamvadLabs products and services.

                </p>

              </form>
            )}

          </motion.div>

        </div>

      </section>

      {/* What happens next */}
      <section className="border-t border-white/5 bg-[#030308] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              What happens next
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

              Simple from

              <br />

              <span className="text-white/35">
                conversation to action.
              </span>

            </h2>

          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-3">

            <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-fuchsia-500/20 md:block" />

            {nextSteps.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >

                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#030308]">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10">

                      <Icon
                        size={19}
                        className="text-cyan-300"
                      />

                    </div>

                  </div>

                  <span className="mt-6 block text-[10px] font-semibold text-cyan-300/70">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-sm font-semibold">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[260px] text-xs leading-6 text-white/30">
                    {step.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-[#05050a] px-6 py-28">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
              FAQ
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Questions before
              <br />
              getting started?
            </h2>

          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025]"
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >

                    <span className="text-sm font-medium text-white/70">
                      {faq.question}
                    </span>

                    <span
                      className={`text-xl text-white/30 transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>

                  {isOpen && (
                    <div className="border-t border-white/5 px-5 pb-5 pt-4">

                      <p className="text-xs leading-6 text-white/30">
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#030308] px-6 py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.07] via-blue-500/[0.07] to-fuchsia-500/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <Sparkles
            size={22}
            className="mx-auto text-cyan-300"
          />

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">

            Your next conversation

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              could be AI-powered.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">

            Start with one workflow and discover what SamvadLabs can
            automate for your business.

          </p>

          <a
            href="#top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 px-7 py-4 text-sm font-semibold transition hover:scale-[1.03]"
          >

            Start a Conversation

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

/* Contact Info */

function ContactInfo({
  icon: Icon,
  title,
  value,
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.035]">

        <Icon
          size={17}
          className="text-cyan-300"
        />

      </div>

      <div>

        <p className="text-[10px] uppercase tracking-[0.12em] text-white/20">
          {title}
        </p>

        <p className="mt-1 text-xs text-white/45">
          {value}
        </p>

      </div>

    </div>
  );
}

/* Input */

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>

      <label className="mb-2 block text-[11px] font-medium text-white/40">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-[#08080e] px-4 py-3 text-xs text-white/60 outline-none transition placeholder:text-white/20 focus:border-cyan-400/30"
      />

    </div>
  );
}

export default Contact;