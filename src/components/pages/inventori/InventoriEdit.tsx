import { Box, Grid, InputAdornment } from "@mui/material";

import {
  Edit,
  TextInput,
  TabbedForm,
  FormTab,
  FileInput,
  ImageField,
  useRecordContext,
  useCreate,
  SimpleForm,
  ListButton,
  Toolbar,
  NumberInput,
} from "react-admin";

import { useNavigate } from "react-router-dom";

// import { QRCodeSVG } from "qrcode.react";
import Poster from "./Poster";
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

  if (!values.tgl) {
    errors.tgl = "ra.validation.required";
  }

  if (!values.kategori) {
    errors.kategori = "ra.validation.required";
  }

  return errors;
};

const PostEditActions = () => (
  <Toolbar>
    <ListButton />
  </Toolbar>
);

const InventoriEdit = (props: any) => {
  return (
    <Edit>
      <TabbedForm validate={validateForm} defaultValues={{ sales: 0 }}>
        <FormTab label="Gambar" sx={{ maxWidth: "40em" }}>
          <div className="mb-1">
            <Poster />
          </div>
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
    </Edit>
  );
};

const PeminjamanFormTab = (props: any) => {
  const record = useRecordContext();
  const [create, { isLoading, error }] = useCreate();
  const navigate = useNavigate();
  console.log(record);
  const onSubmit = (data: any) => {
    const formData = {
      inventori_kode: record.kode,
      ...data,
    };
    create(
      "inventori",
      { ...formData },
      {
        onSuccess: () => {
          // navigate("/inventori");
        },
      }
    );
  };

  return (
    <SimpleForm onSubmit={onSubmit}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="kode" label="Kode" isRequired fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="kode" label="Kode" isRequired fullWidth />
        </Box>
      </Box>
    </SimpleForm>
  );
};

export default InventoriEdit;
