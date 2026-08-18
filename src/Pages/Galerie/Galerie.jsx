import { useState } from 'react';
import Header from '../../components/Header/Header';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';
import './Galerie.css';

function Galerie() {
  const [filtreActif, setFiltreActif] = useState('Tous');

  const images = [
    // ===== FLORAL (5) =====
    { id: 1, categorie: 'Floral', src: '/images/galerie/floral-1.jpg' },
    { id: 2, categorie: 'Floral', src: '/images/galerie/floral-2.jpg' },
    { id: 3, categorie: 'Floral', src: '/images/galerie/floral-3.jpg' },
    { id: 4, categorie: 'Floral', src: '/images/galerie/floral-4.jpg' },
    { id: 5, categorie: 'Floral', src: '/images/galerie/floral-5.jpg' },

    // ===== 3D (5) =====
    { id: 6, categorie: '3D', src: '/images/galerie/3d-1.jpg' },
    { id: 7, categorie: '3D', src: '/images/galerie/3d-2.jpg' },
    { id: 8, categorie: '3D', src: '/images/galerie/3d-3.jpg' },
    { id: 9, categorie: '3D', src: '/images/galerie/3d-4.jpg' },
    { id: 10, categorie: '3D', src: '/images/galerie/3d-5.jpg' },

    // ===== CLASSIC (5) =====
    { id: 11, categorie: 'Classic', src: '/images/galerie/classic-1.jpg' },
    { id: 12, categorie: 'Classic', src: '/images/galerie/classic-2.jpg' },
    { id: 13, categorie: 'Classic', src: '/images/galerie/classic-3.jpg' },
    { id: 14, categorie: 'Classic', src: '/images/galerie/classic-4.jpg' },
    { id: 15, categorie: 'Classic', src: '/images/galerie/classic-5.jpg' },
  ];

  const categories = ['Tous', 'Floral', '3D', 'Classic'];

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