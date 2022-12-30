import SubHead from "../../components/subHead/SubHead";
import styles from "../../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const blogsHead = {
    imgNumber: 3,
    heading: "Contact Us",
    prevLink: "Home",
  };

  return (
    <section className="mainContainer">
      <SubHead data={blogsHead} />
      <div className={styles.googleMap}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.8652707660451!2d91.86241364827278!3d24.905996373527366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055c865524929%3A0x2e51961aa2efa476!2sGym%20World!5e0!3m2!1sen!2sbd!4v1672365939037!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <main className={styles.contact}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactLeft}>
            <ul>
              <li>
                <small>Address:</small>
                <p>Main road, uposhohar, sylhet</p>
              </li>
              <li>
                <small>Phones:</small>
                <p>+1-123-456-78-89</p>
                <p>+1-123-456-78-89</p>
              </li>
              <li>
                <small>Working Hours:</small>
                <p>Monday-Sunday: 07:00 - 22:00</p>
              </li>
              <li>
                <small>Email:</small>
                <p>blackfit@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className={styles.contactRight}>
            <h1>Contact Form</h1>
            <form>
              <input type="text" placeholder="Your Name" name="name" required />
              <br />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                required
              />
              <br />

              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <br />
              <button className={styles.btn} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
