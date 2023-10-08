// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Gallery.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Heading from "./Heading";
import { useState, useCallback } from "react";

import ImageViewer from "react-simple-image-viewer";

import img0 from "../assets/images/img0.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";

const slide_imgsX = [
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

const GallerySlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="my-4" id="gallery">
      <Heading kan="ಗ್ಯಾಲರಿ" en="GALLERY" />

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slide_imgsX.map((img_url, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="h-[900px]">
                <img
                  src={img_url}
                  alt="Logo"
                  onClick={() => openImageViewer(i)}
                  className="cursor-pointer " // Adjust the height and width according to your logo size
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isViewerOpen && (
        <ImageViewer
          src={slide_imgsX}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

export default GallerySlider;
