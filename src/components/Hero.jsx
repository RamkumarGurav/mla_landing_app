// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// if you want to use array
const slide_imgs = [
  "https://static.toiimg.com/thumb/msid-99415128,width-1070,height-580,imgsize-84040,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  "https://www.oneindia.com/img/2023/04/modi-rally-1680595785.jpg",
  "https://images.newindianexpress.com/uploads/user/imagelibrary/2023/3/2/w900X450/BJP_pti03_02_2023_000257a.jpg?w=400&dpr=2.6",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jTM0av0qAIikmUVOoftMFIH12qbf5GHGhA&usqp=CAU",

  "https://vistaranews.com/wp-content/uploads/2023/05/Jagadish-Gudgunti_Jamkhandi.webp",
  "https://akm-img-a-in.tosshub.com/aajtak/images/story/202304/baijaepai-sixteen_nine.png?size=948:533",
];

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
