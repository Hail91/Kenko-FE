import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const BaseInputField = ({ inputLabel, inputType, inputFor }) => {
  return (
    <div className="w-80">
      <label
        htmlFor={inputFor}
        className="block text-sm font-medium text-gray-700"
      >
        {inputLabel}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={inputType}
          name={inputFor}
          id={inputFor}
          className="block w-full pr-10 border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
          placeholder="you@example.com"
          defaultValue="adamwathan"
          aria-invalid="true"
          aria-describedby="email-error"
        />
        {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div> */}
      </div>
      {/* <p className="mt-2 text-sm text-red-600" id="email-error">
        Your password must be less than 4 characters.
      </p> */}
    </div>
  );
};

export default BaseInputField;
