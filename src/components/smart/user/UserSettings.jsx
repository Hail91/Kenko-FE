import React from "react";
// Router imports
import { Switch, Link } from "react-router-dom";
// Utility
import PrivateRoute from "../../../utilities/routing/PrivateRoute";
// Style imports
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";
// Components
import ProfileSettings from "./ProfileSettings";
import AccountSettings from "./AccountSettings";

const subNavigation = [
  {
    name: "Profile",
    href: "/dashboard/settings/profile",
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: "Account",
    href: "/dashboard/settings/account",
    icon: CogIcon,
    current: false,
  },
  {
    name: "Security",
    href: "/dashboard/settings/security",
    icon: KeyIcon,
    current: false,
  },
  {
    name: "Notifications",
    href: "/dashboard/settings/notifications",
    icon: BellIcon,
    current: false,
  },
  {
    name: "Billing",
    href: "/dashboard/settings/billing",
    icon: CreditCardIcon,
    current: false,
  },
  {
    name: "Integrations",
    href: "/dashboard/settings/integrations",
    icon: ViewGridAddIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserSettings = ({ root }) => {
  return (
    <>
      <div>
        <main className="relative mt-4">
          <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav className="space-y-1">
                    {subNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-teal-50 border-green-500 text-green-500 hover:border-green-400 hover:text-green-400 transition-all ease-in-out"
                            : "border-transparent text-gray-900 hover:text-green-500 transition-all ease-in-out",
                          "group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-teal-500 group-hover:text-teal-500"
                              : "text-gray-400 group-hover:text-green-500",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </aside>

                <div className="divide-y divide-gray-200 lg:col-span-9">
                  <Switch>
                    <PrivateRoute path={`${root}/profile`}>
                      <ProfileSettings />
                    </PrivateRoute>
                    <PrivateRoute path={`${root}/account`}>
                      <AccountSettings />
                    </PrivateRoute>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default UserSettings;
