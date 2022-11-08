import { useEffect, useState } from "react";
import { Categories, HeaderLogged, ImageCarousel } from "../custome_components";
import SectionLargeSlider from "../custome_components/molecules/Slider/SectionLargeSlider";
import api from "../services/axios";
import Hero from "./Hero";
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
        {/* <div className="bg-neutral-100/80 dark:bg-black/20 py-10 lg:py-10">
          <div className="container">
            <SectionLargeSlider />
          </div>
        </div> */}
        <div className="container px-4">
          <Hero slides={data} />
        </div>
        {/* <div className="container px-4">
          <ImageCarousel slides={data} />
        </div> */}
        <div className="container relative mt-10 md:mt-20">
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
