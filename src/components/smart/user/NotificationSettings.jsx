import React from "react";

const NotificationSettings = () => {
  return (
    <div>
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Here you can choose how you would like to recieve notifications.
              </p>
            </div>

            <fieldset>
              <legend className="text-base font-medium text-gray-900">
                Email notification preferences
              </legend>
              <hr className="border-green-300 mt-2" />
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="h-5 flex items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Comments
                    </label>
                    <p className="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="h-5 flex items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-700"
                      >
                        Candidates
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <div className="h-5 flex items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-700"
                      >
                        Offers
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-6">
              <legend className="text-base font-medium text-gray-900">
                Push notification preferences
              </legend>
              <p className="text-sm text-gray-500">
                These are delivered via SMS to your mobile phone.
              </p>
              <hr className="border-green-300 mt-2" />
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="push-everything" className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">
                      Everything
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="push-email" className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">
                      Same as email
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="push-nothing" className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">
                      No push notifications
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NotificationSettings;
