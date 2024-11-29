import React, { useState } from "react";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
  BuildingOfficeIcon,
  SunIcon,
  CloudIcon,
} from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/Actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import AddHotel from "./AddHotel";

const regions = [
  {
    name: "Sud",
    href: "#",
    description: "Explore the southern regions of Tunisia",
    icon: SunIcon,
  },
  {
    name: "Nord",
    href: "#",
    description: "Explore the northern regions of Tunisia",
    icon: CloudIcon,
  },
  {
    name: "South",
    href: "#",
    description: "Discover southern locations",
    icon: SunIcon,
  },
  {
    name: "East",
    href: "#",
    description: "East emplacements across Tunisia",
    icon: CloudIcon,
  },
];

const bungalows = [
  {
    name: "Cozy Bungalows",
    href: "#",
    description: "Stay in a cozy bungalow for a tranquil escape.",
    icon: HomeIcon,
  },
  {
    name: "Luxury Bungalows",
    href: "#",
    description: "Indulge in luxury with premium bungalow options.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Beachfront Bungalows",
    href: "#",
    description: "Enjoy beachfront views with our bungalow selections.",
    icon: SunIcon,
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBungalows, setShowBungalows] = useState(false); // Start with Bungalows visible
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const { isAuth, user } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buttonStyles =
    "text-sm font-semibold leading-6 px-4 py-2 rounded-md flex items-center justify-center";

  const isAdminOrOwner = user?.role === "admin" || user?.role === "owner";

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <header className="backdrop-blur-sm bg-white/30 hover:backdrop-blur-xl transition duration-300 fixed w-full z-40">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img alt="Hotels4U Logo" src="/images/logo.png" className="h-16 w-auto" />
          </Link>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>

          {/* Hotels Popover */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <Link to="/hotels">Book Now</Link>
              <ChevronDownIcon
                aria-hidden="true"
                className="h-6 w-6 flex-none text-[#990000] pl-2 transition-colors duration-300 hover:text-[#cc0000]"
              />
            </PopoverButton>

            <PopoverPanel className="absolute left-0 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {/* Display Bungalows first */}
                {showBungalows && (
                  <div className="mt-4">
                    {bungalows.map((bungalow) => (
                      <div
                        key={bungalow.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          {React.createElement(bungalow.icon, {
                            "aria-hidden": "true",
                            className: "h-6 w-6 text-[#990000] hover:text-[#cc0000]",
                          })}
                        </div>
                        <div className="flex-auto">
                          <Link to={bungalow.href} className="block font-semibold text-gray-900">
                            {bungalow.name}
                          </Link>
                          <p className="mt-1 text-gray-600">{bungalow.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Display Regions */}
                {!showBungalows && (
                  <div className="mt-4">
                    {regions.map((region) => (
                      <div
                        key={region.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          {React.createElement(region.icon, {
                            "aria-hidden": "true",
                            className: "h-6 w-6 text-[#990000] hover:text-[#cc0000]",
                          })}
                        </div>
                        <div className="flex-auto">
                          <Link to={region.href} className="block font-semibold text-gray-900">
                            {region.name}
                          </Link>
                          <p className="mt-1 text-gray-600">{region.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Toggle Button */}
                <div className="flex mt-6 items-center justify-end">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          onClick={() => setShowBungalows(!showBungalows)}
                          className="flex items-center gap-x-2 justify-center text-white text-sm font-semibold leading-6 bg-[#990000] hover:bg-[#cc0000] px-6 py-2 rounded-md"
                        >
                          <span className="text-white">
                            {showBungalows ? "Switch to Regions" : "Switch to Bungalows"}
                          </span>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-white transition-transform duration-300 ${
                              open ? "transform rotate-180" : ""
                            }`}
                          />
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About us
          </Link>
        </PopoverGroup>

        {/* Authentication Section */}
        <div className="hidden lg:flex  lg:flex-1 lg:justify-end lg:items-center">
          {isAuth ? (
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="w-12 h-12 border-2 border-solid border-[#990000] rounded-full flex justify-center items-center text-[#990000]">
                  <p className="text-3xl">
                    {user && user.firstName[0].toUpperCase()}
                  </p>
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={`block px-4 text-center py-2 text-sm font-semibold ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Your Profile
                    </Link>
                  )}
                </MenuItem>
                {isAdminOrOwner && (
                  <MenuItem>
                    <button
                      onClick={() => setModalOpen(true)} // Open modal
                      className="block w-full text-center px-4 py-2 text-sm font-semibold"
                    >
                      Add Hotel
                    </button>
                  </MenuItem>
                )}
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => dispatch(logout(navigate))}
                      className={`block w-full  text-center px-4 py-2 text-sm font-semibold bg-[#990000] text-white hover:bg-[#cc0000] ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      Sign out
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-md bg-gradient-to-r from-[#243142] to-[#4C6A7A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-[#4C6A7A] hover:to-[#243142] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#243142]"
              >
                Log in  <span aria-hidden="true" className="text-[#BA0819]">→</span>
              </Link>
              <Link
                to="/register"
                className={`${buttonStyles} ml-2 text-white bg-[#990000] hover:bg-[#cc0000]`}
              >
Register              </Link>
            </>
          )}
        </div>

        {/* Modal Display */}
        {modalOpen && <AddHotel closeModal={handleModalClose} />}
      </nav>
    </header>
  );
}
