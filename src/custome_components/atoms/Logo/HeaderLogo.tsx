import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../components/pages/dashboard_login/logo.png";
import logoLightImg from "../../../components/pages/dashboard_login/logo.png";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-gray-700 ${className}`}
    >
      {img ? (
        <div className="flex justify-between w-full items-center">
          <img
            className={`block max-h-12 mr-2 ${imgLight ? "dark:hidden" : ""}`}
            src={img}
            alt="Logo"
          />
          <div className="text-sm md:text-lg flex flex-col leading-5">
            <div className="">
              SILAT (Sistem Informasi Laboratorium Terpadu)
            </div>
            <div className="text-xs md:text-md">Prodi Teknik Informatika</div>
          </div>
        </div>
      ) : (
        <div className="font-bold text-xl">SILAT</div>
      )}
    </Link>
  );
};

export default Logo;
