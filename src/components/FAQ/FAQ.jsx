import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [ouvert, setOuvert] = useState(null);

  const questions = [
    {
      q: 'Combien de temps dure une pose ?',
      r: 'Selon la prestation choisie, comptez entre 1h et 2h en moyenne.',
    },
    {
      q: 'Puis-je annuler ou reporter mon rendez-vous ?',
      r: 'Oui, contactez-nous au moins 24h à l’avance pour reporter votre créneau.',
    },
    {
      q: 'Proposez-vous des forfaits mensuels ?',
      r: 'Pas encore, mais chaque prestation reste accessible à la carte selon vos besoins.',
    },
    {
      q: 'Comment se passe le paiement ?',
      r: 'Le paiement se fait directement sur place, espèces ou mobile money.',
    },
  ];

  const toggle = (index) => {
    setOuvert(ouvert === index ? null : index);
  };

  return (
    <section className="faq-velvet">
      <div className="container">
        <p className="faq-label" data-aos="fade-up">
          QUESTIONS FRÉQUENTES
        </p>

        <div className="faq-list">
          {questions.map((item, index) => (
            <div
              className={`faq-item ${ouvert === index ? 'active' : ''}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{item.q}</span>
                <span className="faq-icon">{ouvert === index ? '−' : '+'}</span>
              </button>

              <div className={`faq-reponse-wrapper ${ouvert === index ? 'open' : ''}`}>
                <p className="faq-reponse">{item.r}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;