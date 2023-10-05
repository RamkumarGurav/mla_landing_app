import {useState} from 'react'

const JoinForm = () => {
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
      `${tempData.name}  ,Thank You for your response`
    );
  };
  return (
    <div>
       <form onSubmit={handleSubmmit}>
          <div className="grid gap-6 mb-4 md:grid-cols-1">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-900 dark:text-white"
              >
              Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={messageDetails.name || ""}
                className="bg-gray-100 border focus:border-2 focus:bg-white border-orange-500 text-gray-900 text-sm md:text-base font-medium rounded-lg placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 block w-full p-2.5  "
                placeholder="ಮೊದಲ ಹೆಸರು"
                required
              />
            </div>
            <div>
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
           </div>

          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-400 outline-none focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm md:text-lg sm:w-full px-5 py-2.5 text-center  w-[100%] uppercase"
          >
            Send Message
          </button>

          <button onClick={()=>close()}>close</button>
        </form>
    </div>
  )
}

export default JoinForm