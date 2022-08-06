import SendIcon from "@mui/icons-material/Send";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import api from "../../../services/axios";

const smtOptions = ["Ganjil", "Genap"];

export default function JadwalList(props: any) {
  const currentYear = new Date().getFullYear();
  const nextYear = new Date().getFullYear() + 1;

  const [smt, setSmt] = React.useState<string | null>(smtOptions[0]);
  const [inputSmt, setInputSmt] = React.useState("");

  const [kelasOptions, setKelasOptions] = useState([{ kode: "" }]);
  const [kelas, setKelas] = useState<string | null>(kelasOptions[0].kode);
  const [inputKelas, setInputKelas] = useState("");

  const [ruanganOptions, setRuanganOptions] = useState([
    { id: "", nama: "", kode: "", status: "" },
  ]);
  const [ruangan, setRuangan] = useState<string | null>(ruanganOptions[0].id);

  const [thPel, setThPel] = useState("");
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    api.get("api_admin/kelas/select").then((res) => {
      setKelasOptions(res.data.data);
    });

    api.get("api_admin/ruangan/select").then((res) => {
      setRuanganOptions(res.data.data);
    });

    const formData = new FormData();
    formData.append("kelas", kelas || "");
    formData.append("smt", smt || "");
    formData.append("thpel", thPel);
    formData.append("lab", ruangan || "");

    api.post("/api_admin/jadwal/tampilkan_jadwal", formData).then((res) => {
      setJadwal(res.data.data);
    });
  }, []);

  const onButtonClick = () => {
    const formData = new FormData();
    formData.append("kelas", kelas || "");
    formData.append("smt", smt || "");
    formData.append("thpel", thPel);
    formData.append("lab", ruangan || "");

    api.post("/api_admin/jadwal/tampilkan_jadwal", formData).then((res) => {
      setJadwal(res.data.data);
    });
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-10 w-full">
        <FormControl fullWidth>
          <Autocomplete
            value={kelas}
            onChange={(event: any, newValue: string | null) => {
              setKelas(newValue);
            }}
            inputValue={inputKelas}
            onInputChange={(event, newInputValue) => {
              setInputKelas(newInputValue);
            }}
            id="kelas"
            options={kelasOptions.map((value) =>
              value?.kode ? value?.kode : ""
            )}
            renderInput={(params) => <TextField {...params} label="Kelas" />}
          />
        </FormControl>
        <FormControl fullWidth>
          <Autocomplete
            value={smt}
            onChange={(event: any, newValue: string | null) => {
              setSmt(newValue);
            }}
            inputValue={inputSmt}
            onInputChange={(event, newInputValue) => {
              setInputSmt(newInputValue);
            }}
            id="semester"
            options={smtOptions}
            renderInput={(params) => <TextField {...params} label="Semester" />}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Tahun Pelajaran"
            defaultValue={`${currentYear}/${nextYear}`}
            variant="outlined"
            onChange={(value) => setThPel(value.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Ruangan</InputLabel>
          <Select
            value={ruangan}
            label="Ruangan"
            onChange={(value) => setRuangan(value.target.value)}
          >
            {ruanganOptions.map((value: any) => {
              return <MenuItem value={value?.id}>{value?.nama}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div className="mt-5"></div>
      <Button
        onClick={onButtonClick}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Cari Jadwal
      </Button>
      <div className="mt-10 w-full">
        <div className="overflow-x-auto">
          <table className="w-full tables text-gray-600 border-separate space-y-6 text-sm">
            <thead className="bg-gray-200 text-gray-500">
              <tr>
                <th className="p-3 border border-white">Jam</th>
                <th className="p-3 border border-white">Minggu</th>
                <th className="p-3 border border-white">Senin</th>
                <th className="p-3 border border-white">Selasa</th>
                <th className="p-3 border border-white">Rabu</th>
                <th className="p-3 border border-white">Kamis</th>
                <th className="p-3 border border-white">Jumat</th>
                <th className="p-3 border border-white">Sabtu</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((value: any, index) => {
                return (
                  <>
                    <tr key={index} className="bg-gray-100">
                      <td className="p-3 border border-white">{value.jam}</td>
                      {value.hari.map((hari: any) => {
                        return (
                          <>
                            {hari.detail != null ? (
                              <>
                                <td className="p-3 border border-white">
                                  <span className="font-bold">
                                    {hari.detail.matakul}
                                  </span>{" "}
                                  <br />
                                  {hari.detail.nama} <br />
                                  {hari.detail.kelas}
                                </td>
                              </>
                            ) : (
                              <>
                                <td className="p-3 border border-white"></td>
                              </>
                            )}
                          </>
                        );
                      })}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
