/* eslint-disable */
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";

import { HiMenu } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import logo from "../assets/images/mlaImgRm1.png";

const Navbar3 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className=" bg-[#f5871f] shadow-xl w-full sticky top-0 z-[100]">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center ">
        <div className="py-5 px-[2vmax] flex bg-[#f5871f] justify-between items-center z-[50]">
          <a
            href="/"
            className=" px-2 flex items-center font-medium  rounded-2xl  ubuntu text-[#f5871f] logo "
            id="nav_logo"
          >
            <div className="flex items-center space-x-2  ">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-20" // Adjust the height and width according to your logo size
              />
              <span className=" text-sm sm:text-lg  font-medium  ml-2 text-white ">
                <p className="underline no whitespace-nowrap underline-offset-2 mb-2 noto-sans-kan">
                  ಜಗದೀಶ ಗುಡಗುಂಟಿ
                </p>
                <p className="no whitespace-nowrap noto-sans-kan">
                  -ಶಾಸಕರು,ಜಮಖಂಡಿ
                </p>
              </span>
            </div>
          </a>

          {open ? (
            <AiOutlineClose
              size={30}
              color={"white"}
              onClick={handleOpen}
              className="visible lg:hidden cursor-pointer z-50"
            />
          ) : (
            <TiThMenu
              size={30}
              color={"white"}
              onClick={handleOpen}
              className="visible lg:hidden cursor-pointer z-50"
            />
          )}
        </div>

        <div
          className={`py-5 px-[2vmax] lg:px-[20px] flex w-full left-0 pb-5  pt-5 bg-[#f5871f] text-white duration-500 ease-in-out flex-col gap-5 absolute lg:static ${
            open
              ? "top-[120px] pt-10 sm:pt-5 items-start shadow-md"
              : "top-[-500px] "
          } lg:flex-row lg:justify-between lg:items-center lg:w-[70%] lg:p-0 lg:shadow-none left-0 z-1`}
        >
          <a href="/" className="nav_link text-black">
            ಹೋಮ್
          </a>

          <a href="#intro" className="nav_link">
            ಕುರಿತು
          </a>
          <a href="#devProgs" className="nav_link">
            ಅಭಿವೃದ್ಧಿಗಳು
          </a>
          <a href="#media" className="nav_link">
            ಮಾಧ್ಯಮ
          </a>
          <a href="#gallery" className="nav_link">
            ಗ್ಯಾಲರಿ
          </a>
          <a
            href="#messages"
            className=" w-full flex justify-center lg:justify-end outline-none rounded-sm px-5"
          >
            <p className="nav_link bg-[#2CA9DD] p-2 px-6 w-fit hover:bg-white rounded-md ">
              ದೂರುಗಳು/ಸಲಹೆಗಳು
            </p>
          </a>
        </div>
      </div>
      {/* <div className="w-full nav-bg-b py-[2px]"></div> */}
    </header>
  );
};

export default Navbar3;
