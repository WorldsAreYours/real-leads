export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">HomeWise AI</div>
        <p className="footer-text">
          Making real estate decisions smarter, one conversation at a time.
        </p>

        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
          <a href="#agent" id="agentFooterLink">
            For Agents
          </a>
        </div>

        <p style={{ opacity: 0.5, fontSize: "0.9rem" }}>
          © 2025 HomeWise AI. Made in Kansas City.
        </p>
      </div>
    </footer>
  );
}


