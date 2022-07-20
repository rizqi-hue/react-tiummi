import { Grid, InputAdornment } from "@mui/material";
import {
  Create,
  TextInput,
  TabbedForm,
  FormTab,
  FileInput,
  ImageField,
  NumberInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;

  if (!values.no_pb) {
    errors.no_pb = "ra.validation.required";
  }

  if (!values.kode) {
    errors.kode = "ra.validation.required";
  }

  if (!values.nama) {
    errors.nama = "ra.validation.required";
  }

  if (!values.kategori) {
    errors.kategori = "ra.validation.required";
  }

  return errors;
};

const InventoriCreate = (props: any) => {
  return (
    <Create>
      <TabbedForm validate={validateForm}>
        <FormTab label="Gambar" sx={{ maxWidth: "40em" }}>
          <FileInput
            source="image"
            label="Pilih Gambar yang Sesuai"
            accept="image/png, image/jpeg"
            maxSize={2000000}
            multiple={true}
            placeholder={
              <p>Letakan Gambar Disini, Gambar harus kurang dari 2 MB</p>
            }
          >
            <ImageField
              source="image"
              title="title"
              sx={{ maxWidth: "10em" }}
            />
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
                source="no_pb"
                label="No Pembelian"
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput source="kode" label="Kode" isRequired fullWidth />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                source="nama"
                label="Nama Barang"
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                source="kategori"
                label="Kategori"
                isRequired
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <NumberInput
                source="harga"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <NumberInput source="qty" fullWidth />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput source="sumber" label="Sumber" isRequired fullWidth />
            </Grid>
          </Grid>
        </FormTab>
        <FormTab
          label="resources.products.tabs.description"
          path="description"
          sx={{ maxWidth: "40em" }}
        >
          <RichTextInput source="keterangan" label="" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default InventoriCreate;
