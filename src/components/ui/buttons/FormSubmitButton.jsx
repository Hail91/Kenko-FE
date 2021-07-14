import React from "react";

const FormSubmitButton = ({ buttonText, bgColor, textColor }) => {
  return (
    <button
      type="submit"
      className={`transition-all ease-in-out inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-${textColor} bg-${bgColor}-500 hover:bg-${bgColor}-400 focus:outline-none`}
    >
      {buttonText}
    </button>
  );
};

export default FormSubmitButton;
