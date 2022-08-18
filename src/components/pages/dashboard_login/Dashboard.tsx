import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../../services/axios";
import HasilSurvei from "../hasilsurvei/HasilSurvei";
import CardCounter from "./CardCounter";
import JadwalList from "./LihatJadwalList";
import Welcome from "./Welcome";

const Dashboard = () => {
  const [dataCounter, setDataCounter] = useState({
    total_kelas: "0",
    total_mahasiswa: "0",
    total_dosen: "0",
    total_inventori: "0",
    total_pinjam_inventori: "0",
    total_inventori_by_kategori: [
      {
        kategori: "-",
        jumlah: "0",
      },
    ],
  });

  useEffect(() => {
    counter();
  }, []);

  const counter = () => {
    api.get(`/counter`).then((res) => {
      setDataCounter(res.data.data);
    });
  };

  return (
    <div className="p-4">
      <div className="hidden md:block">
        {/* <Welcome /> */}
      </div>
      <div className="items-center justify-center mt-5">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          <CardCounter
            counter={dataCounter.total_mahasiswa}
            title="Jumlah Mahasiswa"
            link="/mahasiswa"
          />
          <CardCounter
            counter={dataCounter.total_dosen}
            title="Jumlah Dosen"
            link="/dosen"
          />
          {/* <CardCounter
            counter={dataCounter.total_inventori}
            title="Jumlah Inventori"
            link="/inventori"
          /> */}
          <CardCounter
            counter={dataCounter.total_kelas}
            title="Jumlah Kelas"
            link="/kelas"
          />
          <CardCounter
            counter={dataCounter.total_pinjam_inventori}
            title="Jumlah Peminjam"
            link="/peminjaman"
          />
        </div>
        <div className="mt-10"></div>

        <HasilSurvei />

        <div className="w-full h-80 flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full h-80">
            {/* <HasilSurvei /> */}
            <div className="w-full gap-x-20 text-gray-500">
              <div>
                <h2 className="text-2xl mb-4">Inventori</h2>

                <Card
                  sx={{
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? "#535353"
                        : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

                    // height: "110px",
                  }}
                >
                  <div className="flex w-full">
                    <div className="w-full p-4 rounded-xl">
                      <div className="w-full text-gray-50 mb-5">
                        <div className="font-bold text-2xl leading-none">
                          {dataCounter.total_inventori}
                        </div>
                        <div className="mt-2">Jumlah Inventori Terdaftar</div>
                      </div>
                      <div className="w-full flex flex-wrap">
                        {dataCounter.total_inventori_by_kategori.map(
                          (value) => {
                            return (
                              <div className="p-1 w-34 text-gray-50 mr-5">
                                <div className="font-bold text-xl leading-none">
                                  {value.jumlah}
                                </div>
                                <div className="mt-1 text-xs">
                                  {value.kategori}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
