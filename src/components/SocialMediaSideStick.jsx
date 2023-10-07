import { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { RiFacebookFill, RiTwitterXFill } from "react-icons/ri";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";

const SocialMediaSideStick = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-0 top-1/3 z-50  bg-transparent flex flex-col items-start   overflow-hidden ">
      {/* <!-- Social Sharing Bar --> */}

      <button
        className={`bg-gray-800 py-2 px-4 rounded-tr-xl   flex justify-center items-center  ${
          !isOpen && "rounded-br-xl"
        }`}
        onClick={handleOpen}
      >
        {isOpen ? (
          <BsArrowLeft
            size={20}
            color={"white"}
            className=" cursor-pointer z-50 "
          />
        ) : (
          <BsArrowRight
            size={20}
            color={"white"}
            onClick={handleOpen}
            className=" cursor-pointer z-50 "
          />
        )}
      </button>
      <div className={`${isOpen ? " " : "hidden"} flex flex-col items-start`}>
        {/* <!-- Facebook --> */}
        <a
          href="https://www.facebook.com/profile.php?id=100063928831528"
          className="social_link py-4 px-4 bg-blue-600   "
          target="_blank"
          rel="noreferrer"
        >
          <RiFacebookFill
            size={20}
            color={"white"}
            className="m-auto cursor-pointer z-50 "
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100063928831528"
          className="social_link py-4 px-4 cg-insta"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoInstagramAlt
            size={20}
            color={"white"}
            className=" cursor-pointer z-50 "
          />
        </a>
        <a
          href="https://twitter.com/jagadeesh_sgbjp"
          className="social_link py-4 px-4 bg-gray-900 "
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterXFill
            size={20}
            color={"white"}
            className=" cursor-pointer z-50"
          />
        </a>

        <a
          href="https://www.youtube.com/@bjp"
          className="social_link py-4 px-4  rounded-br-xl yt-bg "
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube
            size={20}
            color={"white"}
            className=" cursor-pointer z-50"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSideStick;
