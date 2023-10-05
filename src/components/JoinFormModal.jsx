/* eslint-disable */
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import JoinForm from "./JoinForm";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function JoinFormModal() {
  const initMessageDetails = {};

  const [messageDetails, setMessageDetails] = useState(initMessageDetails);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use the input's "name" attribute as the key and its "value" as the value
    setMessageDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmmit = (e) => {
    let tempData = messageDetails;
    e.preventDefault();
    setMessageDetails(initMessageDetails);
    alert(`${tempData.name}  ,Thank You for your response`);
  };

  return (
    <div>
      <Popup
        trigger={
          <button className="text-white bg-orange-500 hover:bg-orange-400 outline-none focus:ring-0 focus:outline-none  font-bold rounded-lg text-sm md:text-lg sm:w-full px-5 py-2.5 text-center noto-sans-kan w-[100%] ">
            ನನ್ನೊಂದಿಗೆ ಕೈ ಜೋಡಿಸಿ
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal  relative">
            <form
              onSubmit={handleSubmmit}
              className="px-5 py-5 flex-col items-center content  "
            >
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={messageDetails.name || ""}
                  className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 mb-4 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
                  placeholder="ಮೊದಲ ಹೆಸರು"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={messageDetails.email || ""}
                  className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 mb-4 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
                  placeholder="ಕೊನೆಯ ಹೆಸರು"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-1 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  value={messageDetails.phone || ""}
                  className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 mb-4 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
                  placeholder="ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-orange-500 hover:bg-orange-400 outline-none focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm md:text-lg  px-5 py-2.5 text-center w-full mt-4 uppercase"
              >
Submit
              </button>

              <AiFillCloseCircle
                size={25}
                className="text-gray-700 absolute top-1 right-0"
                onClick={() => close()}
              />
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
}
