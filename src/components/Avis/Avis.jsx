import './Avis.css';

function Avis() {
  const avis = [
    {
      nom: 'Fatou A.',
      note: 5,
      commentaire: 'Un travail minutieux, je recommande vivement.',
    },
    {
      nom: 'Aïcha K.',
      note: 5,
      commentaire: 'Accueil chaleureux et résultat impeccable.',
    },
    {
      nom: 'Sandra M.',
      note: 4,
      commentaire: 'Très jolie pose, tient plusieurs semaines.',
    },
  ];

  return (
    <section className="avis-velvet">
      <div className="container">
        <p className="avis-label" data-aos="fade-up">
          CE QU’ELLES EN PENSENT
        </p>

        <div className="avis-grid">
          {avis.map((item, index) => (
            <div
              className="avis-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="avis-stars">
                {'★'.repeat(item.note)}
                {'☆'.repeat(5 - item.note)}
              </div>

              <p className="avis-text">“{item.commentaire}”</p>

              <div className="avis-author">
                <span className="avis-nom">{item.nom}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Avis;