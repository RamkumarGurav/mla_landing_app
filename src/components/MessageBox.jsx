import Heading from "./Heading";
import "./MessageBox.css";

const MessageBox = () => {
  return (
    <div className="message-box" id="messages">
      <Heading kan="ದೂರುಗಳು / ಸಲಹೆಗಳು" en="COMPLAINTS / SUGGESTIONS" />
      <section className="message-form py-10 px-5 md:px-20">
        <form>
          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block text-lg font-medium text-gray-900 dark:text-white"
              >
                First Name*
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
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
              className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
              placeholder="ಸಂದೇಶ..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm md:text-lg sm:w-full px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500 w-[100%] uppercase"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default MessageBox;
