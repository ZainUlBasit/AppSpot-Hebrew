import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialCard = ({ title, text, avatar, name, CardImg, Index }) => {
  return (
    <div className="w-80 h-96 mx-auto relative font-spartan">
      <img src={CardImg} alt="" className="w-[90%] h-[90%] " />
      <div
        className={`absolute -top-32 sm:-top-28 inset-0 flex flex-col items-center justify-center p-4 
       ${Index === 1 ? "-top-60 sm:-top-48" : ""}
       ${Index === 2 ? "-top-40 sm:-top-28" : ""}
       `}
        //  ${Index === 2 ? "-top-36" : ""}
      >
        <img
          src={avatar}
          alt="Client"
          className="w-20 h-20 rounded-full bg-main object-cover"
        />
        <div className="text-center p-4 rounded-lg max-w-[90%] flex flex-col items-center">
          <h3
            className={`text-sm sm:text-lg font-bold text-white ${
              Index === 2 ? "pr-3" : "pr-3"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-base text-[#CFCFCF] font-normal text-center w-[80%] `}
          >
            {name}
          </p>
          {/* <FaQuoteLeft size={20} className="text-[#FEb070]" /> */}
          <p
            className={`text-sm w-full sm:text-base text-[#E6E6E6] font-normal ${
              Index === 2 ? "pr-5" : "px-3"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
