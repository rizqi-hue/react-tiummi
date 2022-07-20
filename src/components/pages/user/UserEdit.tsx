import { Box, Typography } from "@mui/material";
import {
  SimpleForm,
  TextInput,
  useTranslate,
  PasswordInput,
  email,
  SelectInput,
  Edit,
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.namalengkap) {
    errors.namalengkap = "ra.validation.required";
  }

  if (!values.user_id) {
    errors.user_id = "ra.validation.required";
  }

  if (values.password && values.password !== values.confirm_password) {
    errors.confirm_password = "resources.customers.errors.password_mismatch";
  }
  return errors;
};

const role = [
  { id: "user", name: "User" },
  { id: "admin", name: "Admin" },
];

const UserEdit = (props: any) => {
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
            <TextInput source="user_id" label="ID" isRequired fullWidth />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="namalengkap"
              label="Nama Lengkap"
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

export default UserEdit;
