import React, { useState, useEffect } from "react";
// Redux imports
import { connect } from "react-redux";
import registerUser from "../../../store/actions/authActions/registerUser";
// External Dependency imports
import { NavLink, useHistory } from "react-router-dom";
// Internal imports
import FormValidator from "../../../utilities/validators/FormValidator";
// Custom hooks
import useInput from "../../../custom_hooks/useInput";
// Component imports
import ErrorMessage from "../../presentational/flash-messages/ErrorMessage";
import FailureMessage from "../../presentational/flash-messages/FailureMessage";
import PasswordCriteria from "../../presentational/utility/PasswordCriteria";

const RegistrationPage = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [user, setUser] = useInput({
    email: "",
    username: "",
    password: "",
  });
  const location = useHistory();

  useEffect(() => {
    setIsValidEmail(FormValidator.emailValidation(user.email));
    setIsValidPassword(FormValidator.passwordValidation(user.password));
  }, [isValidEmail, isValidPassword, user.email, user.password]);

  const togglePasswordHelp = () => {
    setOpenDrawer(!openDrawer);
  };

  const RegisterUser = () => {
    if (isValidEmail && isValidPassword) {
      props.registerUser(user);
      location.push("/login");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <PasswordCriteria state={openDrawer} action={togglePasswordHelp} />
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
        {props.authentication.error ? (
          <FailureMessage type={"Register"} />
        ) : (
          <></>
        )}
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
                  autoComplete="off"
                />
              </div>
              {!isValidEmail && user.email !== "" ? (
                <ErrorMessage type={"email"} />
              ) : (
                <></>
              )}
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
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
                  name="username"
                  id="username"
                  value={user.username}
                  onChange={setUser}
                  className="focus:ring-green-400 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Username"
                  autoComplete="off"
                />
              </div>
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
              {!isValidPassword && user.password !== "" ? (
                <ErrorMessage action={togglePasswordHelp} type={"password"} />
              ) : (
                <></>
              )}
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
                disabled={!isValidEmail || !isValidPassword || !user.username}
                onClick={RegisterUser}
                type="button"
                className={
                  isValidEmail && isValidPassword && user.username
                    ? "transition-all ease-in w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-500 focus:outline-none disabled:opacity-50"
                    : "transition-all ease-in w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 cursor-default focus:outline-none disabled:opacity-50"
                }
              >
                Register
              </button>
            </div>
          </form>
          {/* <div className="mt-6">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
// Export Component
export default connect(mapStateToProps, { registerUser })(RegistrationPage);
