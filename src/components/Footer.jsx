import logo from "../assets/images/mlaImg1.webp";
const Footer = () => {
  return (
    <footer className="bg-[#090d1d] text-white">
      <section className=" p-10 grid md:grid-cols-2 ">
        <div className="flex justify-center flex-col text-md sm:text-lg xl:text-xl font-medium ">
          <p className="mb-10 noto-sans-kan">
            ಶ್ರೀ ಜಗದೀಶ ಗುಡಗುಂಟಿ ಅವರು ಜಮಖಂಡಿ ಕ್ಷೇತ್ರ ಹಾಗೂ ಜನತೆಯ ಸರ್ವತೋಮುಖ
            ಬೆಳವಣಿಗೆಗೆ ಅವಿರತವಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ. ನಾವೂ ಜೊತೆಯಾಗೋಣ,
            ಜಮಖಂಡಿಯ  ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯತ್ತ ಹೆಜ್ಜೆ ಹಾಕೋಣ. ಉಜ್ವಲ ಭವಿಷ್ಯದ ಭವ್ಯ
            ರಾಷ್ಟ್ರ ನಿರ್ಮಿಸೋಣ !!
          </p>
          <p className="noto-sans-kan">ನಿಮ್ಮ ಸಹಕಾರ ಹಾಗೂ ಬೆಂಬಲ ಸದಾ ಇರಲಿ.</p>
        </div>
        <div className="flex flex-col items-center justify-cente p-5">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src={logo}
              alt="Logo"
              className="h-22 w-[300px]" // Adjust the height and width according to your logo size
            />
          </div>
          <div className="noto-sans-kan text-md sm:text-lg xl:text-xl font-medium  ">
            <p className="underline underline-offset-2 noto-sans-kan">ಜಗದೀಶ ಗುಡಗುಂಟಿ </p>
            <p className="noto-sans-kan" >-ಶಾಸಕರು,ಜಮಖಂಡಿ</p>
          </div>
        </div>
      </section>
      <div className="bg-gray-500 text-black h-[1px]"></div>
      <section className=" px-10 py-2 grid md:grid-cols-2 text-gray-300 text-sm">
        <div><p>Copyright © 2023 jagadeeshGulagunti</p></div>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;
