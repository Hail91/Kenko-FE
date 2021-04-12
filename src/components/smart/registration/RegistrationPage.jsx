import React, { useState, useEffect } from "react";
// External Dependency imports
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
// Internal imports
import FormValidator from "../../../utilities/validators/FormValidator";
// Component imports
import ExternalLogin from "../shared/ExternalLogin";
import useInput from "../../../custom_hooks/useInput";
import ErrorMessage from "../../presentational/flash-messages/ErrorMessage";

const RegistrationPage = () => {
  // Component State
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [user, setUser] = useInput({
    email: "",
    password: "",
  });
  const location = useHistory();

  useEffect(() => {
    // Check if email is valid as user types into the input
    setIsValidEmail(FormValidator.emailValidation(user.email));
  }, [isValidEmail, user.email]);

  // Component Methods
  const RegisterUser = async () => {
    // Based on user input, either make the request or show them an error regarding their input
    if (isValidEmail) {
      try {
        let response = await axios.post(
          "http://localhost:8000/api/auth/register",
          user
        );
        if (response.status === 201) {
          localStorage.setItem("registerStatus", true);
        } else localStorage.setItem("registerStatus", false);
        location.push("/login");
      } catch (error) {
        console.log({ errorMessage: error });
      }
    }
  };
  // Render HTML content
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-green-400">
          Kenko
        </h1>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register an account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Or if you already have an account
          <NavLink
            to="/login"
            className="transition-all ease-in ml-1 font-medium text-green-400 hover:text-green-500"
          >
            Log in here
          </NavLink>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#34D399"
                    aria-hidden="true"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={setUser}
                  className="focus:ring-green-400 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              {/* TODO: Style the error message and make it look clean as well as update for when email is finally valid */}
              {!isValidEmail ? <ErrorMessage type={"email"} /> : <></>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-key text-green-400"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={setUser}
                  className="focus:ring-green-400 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-green-400 focus:ring-0 focus:shadow-none border-gray-400 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#forgot_password"
                  className="transition-all ease-in font-medium text-green-400 hover:text-green-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={RegisterUser}
                type="button"
                className="transition-all ease-in w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-500 focus:outline-none"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <ExternalLogin />
          </div>
        </div>
      </div>
    </div>
  );
};
// Export Component
export default RegistrationPage;
