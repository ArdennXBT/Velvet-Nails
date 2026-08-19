import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

function Contact() {
  const [envoye, setEnvoye] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnvoye(true);
  };

  const numeroWhatsApp = '22900000000';
  const messageWhatsApp = encodeURIComponent('Bonjour, je souhaite avoir des informations sur vos prestations.');
  const lienWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + messageWhatsApp;

  return (
    <div>
      <Header />

      <section className="contact-velvet py-5">
        <div className="container">
          <h1 className="contact-title" data-aos="fade-up">Contact</h1>
          <p className="contact-subtitle mb-5" data-aos="fade-up" data-aos-delay="80">
            Une question ? Écrivez-nous
          </p>

          <div className="row g-4">
            <div className="col-lg-5">

              <div className="contact-info-card mb-3" data-aos="fade-up" data-aos-delay="0">
                <div className="contact-icon">
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <div>
                  <p className="contact-label">ADRESSE</p>
                  <p className="contact-value">Cotonou, Bénin</p>
                </div>
              </div>

              <div className="contact-info-card mb-3" data-aos="fade-up" data-aos-delay="80">
                <div className="contact-icon">
                  <Phone size={18} strokeWidth={2} />
                </div>
                <div>
                  <p className="contact-label">TÉLÉPHONE</p>
                  <p className="contact-value">+229 00 00 00 00</p>
                </div>
              </div>

              <div className="contact-info-card mb-3" data-aos="fade-up" data-aos-delay="160">
                <div className="contact-icon">
                  <Mail size={18} strokeWidth={2} />
                </div>
                <div>
                  <p className="contact-label">EMAIL</p>
                  <p className="contact-value">contact@velvetnails.com</p>
                </div>
              </div>

              <div className="contact-info-card mb-4" data-aos="fade-up" data-aos-delay="240">
                <div className="contact-icon">
                  <Clock size={18} strokeWidth={2} />
                </div>
                <div>
                  <p className="contact-label">HORAIRES</p>
                  <p className="contact-value">Lundi - Samedi : 9h - 18h</p>
                </div>
              </div>

              {/* Bouton WhatsApp corrigé */}
              <a
                href={lienWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn w-100 mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Discuter sur WhatsApp
              </a>

              

            </div>

            <div className="col-lg-7">
              <div className="contact-form-card" data-aos="fade-up" data-aos-delay="100">
                {!envoye ? (
                  <form onSubmit={handleSubmit}>
                    <p className="contact-label mb-2">NOM</p>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Votre nom"
                      className="form-control contact-input mb-3"
                      value={form.nom}
                      onChange={handleChange}
                      required
                    />

                    <p className="contact-label mb-2">EMAIL</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      className="form-control contact-input mb-3"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />

                    <p className="contact-label mb-2">MESSAGE</p>
                    <textarea
                      name="message"
                      placeholder="Votre message..."
                      className="form-control contact-input mb-4"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>

                    <button type="submit" className="btn contact-btn w-100">
                      Envoyer le message
                    </button>
                  </form>
                ) : (
                  <div className="contact-confirmation">
                    <h5>Message envoyé !</h5>
                    <p>Merci {form.nom}, nous vous répondrons rapidement.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;