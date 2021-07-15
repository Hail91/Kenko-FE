import React from "react";
// Custom hooks
import useInput from "../../../custom_hooks/useInput";

const ProfileSettings = ({ user, updateUser, handleSaveSuccess }) => {
  const { user_profile } = user;
  const { id } = user_profile;

  const [currentUser, setCurrentUser] = useInput({
    username: user_profile.username,
    email: user_profile.email,
    bio: user_profile.bio,
    first_name: user_profile.first_name,
    last_name: user_profile.last_name,
    site_url: user_profile.site_url,
  });

  const handleProfileSettings = (event) => {
    event.preventDefault();
    updateUser(id, user);
    if (!user.error) {
      handleSaveSuccess();
    }
    // Then Trigger the success modal, otherwise trigger the failure modal **TO DO**
    else {
      console.log("Save failed!");
    }
  };

  return (
    <form onSubmit={handleProfileSettings}>
      <div className="py-6 px-4 sm:p-6 lg:pb-8">
        <div>
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row">
          <div className="flex-grow space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                  kenko.com/
                </span>
                <input
                  value={currentUser.username}
                  onChange={setCurrentUser}
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="focus:ring-green-400 focus:border-green-400 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder="Account username"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <input
                  value={currentUser.email}
                  onChange={setCurrentUser}
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="on"
                  className="focus:ring-green-400 focus:border-green-400 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder="user@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <div className="mt-1">
                <textarea
                  type="textarea"
                  value={currentUser.bio}
                  onChange={setCurrentUser}
                  id="bio"
                  name="bio"
                  rows={3}
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Tell us about yourself!"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>
          </div>

          <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
            <p className="text-sm font-medium text-gray-700" aria-hidden="true">
              Profile Photo
            </p>
            <div className="mt-1 lg:hidden">
              <div className="flex items-center">
                <div
                  className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                  aria-hidden="true"
                >
                  <img
                    className="rounded-full h-full w-full"
                    src={
                      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                    }
                    alt=""
                  />
                </div>
                <div className="ml-5 rounded-md shadow-sm">
                  <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
                    <label
                      htmlFor="user_photo"
                      className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                    >
                      <span>Change</span>
                      <span className="sr-only">user photo</span>
                    </label>
                    <input
                      id="user_photo"
                      name="user_photo"
                      type="file"
                      className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden relative rounded-full overflow-hidden lg:block">
              <img
                className="relative rounded-full w-40 h-40"
                src={
                  "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                }
                alt=""
              />
              <label
                htmlFor="user-photo"
                className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
              >
                <span>Change</span>
                <span className="sr-only">user photo</span>
                <input
                  type="file"
                  id="user-photo"
                  name="user-photo"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              value={currentUser.first_name}
              onChange={setCurrentUser}
              placeholder="Please enter your first name"
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="given-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              value={currentUser.last_name}
              onChange={setCurrentUser}
              placeholder="Please enter your last name"
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          <div className="col-span-12">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              URL
            </label>
            <input
              value={currentUser.site_url}
              onChange={setCurrentUser}
              placeholder="Personal website or blog, etc."
              type="text"
              name="site_url"
              id="site_url"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Portfolio, Blog, Personal website, etc.
        </p>
      </div>
      <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
        <button
          type="submit"
          className="ml-5 bg-green-500 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-green-400 focus:outline-none transition-all ease-in-out"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileSettings;
