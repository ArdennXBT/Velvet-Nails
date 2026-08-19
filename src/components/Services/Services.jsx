import './Services.css';

function Services() {
  const categories = [
    {
      nom: 'Poses',
      prestations: [
        { nom: 'Manucure simple', prix: '2 500 F', duree: '~1h' },
        { nom: 'Pedicure simple', prix: '2 500 F', duree: '~1h' },
        { nom: 'Vernis semi-permanent', prix: '3 500 F', duree: '~1h' },
        { nom: 'Gel sur capsules', prix: '10 000 F', duree: '~2h' },
        { nom: 'Gainage', prix: '10 000 F', duree: '~2h' },
      ],
    },
    {
      nom: 'Nail art & finitions',
      prestations: [
        { nom: 'Chrome', prix: '1 000 F / doigt', duree: '~30min' },
        { nom: 'Fleurs 3D', prix: '1 500 F / doigt', duree: '~45min' },
        { nom: 'French', prix: '+1 000 F', duree: '~30min' },
        { nom: 'Nail art personnalisé', prix: 'À partir de 500 F / doigt', duree: 'Variable' },
      ],
    },
    {
      nom: 'Entretien',
      prestations: [
        { nom: 'Remplissage', prix: '8 000 F', duree: '~1h' },
        { nom: 'Dépose vernis semi-permanent', prix: '1 000 F', duree: '~30min' },
        { nom: 'Dépose gel', prix: '2 000 F', duree: '~45min' },
        { nom: 'Dépose extérieure', prix: '3 000 F', duree: '~45min' },
      ],
    },
  ];

  return (
    <section className="services-velvet">
      <div className="container">
        <p className="services-label text-center" data-aos="fade-up">
          NOS PRESTATIONS
        </p>

        {categories.map((categorie, i) => (
          <div className="services-category-block" key={i}>
            <h6 className="services-category" data-aos="fade-right">
              {categorie.nom.toUpperCase()}
            </h6>

            <div className="services-grid">
              {categorie.prestations.map((item, j) => (
                <div
                  className="service-card"
                  key={j}
                  data-aos="fade-up"
                  data-aos-delay={j * 80}
                >
                  <div className="service-top">
                    <span className="service-name">{item.nom}</span>
                    <span className="service-price">{item.prix}</span>
                  </div>
                  <span className="service-duration">
                    <svg
                      className="duration-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path
                        d="M12 7.5V12L15 14"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item.duree}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;