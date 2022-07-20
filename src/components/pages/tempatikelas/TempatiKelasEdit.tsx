import { Box,  } from "@mui/material";
import {
  SimpleForm,
  TextInput,
  Edit,
  ReferenceInput,
  AutocompleteInput
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.nim) {
    errors.nidn = "ra.validation.required";
  }

  if (!values.kelas_kode) {
    errors.nama = "ra.validation.required";
  }
  return errors;
};

const OptionRenderer = (choice: any) => (
  <span className="flex flex-col">
    <span>{choice.nama}</span>
    <span className="text-sm font-bold">{choice.nim}</span>
  </span>
);
const inputText = (choice: any) => choice.nim;
const matchSuggestion = (filter: any, choice: any) => {
  return choice.nim.toLowerCase().includes(filter.toLowerCase());
};

const OptionRendererKelas = (choice: any) => `${choice.kelas}`;
const inputTextKelas = (choice: any) => choice.kode;
const matchSuggestionKelas = (filter: any, choice: any) => {
  return (
    choice.kode.toLowerCase().includes(filter.toLowerCase()) ||
    choice.kelas.toLowerCase().includes(filter.toLowerCase())
  );
};

const TempatiKelasEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm
        defaultValues={{}}
        sx={{ maxWidth: 500 }}
        validate={validateForm}
      >
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

        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <ReferenceInput
            label="Cari Kelas"
            source="kelas_kode"
            reference="kelas"
          >
            <AutocompleteInput
              optionText={OptionRendererKelas}
              isRequired
              fullWidth
              optionValue="kode"
              inputText={inputTextKelas}
              matchSuggestion={matchSuggestionKelas}
            />
          </ReferenceInput>
        </Box>

        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <TextInput
            source="thpel"
            label="Tahun Pelajaran, contoh : 2021/2022"
            isRequired
            fullWidth
          />
        </Box>
      </SimpleForm>
    </Edit>
  );
};

export default TempatiKelasEdit;
