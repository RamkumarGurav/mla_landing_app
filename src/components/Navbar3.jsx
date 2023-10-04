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
    <header className="bg-[#f5871f] shadow-xl w-full sticky top-0 ">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center ">
        <div className="py-5 px-[2vmax] flex bg-[#f5871f] justify-between items-center z-[50]">
          <Link
            to="/"
            className=" px-2 flex items-center font-bold rounded-2xl  ubuntu text-[#f5871f] bg-white "
          >
            <div className="flex items-center space-x-2 ">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-20" // Adjust the height and width according to your logo size
              />
              <span className=" text-sm sm:text-lg  font-bold ml-2">
                <p className="underline no whitespace-nowrap underline-offset-2 mb-2">
                  ಜಗದೀಶ ಗುಡಗುಂಟಿ
                </p>
                <p className="no whitespace-nowrap">-ಶಾಸಕರು,ಜಮಖಂಡಿ</p>
              </span>
            </div>
          </Link>

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
          <Link to="/tests" className="nav_link">
            ಹೋಮ್
          </Link>

          <Link to="/tests" className="nav_link">
            ಕುರಿತು
          </Link>
          <Link to="/tests" className="nav_link">
            ಅಭಿವೃದ್ಧಿಗಳು
          </Link>
          <Link to="/tests" className="nav_link">
            ಮಾಧ್ಯಮ
          </Link>
          <Link to="/tests" className="nav_link">
            ಗ್ಯಾಲರಿ
          </Link>
          <Link to="/tests" className="nav_link flex justify-center outline-none rounded-sm px-5">
            <p className="bg-blue-600 p-2 px-6 w-fit hover:bg-white ">
              ದೂರುಗಳು/ಸಲಹೆಗಳು
            </p>
          </Link>
        </div>
      </div>
      {/* <div className="w-full nav-bg-b py-[2px]"></div> */}
    </header>
  );
};

export default Navbar3;
