import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Typography } from "@mui/material";
import {
  AutocompleteInput,
  Create, FormTab, ReferenceInput, SelectInput, TabbedForm, TextInput
} from "react-admin";

import { useState } from "react";
import api from "../../../services/axios";

// const OptionRendererRuangan = (choice: any) => (
//   <span className="flex flex-row">
//     <span>{choice.nama}</span>
//     <span className="ml-2 font-bold">({choice.kode})</span>
//   </span>
// );
// const inputTextRuangan = (choice: any) => choice.kode;
// const matchSuggestionRuangan = (filter: any, choice: any) => {
//   return choice.kode.toLowerCase().includes(filter.toLowerCase());
// };

const OptionRendererKelas = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.kelas}</span>
    <span className="ml-2 font-bold">({choice.kode})</span>
  </span>
);
const inputTextKelas = (choice: any) => choice.kode;
const matchSuggestionKelas = (filter: any, choice: any) => {
  return choice.kode.toLowerCase().includes(filter.toLowerCase());
};

const _smt = [
  { id: "Ganjil", name: "Ganjil" },
  { id: "Genap", name: "Genap" },
];

const MyToolbar = () => {
  return <></>;
};

export default function JadwalList(props: any) {
  // const isXsmall = useMediaQuery<Theme>((theme) =>
  //   theme.breakpoints.down("sm")
  // );
  // const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  const [kelasKode, setKelasKode] = useState("");
  const [smt, setSmt] = useState("");
  const [thPel, setThPel] = useState("");
  const [ruangan, setRuangan] = useState("");
  const [jadwal, setJadwal] = useState([]);

  const onButtonClick = () => {
    const formData = new FormData();
    formData.append("kelas", kelasKode);
    formData.append("smt", smt);
    formData.append("thpel", thPel);
    formData.append("lab", ruangan);

    api.post("/api_admin/jadwal/tampilkan_jadwal", formData).then((res) => {
      setJadwal(res.data.data);
    });
  };

  return (
    <>
      <Create {...props}>
        <TabbedForm toolbar={<MyToolbar />}>
          <FormTab
            label="resources.jadwal.tabs.cek_jadwal"
            sx={{ maxWidth: "100%" }}
          >
            <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
              <div className="flex flex-col md:flex-row w-full">
                <ReferenceInput
                  label="Pilih Kelas"
                  source="kelas_kode"
                  reference="kelas"
                >
                  <AutocompleteInput
                    label="Pilih Kelas"
                    optionText={OptionRendererKelas}
                    optionValue="kode"
                    isRequired
                    fullWidth
                    inputText={inputTextKelas}
                    matchSuggestion={matchSuggestionKelas}
                    onChange={(value) => setKelasKode(value)}
                  />
                </ReferenceInput>
                <div className="mr-2"></div>
                <SelectInput
                  source="smt"
                  label="Semester"
                  choices={_smt}
                  optionText="name"
                  optionValue="id"
                  fullWidth
                  isRequired
                  onChange={(value) => setSmt(value.target.value)}
                />
                <div className="mr-2"></div>
                <TextInput
                  source="thpel"
                  label="Tahun Pelajaran"
                  isRequired
                  fullWidth
                  onChange={(value) => setThPel(value.target.value)}
                />
                <div className="mr-2"></div>

                <ReferenceInput
                  label="Pilih Ruangan"
                  source="lab"
                  reference="ruangan"
                >
                  <SelectInput
                    label="Pilih Ruangan"
                    optionText="nama"
                    optionValue="id"
                    isRequired
                    fullWidth
                    onChange={(value) => setRuangan(value.target.value)}
                  />
                </ReferenceInput>
                <div className="mr-2"></div>
              </div>
            </Box>
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
                            <td className="p-3 border border-white">
                              {value.jam}
                            </td>
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
          </FormTab>
          <FormTab
            label="resources.jadwal.tabs.details"
            path="datadiri"
            sx={{ maxWidth: "40em" }}
          ></FormTab>
        </TabbedForm>
      </Create>
    </>
  );
}

const SectionTitle = ({ label }: { label: string }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
};
