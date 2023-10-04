/* eslint-disable */
const Heading = ({ kan, en }) => {
  return (
    <div className="cg-heading-safron sm:text-[2rem] font-extrabold text-white py-4 px-10">
      <h1 className="text-center">{kan}</h1>
      <h1 className="text-center"> {en}</h1>
    </div>
  );
};

export default Heading;
