import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Samvad AI?",
    answer:
      "Samvad AI is a voice automation platform that lets you create AI agents capable of calling customers, having natural conversations, understanding responses and completing predefined tasks.",
  },
  {
    question: "Can I create my own AI voice agent?",
    answer:
      "Yes. You can define what your AI agent needs to accomplish and configure the conversation experience around your business workflow.",
  },
  {
    question: "Can Samvad AI handle natural conversations?",
    answer:
      "Yes. Samvad AI is designed to understand the context of a conversation and respond dynamically instead of relying only on fixed scripts.",
  },
  {
    question: "Can I connect Samvad AI with my existing systems?",
    answer:
      "Samvad AI can be designed to integrate with business tools, APIs and existing workflows. Available integrations depend on the plan and implementation.",
  },
  {
    question: "Does Samvad AI support multiple languages?",
    answer:
      "Multilingual voice experiences can be supported depending on the voice, language and AI services configured for your agent.",
  },
  {
    question: "Can I see what happened during a call?",
    answer:
      "Yes. The platform can provide conversation transcripts, call status, outcomes and structured information from completed calls.",
  },
  {
    question: "Is Samvad AI suitable for large-scale calling?",
    answer:
      "The platform is designed with scalable voice automation in mind. Exact capacity depends on your infrastructure, telephony provider and selected plan.",
  },
  {
    question: "Can I try Samvad AI before subscribing?",
    answer:
      "You can use the interactive demo on this website to experience the concept. A real production trial can be connected later when the backend and telephony infrastructure are ready.",
  },
];

function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#030308] py-28">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] px-4 py-2 text-xs font-medium text-blue-300">
            <HelpCircle size={14} />
            Frequently asked questions
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Questions?
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              We have answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Everything you need to know before building your first AI
            conversation.
          </p>

        </motion.div>

        {/* FAQ List */}
        <div className="mt-14 space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  isOpen
                    ? "border-cyan-400/15 bg-white/[0.035]"
                    : "border-white/8 bg-white/[0.02] hover:border-white/15"
                }`}
              >

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >

                  <div className="flex items-center gap-4">

                    <span
                      className={`text-[10px] font-semibold ${
                        isOpen
                          ? "text-cyan-300"
                          : "text-white/20"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`text-sm font-medium sm:text-base ${
                        isOpen
                          ? "text-white"
                          : "text-white/65"
                      }`}
                    >
                      {faq.question}
                    </span>

                  </div>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                      isOpen
                        ? "rotate-180 border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                        : "border-white/10 text-white/30"
                    }`}
                  >
                    <ChevronDown size={15} />
                  </div>

                </button>

                <AnimatePresence initial={false}>

                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="border-t border-white/5 px-5 pb-6 pt-5 sm:px-6 sm:pl-[4.4rem]">

                        <div className="flex gap-3">

                          <Sparkles
                            size={15}
                            className="mt-1 shrink-0 text-cyan-400"
                          />

                          <p className="text-sm leading-7 text-white/40">
                            {faq.answer}
                          </p>

                        </div>

                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQPreview;