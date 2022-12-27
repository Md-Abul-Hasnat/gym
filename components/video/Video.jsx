import Image from "next/image";
import styles from "../../styles/Video.module.css";

const Video = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className={styles.videoContainer}>
      <h1 className="heading">WHO WE ARE</h1>
      <p className="headText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices.
      </p>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/y-W9DUEMwh4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.imagesContainer}>
        {arr.map((num) => {
          return (
            <div key={num} className={styles.imageDiv}>
              <Image
                src={`/img/images${num}.jpg`}
                width={200}
                height={200}
                alt="image"
              />
              <div className={styles.overlay}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Video;
