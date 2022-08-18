import React, { FC, useEffect, useState } from "react";
import WidgetCategories from "./WidgetCategories";
// import WidgetPosts from "./WidgetPosts";
import Card3 from "./Card3";
import { ButtonPrimary, Heading } from "../custome_components";
import api from "../services/axios";

//
export interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  postCardName = "card3",
  className = "py-16 lg:py-28",
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("api_admin/informasi/select", {
        params: {
          pagination: `{"page":1,"perPage":5}`,
          filter: `{ "type": "Berita" }`,
        },
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>Berita Terbaru 🎈</Heading>
          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {data.map((item, index) => (
              <Card3 data={item} key={index} className="" />
            ))}
          </div>
          <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <ButtonPrimary>Show me more</ButtonPrimary>
          </div>
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetCategories />
          {/* <WidgetPosts /> */}
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
