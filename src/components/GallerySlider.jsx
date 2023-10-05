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
// if you want to use array
const slide_imgs = [
  "https://scontent.fblr3-2.fna.fbcdn.net/v/t39.30808-6/383228587_752584523549169_3771284048980383120_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1McUVozQbPYAX9mzgPs&_nc_ht=scontent.fblr3-2.fna&oh=00_AfDwCBNn0m_PCO_Q4YiD8bvsfKjmI66NCCHJaLnPCQrE3A&oe=6521A588",
  "https://scontent.fblr3-2.fna.fbcdn.net/v/t39.30808-6/383344486_752549220219366_8584838563983568917_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=ytjBYAbnUQ8AX-ENOGr&_nc_ht=scontent.fblr3-2.fna&oh=00_AfBJkEopb768N1Ow38nqkfp36faOBt4uQ3e_ZCbyOV3jrQ&oe=65231124",
  "https://scontent.fblr3-3.fna.fbcdn.net/v/t39.30808-6/381341121_747543524053269_4493128946389866333_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=pDmJ8SnE1ScAX9Mm3qy&_nc_ht=scontent.fblr3-3.fna&oh=00_AfAqWfL5Wb5uYXwMIbuGFNmdYBJQGhjf0W97kA1JLsgJqA&oe=6521FF97",
  "https://scontent.fblr3-2.fna.fbcdn.net/v/t39.30808-6/383228587_752584523549169_3771284048980383120_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1McUVozQbPYAX9mzgPs&_nc_ht=scontent.fblr3-2.fna&oh=00_AfDwCBNn0m_PCO_Q4YiD8bvsfKjmI66NCCHJaLnPCQrE3A&oe=6521A588",
  "https://scontent.fblr3-2.fna.fbcdn.net/v/t39.30808-6/383344486_752549220219366_8584838563983568917_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=ytjBYAbnUQ8AX-ENOGr&_nc_ht=scontent.fblr3-2.fna&oh=00_AfBJkEopb768N1Ow38nqkfp36faOBt4uQ3e_ZCbyOV3jrQ&oe=65231124",
  "https://scontent.fblr3-3.fna.fbcdn.net/v/t39.30808-6/381341121_747543524053269_4493128946389866333_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=pDmJ8SnE1ScAX9Mm3qy&_nc_ht=scontent.fblr3-3.fna&oh=00_AfAqWfL5Wb5uYXwMIbuGFNmdYBJQGhjf0W97kA1JLsgJqA&oe=6521FF97",
  "https://scontent.fblr3-2.fna.fbcdn.net/v/t39.30808-6/383228587_752584523549169_3771284048980383120_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1McUVozQbPYAX9mzgPs&_nc_ht=scontent.fblr3-2.fna&oh=00_AfDwCBNn0m_PCO_Q4YiD8bvsfKjmI66NCCHJaLnPCQrE3A&oe=6521A588",
  "https://scontent.fblr3-2.fna.fbcdn.net/v/t39.30808-6/383344486_752549220219366_8584838563983568917_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=ytjBYAbnUQ8AX-ENOGr&_nc_ht=scontent.fblr3-2.fna&oh=00_AfBJkEopb768N1Ow38nqkfp36faOBt4uQ3e_ZCbyOV3jrQ&oe=65231124",
  "https://scontent.fblr3-3.fna.fbcdn.net/v/t39.30808-6/381341121_747543524053269_4493128946389866333_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=pDmJ8SnE1ScAX9Mm3qy&_nc_ht=scontent.fblr3-3.fna&oh=00_AfAqWfL5Wb5uYXwMIbuGFNmdYBJQGhjf0W97kA1JLsgJqA&oe=6521FF97",
  "https://static.toiimg.com/thumb/msid-99415128,width-1070,height-580,imgsize-84040,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  "https://www.oneindia.com/img/2023/04/modi-rally-1680595785.jpg",
  "https://images.newindianexpress.com/uploads/user/imagelibrary/2023/3/2/w900X450/BJP_pti03_02_2023_000257a.jpg?w=400&dpr=2.6",
  "https://scontent.fblr3-2.fna.fbcdn.net/v/t39.30808-6/380247209_745658757575079_1151277427702687453_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=cOKBYBmHuQYAX8kL6a1&_nc_ht=scontent.fblr3-2.fna&oh=00_AfAT8xjrruOyRVNcszpOjt8su8RpxfdMFLZJP7ZQiwbtOw&oe=6521FC66https://scontent.fblr3-2.fna.fbcdn.net/v/t39.30808-6/380247209_745658757575079_1151277427702687453_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=cOKBYBmHuQYAX8kL6a1&_nc_ht=scontent.fblr3-2.fna&oh=00_AfAT8xjrruOyRVNcszpOjt8su8RpxfdMFLZJP7ZQiwbtOw&oe=6521FC66",
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
        {slide_imgs.map((img_url, i) => {
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
          src={slide_imgs}
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
