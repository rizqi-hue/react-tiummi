import { useEffect, useState } from "react";
import { Categories, HeaderLogged, ImageCarousel } from "../custome_components";
import api from "../services/axios";
import SectionLatestPengumuman from "./SectionLatestPengumuman";

const type = [
  { id: "Berita", title: "Berita", content: "" },
  { id: "Agenda", title: "Agenda", content: "" },
  { id: "Pengumuman", title: "Pengumuman", content: "" },
  { id: "Jadwal", title: "Jadwal", content: "" },
];

export function LandingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("api_admin/informasi/select", {
        params: {
          pagination: `{"page":1,"perPage":5}`,
          filter: `{ "type": "Carousel" }`,
        },
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  return (
    <>
      <HeaderLogged />

      <div className="nc-PageHome relative overflow-hidden">
        <ImageCarousel slides={data} />
        <div className="container relative mt-3 md:mt-6">
          <Categories
            data={type}
            heading="Informasi"
            subHeading="Cari informasi berdasarkan sub dibawah ini"
          />
        </div>
        <div className="container relative">
          <SectionLatestPengumuman />
        </div>
      </div>
    </>
  );
}
