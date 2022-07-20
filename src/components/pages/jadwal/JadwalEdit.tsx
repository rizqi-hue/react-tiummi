import { Box, Typography } from "@mui/material";
import {
  useTranslate,
  SelectInput,
  Edit,
  DateInput,
  ReferenceInput,
  TabbedForm,
  FormTab,
  ArrayInput,
  SimpleFormIterator,
  AutocompleteInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { RichTextInput } from "ra-input-rich-text";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.nidn) {
    errors.nidn = "ra.validation.required";
  }

  if (!values.matakul_kode) {
    errors.matakul_kode = "ra.validation.required";
  }

  if (!values.smt) {
    errors.smt = "ra.validation.required";
  }

  if (!values.thpel) {
    errors.thpel = "ra.validation.required";
  }

  if (!values.kelas_kode) {
    errors.kelas_kode = "ra.validation.required";
  }

  if (!values.hari_kode) {
    errors.kelas_kode = "ra.validation.required";
  }

  if (!values.jam_kode) {
    errors.jam_kode = "ra.validation.required";
  }

  return errors;
};

const OptionRenderer = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.nama}</span>
    <span className="ml-2 font-bold">({choice.nidn})</span>
  </span>
);
const inputText = (choice: any) => choice.nidn;
const matchSuggestion = (filter: any, choice: any) => {
  return choice.nidn.toLowerCase().includes(filter.toLowerCase());
};

const OptionRendererMatakul = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.matakul}</span>
    <span className="ml-2 font-bold">({choice.kode})</span>
  </span>
);
const inputTextMatakul = (choice: any) => choice.kode;
const matchSuggestionMatakul = (filter: any, choice: any) => {
  return choice.kode.toLowerCase().includes(filter.toLowerCase());
};

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

const smt = [
  { id: "Ganjil", name: "Ganjil" },
  { id: "Genap", name: "Genap" },
];

const JadwalEdit = (props: any) => {
  return (
    <Edit {...props}>
     <TabbedForm validate={validateForm}>
        <FormTab
          label="resources.jadwal.tabs.cek_jadwal"
          sx={{ maxWidth: "40em" }}
        >
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}></Box>
        </FormTab>
        <FormTab
          label="resources.jadwal.tabs.details"
          path="datadiri"
          sx={{ maxWidth: "40em" }}
        >
          <SectionTitle label="Isi detail jadwal berikut" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <ReferenceInput
                label="Cari Dosen"
                source="nidn"
                reference="dosen"
              >
                <AutocompleteInput
                  label="Cari Dosen"
                  optionText={OptionRenderer}
                  optionValue="nidn"
                  isRequired
                  fullWidth
                  inputText={inputText}
                  matchSuggestion={matchSuggestion}
                />
              </ReferenceInput>
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <ReferenceInput
                label="Cari Matakuliah"
                source="matakul_kode"
                reference="matakul"
              >
                <AutocompleteInput
                  label="Cari Matakuliah"
                  optionText={OptionRendererMatakul}
                  optionValue="kode"
                  isRequired
                  fullWidth
                  inputText={inputTextMatakul}
                  matchSuggestion={matchSuggestionMatakul}
                />
              </ReferenceInput>
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <SelectInput
                source="smt"
                label="Semester"
                choices={smt}
                optionText="name"
                optionValue="id"
                fullWidth
                isRequired
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput
                source="thpel"
                label="Tahun Pelajaran"
                isRequired
                fullWidth
              />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
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
                />
              </ReferenceInput>
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
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
                />
              </ReferenceInput>
            </Box>
          </Box>

          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <ReferenceInput
                label="Pilih Hari"
                source="hari_kode"
                reference="hari"
              >
                <SelectInput
                  label="Pilih Hari"
                  optionText="hari"
                  optionValue="kode"
                  isRequired
                  fullWidth
                />
              </ReferenceInput>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <ReferenceInput
                label="Pilih Jam"
                source="jam_kode"
                reference="jam"
              >
                <SelectInput
                  label="Pilih Jam"
                  optionText="jam"
                  optionValue="kode"
                  isRequired
                  fullWidth
                />
              </ReferenceInput>
            </Box>
          </Box>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

const SectionTitle = ({ label }: { label: string }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
};

export default JadwalEdit;
