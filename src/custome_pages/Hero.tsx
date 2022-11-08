import React, { FC } from "react";
import imagePng from "./hero3.png";
import { ButtonPrimary } from "../custome_components";
import HeroSearchForm from "./HeroSearchForm";

export interface SectionHero3Props {
  className?: string;
  slides?: any;
}

const Hero: FC<SectionHero3Props> = ({ className = "", slides }) => {
  return (
    <div
      className={`nc-SectionHero3 relative ${className}`}
      data-nc-id="SectionHero3"
    >
      <div className="mt-10 lg:mt-0 lg:absolute lg:container z-10 inset-x-0 top-[10%] sm:top-[20%]">
        <div className="flex flex-col items-start max-w-6xl space-y-5 xl:space-y-8 ">
          <span className="sm:text-lg md:text-xl font-semibold md:text-white">
         
          </span>
          <h2 className="font-bold text-black md:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
            {slides[0]?.title}
          </h2>
          <ButtonPrimary
            href="/login"
            sizeClass="px-6 py-3 lg:px-8 lg:py-4"
            fontSize="text-sm sm:text-base lg:text-lg font-medium"
          >
           Login
          </ButtonPrimary>
        </div>
        <HeroSearchForm className="mt-5 lg:mt-24 2xl:mt-40" />
      </div>
      <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-16 sm:aspect-h-9 ">
        <img
          className="absolute inset-0 object-cover rounded-[32px]"
          src={`${process.env.REACT_APP_DATA_PROVIDER}/${slides[0]?.image}`}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
