import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
// import SocialsList from "shared/SocialsList/SocialsList";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import ButtonClose from "./ButtonClose";
import { ButtonPrimary, ButtonSecondary } from "../../atoms";
import Logo from "../../atoms/Logo/HeaderLogo";
import { useGetIdentity } from "react-admin";

export interface NavMobileProps {
  data?: [];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ data = [], onClickClose }) => {
  const { identity } = useGetIdentity();

  const _renderItem = () => {
    return (
      <>
      <Disclosure
        key={"1"}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <NavLink
          className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
          to={"/"}
          // activeClassName="text-secondary"
        >
          <span
            className={"block w-full"}
          >
            Beranda
          </span>
        </NavLink>
      </Disclosure>
      <Disclosure
        key={"2"}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
       <NavLink
         className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
         to={"/informasi"}
         // activeClassName="text-secondary"
       >
         <span
           className={"block w-full"}
         >
           Informasi
         </span>
       </NavLink>
      </Disclosure>
      <Disclosure
        key={"3"}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <NavLink
          className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
          to={"/berkas"}
          // activeClassName="text-secondary"
        >
          <span
            className={"block w-full"}
          >
            Materi
          </span>
        </NavLink>
      </Disclosure>
      <Disclosure
        key={"4"}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <NavLink
          className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
          to={"/about"}
          // activeClassName="text-secondary"
        >
          <span
            className={"block w-full"}
          >
            Tentang Lab
          </span>
        </NavLink>
      </Disclosure>
    </>
    );
  };

  return (
    <div className="overflow-y-auto w-full max-w-sm h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-neutral-700 dark:text-neutral-300 text-sm">
          <span>
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </span>

          {/* <div className="flex justify-between items-center mt-4">
            <SocialsList itemClass="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl" />
            <span className="block">
              <SwitchDarkMode className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
          </div> */}
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1">{_renderItem()}</ul>
      <div className="flex items-center justify-between py-6 px-5 space-x-2">
        {identity ? (
          <ButtonPrimary href={"/dashboard"} sizeClass="px-4 py-2 sm:px-5">
            Dashboard
          </ButtonPrimary>
        ) : (
          <ButtonPrimary href={"/login"} sizeClass="px-4 py-2 sm:px-5">
            Masuk
          </ButtonPrimary>
        )}
      </div>
    </div>
  );
};

export default NavMobile;
