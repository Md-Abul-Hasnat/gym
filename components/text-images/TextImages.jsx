import styles from "../../styles/Images.module.css";
import Image from "next/image";

const TextImages = () => {
  return (
    <section className={styles.images}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={"/img/images1.jpg"}
          width={500}
          height={500}
          alt="image"
        />
        <h1>FITNESS</h1>
        <div className={styles.imgOverlay}></div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={"/img/images2.jpg"}
          width={500}
          height={500}
          alt="image"
        />
        <h1>STRONG</h1>
        <div className={styles.imgOverlay}></div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={"/img/images3.jpg"}
          width={500}
          height={500}
          alt="image"
        />
        <h1>CARDIO</h1>
        <div className={styles.imgOverlay}></div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={"/img/images4.jpg"}
          width={500}
          height={500}
          alt="image"
        />
        <h1>CROSS FIT</h1>
        <div className={styles.imgOverlay}></div>
      </div>
    </section>
  );
};

export default TextImages;
