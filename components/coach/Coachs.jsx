import styles from "../../styles/Coachs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";

const Coachs = () => {
  const arr = [
    {
      num: 1,
      name: "James",
    },
    {
      num: 2,
      name: "Arnold",
    },
    {
      num: 3,
      name: "John",
    },
    {
      num: 4,
      name: "Joys",
    },
    {
      num: 5,
      name: "James",
    },
    {
      num: 6,
      name: "James",
    },
    {
      num: 8,
      name: "James",
    },
    {
      num: 10,
      name: "James",
    },
  ];

  return (
    <section className={styles.coachs}>
      <h1 className="heading">OUR COACHES</h1>
      <p className={`headText ${styles.text}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className={styles.coachsWrapper}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {arr.map((obj) => {
            return (
              <SwiperSlide key={obj.num} className={styles.slide}>
                <Image
                  src={`/img/images${obj.num}.jpg`}
                  className={styles.images}
                  width={300}
                  height={300}
                  alt="Coach"
                />
                <h2 className={styles.name}>{obj.name} </h2>
                <div className={styles.overlay}></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Coachs;
