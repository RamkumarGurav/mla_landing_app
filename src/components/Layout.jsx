/* eslint-disable */
import Footer from "./Footer";
import Navbar3 from "./Navbar3";
import SocialMediaSideStick from './SocialMediaSideStick'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar3 />
      {children}
<SocialMediaSideStick/>
      <Footer />
    </div>
  );
};

export default Layout;
