"use client";

import { useState, useRef, useEffect } from "react";

// Each intent: a regex to match against the user's message, and a pool of
// possible replies (picked at random so it doesn't feel robotic on repeat use).
const INTENTS = [
  {
    pattern: /\b(hi|hello|hey|good morning|good afternoon|good evening|habari|mambo|jambo|salamu)\b/i,
    replies: [
      "Habari! 👋 I'm the Joblify Africa assistant. Ask me about finding jobs, posting a job, or how the site works.",
      "Hey there! Welcome to Joblify Africa. What can I help you with — finding work or posting a role?",
      "Hello! I can help you find remote/freelance jobs, post a job, or answer questions about the site.",
    ],
  },
  {
    pattern: /\b(annotat\w*)\b/i,
    replies: [
      "We've got Annotation roles listed — data labeling, evaluation, and similar work.",
      "Annotation jobs are right this way.",
    ],
    linkText: "See Annotation jobs →",
    linkHref: "/jobs?category=Annotation",
  },
  {
    pattern: /\b(translat\w*|swahili|interpret\w*)\b/i,
    replies: [
      "There are Translation roles available — several involve English-Swahili work.",
      "Translation jobs are listed here.",
    ],
    linkText: "See Translation jobs →",
    linkHref: "/jobs?category=Translation",
  },
  {
    pattern: /\b(web\s*dev\w*|front\s*end|back\s*end|developer|programm\w*|coding job)\b/i,
    replies: [
      "We list Web Dev roles — frontend, backend, and full-stack work.",
      "Web Development jobs are right here.",
    ],
    linkText: "See Web Dev jobs →",
    linkHref: "/jobs?category=Web+Dev",
  },
  {
    pattern: /\b(transcri\w*)\b/i,
    replies: ["Transcription roles are listed on the site."],
    linkText: "See Transcription jobs →",
    linkHref: "/jobs?category=Transcription",
  },
  {
    pattern: /\b(design\w*|graphic|ui\/?ux)\b/i,
    replies: ["We've got Design roles listed — graphics, UI/UX, and more."],
    linkText: "See Design jobs →",
    linkHref: "/jobs?category=Design",
  },
  {
    pattern: /\b(find|search|browse|look for|available)\s*(a\s*)?jobs?\b|\bkazi\b|\bwant\s*(a\s*)?job\b|\bneed\s*(a\s*)?job\b/i,
    replies: [
      "You can browse all listings on the Find Jobs page — filter by category, job type, or search by keyword.",
      "Head to Find Jobs to see everything available right now. You can filter by Annotation, Translation, Web Dev, Transcription, Design, and more.",
    ],
    linkText: "Go to Find Jobs →",
    linkHref: "/jobs",
  },
  {
    pattern: /\b(post|list|add|hire|advertise)\s*(a\s*)?jobs?\b/i,
    replies: [
      "Posting a job is quick — just fill out the form with the role details, and it goes live immediately.",
      "You can post a job in a couple of minutes. Include a title, description, category, and how applicants should reach you.",
    ],
    linkText: "Post a Job →",
    linkHref: "/jobpost",
  },
  {
    pattern: /\b(categor(y|ies)|types? of jobs?|what.*offer)\b/i,
    replies: [
      "We cover Annotation, Translation, Web Dev, Transcription, Design, and more under 'Other'.",
      "Current categories include Annotation, Translation, Web Development, Transcription, and Design.",
    ],
  },
  {
    pattern: /\b(sign\s*up|register|create.*account|login|log in)\b/i,
    replies: [
      "You can create an account from the Signup page — it only takes a minute.",
      "Already have an account? Head to Login. New here? Signup is quick.",
    ],
  },
  {
    pattern: /\b(contact|reach|email|support|help.*human|talk.*(someone|person))\b/i,
    replies: [
      "You can reach the Joblify Africa team through the Contact page.",
      "For anything I can't help with, the Contact page will get you to a real person.",
    ],
    linkText: "Contact Us →",
    linkHref: "/contact",
  },
  {
    pattern: /\b(about|who.*(you|are you)|what is joblify|mission)\b/i,
    replies: [
      "Joblify Africa connects skilled Africans — translators, developers, annotators, designers — to remote and freelance work. Check the About page for more.",
    ],
    linkText: "About Joblify Africa →",
    linkHref: "/about",
  },
  {
    pattern: /\b(thank|thanks|asante|shukrani)\b/i,
    replies: ["You're welcome! Let me know if there's anything else.", "Karibu! Happy job hunting."],
  },
  {
    pattern: /\b(help|what can you do|options|menu)\b/i,
    replies: [
      "I can help with: finding jobs (try a category like 'translation' or 'web dev'), posting a job, signing up, or contacting the team. What do you need?",
    ],
  },
];

const FALLBACKS = [
  "I'm not sure about that one — try asking about finding jobs, posting a job, or how to sign up.",
  "Hmm, I didn't quite catch that. You can ask me about job categories, posting a role, or contacting the team.",
];

function getReply(message) {
  for (const intent of INTENTS) {
    if (intent.pattern.test(message)) {
      const reply = intent.replies[Math.floor(Math.random() * intent.replies.length)];
      return { text: reply, linkText: intent.linkText, linkHref: intent.linkHref };
    }
  }
  return { text: FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)] };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Habari! 👋 Ask me about finding jobs, posting a job, or how Joblify Africa works." },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function handleSend(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { from: "user", text: trimmed };
    const botMsg = { from: "bot", ...getReply(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-80 max-w-[90vw] bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold text-sm">Joblify Africa Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-lg leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 max-h-80 overflow-y-auto px-3 py-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                    msg.from === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.linkHref && (
                    <a
                      href={msg.linkHref}
                      className="inline-block mt-1 text-xs font-medium text-purple-600 hover:underline"
                    >
                      {msg.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 text-sm hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-600 hover:bg-purple-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition-colors"
        aria-label="Toggle chat"
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}