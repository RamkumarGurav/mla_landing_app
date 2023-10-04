import Heading from "./Heading";
import DevCard from "./DevCard";

const devProgs = [
  {
    imageSrc: "https://www.bjp.org/files/photo-gallery/img-20210131-wa0070.jpg",
    videoSrc: "https://www.youtube.com/watch?v=z2o5brz_D_s",
    subKan: "ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳು",
    subEn: "Women and Children",
  },
  {
    imageSrc: "https://www.bjp.org/files/photo-gallery/img-20210131-wa0070.jpg",
    videoSrc: "https://www.youtube.com/shorts/94ishXj5tAQ",
    subKan: "ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳು",
    subEn: "Women and Children",
  },
  {
    imageSrc: "https://www.bjp.org/files/photo-gallery/img-20210131-wa0070.jpg",
    videoSrc: "https://www.youtube.com/watch?v=z2o5brz_D_s",
    subKan: "ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳು",
    subEn: "Women and Children",
  },
  {
    imageSrc: "https://www.bjp.org/files/photo-gallery/img-20210131-wa0070.jpg",
    videoSrc: "https://www.youtube.com/watch?v=z2o5brz_D_s",
    subKan: "ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳು",
    subEn: "Women and Children",
  },
  {
    imageSrc: "https://www.bjp.org/files/photo-gallery/img-20210131-wa0070.jpg",
    videoSrc: "https://www.youtube.com/watch?v=z2o5brz_D_s",
    subKan: "ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳು",
    subEn: "Women and Children",
  },
];

const DevProgs = () => {
  return (
    <div className="noto-sans-kan  " id="devProgs">
      <Heading
        kan="ಅಭಿವೃದ್ಧಿ ಪಥದಲ್ಲಿ ನಮ್ಮ ಜಮಖಂಡಿ"
        en="OUR JAMAKHANDI ON THE PATH OF DEVELOPMENT"
      />
      <section className="devProg-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-5 place-items-center">
        {devProgs.map((item, i) => (
          <DevCard key={i} item={item} />
        ))}
      </section>
    </div>
  );
};

export default DevProgs;
