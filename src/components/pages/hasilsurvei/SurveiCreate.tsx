import { Box, Button, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  Form,
  useRedirect,
} from "react-admin";
import api from "../../../services/axios";
import FormSurveiDetailItem from "./FormSurveiDetailItem";
import FormSurveiDetailItemAssisten from "./FormSurveiDetailItemAssisten";
import jwtDecode from "jwt-decode";
import SendIcon from "@mui/icons-material/Send";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.matakul) {
    errors.matakul = "ra.validation.required";
  }

  if (!values.kode) {
    errors.kode = "ra.validation.required";
  }

  if (!values.sks) {
    errors.sks = "ra.validation.required";
  }

  if (!values.temu) {
    errors.temu = "ra.validation.required";
  }

  return errors;
};

const SurveiCreate = (props: any) => {
  const redirect = useRedirect();
  const [soal, setSoal] = useState([]);
  const [ass, setAss] = useState([]);
  const [form, setForm] = useState({
    keperluan: "",
    nim: "",
    nama: "",
  });

  useEffect(() => {
    getSoal();
    getAss();
  }, []);

  const getSoal = () => {
    api.get(`/soal`).then((res) => {
      setSoal(res.data.data);
    });
  };

  const getAss = () => {
    api.get(`/asisten`).then((res) => {
      setAss(res.data.data);
    });
  };

  const onOptionChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    const id = event.target.id;

    setForm({
      ...form,
      [name]: value,
      [`soal_${id}`]: id,
    });
  };

  const onSubmit = async () => {
    const token = localStorage.getItem("token_access") || "";
    const form_data: any = form;

    var data = new FormData();

    for (var key in data) {
      data.append(key, form_data[key]);
    }

    let decoded = {
      user_id: "",
      nama: "",
    };

    if (token) {
      decoded = await jwtDecode(token);
      data.append("keperluan", form_data.keperluan);
      data.append("nim", decoded.user_id);
      data.append("nama", decoded.nama);
      
      api.post(`/survei`, data).then((res) => {
        redirect("/survei");
      });
    }
  };

  return (
    <Create {...props}>
      <Form
        // validate={validateForm}
        onSubmit={onSubmit}
        className="w-1/2 p-5 py-5"
      >
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <TextInput
            source="keperluan"
            label="Keperluan"
            isRequired
            fullWidth
            defaultValue={form.keperluan}
            onChange={(event: any) =>
              setForm({ ...form, keperluan: event.target.value })
            }
          />
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "50%" }}>
          <div className="flex flex-col">
            {soal.map((_soal: any) => {
              if (_soal.id == 4) {
                return (
                  <>
                    <div>
                      <SectionTitle
                        label="Berilah Penilaian Anda Untuk Asisten Laboratorium /
                      Laboran Prodi Teknik Informatika UMMI. *"
                      />
                    </div>
                    {ass
                      ? ass.map((_ass: any) => {
                          if (_ass.status == "Y") {
                            return (
                              <FormSurveiDetailItemAssisten
                                id={_ass.id}
                                nama={_ass.nama}
                                jab={_ass.jab}
                                status={_ass.status}
                                onChange={(event: any) => onOptionChange(event)}
                              />
                            );
                          }
                        })
                      : ""}
                  </>
                );
              }
              return (
                <>
                  <FormSurveiDetailItem
                    id={_soal.id}
                    soal={_soal.soal}
                    status={_soal.status}
                    onChange={(event: any) => onOptionChange(event)}
                  />
                </>
              );
            })}
          </div>
        </Box>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Simpan
        </Button>
      </Form>
    </Create>
  );
};

const SectionTitle = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="mt-4 text-md text-gray-600">{label}</div>
    </div>
  );
};

export default SurveiCreate;
