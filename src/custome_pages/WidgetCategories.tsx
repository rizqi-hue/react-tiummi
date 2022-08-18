import React, { FC, useEffect, useState } from "react";
import api from "../services/axios";
import CardCategory1 from "./CardCategory1";
import WidgetHeading1 from "./WidgetHeading1";

export interface WidgetCategoriesProps {
  className?: string;
}

const WidgetCategories: FC<WidgetCategoriesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("api_admin/informasi/select_kategori").then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div
      className={`nc-WidgetCategories rounded-3xl  overflow-hidden ${className}`}
      data-nc-id="WidgetCategories"
    >
      <WidgetHeading1
        title="✨ Trending"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
          {data.map((item, index) => (
            <CardCategory1
              data={item}
              className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetCategories;
