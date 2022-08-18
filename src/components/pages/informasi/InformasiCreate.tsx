import { Grid } from "@mui/material";
import { RichTextInput } from "ra-input-rich-text";
import {
  Create,
  FileInput,
  FormTab,
  ImageField,
  SelectInput,
  TabbedForm,
  TextInput,
  useGetIdentity,
} from "react-admin";

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

const InformasiCreate = (props: any) => {
  const { identity } = useGetIdentity();

  console.log(identity?.fullName);

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
                defaultValue={`${identity?.user_id}`}
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
    </Create>
  );
};

export default InformasiCreate;
