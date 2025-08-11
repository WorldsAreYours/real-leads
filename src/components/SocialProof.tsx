export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="social-proof-container">
        <h2 style={{ fontSize: "2rem", marginBottom: 15 }}>
          Trusted by Kansas City home buyers and sellers
        </h2>
        <p style={{ opacity: 0.9, fontSize: "1.1rem" }}>
          Join hundreds of locals who&apos;ve made smarter real estate decisions
        </p>

        <div className="proof-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <div className="stat-label">Conversations Started</div>
          </div>

          <div className="stat-item">
            <span className="stat-number">50+</span>
            <div className="stat-label">Successful Closings</div>
          </div>

          <div className="stat-item">
            <span className="stat-number">$2.3M</span>
            <div className="stat-label">Real Estate Transacted</div>
          </div>

          <div className="stat-item">
            <span className="stat-number">4.9★</span>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}


