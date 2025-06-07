import React from "react";
import styles from "@/styles/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop
      className={styles.swiper}
    >
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: "url(/images/carousel-1.jpg)" }}
      >
        <div className="carousel-item active">
          <div
            className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
          >
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundImage: "url(/images/carousel-2.jpg)" }}>
        <div className="carousel-item">
          <div
            className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
          >
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
