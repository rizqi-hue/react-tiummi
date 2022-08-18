import React, { FC, useEffect, useState } from "react";
import api from "../services/axios";
import Card12 from "./Card12";
import Card13 from "./Card13";

export interface SectionMagazine5Props {}

const SectionMagazine5: FC<SectionMagazine5Props> = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("api_admin/informasi/select", {
        params: {
          pagination: `{"page":1,"perPage":5}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  return (
    <div className="nc-SectionMagazine5">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 mr-0 md:mr-10">
          <Card12 data={data[0]} />
        </div>
        <div className="w-full md:w-2/5">
          {data.map(
            (item, index) => index != 0 && <Card13 data={item} key={index} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine5;
