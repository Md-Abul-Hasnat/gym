import styles from "../../styles/WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.chooseUs}>
      <h1 className="heading">WHY CHOOSE US</h1>
      <p className="headText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua consectetur
        adipiscing
      </p>
      <div className={styles.chooseUsWrapper}>
        <div className={styles.stats}>
          <article>
            <h1>12</h1>
            <p>Training Programs</p>
          </article>
          <article>
            <h1>15</h1>
            <p>Years Experience</p>
          </article>
          <article>
            <h1>500</h1>
            <p>Happy Clients</p>
          </article>
          <article>
            <h1>25</h1>
            <p>Best Trainers</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
