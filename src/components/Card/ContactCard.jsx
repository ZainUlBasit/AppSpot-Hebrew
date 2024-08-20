import { useState } from "react";
import Input from "../Inputs/Input";
import { SendEmailContactUsAPI } from "../../axios";
import ContactLoader from "../Loader/ContactLoader";

const ContactCard = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purposeOfContact, setPurposeOfContact] = useState([]);
  const [description, setDescription] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setPurposeOfContact((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!fullName || !email || !purposeOfContact || !description) {
      alert("Required Field are undefined!");
      setLoading(false);
      return;
    }
    const formData = {
      name: fullName,
      sender_email: email,
      reciever_email: "info@appspotsoftwares.com",
      purpose: purposeOfContact,
      desc: description,
    };
    console.log(formData);
    // return;
    try {
      const response = await SendEmailContactUsAPI(formData);
      if (response.data.success) {
        alert(response.data.data.msg);
        // Reset all state variables
        setFullName("");
        setEmail("");
        setDescription("");
        setPurposeOfContact([]);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div className="flex py-12 items-center justify-center bg-black">
      <form
        className="bg-[#141414] p-10 rounded-lg flex flex-col gap-10 max-w-4xl w-full font-spartan border-2 border-[#FF916F]"
        id="contact"
      >
        <div className="flex gap-10 justify-between items-center w-full flex-wrap">
          <div className="w-full bg-[#1C1C1C] px-8 py-5 rounded-lg sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
            <Input
              label="שם מלא"
              type="text"
              placeholder="הקלד פה"
              id="FullName"
              name="FullName"
              autoComplete="off"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="w-full bg-[#1C1C1C] px-8 py-5 rounded-lg sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
            <Input
              label="אימייל"
              type="text"
              placeholder="הקלד פה"
              id="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-[#1C1C1C] px-8 rounded-lg w-full font-spartan">
          <label className="block text-white py-5 text-base xsm:text-xl sm:text-2xl">
            למה אתה יוצר איתנו קשר?
          </label>
          <div>
            <div className="flex justify-between w-[85%] flex-wrap items-center">
              <div className=" flex items-center mb-4 mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox  bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value={"עיצוב UI/UX"}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-white">עיצוב UI/UX</span>
              </div>
              <div className="flex items-center mb-4 mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox  bg-[#1e1e1e] border-[#333] focus:outline-none"
                />
                <span className="ml-2 text-white">אבטחת איכות ובדיקות</span>
              </div>
            </div>
            <div className="flex justify-between w-[85%] flex-wrap items-center">
              <div className="flex items-center mb-4 sm:mr-4 ">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value={"UI dase/UX עיצוב"}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-white">UI dase/UX עיצוב</span>
              </div>
              <div className="flex items-center mb-4 sm:mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value={"אבטחת איכות ובדיקות"}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-white">אבטחת איכות ובדיקות</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1C1C1C] px-8 rounded-lg w-full font-spartan">
          <label className="block text-white py-5  text-base xsm:text-xl sm:text-2xl">
            ספק תיאור קצר של הפרויקט שלך
          </label>
          <textarea
            id="description"
            placeholder="אנא שתפו כאן את הפרטים של הפרויקט שלכם"
            className="w-full bg-[#1C1C1C] border-b border-[#333] text-white focus:outline-none outline:none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center">
          {Loading ? (
            <ContactLoader />
          ) : (
            <button
              onClick={handleSubmit}
              className="py-2 px-8 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full focus:outline-none"
            >
              שלח
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
// min-h-screen
