import Input from "../Inputs/Input";

const ContactCard = () => {
  return (
    <div className="flex py-12 items-center justify-center bg-black">
      <form
        className="bg-[#141414] p-10 rounded-lg flex flex-col gap-10 max-w-4xl w-full font-spartan border-2 border-[#FF916F]"
        id="contact"
      >
        <div className="flex gap-10 justify-between items-center w-full flex-wrap">
          <div className="w-full bg-[#1C1C1C] px-8 py-5 rounded-lg sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
            <Input
              label="FullName"
              type="text"
              placeholder="Type here"
              id="FullName"
              name="FullName"
              autoComplete="off"
            />
          </div>
          <div className="w-full bg-[#1C1C1C] px-8 py-5 rounded-lg sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
            <Input
              label="Email"
              type="text"
              placeholder="Type here"
              id="email"
              name="email"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="bg-[#1C1C1C] px-8 rounded-lg w-full font-spartan">
          <label className="block text-white py-5 text-base xsm:text-xl sm:text-2xl">
            Why are you contacting us?
          </label>
          <div>
            <div className="flex justify-between w-[85%] flex-wrap items-center">
              <div className=" flex items-center mb-4 mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox  bg-[#1e1e1e] border-[#333] focus:outline-none"
                />
                <span className="ml-2 text-white">UI/UX Design</span>
              </div>
              <div className="flex items-center mb-4 mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox  bg-[#1e1e1e] border-[#333] focus:outline-none"
                />
                <span className="ml-2 text-white">
                  Quality Assurance & Testing
                </span>
              </div>
            </div>
            <div className="flex justify-between w-[85%] flex-wrap items-center">
              <div className="flex items-center mb-4 sm:mr-4 ">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                />
                <span className="ml-2 text-white">UI dase/UX Design</span>
              </div>
              <div className="flex items-center mb-4 sm:mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                />
                <span className="ml-2 text-white">
                  Quality Assurance & Testing
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1C1C1C] px-8 rounded-lg w-full font-spartan">
          <label className="block text-white py-5  text-base xsm:text-xl sm:text-2xl">
            Provide a brief description of your project
          </label>
          <textarea
            id="description"
            placeholder="Kindly share the details of your project here"
            className="w-full bg-[#1C1C1C] border-b border-[#333] text-white focus:outline-none outline:none"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-8 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
// min-h-screen
