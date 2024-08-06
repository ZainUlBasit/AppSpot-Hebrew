import React from "react";

const Input = ({
  type,
  name,
  id,
  placeholder,
  label,
  autoComplete,
  customClasses,
  value,
  onChange,
  //   onBlur,
  //   error,
  //   touch,
}) => {
  return (
    <div className={`flex gap-1 flex-col ${customClasses} `}>
      <label
        htmlFor={id}
        className="text-xl font-spartan text-white block mb-1 pl-[2px] font-medium capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // onBlur={onBlur}
        className={`overflow-hidden bg-[#1C1C1C] font-normal border-b border-gray-800 outline-none text-white sm:text-sm focus:border-gray-500 block w-full 
         ${customClasses}`}
      />
      {/* {error && touch ? (
        <span className="text-[12px] md:text-[14px] text-red-500 ml-3 mt-1">
          {error}
        </span>
      ) : null} */}
    </div>
  );
};

export default Input;
