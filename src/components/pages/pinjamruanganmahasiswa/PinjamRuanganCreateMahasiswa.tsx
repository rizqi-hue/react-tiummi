import { Box, Typography } from "@mui/material";
import {
  Create,
  DateInput,
  ReferenceInput,
  AutocompleteInput,
  TabbedForm,
  FormTab,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.nama_peminjam) {
    errors.nama_peminjam = "ra.validation.required";
  }

  if (!values.tanggal_pemakaian) {
    errors.tanggal_pemakaian = "ra.validation.required";
  }

  if (!values.tanggal_selesai) {
    errors.tanggal_selesai = "ra.validation.required";
  }

  return errors;
};

const OptionRendererRuangan = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.nama}</span>
    <span className="ml-2 font-bold">({choice.kode})</span>
  </span>
);
const inputTextRuangan = (choice: any) => choice.kode;
const matchSuggestionRuangan = (filter: any, choice: any) => {
  return choice.kode.toLowerCase().includes(filter.toLowerCase());
};

const PinjamRuanganCreateMahasiswa = (props: any) => {
  return (
    <Create {...props}>
      <TabbedForm validate={validateForm}>
        <FormTab
          label="resources.peminjaman.tabs.pilihruangan"
          sx={{ maxWidth: "40em" }}
        >
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <ArrayInput source="ruangan">
              <SimpleFormIterator>
                <ReferenceInput
                  label="Cari Ruangan"
                  source="kode"
                  reference="ruangan"
                >
                  <AutocompleteInput
                    optionText={OptionRendererRuangan}
                    optionValue="kode"
                    isRequired
                    fullWidth
                    inputText={inputTextRuangan}
                    matchSuggestion={matchSuggestionRuangan}
                  />
                </ReferenceInput>
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
            <TextInput
              source="nama_peminjam"
              label="Nama Peminjam"
              isRequired
              fullWidth
            />
          </Box>
          <SectionTitle label="Keterangan" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <DateInput
                source="tanggal_pemakaian"
                label="Akan Digunakan Pada :"
                isRequired
                fullWidth
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <DateInput
                source="tanggal_selesai"
                label="Selesai Digunakan Pada :"
                isRequired
                fullWidth
              />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <RichTextInput
                source="keperluan"
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
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
};

export default PinjamRuanganCreateMahasiswa;
