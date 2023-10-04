// import { Gallery } from "react-grid-gallery";
/* eslint-disable */
import { useState, useCallback } from "react";

import ImageViewer from "react-simple-image-viewer";
import Heading from "./Heading";

const Media = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const imagesDetails = [
    {
      src: "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
      newspaper: "vijayavani",
      date: "01-10-2023",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzebR3bVk4zieVtEZAMr3B5j7w9nEKCksq9w&usqp=CAU",
      newspaper: "vijayavani",
      date: "01-10-2023",
    },
    {
      src: "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
      newspaper: "vijayavani",
      date: "01-10-2023",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzebR3bVk4zieVtEZAMr3B5j7w9nEKCksq9w&usqp=CAU",
      newspaper: "vijayavani",
      date: "01-10-2023",
    },
    {
      src: "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
      newspaper: "vijayavani",
      date: "01-10-2023",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzebR3bVk4zieVtEZAMr3B5j7w9nEKCksq9w&usqp=CAU",
      newspaper: "vijayavani",
      date: "01-10-2023",
    },
    {
      src: "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
      newspaper: "vijayavani",
      date: "01-10-2023",
    },
    {
      src: "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
      newspaper: "vijayavani",
      date: "01-10-2023",
    },
  ];
  const images = [
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
    "https://media.licdn.com/dms/image/D4D22AQFZpbTvDt_-1A/feedshare-shrink_800/0/1695706899601?e=2147483647&v=beta&t=QdF68zGzqsyaGwwQdPdQsfEXzQ45IcwCHAeWybn9o6I",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const [isHovered, setIsHovered] = useState(-1);

  const toggleHover = (index) => {
    setIsHovered(index);
  };

  return (
    <div id="media">
      <Heading kan="ಮಾಧ್ಯಮ ವರದಿಗಳು" en="IN THE MEDIA" />

      <div className="grid place-items-center grid-auto py-10 px-5  ">
        {imagesDetails.map((item, index) => (
          <div
            className={`relative transition-transform transform curser-pointer border-orange-400 border-2 `}
            onMouseEnter={() => {
              toggleHover(index);
            }}
            onMouseLeave={() => {
              toggleHover(-1);
            }}
            onClick={() => openImageViewer(index)}
            key={index}
          >
            <img
              src={item.src}
              className="w-[200px] h-auto "
              style={{ filter: isHovered === index ? "blur(4px)" : "none" }}
            />
            {isHovered === index && (
              <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center cursor-pointer">
                <p className="text-white text-sm">{`${item.date}-${item.newspaper}`}</p>
              </div>
            )}
          </div>
        ))}

        {/* {images.map((src, index) => (



          <div
      className={`relative transition-transform transform ${
        isHovered ? 'scale-105' : ''
      }`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img
        src={src}
        onClick={()=>openImageViewer(index)}
        alt={imageName}
        className="w-[200px] h-auto"
        style={{ filter: isHovered ? 'blur(4px)' : 'none' }}
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <span className="text-white text-xl">imageName</span>
        </div>
      )}
      </div>          






        
        )} */}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 999,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Media;
