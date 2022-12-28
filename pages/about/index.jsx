import SubHead from "../../components/subHead/SubHead";
import styles from "../../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Video from "../../components/video/Video";
import Review from "../../components/review/Review";

const index = () => {
  const aboutHead = {
    imgNumber: 1,
    heading: "About Us",
    prevLink: "Home",
  };

  return (
    <section className="mainContainer">
      <SubHead data={aboutHead} />
      <div className={styles.aboutText}>
        <h1>
          <FontAwesomeIcon className={styles.icon1} icon={faQuoteLeft} />
          Want to be healthy and have a perfect body? BLACKFIT is the right
          decision for you! It will create your personal training program and
          balance your diet so you could get the shape of your dream shortly!
          <FontAwesomeIcon className={styles.icon2} icon={faQuoteRight} />
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          <br /> <br />
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt.
          Odipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit.
        </p>
      </div>
      <Video />
      <Review />
    </section>
  );
};

export default index;
