import { Link } from 'react-router-dom';
import './CTA.css';

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card text-center" data-aos="fade-up">
          <span className="cta-badge">Prête à démarrer ?</span>

          <h2 className="cta-title">
            Sublimez vos mains,<br />
            réservez dès maintenant.
          </h2>

          <p className="cta-subtitle">
            Découvrez nos réalisations ou choisissez votre créneau en quelques clics.
          </p>

          <Link to="/rendez-vous" className="btn cta-btn-white">
            Prendre un rendez-vous
          </Link>

          <p className="cta-note">Sans engagement</p>
        </div>
      </div>
    </section>
  );
}

export default CTA;