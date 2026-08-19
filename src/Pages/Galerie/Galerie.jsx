import { useState } from 'react';
import Header from '../../components/Header/Header';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';
import './Galerie.css';

function Galerie() {
  const [filtreActif, setFiltreActif] = useState('Tous');

  const images = [
    // ===== PEDICURES (6) =====
    { id: 1, categorie: 'Pédicures', src: '/images/galerie/pedicure-1.jpg' },
    { id: 2, categorie: 'Pédicures', src: '/images/galerie/pedicure-2.jpg' },
    { id: 3, categorie: 'Pédicures', src: '/images/galerie/pedicure-3.jpg' },
    { id: 4, categorie: 'Pédicures', src: '/images/galerie/pedicure-4.jpg' },
    { id: 5, categorie: 'Pédicures', src: '/images/galerie/pedicure-5.jpg' },
    { id: 6, categorie: 'Pédicures', src: '/images/galerie/pedicure-6.jpg' },

    // ===== FRENCH (7) =====
    { id: 7, categorie: 'French', src: '/images/galerie/french-1.jpg' },
    { id: 8, categorie: 'French', src: '/images/galerie/french-2.jpg' },
    { id: 9, categorie: 'French', src: '/images/galerie/french-3.jpg' },
    { id: 10, categorie: 'French', src: '/images/galerie/french-4.jpg' },
    { id: 11, categorie: 'French', src: '/images/galerie/french-5.jpg' },
    { id: 12, categorie: 'French', src: '/images/galerie/french-6.jpg' },
    { id: 13, categorie: 'French', src: '/images/galerie/french-7.jpg' },

    // ===== COULEURS & NAIL ART (5) =====
    { id: 14, categorie: 'Couleurs', src: '/images/galerie/couleurs-1.jpg' },
    { id: 15, categorie: 'Couleurs', src: '/images/galerie/couleurs-2.jpg' },
    { id: 16, categorie: 'Couleurs', src: '/images/galerie/couleurs-3.jpg' },
    { id: 17, categorie: 'Couleurs', src: '/images/galerie/couleurs-4.jpg' },
    { id: 18, categorie: 'Couleurs', src: '/images/galerie/couleurs-5.jpg' },
  ];

  const categories = ['Tous', 'Pédicures', 'French', 'Couleurs'];

  const imagesFiltrees =
    filtreActif === 'Tous'
      ? images
      : images.filter((img) => img.categorie === filtreActif);

  return (
    <div>
      <Header />

      <section className="galerie-velvet">
        <div className="container">
          <div className="galerie-header">
            <h1 className="galerie-title">Galerie</h1>
            <p className="galerie-subtitle">Nos dernières créations</p>
          </div>

          {/* Filtres */}
          <div className="galerie-filtres">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filtre-btn ${filtreActif === cat ? 'filtre-btn-active' : ''}`}
                onClick={() => setFiltreActif(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille d'images */}
          {imagesFiltrees.length === 0 ? (
            <div className="galerie-empty">
              <p>Les photos arrivent bientôt ✨</p>
              <span>Revenez très vite découvrir nos créations</span>
            </div>
          ) : (
            <div className="galerie-grid">
              {imagesFiltrees.map((img) => (
                <div className="galerie-item" key={img.id}>
                  <img
                    src={img.src}
                    alt={`Nail art ${img.categorie}`}
                    className="galerie-img"
                    loading="lazy"
                  />
                  <div className="galerie-overlay">
                    <span>{img.categorie}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}

export default Galerie;