"use client";

import { useRef } from "react";

type ModalType = "buying" | "selling" | null;

export default function IntakeModal({
  isOpen,
  type,
  onClose,
}: {
  isOpen: boolean;
  type: ModalType;
  onClose: () => void;
}): JSX.Element | null {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>): void {
    if (e.target === overlayRef.current) {
      onClose();
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    alert(
      "Great! This would normally take you to the chat interface with your preferences saved."
    );
    onClose();
  }

  const titleText =
    type === "buying"
      ? "Let&apos;s find your perfect home!"
      : type === "selling"
      ? "Let&apos;s get top dollar for your home!"
      : "Let&apos;s get you started!";

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.8)",
        zIndex: 1000,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: 20,
          padding: 40,
          maxWidth: 500,
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <h3 style={{ marginBottom: 20, color: "#1e293b" }}>{titleText}</h3>

        <form onSubmit={handleSubmit} id="intakeForm">
          <div style={{ marginBottom: 20 }}>
            <label
              style={{ display: "block", marginBottom: 5, fontWeight: 600 }}
            >
              What&apos;s your name? (Optional)
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: 12,
                border: "2px solid #e2e8f0",
                borderRadius: 8,
                fontSize: "1rem",
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{ display: "block", marginBottom: 5, fontWeight: 600 }}
            >
              Where are you looking?
            </label>
            <input
              type="text"
              placeholder="e.g., Overland Park, Leawood, Downtown KC"
              required
              style={{
                width: "100%",
                padding: 12,
                border: "2px solid #e2e8f0",
                borderRadius: 8,
                fontSize: "1rem",
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{ display: "block", marginBottom: 5, fontWeight: 600 }}
            >
              What&apos;s your budget range?
            </label>
            <select
              required
              style={{
                width: "100%",
                padding: 12,
                border: "2px solid #e2e8f0",
                borderRadius: 8,
                fontSize: "1rem",
              }}
            >
              <option value="">Select budget range</option>
              <option value="under-200k">Under $200k</option>
              <option value="200k-300k">$200k - $300k</option>
              <option value="300k-400k">$300k - $400k</option>
              <option value="400k-500k">$400k - $500k</option>
              <option value="500k-700k">$500k - $700k</option>
              <option value="over-700k">Over $700k</option>
            </select>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{ display: "block", marginBottom: 5, fontWeight: 600 }}
            >
              Timeline?
            </label>
            <select
              required
              style={{
                width: "100%",
                padding: 12,
                border: "2px solid #e2e8f0",
                borderRadius: 8,
                fontSize: "1rem",
              }}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (0-3 months)</option>
              <option value="6months">3-6 months</option>
              <option value="year">6-12 months</option>
              <option value="exploring">Just exploring</option>
            </select>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: 12,
                background: "#f1f5f9",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                flex: 2,
                padding: 12,
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Start Chatting 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


