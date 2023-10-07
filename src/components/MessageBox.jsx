import Heading from "./Heading";
import "./MessageBox.css";
import { useState } from "react";

const MessageBox = () => {
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
    alert(
      `${tempData.first_name} ${tempData.last_name} ,Thank You for your response`
    );
  };

  return (
    <div className="message-box" id="messages">
      <Heading kan="ದೂರುಗಳು / ಸಲಹೆಗಳು" en="COMPLAINTS / SUGGESTIONS" />
      <section className="message-form p-5  ">
        <form onSubmit={handleSubmmit} className="py-5 px-5 md:px-20 border-[1px] border-gray-400">
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
              >
                First Name*
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={handleChange}
                value={messageDetails.first_name || ""}
                className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
                placeholder="ಮೊದಲ ಹೆಸರು"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-1 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                onChange={handleChange}
                value={messageDetails.last_name || ""}
                className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
                placeholder="ಕೊನೆಯ ಹೆಸರು"
                required
              />
            </div>

            <div>
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
                className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
                placeholder="ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div>
              <label
                htmlFor="place"
                className="block mb-1 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
              >
                Place*
              </label>
              <input
                type="text"
                id="place"
                name="place"
                onChange={handleChange}
                value={messageDetails.place || ""}
                className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
                placeholder="ನಿಮ್ಮ ಸ್ಥಳ"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block mb-1 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
            >
              Subject*
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleChange}
              value={messageDetails.subject || ""}
              className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
              placeholder="ವಿಷಯ"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-1 text-sm md:text-lg font-medium text-gray-900 dark:text-white"
            >
              Message*
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              onChange={handleChange}
              value={messageDetails.message || ""}
              className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
              placeholder="ಸಂದೇಶ..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-400 outline-none focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm md:text-lg sm:w-full px-5 py-2.5 text-center  w-[100%] uppercase"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default MessageBox;
