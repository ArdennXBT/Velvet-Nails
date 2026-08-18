import { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './RendezVous.css';

const MOIS = [
  'Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre',
];
const MOIS_ABREGE = [
  'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin',
  'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec',
];
const JOURS_ABREGE = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const JOURS = ['LU', 'MA', 'ME', 'JE', 'VE', 'SA', 'DI'];
const CRENEAUX = ['9:00', '10:30', '12:00', '14:00', '15:30', '16:30', '17:00'];

function RendezVous() {
  const [dateAffichee, setDateAffichee] = useState(new Date());
  const [jourSelectionne, setJourSelectionne] = useState(null);
  const [creneauSelectionne, setCreneauSelectionne] = useState(null);
  const [confirme, setConfirme] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState({ nom: '', telephone: '', service: '', note: '' });
  const fileInputRef = useRef(null);

  const annee = dateAffichee.getFullYear();
  const mois = dateAffichee.getMonth();

  const premierJourMois = new Date(annee, mois, 1);
  const dernierJourMois = new Date(annee, mois + 1, 0);
  const nbJours = dernierJourMois.getDate();

  let decalage = premierJourMois.getDay();
  decalage = decalage === 0 ? 6 : decalage - 1;

  const joursGrille = [];
  for (let i = 0; i < decalage; i++) joursGrille.push(null);
  for (let j = 1; j <= nbJours; j++) joursGrille.push(j);

 const aujourdHui = new Date();
aujourdHui.setHours(0, 0, 0, 0);

const estDisponible = (jour) => {
  if (!jour) return false;
  const date = new Date(annee, mois, jour);
  const estDimanche = date.getDay() === 0;
  const estPasse = date < aujourdHui;
  return !estDimanche && !estPasse;
};

  const changerMois = (delta) => {
    setDateAffichee(new Date(annee, mois + delta, 1));
    setJourSelectionne(null);
    setCreneauSelectionne(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const fichier = e.target.files[0];
    if (fichier) setPhoto(fichier);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirme(true);
  };

  const dateSelectionneeLabel = () => {
    if (!jourSelectionne) return '';
    const date = new Date(annee, mois, jourSelectionne);
    return `${JOURS_ABREGE[date.getDay()]} ${jourSelectionne} ${MOIS_ABREGE[mois]}`;
  };

  return (
    <div>
      <Header />

      <section className="rdv-velvet py-5">
        <div className="container">
          <h1 className="rdv-title">Rendez-vous</h1>
          <p className="rdv-subtitle mb-5">Choisissez votre date et creneau</p>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="calendrier-nav mb-3">
                <button className="calendrier-arrow" onClick={() => changerMois(-1)}>
                  ‹
                </button>
                <span className="calendrier-mois">
                  {MOIS[mois]} {annee}
                </span>
                <button className="calendrier-arrow" onClick={() => changerMois(1)}>
                  ›
                </button>
              </div>

              <div className="calendrier-grille">
                {JOURS.map((j) => (
                  <div className="calendrier-jour-label" key={j}>
                    {j}
                  </div>
                ))}
                {joursGrille.map((jour, index) => {
                  const dispo = estDisponible(jour);
                  const selectionne = jourSelectionne === jour;
                  return (
                    <div
                      key={index}
                      className={`calendrier-case ${jour ? '' : 'vide'} ${
                        dispo ? 'dispo' : 'indispo'
                      } ${selectionne ? 'selectionne' : ''}`}
                      onClick={() => {
                        if (jour && dispo) {
                          setJourSelectionne(jour);
                          setCreneauSelectionne(null);
                        }
                      }}
                    >
                      {jour && (
                        <>
                          <span>{jour}</span>
                          {dispo && <span className="dot"></span>}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="calendrier-legende mt-3">
                <span>
                  <span className="dot"></span> Disponible
                </span>
                <span>
                  <span className="dot indispo-dot"></span> Indisponible
                </span>
              </div>
            </div>

            <div className="col-lg-6">
              {!jourSelectionne && (
                <p className="rdv-info">Selectionnez une date disponible dans le calendrier.</p>
              )}

              {jourSelectionne && !confirme && (
                <div>
                  <h5 className="rdv-date-selectionnee">{dateSelectionneeLabel()}</h5>

                  <p className="rdv-label mt-4 mb-2">CRENEAU HORAIRE</p>
                  <div className="creneaux-liste mb-4">
                    {CRENEAUX.map((c) => (
                      <button
                        key={c}
                        className={`creneau-btn ${creneauSelectionne === c ? 'creneau-actif' : ''}`}
                        onClick={() => setCreneauSelectionne(c)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  {creneauSelectionne && (
                    <form onSubmit={handleSubmit}>
                      <p className="rdv-label mb-2">PRESTATION</p>
                      <select
                        name="service"
                        className="form-select rdv-input mb-3"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choisir une prestation...</option>
                        <option value="Manucure">Manucure</option>
                        <option value="Pedicure">Pedicure</option>
                        <option value="Nail art">Nail art</option>
                      </select>

                      <p className="rdv-label mb-2">VOTRE NOM</p>
                      <input
                        type="text"
                        name="nom"
                        placeholder="Prenom et nom"
                        className="form-control rdv-input mb-3"
                        value={form.nom}
                        onChange={handleChange}
                        required
                      />

                      <p className="rdv-label mb-2">TELEPHONE</p>
                      <input
                        type="tel"
                        name="telephone"
                        placeholder="06 xx xx xx xx"
                        className="form-control rdv-input mb-3"
                        value={form.telephone}
                        onChange={handleChange}
                        required
                      />

                      <p className="rdv-label mb-2">NOTE (OPTIONNEL)</p>
                      <textarea
                        name="note"
                        placeholder="Inspirations, couleurs souhaitees..."
                        className="form-control rdv-input mb-3"
                        rows="3"
                        value={form.note}
                        onChange={handleChange}
                      ></textarea>

                      <p className="rdv-label mb-2">PHOTO D'INSPIRATION (OPTIONNEL)</p>
                      <div
                        className="rdv-upload-zone mb-4"
                        onClick={() => fileInputRef.current.click()}
                      >
                        <input
                          type="file"
                          accept="image/png, image/jpeg"
                          ref={fileInputRef}
                          onChange={handlePhoto}
                          style={{ display: 'none' }}
                        />
                        {photo ? (
                          <p className="rdv-upload-text">{photo.name}</p>
                        ) : (
                          <>
                            <p className="rdv-upload-text">CLIQUEZ POUR AJOUTER UNE IMAGE</p>
                            <p className="rdv-upload-hint">JPG, PNG — MAX 5 MO</p>
                          </>
                        )}
                      </div>

                      <button type="submit" className="btn rdv-btn-confirm w-100">
                        Confirmer le rendez-vous
                      </button>
                    </form>
                  )}
                </div>
              )}

              {confirme && (
                <div className="rdv-confirmation">
                  <h5>Rendez-vous confirme !</h5>
                  <p>
                    {form.nom}, votre rendez-vous du {dateSelectionneeLabel()} a{' '}
                    {creneauSelectionne} pour "{form.service}" est enregistre.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default RendezVous;