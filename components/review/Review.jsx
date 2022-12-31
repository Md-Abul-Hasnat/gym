import styles from "../../styles/Review.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { reviewsData } from "../../reviewsData";

const Review = () => {
  const data = reviewsData;

  return (
    <section className={styles.reviews}>
      <h1 className="heading">CLIENTS REVIEWS</h1>
      <p className="headText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className={styles.reviewsWrapper}>
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination]}
        >
          {data.map((review) => {
            return (
              <SwiperSlide key={review.id} className={styles.slide}>
                <Image
                  src={`/img/images${review.number}.jpg`}
                  className={styles.images}
                  width={100}
                  height={100}
                  alt="review"
                />
                <p>{review.text}</p>
                <h2 className={styles.name}>{review.name} </h2>
                <div className={styles.job}>{review.status}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
