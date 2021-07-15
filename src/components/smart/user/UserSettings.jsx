import React, { useState } from "react";
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
import SuccessMessage from "../../presentational/flash-messages/SuccessMessage";
import SecuritySettings from "./SecuritySettings";
import NotificationSettings from "./NotificationSettings";
import BillingSettings from "./BillingSettings";
import IntegrationSettings from "./IntegrationSettings";
// Redux imports
import { connect } from "react-redux";
import updateUser from "../../../store/actions/userActions/updateUser";

// Consider moving this to component state
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

// Similarly, consider moving this into the component itself
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserSettings = (props) => {
  const [successfulSave, setSuccessfulSave] = useState(false);

  const handleSaveSuccess = () => {
    setSuccessfulSave(!successfulSave);
  };

  const handleMenuSelect = (options, item) => {
    options.forEach((menuItem) => {
      if (menuItem.name === item.name) {
        menuItem.current = true;
      } else menuItem.current = false;
    });
  };

  return (
    <>
      <div>
        {successfulSave ? (
          <SuccessMessage
            handleSuccessfulSave={handleSaveSuccess}
            successfulSave={successfulSave}
            type={"Saved"}
          />
        ) : null}
        <main className="relative mt-4">
          <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav className="space-y-1">
                    {subNavigation.map((item) => (
                      <Link
                        onClick={() => handleMenuSelect(subNavigation, item)}
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
                    <PrivateRoute path={`${props.root}/profile`}>
                      <ProfileSettings
                        handleSaveSuccess={handleSaveSuccess}
                        user={props.user}
                        updateUser={props.updateUser}
                      />
                    </PrivateRoute>
                    <PrivateRoute path={`${props.root}/account`}>
                      <AccountSettings
                        handleSaveSuccess={handleSaveSuccess}
                        user={props.user}
                        updateUser={props.updateUser}
                      />
                    </PrivateRoute>
                    <PrivateRoute path={`${props.root}/security`}>
                      <SecuritySettings
                        handleSaveSuccess={handleSaveSuccess}
                        user={props.user}
                        updateUser={props.updateUser}
                      />
                    </PrivateRoute>
                    <PrivateRoute path={`${props.root}/notifications`}>
                      <NotificationSettings
                        handleSaveSuccess={handleSaveSuccess}
                        user={props.user}
                        updateUser={props.updateUser}
                      />
                    </PrivateRoute>
                    <PrivateRoute path={`${props.root}/billing`}>
                      <BillingSettings
                        handleSaveSuccess={handleSaveSuccess}
                        user={props.user}
                        updateUser={props.updateUser}
                      />
                    </PrivateRoute>
                    <PrivateRoute path={`${props.root}/integrations`}>
                      <IntegrationSettings
                        handleSaveSuccess={handleSaveSuccess}
                        user={props.user}
                        updateUser={props.updateUser}
                      />
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

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { updateUser })(UserSettings);
