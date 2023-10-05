import Heading from "./Heading";
import logo from "../assets/images/mlaImg1.webp";
import "./HeroIntro.css";
import JoinFormModal from "./JoinFormModal";

const HeroIntro = () => {
  const points = [
    "ಜಮಖಂಡಿದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಉತ್ತಮ ಚಿಕಿತ್ಸೆ ಹಾಗೂ ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉನ್ನತ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ದೊರೆಯುವಂತಾಗಬೇಕು.",
    "ನನ್ನ ಜಿಲ್ಲೆಯ ಹತ್ತನೇ ತರಗತಿಯಲ್ಲಿ ಓದುತ್ತಿರುವ ಸರ್ಕಾರಿ ಶಾಲಾ ಮಕ್ಕಳ ಫಲಿತಾಂಶ ಶೇ.1೦೦ ರಷ್ಟು ಆಗಬೇಕು. ",
    "ಕ್ಷೇತ್ರದ ವಿದ್ಯಾರ್ಥಿಗಳ ಭವಿಷ್ಯವನ್ನು ಅದ್ಭುತವಾಗಿ ರೂಪಿಸಲು IAS/KAS/NEET/CET/IIT ನಂತಹ ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳನ್ನು ಎದುರಿಸಲು ಉಚಿತ ತರಬೇತಿ ಕೇಂದ್ರವನ್ನು ನನ್ನ ಕ್ಷೇತ್ರದಲ್ಲಿ ಪ್ರಾರಂಭ ಮಾಡಬೇಕೆಂಬುದು ನನ್ನ ಗುರಿ.",
    "ಇಡೀ ರಾಷ್ಟ್ರಕ್ಕೆ ಅನ್ನ ನೀಡುವವರು ರೈತರು. ಆತ್ಮಹತ್ಯೆಯಂತಹ ಪ್ರಕರಣಗಳನ್ನು ತಡೆಗಟ್ಟಲು ರೈತರನ್ನು ಸಶಕ್ತರನ್ನಾಗಿಸುವುದು ಹಾಗೂ ನೀರಾವರಿಯಂತಹ ಯೋಜನೆಗಳನ್ನು ಜಾರಿಗೆ ತರುವುದು ನನ್ನ ಪ್ರಮುಖ ಉದ್ದೇಶ.",
  ];



  return (
    <div className="  " id="intro">
      <Heading
        kan="ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ದೂರದೃಷ್ಟಿ ಕನಸನ್ನು ನನಸುಗೊಳಿಸಬಲ್ಲದು"
        en="One Man's Vision Can Turn Dreams Into Reality"
      />

      <section className=" p-10 flex-col flex lg:flex-row hero-intro">
        <div className="flex md:basis-[100%] flex-col items-center justify-center p-5">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src={logo}
              alt="Logo"
              className="h-22 w-[300px]" // Adjust the height and width according to your logo size
            />
          </div>
        </div>
        <div className="flex  justify-between flex-col  ">
          <h2 className="text-2xl font-bold my-4">
            <span className="text-orange-600 ">
              ಜಗದೀಶ &zwnj; ಗುಡಗುಂಟಿ&zwnj;
            </span>{" "}
            - ದಣಿವರಿಯದ ನಾಯಕನಿಗೆ ಸೇವೆಯೇ ಕಾಯಕ
          </h2>

          <p className="font-semibold  text-base mb-2">
            ನಿಮ್ಮ ಮನೆ ಮಗ ಜಗದೀಶ ಗುಡಗುಂಟಿ, ಜಮಖಂಡಿ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರದಿಂದ ಸ್ಪರ್ಧಿಸಿ
            ನಿಮ್ಮ ಆರ್ಶೀವಾದದಿಂದ ಶಾಸಕನಾಗಿ ನನ್ನ ಜಮಖಂಡಿ ಜನರ ಸೇವೆ ಮಾಡುವ ಸದಾವಕಾಶ
            ನನ್ನದಾಗಿದೆ. ನಿಮ್ಮ ನಂಬಿಕೆ, ಭರವಸೆ, ಪ್ರೀತಿ ಮತ್ತು ವಿಶ್ವಾಸಕ್ಕೆ ನಾನು
            ಆಭಾರಿಯಾಗಿದ್ದೇನೆ.
          </p>
          <p className="font-bold text-base mb-2">
            ಒಬ್ಬ ದಕ್ಷ ಆಡಳಿತಗಾರನಾಗಿ, ಜಮಖಂಡಿ ಕ್ಷೇತ್ರವನ್ನು ಅಭಿವೃದ್ಧಿಯ ಪಥದಲ್ಲಿ
            ಕೊಂಡೊಯ್ದು ಮೂಲಭೂತ ಸೌಕರ್ಯ, ಉತ್ತಮ ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ ಹಾಗೂ ಯುವಕರಿಗೆ ಉದ್ಯೋಗ
            ಒದಗಿಸುವುದು ನನ್ನ ಪ್ರಮುಖ ಧ್ಯೇಯ.
          </p>

          <p className="font-bold text-base mb-2">
            ನನ್ನ ಜಮಖಂಡಿದ ಬಗ್ಗೆ ನನ್ನದೇ ಆದ ಹಲವಾರು ಕನಸುಗಳಿವೆ.
          </p>

          <ul className="pl-4 w-full text-gray-900 list-inside dark:text-gray-900">
            {points.map((item, i) => (
              <li
                key={i}
                className="flex items-center font-semibold w-full mb-2"
              >
                <svg
                  className="w-5 h-5 mr-4 text-orange-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-bold text-base mb-2">- ಜಗದೀಶ ಗುಡಗುಂಟಿ</p>
          {/* <ul className="points list-disc  ml-5">
            {points.map((item, index) => (
              <li key={index} className="flex items-center">
                {item}
              </li>
            ))}
          </ul> */}

          <div className="flex justify-center items-center">
          
            <JoinFormModal/>
          </div>
        </div>
      </section>
      <div className="bg-gray-500 text-black h-[1px]"></div>
    </div>
  );
};

export default HeroIntro;
