import './Avis.css';

function Avis() {
  const avis = [
    {
      nom: 'Fatou A.',
      note: 5,
      commentaire: 'Un travail minutieux, je recommande vivement.',
      photo: '',
      approuve: true,
    },
    {
      nom: 'Aïcha K.',
      note: 5,
      commentaire: 'Accueil chaleureux et résultat impeccable.',
      photo: '',
      approuve: true,
    },
    {
      nom: 'Sandra M.',
      note: 4,
      commentaire: 'Très jolie pose, tient plusieurs semaines.',
      photo: '',
      approuve: true,
    },
  ];

  const avisApprouves = avis.filter((item) => item.approuve);

  const getInitiales = (nom) => {
    return nom
      .split(' ')
      .map((mot) => mot[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="avis-velvet">
      <div className="container">
        <p className="avis-label" data-aos="fade-up">
          CE QU’ELLES EN PENSENT
        </p>

        <div className="avis-scroll">
          {avisApprouves.map((item, index) => (
            <div className="avis-card" key={index}>
              <div className="avis-header">
                <div className="avis-avatar">
                  {item.photo ? (
                    <img src={item.photo} alt={item.nom} />
                  ) : (
                    <span>{getInitiales(item.nom)}</span>
                  )}
                </div>
                <div>
                  <span className="avis-nom">{item.nom}</span>
                  <div className="avis-stars">
                    {'★'.repeat(item.note)}
                    {'☆'.repeat(5 - item.note)}
                  </div>
                </div>
              </div>

              <p className="avis-text">“{item.commentaire}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Avis;