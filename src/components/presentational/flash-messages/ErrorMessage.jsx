import React from "react";

const ErrorMessage = ({ type, action }) => {
  return (
    <div className="rounded-md bg-red-50 pt-2">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3 flex items-center">
          <h3 className="text-sm font-medium text-red-800">
            Please enter a valid {type}
          </h3>
          {type === "password" ? (
            <a
              href="#criteria"
              onClick={action}
              className="text-sm font-medium text-green-400 ml-6 cursor-pointer hover:text-green-500 transition-all ease-in"
            >
              See Criteria
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
