import { Box, Typography } from "@mui/material";
import {
  SimpleForm,
  TextInput,
  useTranslate,
  PasswordInput,
  SelectInput,
  Edit,
  DateInput,
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.nidn) {
    errors.nidn = "ra.validation.required";
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
  { id: "L", name: "Laki Laki" },
  { id: "P", name: "Perempuan" },
];

const DosenEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm
        defaultValues={{}}
        sx={{ maxWidth: 500 }}
        validate={validateForm}
      >
        <SectionTitle label="Data Diri" />
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="nidn" label="NIDN" isRequired fullWidth />
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
        <TextInput source="jabatan" label="Jabatan" isRequired fullWidth />
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
    </Edit>
  );
};

const SectionTitle = ({ label }: { label: string }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
};

export default DosenEdit;
