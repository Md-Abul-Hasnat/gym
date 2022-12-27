import styles from "../../styles/Pricing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <h1 className="heading">PROGRAM PRICING</h1>
      <div className={styles.pricingWrapper}>
        <article>
          <FontAwesomeIcon className={styles.icons} icon={faDumbbell} />;
          <ul>
            <li className={`${styles.list} ${styles.overline}`}>
              Membership Card
            </li>
            <li className={styles.list}>Health and Fitness Tips </li>
            <li className={`${styles.list} ${styles.overline}`}>
              Personal Health Solution
            </li>
            <li className={styles.list}> Diet Plan Included </li>
            <li className={`${styles.list} ${styles.overline}`}>
              6 Days a Week
            </li>
            <li className={styles.list}> Zumba Classes</li>
          </ul>
          <h1 className={styles.price}>$100</h1>
          <small className={styles.duration}>Per Month</small> <br />
          <Link href={"/"} className={`btn ${styles.btnPrice}`}>
            CONTACT NOW
          </Link>
        </article>
        <article>
          <FontAwesomeIcon className={styles.icons} icon={faDumbbell} />;
          <ul>
            <li className={styles.list}> Membership Card </li>
            <li className={styles.list}>Health and Fitness Tips </li>
            <li className={styles.list}>Personal Health Solution </li>
            <li className={styles.list}> Diet Plan Included </li>
            <li className={`${styles.list} ${styles.overline}`}>
              6 Days a Week
            </li>
            <li className={`${styles.list} ${styles.overline}`}>
              Zumba Classes
            </li>
          </ul>
          <h1 className={styles.price}>$150</h1>
          <small className={styles.duration}>Per Month</small> <br />
          <Link href={"/"} className={`btn ${styles.btnPrice}`}>
            CONTACT NOW
          </Link>
        </article>
        <article>
          <FontAwesomeIcon className={styles.icons} icon={faDumbbell} />;
          <ul>
            <li className={styles.list}> Membership Card </li>
            <li className={`${styles.list} ${styles.overline}`}>
              Health and Fitness Tips
            </li>
            <li className={styles.list}>Personal Health Solution </li>
            <li className={styles.list}> Diet Plan Included </li>
            <li className={styles.list}> 6 Days a Week</li>
            <li className={styles.list}> Zumba Classes</li>
          </ul>
          <h1 className={styles.price}>$200</h1>
          <small className={styles.duration}>Per Month</small> <br />
          <Link href={"/"} className={`btn ${styles.btnPrice}`}>
            CONTACT NOW
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Pricing;

{
  /* <FontAwesomeIcon
  className={styles.faBars}
  icon={faBars}
  onClick={handleClick}
/>; */
}
