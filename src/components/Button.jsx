import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] transition-transform duration-300 hover:translate-y-[-3px] active:scale-95 active:translate-y-0 ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
