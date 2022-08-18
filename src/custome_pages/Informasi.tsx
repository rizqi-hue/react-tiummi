import React, { FC } from "react";

import {
  ButtonCircle,
  Categories,
  HeaderLogged,
  Input,
  Heading,
} from "../custome_components";
import BgGlassmorphism from "./BgGlassmorphism";
import Card from "./Card";
import SectionLatestPosts from "./SectionLatestPosts";
import SectionMagazine5 from "./SectionMagazine5";

export interface PageSearchProps {
  className?: string;
}

const type = [
  { id: "Berita", title: "Berita", content: "" },
  { id: "Agenda", title: "Agenda", content: "" },
  { id: "Pengumuman", title: "Pengumuman", content: "" },
  { id: "Jadwal", title: "Jadwal", content: "" },
];

const Informasi: FC<PageSearchProps> = ({ className = "" }) => {
  return (
    <>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <HeaderLogged />
        <div className="nc-BlogPage overflow-hidden relative">
          {/* <div
            className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
            data-nc-id="HeadBackgroundCommon"
          /> */}
          <div className="bg-primary-100 w-full py-5">
            <div className="container relative mt-3 md:mt-6">
              <Heading desc="Cari informasi berdasarkan sub dibawah ini">
                Informasi
              </Heading>
            </div>
          </div>
          <BgGlassmorphism />
          <div className="container relative">
            {/* === SECTION 1 === */}
            <div className="pt-6 pb-10 lg:pb-20">
              <SectionMagazine5 />
            </div>

            {/* === SECTION 1 === */}
            {/* <SectionAds /> */}
            <div className="relative mt-3 md:mt-6">
              <Categories
                data={type}
                heading="Informasi"
                subHeading="Cari informasi berdasarkan sub dibawah ini"
              />
            </div>

            {/* === SECTION 8 === */}
            <SectionLatestPosts />

            {/* === SECTION 1 === */}
            {/* <SectionSubscribe2 className="pb-16 lg:pb-28" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Informasi;
