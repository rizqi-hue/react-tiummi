import React, { FC } from "react";
import {
  ButtonPrimary,
  HeaderLogo,
  ButtonCircle,
  ButtonSecondary,
  ButtonIcon,
  InputSearch,
} from "../../atoms";
import { BellIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import MenuBar from "../MenuBar";
import { NavLink } from "react-router-dom";
import { useGetIdentity } from "react-admin";

export interface HeaderLoggedProps {}

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  const { identity } = useGetIdentity();

  return (
    <div className="nc-HeaderLogged relative w-full z-40 ">
      <div className={`nc-MainNav2Logged relative z-10 ${"onTop "}`}>
        <div className="container py-3 relative flex justify-between items-center space-x-4 xl:space-x-8">
          <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
            <HeaderLogo />
          </div>
          <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="hidden items-center xl:flex space-x-2">
              {/* <Navigation /> */}
              <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
                <li className="menu-item">
                  <NavLink
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    to={"/"}
                  >
                    Beranda
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    to={"/informasi"}
                  >
                    Informasi
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                    to={"/about"}
                  >
                    Tentang Lab
                  </NavLink>
                </li>
              </ul>
              <div className="flex">
                {/* <SwitchDarkMode />
                <NotifyDropdown /> */}
                {/* <span className="w-2 h-2 bg-blue-500 absolute top-2 right-2 rounded-full"></span> */}
              </div>
              <div></div>
              <div className="hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"></div>
              <div></div>
              {identity ? (
                <ButtonPrimary href={"/dashboard"} sizeClass="px-4 py-2 sm:px-5">
                  Dashboard
                </ButtonPrimary>
              ) : (
                <ButtonPrimary href={"/login"} sizeClass="px-4 py-2 sm:px-5">
                  Masuk
                </ButtonPrimary>
              )}

              {/* <AvatarDropdown /> */}
            </div>
            <div className="flex items-center space-x-3 xl:hidden">
              {/* <NotifyDropdown />
              <AvatarDropdown /> */}
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogged;
