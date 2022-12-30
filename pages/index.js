import Coachs from "../components/coach/Coachs";
import Pricing from "../components/pricing/Pricing";
import Review from "../components/review/Review";
import TextImages from "../components/text-images/TextImages";
import Video from "../components/video/Video";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className="mainContainer">
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroWrapper}>
            <h1 className={styles.heroHeading}>
              KEEP YOUR BODY <br /> FIT & STRONG
            </h1>
            <p className={styles.heroText}>
              BLACKFIT fitness health center where your body gets its shape!{" "}
              <br /> Start training now to stay fit and healthy all year round!{" "}
            </p>
            <button className="btn">GET STARTED</button>
          </div>
        </div>

        <TextImages />
        <Video />
        <WhyChooseUs />
        <Pricing />
        <Coachs />
        <Review />
      </main>
    </section>
  );
}
