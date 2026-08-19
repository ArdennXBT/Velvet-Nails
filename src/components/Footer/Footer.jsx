import './Footer.css';

function Footer() {
  return (
    <footer className="footer-velvet">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand-block">
            <h4 className="footer-brand">Velvet Nails</h4>
            <p className="footer-slogan">L'art de sublimer vos mains</p>
          </div>

          {/* Réseaux sociaux */}
          <div className="footer-social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5 3c.3 2.1 1.8 3.7 4 4v3c-1.4 0-2.8-.4-4-1.2v6.7c0 3.3-2.7 5.9-6 5.9s-6-2.6-6-5.9 2.7-5.9 6-5.9c.4 0 .8 0 1.2.1v3.1c-.4-.1-.8-.2-1.2-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V3h3.1z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Velvet Nails — Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;