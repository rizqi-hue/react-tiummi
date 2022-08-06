import { Box, Typography } from "@mui/material";
import {
  Create,
  SimpleForm,
  TextInput,
  useTranslate,
  PasswordInput,
  SelectInput,
  DateInput,
  ReferenceInput,
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.nim) {
    errors.nim = "ra.validation.required";
  }

  if (!values.nama) {
    errors.nama = "ra.validation.required";
  }

  if (values.password && values.password !== values.confirm_password) {
    errors.confirm_password = "resources.customers.errors.password_mismatch";
  }
  return errors;
};

const jk = [
  { id: "Laki Laki", name: "Laki Laki" },
  { id: "Perempuan", name: "Perempuan" },
];

const MahasiswaCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm
        defaultValues={{}}
        sx={{ maxWidth: 500 }}
        validate={validateForm}
      >
        <SectionTitle label="Data Diri" />
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="nim"
              label="No Induk Mahasiswa (NIM)"
              isRequired
              fullWidth
            />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="nama" label="Nama" isRequired fullWidth />
          </Box>
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="tlahir"
              label="Templat Lahir"
              isRequired
              fullWidth
            />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <DateInput
              source="tgllahir"
              label="Tanggal Lahir"
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
            <SelectInput
              source="jk"
              label="Jenis Kelamin"
              choices={jk}
              optionText="name"
              optionValue="id"
              fullWidth
              isRequired
            />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="alamat" label="Alamat" isRequired fullWidth />
          </Box>
        </Box>
        <ReferenceInput label="Jurusan" source="jurusan" reference="jurusan">
          <SelectInput optionText="jurusan" isRequired fullWidth />
        </ReferenceInput>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="telp"
              label="No HP Mahasiswa"
              isRequired
              fullWidth
            />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="telp_ortu"
              label="No HP Orang Tua"
              isRequired
              fullWidth
            />
          </Box>
        </Box>
        <SectionTitle label="Password" />
        <Box display={{ xs: "block", sm: "flex" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <PasswordInput source="password" fullWidth isRequired />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <PasswordInput source="confirm_password" fullWidth isRequired />
          </Box>
        </Box>
      </SimpleForm>
    </Create>
  );
};

const SectionTitle = ({ label }: { label: string }) => {

  return (
    <Typography variant="h6" gutterBottom>
      {/* {translate(label as string)} */}
      {label}
    </Typography>
  );
};

export default MahasiswaCreate;
