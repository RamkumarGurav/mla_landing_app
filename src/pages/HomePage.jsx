import Layout from "../components/Layout";
// import logo from "../assets/images/mlaImgRm1.png";
import Hero from "../components/Hero";
import HeroIntro from "../components/HeroIntro";
import DevProgs from "../components/DevProgs";
import Media from "../components/Media";
import GallerySlider from "../components/GallerySlider";
import MessageBox from "../components/MessageBox";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <HeroIntro />
      <DevProgs />
      <Media />
      <GallerySlider />
      <MessageBox />
    </Layout>
  );
};

export default HomePage;
