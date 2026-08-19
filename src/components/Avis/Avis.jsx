import './Avis.css';

function Avis() {
  const avis = [
    {
      nom: 'Evelyn',
      note: 5,
      commentaire: 'Un travail minutieux, je recommande vivement.',
      photo: '/images/avis/evelyn.jpg',
      approuve: true,
    },
    {
      nom: 'Velvet',
      note: 5,
      commentaire: 'Accueil chaleureux et résultat impeccable.',
      photo: '/images/avis/velvet.jpg',
      approuve: true,
    },
    {
      nom: 'Noor',
      note: 4,
      commentaire: 'Très jolie pose, tient plusieurs semaines.',
      photo: '/images/avis/noor.jpg',
      approuve: true,
    },
  ];

  const avisApprouves = avis.filter((item) => item.approuve);

  return (
    <section className="avis-velvet">
      <div className="container">
        <p className="avis-label" data-aos="fade-up">
          CE QU'ELLES EN PENSENT
        </p>

        <div className="avis-scroll">
          {avisApprouves.map((item, index) => (
            <div className="avis-card" key={index}>
              <div className="avis-header">
                <div className="avis-avatar">
                  <img src={item.photo} alt={item.nom} loading="lazy" />
                </div>
                <div>
                  <span className="avis-nom">{item.nom}</span>
                  <div className="avis-stars">
                    {'★'.repeat(item.note)}
                    {'☆'.repeat(5 - item.note)}
                  </div>
                </div>
              </div>

              <p className="avis-text">"{item.commentaire}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Avis;