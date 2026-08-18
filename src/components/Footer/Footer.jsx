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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              TikTok
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