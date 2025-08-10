"use client";

import { useState } from "react";
import IntakeModal from "@/components/IntakeModal";

type ModalType = "buying" | "selling" | null;

export default function Hero(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  function openModal(type: Exclude<ModalType, null>): void {
    setModalType(type);
    setIsModalOpen(true);
  }

  function closeModal(): void {
    setIsModalOpen(false);
    setModalType(null);
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-icon" />
            AI-Powered Real Estate Guidance
          </div>

          <h1 className="hero-title">
            Get personalized advice for your Kansas City real estate journey
          </h1>

          <p className="hero-subtitle">
            Skip the confusion. Get instant, localized guidance whether you're
            buying your first home or selling for top dollar. Our AI assistant
            knows Kansas City like a local expert.
          </p>
        </div>

        <div className="hero-cta-section floating">
          <h2 className="cta-title">What brings you here today?</h2>

          <div className="cta-buttons">
            <button
              type="button"
              className="cta-button"
              onClick={() => openModal("buying")}
            >
              <div className="button-icon">🏡</div>
              <div className="button-text">I'm Buying</div>
              <div className="button-subtext">Find your dream home</div>
            </button>

            <button
              type="button"
              className="cta-button"
              onClick={() => openModal("selling")}
            >
              <div className="button-icon">💰</div>
              <div className="button-text">I'm Selling</div>
              <div className="button-subtext">Maximize your value</div>
            </button>
          </div>

          <div className="or-divider">
            <span>or</span>
          </div>

          <div className="agent-link">
            <a href="#agent">Are you a real estate agent? Learn how we can help →</a>
          </div>
        </div>
      </div>

      <IntakeModal isOpen={isModalOpen} type={modalType} onClose={closeModal} />
    </section>
  );
}


