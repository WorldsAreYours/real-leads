export default function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why HomeWise AI?</h2>
          <p className="features-subtitle">
            Get the local expertise you need, personalized to your specific situation, available 24/7
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card floating">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Hyper-Local Knowledge</h3>
            <p className="feature-description">
              Deep insights into Kansas City neighborhoods, schools, market trends, and hidden gems that only locals know about.
            </p>
          </div>

          <div className="feature-card floating">
            <div className="feature-icon">💬</div>
            <h3 className="feature-title">Personalized Guidance</h3>
            <p className="feature-description">
              Tailored advice based on your budget, timeline, and unique situation. No generic answers – just what you need to know.
            </p>
          </div>

          <div className="feature-card floating">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Instant Expert Advice</h3>
            <p className="feature-description">
              Get answers to complex real estate questions in seconds. From financing options to negotiation strategies.
            </p>
          </div>

          <div className="feature-card floating">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Completely Free</h3>
            <p className="feature-description">
              No hidden fees, no obligation. Get the guidance you need to make informed decisions about the biggest purchase of your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


