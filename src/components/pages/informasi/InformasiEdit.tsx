import { Box, Grid } from "@mui/material";

import {
  Edit,
  FileInput,
  FormTab,
  ImageField,
  ListButton,
  SelectInput,
  SimpleForm,
  TabbedForm,
  TextInput,
  Toolbar,
  useCreate,
  useGetIdentity,
  useRecordContext,
} from "react-admin";

import { useNavigate } from "react-router-dom";

// import { QRCodeSVG } from "qrcode.react";
import { RichTextInput } from "ra-input-rich-text";
import Poster from "./Poster";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;

  if (!values.title) {
    errors.title = "ra.validation.required";
  }

  if (!values.status) {
    errors.nama = "ra.validation.required";
  }

  if (!values.content) {
    errors.content = "ra.validation.required";
  }

  if (!values.type) {
    errors.type = "ra.validation.required";
  }

  if (!values.kategori) {
    errors.kategori = "ra.validation.required";
  }

  return errors;
};

const type = [
  { id: "Berita", name: "Berita" },
  { id: "Carousel", name: "Carousel" },
  { id: "Agenda", name: "Agenda" },
  { id: "Pengumuman", name: "Pengumuman" },
  { id: "Jadwal", name: "Jadwal" },
];

const status = [
  { id: "Draft", name: "Draft" },
  { id: "Publish", name: "Publish" },
];

const PostEditActions = () => (
  <Toolbar>
    <ListButton />
  </Toolbar>
);

const InformasiEdit = (props: any) => {
  const { identity } = useGetIdentity();

  return (
    <Edit>
      <TabbedForm validate={validateForm} defaultValues={{ sales: 0 }}>
        <FormTab label="Gambar" sx={{ maxWidth: "40em" }}>
          <div className="mb-1">
            <Poster />
          </div>
          <FileInput
            source="imageupdate"
            label="Pilih Gambar yang Sesuai"
            accept="image/png, image/jpeg"
            maxSize={2000000}
            multiple={true}
            placeholder={
              <p>Letakan Gambar Disini, Gambar harus kurang dari 2 MB</p>
            }
          >
            <ImageField
              source="imageupdate"
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
              <TextInput source="title" label="Judul" isRequired fullWidth />
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
              <SelectInput
                source="type"
                label="Jenis Informasi"
                choices={type}
                optionText="name"
                optionValue="id"
                fullWidth
                isRequired
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectInput
                source="status"
                label="Status"
                choices={status}
                optionText="name"
                optionValue="id"
                fullWidth
                isRequired
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                source="user"
                label="User"
                disabled
                defaultValue={`${identity?.fullName}`}
                isRequired
                fullWidth
              />
            </Grid>
          </Grid>
        </FormTab>
        <FormTab
          label="resources.products.tabs.description"
          path="description"
          sx={{ maxWidth: "40em" }}
        >
          <RichTextInput source="content" label="" />
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
      Informasi_kode: record.kode,
      ...data,
    };
    create(
      "Informasi",
      { ...formData },
      {
        onSuccess: () => {
          // navigate("/Informasi");
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

export default InformasiEdit;
