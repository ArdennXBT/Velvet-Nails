import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-velvet">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge" data-aos="fade-down">
            Prothésiste ongulaire
          </span>

          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            L'art de sublimer<br />
            <span>vos mains</span>
          </h1>

          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Pose d'ongles, nail art et finitions soignées, dans un cadre doux et chaleureux.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
            <Link to="/rendez-vous" className="btn hero-btn-primary">
              Prendre rendez-vous
            </Link>
            <Link to="/galerie" className="btn hero-btn-outline">
              Voir la galerie
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;