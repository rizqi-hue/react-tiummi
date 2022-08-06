import { Grid } from "@mui/material";
import { RichTextInput } from "ra-input-rich-text";
import {
  AutocompleteInput, Create, DateInput, FileField, FileInput, FormTab, ReferenceInput, TabbedForm, TextInput
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;

  if (!values.nama) {
    errors.nama = "ra.validation.required";
  }

  return errors;
};

const OptionRenderer = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.matakul}</span>
    <span className="ml-2 font-bold">({choice.kode})</span>
  </span>
);
const inputText = (choice: any) => choice.kode;
const matchSuggestion = (filter: any, choice: any) => {
  return choice.kode.toLowerCase().includes(filter.toLowerCase());
};

const OptionRendererDosen = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.nama}</span>
    <span className="ml-2 font-bold">({choice.nidn})</span>
  </span>
);
const inputTextDosen = (choice: any) => choice.nidn;
const matchSuggestionDosen = (filter: any, choice: any) => {
  return choice.nidn.toLowerCase().includes(filter.toLowerCase());
};

const MateriCreate = (props: any) => {
  return (
    <Create>
      <TabbedForm validate={validateForm}>
        <FormTab label="File" sx={{ maxWidth: "40em" }}>
          <FileInput
            source="image"
            label="Pilih file yang Sesuai"
            // accept="image/png, image/jpeg"
            maxSize={2000000}
            multiple={true}
            placeholder={<p>Letakan file disini</p>}
          >
            <FileField source="image" title="title" sx={{ maxWidth: "10em" }} />
          </FileInput>
        </FormTab>
        <FormTab
          label="resources.products.tabs.details"
          path="details"
          sx={{ maxWidth: "40em" }}
        >
          <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={8}>
              <TextInput
                source="nama"
                label="Nama Materi"
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ReferenceInput
                label="Cari Matakuliah"
                source="kode"
                reference="matakul"
              >
                <AutocompleteInput
                  optionText={OptionRenderer}
                  optionValue="kode"
                  isRequired
                  fullWidth
                  inputText={inputText}
                  matchSuggestion={matchSuggestion}
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={8}>
              <ReferenceInput
                label="Pilih Dosen"
                source="nidn"
                reference="dosen"
              >
                <AutocompleteInput
                  optionText={OptionRendererDosen}
                  optionValue="nidn"
                  isRequired
                  fullWidth
                  inputText={inputTextDosen}
                  matchSuggestion={matchSuggestionDosen}
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} sm={4}>
              <DateInput source="tgl" fullWidth />
            </Grid>
          </Grid>
        </FormTab>
        <FormTab
          label="resources.products.tabs.description"
          path="description"
          sx={{ maxWidth: "40em" }}
        >
          <RichTextInput source="ket" label="" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default MateriCreate;
