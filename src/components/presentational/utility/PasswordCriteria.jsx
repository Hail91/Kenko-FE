import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const PasswordCriteria = ({ state, action }) => {
  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={state}
        onClose={action}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-50 flex flex-col bg-white shadow-xl rounded">
                  <div className="py-6 px-4 bg-green-400 sm:px-6 rounded">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-medium text-white">
                        Password Criteria
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="rounded-md text-white focus:outline-none"
                          onClick={() => action()}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className="text-md text-white underline">
                        A valid password must contain the following:
                      </p>
                      <ul>
                        <li className="text-white">
                          The password must contain at least 8 characters
                        </li>
                        <li className="text-white">
                          The password must contain at least 1 number
                        </li>
                        <li className="text-white">
                          The password must contain at least 1 special character
                        </li>
                        <li className="text-white">
                          The password must contain at least 1 uppercase and 1
                          lowercase letter
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
// Export component
export default PasswordCriteria;
