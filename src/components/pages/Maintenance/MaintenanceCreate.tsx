import { Box, Typography } from "@mui/material";

import { RichTextInput } from "ra-input-rich-text";
import {
  AutocompleteInput, Create, DateInput, FormTab, ReferenceInput, TabbedForm, TextInput, useTranslate
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.kode) {
    errors.kode = "ra.validation.required";
  }

  if (!values.tanggal) {
    errors.tanggal = "ra.validation.required";
  }

  if (!values.user_id) {
    errors.user_id = "ra.validation.required";
  }

  return errors;
};

const OptionRenderer = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.user_id}</span>
    <span className="ml-2 font-bold">({choice.namalengkap})</span>
  </span>
);
const inputText = (choice: any) => choice.user_id;
const matchSuggestion = (filter: any, choice: any) => {
  return choice.user_id.toLowerCase().includes(filter.toLowerCase());
};

const OptionRendererInventori = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.nama}</span>
    <span className="ml-2 font-bold">({choice.kode})</span>
  </span>
);
const inputTextInventori = (choice: any) => choice.kode;
const matchSuggestionInventori = (filter: any, choice: any) => {
  return choice.kode.toLowerCase().includes(filter.toLowerCase());
};

const MaintenanceCreate = (props: any) => {
  return (
    <Create {...props}>
      <TabbedForm validate={validateForm}>
        <FormTab
          label="resources.peminjaman.tabs.pilihbarang"
          sx={{ maxWidth: "40em" }}
        >
          <SectionTitle label="Pilih Barang" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <ReferenceInput
              label="Cari Barang"
              source="kode"
              reference="inventori"
            >
              <AutocompleteInput
                optionText={OptionRendererInventori}
                optionValue="kode"
                isRequired
                fullWidth
                inputText={inputTextInventori}
                matchSuggestion={matchSuggestionInventori}
              />
            </ReferenceInput>
          </Box>

          <SectionTitle label="Petugas" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <ReferenceInput
              label="Cari Pengguna"
              source="user_id"
              reference="users"
            >
              <AutocompleteInput
                optionText={OptionRenderer}
                optionValue="user_id"
                isRequired
                fullWidth
                inputText={inputText}
                matchSuggestion={matchSuggestion}
              />
            </ReferenceInput>
          </Box>
          <SectionTitle label="Keterangan" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput
                source="no_maintenance"
                label="No Maintenance"
                isRequired
                fullWidth
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="jenis" label="Jenis" isRequired fullWidth />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <DateInput
                source="tanggal"
                label="Tanggal Cek"
                isRequired
                fullWidth
                // format={dateFormatter}
                // parse={dateParser}
                // defaultValue={new Date()}
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput
                source="ruangan"
                label="Ruangan"
                isRequired
                fullWidth
              />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <RichTextInput source="uraian" label="Uraian ?" />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <RichTextInput source="keterangan" label="Keterangan ?" />
            </Box>
          </Box>
        </FormTab>
        {/* <FormTab
          label="resources.peminjaman.tabs.datadiri"
          path="datadiri"
          sx={{ maxWidth: "40em" }}
        >
          
        </FormTab> */}
      </TabbedForm>
    </Create>
  );
};

const SectionTitle = ({ label }: { label: string }) => {
  const translate = useTranslate();

  return (
    <Typography variant="h6" gutterBottom>
      {/* {translate(label as string)} */}
      {label}
    </Typography>
  );
};

export default MaintenanceCreate;
