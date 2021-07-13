import React from "react";
// UI imports
import FormToggle from "../../ui/toggles/FormToggle";

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
                Here you can choose how you would like to receive notifications.
              </p>
            </div>

            <fieldset>
              <legend className="text-base font-medium text-gray-900">
                Email notification preferences
              </legend>
              <hr className="border-green-300 mt-2" />
              <div className="mt-4 space-y-4">
                <div className="flex items-end">
                  <div className="h-5 flex items-center">
                    <FormToggle />
                  </div>
                  <div className="ml-3 text-sm">
                    <div className="w-8 mb-2">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Goals
                      </label>
                    </div>
                    <p className="text-gray-500">
                      Get notified when a deadline is coming up on a goal you
                      are tracking.
                    </p>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="h-5 flex items-center">
                    <FormToggle />
                  </div>
                  <div className="ml-3 text-sm">
                    <p className="text-gray-500">
                      Get notified when you complete a goal you are tracking.
                    </p>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="h-5 flex items-center">
                    <FormToggle />
                  </div>
                  <div className="ml-3 text-sm">
                    <p className="text-gray-500">
                      Get notified when you add a new goal and enable tracking.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end">
                    <div className="h-5 flex items-center">
                      <FormToggle />
                    </div>
                    <div className="ml-3 text-sm">
                      <div className="w-8 mb-2">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-700"
                        >
                          Candidates
                        </label>
                      </div>
                      <p className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-end">
                    <div className="h-5 flex items-center">
                      <FormToggle />
                    </div>
                    <div className="ml-3 text-sm">
                      <div className="w-8 mb-2">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-700"
                        >
                          Offers
                        </label>
                      </div>
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
                  <FormToggle />
                  <label htmlFor="push-everything" className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">
                      Everything
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <FormToggle />
                  <label htmlFor="push-email" className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">
                      Same as email
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <FormToggle />
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
