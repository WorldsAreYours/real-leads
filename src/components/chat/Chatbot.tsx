"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Prefill = {
  type: string;
  name: string;
  location: string;
  budget: string;
  timeline: string;
};

type Message = {
  id: string;
  role: "user" | "ai";
  text: string;
};

export default function Chatbot({ prefill }: { prefill: Prefill }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  // Compose a friendly opening prompt from prefill
  const intro = useMemo(() => {
    const parts = [] as string[];
    if (prefill.type) parts.push(prefill.type === "buying" ? "buying" : "selling");
    if (prefill.location) parts.push(`in ${prefill.location}`);
    if (prefill.budget) parts.push(`budget ${prefill.budget}`);
    if (prefill.timeline) parts.push(`timeline ${prefill.timeline}`);
    const summary = parts.length ? `I see you’re ${parts.join(", ")}.` : "";
    return (
      `Welcome! I’m your KC real estate assistant. ${summary} ` +
      `Ask me anything, like neighborhoods, home values, or next steps.`
    ).trim();
  }, [prefill]);

  useEffect(() => {
    setMessages([
      { id: crypto.randomUUID(), role: "ai", text: intro.replace("’", "'") },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  async function handleSend(text?: string) {
    const content = (text ?? input).trim();
    if (!content) return;
    setInput("");

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: content,
    };
    setMessages((m) => [...m, userMsg]);

    // Stub AI reply quickly for UX; replace with API call later
    const aiReply: Message = {
      id: crypto.randomUUID(),
      role: "ai",
      text:
        "Thanks! I’ll pull some options and tips. For speed, could you share bedrooms and target price?",
    };
    setTimeout(() => setMessages((m) => [...m, aiReply]), 300);
  }

  return (
    <section className="features" style={{ background: "#fff" }}>
      <div className="features-container" style={{ maxWidth: 900 }}>
        <h1 className="features-title" style={{ textAlign: "center" }}>
          Chat with a Local KC Real Estate Assistant
        </h1>
        <p className="features-subtitle" style={{ textAlign: "center", marginBottom: 20 }}>
          I’ll tailor guidance to your situation.
        </p>

        <div className="chat-preview" style={{ width: "100%", margin: "0 auto" }}>
          <div className="chat-header">
            <div className="chat-avatar">KC</div>
            <div className="chat-info">
              <h4>KC Assistant</h4>
              <p>Online • Helpful and local</p>
            </div>
          </div>

          <div className="chat-messages" ref={listRef} style={{ maxHeight: 400, overflowY: "auto" }}>
            {messages.map((m) => (
              <div key={m.id} className={`message ${m.role}`}>{m.text}</div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask about neighborhoods, prices, process…"
              style={{
                flex: 1,
                padding: 12,
                border: "2px solid #e2e8f0",
                borderRadius: 10,
                fontSize: "1rem",
              }}
            />
            <button
              type="button"
              onClick={() => handleSend()}
              className="cta-button"
              style={{ padding: "0 20px", borderRadius: 10 }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


