/* eslint-disable */
import ReactPlayer from "react-player/youtube";
import "./DevCard.css";

const DevCard = ({ item, i }) => {
  const { imageSrc, videoSrc, subKan, subEn } = item;
  return (
    <div
      key={i}
      className="w-full max-w-sm shadow-xl bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="object-cover w-full relative">
        {/* <img
          className="p-8 rounded-t-lg object-cover w-full"
          src={imageSrc}
          alt="product image"
        /> */}
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={videoSrc}
            width="100%"
            height="100%"
          />
        </div>
        {/* <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
          <FaRegPlayCircle size={40} className="text-[#46bec7]" />
        </div> */}
      </div>
      <div className="px-5 py-2 pb-5 text-xl text-purple-600 font-bold ">
        <h2 className="text-center">{subEn}</h2>
        <h2 className="text-center">{subKan}</h2>
      </div>
    </div>
  );
};

export default DevCard;
