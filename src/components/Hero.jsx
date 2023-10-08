// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import img0 from "../assets/images/img0.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";

const slide_imgsX = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slide_imgsX.map((img_url, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="h-[900px]">
                <img
                  src={img_url}
                  alt="Logo"
                  className=" " // Adjust the height and width according to your logo size
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
