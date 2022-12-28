import Image from "next/image";
import React from "react";
import SubHead from "../../components/subHead/SubHead";
import styles from "../../styles/Trainers.module.css";
import Coach from "../../components/coach/Coachs";

const Trainers = () => {
  const trainersHead = {
    imgNumber: 2,
    heading: "Trainers",
    prevLink: "Home",
  };

  return (
    <section className="mainContainer">
      <SubHead data={trainersHead} />
      <main className={styles.trainers}>
        <div className={styles.trainersWrapper}>
          <article className={styles.left}>
            <h1 className={styles.othertrainer}>Other Trainers</h1>
            <div className={styles.coachDiv}>
              <Image
                className={styles.img}
                src={"/img/images1.jpg"}
                height={300}
                width={500}
              />
              <h1>Johnathan</h1>
              <div className="overlay"></div>
            </div>
            <div className={styles.coachDiv}>
              <Image
                className={styles.img}
                src={"/img/images2.jpg"}
                height={300}
                width={500}
              />
              <h1>Michel</h1>
              <div className="overlay"></div>
            </div>
            <div className={styles.coachDiv}>
              <Image
                className={styles.img}
                src={"/img/images3.jpg"}
                height={300}
                width={500}
              />
              <h1>Hasan</h1>
              <div className="overlay"></div>
            </div>
          </article>
          <article className={styles.right}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h1>DONALD RESHFORD</h1>
                <h2>
                  <span>Specialty :</span> Bodybuilding
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. <br /> <br /> Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum.
                </p>
              </div>
              <div className={styles.right}>
                <Image src={"/img/trainer-1.jpg"} width={500} height={500} />
              </div>
            </div>
            <div className={styles.bottom}>
              <p>
                Want to be healthy and have a perfect body? BLACKFIT is the
                right decision for you! It will create your personal training
                program and balance your diet so you could get the shape of your
                dream shortly!
              </p>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/y-W9DUEMwh4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </article>
        </div>
        <Coach />
      </main>
    </section>
  );
};

export default Trainers;
