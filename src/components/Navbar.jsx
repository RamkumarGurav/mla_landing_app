/* eslint-disable */
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";

import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";
import logo from "../assets/images/mlaImgRm1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-[#f5871f]  shadow-md  w-full sticky top-0 z-[99999]">
      <div className="py-5 px-[2vmax] lg:px-[4vmax]  flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex justify-between items-center z-40 ">
          <Link
            href="/"
            className="text-xl  flex items-center font-bold rounded-2xl px-2 ubuntu text-[#fafafa] "
          >
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-20" // Adjust the height and width according to your logo size
              />
              <span className="text-sm sm:text-lg xl:text-xl font-bold">
                <p className="underline underline-offset-2">ಜಗದೀಶ ಗುಡಗುಂಟಿ </p>
                <p>-ಶಾಸಕರು,ಜಮಖಂಡಿ</p>
              </span>
            </div>
          </Link>

          {open ? (
            <CgClose
              size={30}
              color={"white"}
              onClick={handleOpen}
              className="visible lg:hidden cursor-pointer"
            />
          ) : (
            <HiMenu
              size={30}
              color={"white"}
              onClick={handleOpen}
              className="visible lg:hidden cursor-pointer"
            />
          )}
        </div>

        <div
          className={`flex pb-5 pt-5  bg-[#f5871f] text-white duration-500 ease-in-out  flex-col gap-5 absolute lg:static  ${
            open
              ? "top-[120px] w-[100%] left-0   items-start shadow-md z-[999]"
              : "top-[-500px]  w-[100%] left-0"
          } lg:flex-row lg:justify-between lg:items-center  lg:w-[70%] lg:p-0 lg:shadow-none left-0 `}
        >
          <Link
            href={"/tests"}
            className="   text-sm sm:text-xl font-bold text-center w-[100%] lg:w-fit  relative text-white hover:text-black duration-300"
          >
            ಹೋಮ್
          </Link>

          <Link
            href={"/tests"}
            className="   text-sm sm:text-xl font-bold text-center w-[100%] lg:w-fit  relative text-white hover:text-black duration-300"
          >
            ಕುರಿತು
          </Link>
          <Link
            href={"/tests"}
            className="   text-sm sm:text-xl font-bold text-center w-[100%] lg:w-fit  relative text-white hover:text-black duration-300"
          >
            ಅಭಿವೃದ್ಧಿಗಳು
          </Link>
          <Link
            href={"/tests"}
            className="   text-sm sm:text-xl font-bold text-center w-[100%] lg:w-fit  relative text-white hover:text-black duration-300"
          >
            ಮಾಧ್ಯಮ
          </Link>
          <Link
            href={"/tests"}
            className="   text-sm sm:text-xl font-bold text-center w-[100%] lg:w-fit  relative text-white hover:text-black duration-300"
          >
            ಗ್ಯಾಲರಿ
          </Link>
          <Link
            href={"/tests"}
            className="   text-sm sm:text-xl font-bold text-center w-[100%] lg:w-fit  relative text-white hover:text-black duration-300 flex justify-center"
          >
            <p className="bg-blue-600 p-2 w-fit ">ದೂರುಗಳು/ಸಲಹೆಗಳು</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
