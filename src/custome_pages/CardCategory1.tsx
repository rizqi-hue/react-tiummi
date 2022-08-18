import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { NcImage } from "../custome_components";

interface DataCardCategory1Props {
  kategori?: string;
  jumlah?: string;
}

export interface CardCategory1Props {
  className?: string;
  size?: "large" | "normal";
  data?: DataCardCategory1Props;
}

const CardCategory1: FC<CardCategory1Props> = ({
  className = "",
  size = "normal",
  data = {
    kategori: "Kategori",
    jumlah: "0",
  },
}) => {
  return (
    <NavLink
      to={"#"}
      className={`nc-CardCategory1 flex items-center ${className}`}
      data-nc-id="CardCategory1"
    >
      <NcImage
        containerClassName={`flex-shrink-0 ${
          size === "large" ? "w-20 h-20" : "w-12 h-12"
        } rounded-lg mr-4 overflow-hidden`}
        src={""}
      />
      <div>
        <h2
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {data.kategori}
        </h2>
        <span
          className={`${
            size === "large" ? "text-sm" : "text-xs"
          } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
        >
           {data.jumlah} Articles
        </span>
      </div>
    </NavLink>
  );
};

export default CardCategory1;
