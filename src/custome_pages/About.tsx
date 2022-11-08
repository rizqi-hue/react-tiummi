import { FC } from "react";
import { HeaderLogged } from "../custome_components";
import BgGlassmorphism from "./BgGlassmorphism";
import SectionStatistic from "./SectionStatistic";

export interface PageAboutProps {
  className?: string;
}

const info = [
  // {
  //   title: "🗺 ADDRESS",
  //   desc: "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  // },
  {
    title: "💌 EMAIL",
    desc: "nc.example@example.com",
  },
  {
    title: "☎ PHONE",
    desc: "000-123-456-7890",
  },
];

const About: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <>
      <HeaderLogged />
      <div
        className={`nc-PageAbout overflow-hidden relative ${className}`}
        data-nc-id="PageAbout"
      >
        {/* ======== BG GLASS ======== */}
        <BgGlassmorphism />

        <div className="container lg:py-28 space-y-16 lg:space-y-28">
          <div className="max-w-7xl mx-auto">
            <SectionStatistic />
            <div className="container flex-shrink-0 grid grid-cols-1 md:grid-cols-2 ">
              <div className="max-w-sm space-y-8">
                {/* {info.map((item, index) => (
                  <div key={index}>
                    <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                      {item.title}
                    </h3>
                    <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                      {item.desc}
                    </span>
                  </div>
                ))} */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
