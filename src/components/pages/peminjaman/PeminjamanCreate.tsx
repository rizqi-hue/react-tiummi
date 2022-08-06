import { Box, Typography } from "@mui/material";

import { RichTextInput } from "ra-input-rich-text";
import {
  ArrayInput, AutocompleteInput, Create, DateInput, FormTab,
  NumberInput, ReferenceInput, SimpleFormIterator, TabbedForm, useTranslate
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.nim) {
    errors.nim = "ra.validation.required";
  }

  if (!values.tgl) {
    errors.tgl = "ra.validation.required";
  }

  if (!values.tglkembali) {
    errors.tglkembali = "ra.validation.required";
  }

  return errors;
};

const OptionRenderer = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.nama}</span>
    <span className="ml-2 font-bold">({choice.nim})</span>
  </span>
);
const inputText = (choice: any) => choice.nim;
const matchSuggestion = (filter: any, choice: any) => {
  return choice.nim.toLowerCase().includes(filter.toLowerCase());
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

const PeminjamanCreate = (props: any) => {
  return (
    <Create {...props}>
      <TabbedForm validate={validateForm}>
        <FormTab
          label="resources.peminjaman.tabs.pilihbarang"
          sx={{ maxWidth: "40em" }}
        >
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <ArrayInput source="inventori">
              <SimpleFormIterator>
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
                <NumberInput source="qty" fullWidth />
              </SimpleFormIterator>
            </ArrayInput>
          </Box>
        </FormTab>
        <FormTab
          label="resources.peminjaman.tabs.datadiri"
          path="datadiri"
          sx={{ maxWidth: "40em" }}
        >
          <SectionTitle label="Data Diri" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <ReferenceInput
              label="Cari Mahasiswa"
              source="nim"
              reference="mahasiswa"
            >
              <AutocompleteInput
                optionText={OptionRenderer}
                optionValue="nim"
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
              <DateInput
                source="tgl"
                label="Tanggal Peminjaman"
                isRequired
                fullWidth
                // format={dateFormatter}
                // parse={dateParser}
                // defaultValue={new Date()}
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <DateInput
                source="tglkembali"
                label="Akan dikembalikan pada :"
                isRequired
                fullWidth
                // format={dateFormatter}
                // parse={dateParser}
                // defaultValue={new Date()}
              />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <RichTextInput
                source="ket"
                label="Akan dipinjam untuk keperluan ?"
              />
            </Box>
          </Box>
        </FormTab>
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

export default PeminjamanCreate;
