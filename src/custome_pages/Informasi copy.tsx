import React, { FC } from "react";

import {
  ButtonCircle,
  Categories,
  HeaderLogged,
  Input,
} from "../custome_components";
import Card from "./Card";

export interface PageSearchProps {
  className?: string;
}

const Informasi: FC<PageSearchProps> = ({ className = "" }) => {
  return (
    <>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <HeaderLogged />
        <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
          {/* <div
            className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
            data-nc-id="HeadBackgroundCommon"
          /> */}
          <div className="container relative mt-3 md:mt-6">
            <Categories subHeading="Informasi Terkait Lab" />
          </div>

          <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
            <main>
              {/* FILTER */}
              {/* <HeaderFilterSearchPage /> */}

              {/* LOOP ITEMS */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
                {Array.from("11111111").map((_, index) => (
                  <Card key={index} />
                ))}
              </div>

              {/* PAGINATION */}
              {/* <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary>
          </div> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informasi;
