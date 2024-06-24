import { FaInstagramSquare } from "react-icons/fa";
import "./contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="text-center mb-3">İletişim</h1>
      <section className="contact-details">
        <h2 className="text-center mb-3">Bize Ulaşın</h2>
        <div className="adress mb-4">
        <p><strong>Adres:</strong> 3. Meltem Sokak, Soğanlı Mahallesi, Osmangaz/Bursa</p>
        <p><strong>Telefon:</strong> +90 123 456 7890</p>
        <p><strong>E-posta:</strong> info@espressolove.com</p>
        </div>
        <div className="map mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3046.7914399420233!2d29.04597044152525!3d40.21370201438608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f6f6552091d%3A0x81999e7fe1d8e11b!2sEspressolove!5e0!3m2!1str!2str!4v1718893115029!5m2!1str!2str"
            width="100%"
            height="400"
            
            
            aria-hidden="false"
            
          ></iframe>
        </div>
      </section>

      <section className="contact-form mb-4">
        <h2>Bize Mesaj Gönderin</h2>
        <form>
          <label>
            İsim:
            <input type="text" name="name" required />
          </label>
          <label>
            E-posta:
            <input type="email" name="email" required />
          </label>
          <label>
            Mesaj:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Gönder</button>
        </form>
      </section>
      <section className="social-media">
        <h2>Sosyal Medya</h2>
        <p>Bizi sosyal medyada takip edin!</p>
        <div className="social-links">
          <div className="social-links-item"><a href="https://www.instagram.com/espressolove_tr/" target="blank"><FaInstagramSquare className="social-links-icon" /></a></div>
          <a href="https://www.instagram.com/espressolove_tr/">Instagram</a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
