import { Box } from "@mui/material";
import {
  SimpleForm,
  TextInput,
  Edit,
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.kode) {
    errors.kode = "ra.validation.required";
  }

  if (!values.kelas) {
    errors.kelas = "ra.validation.required";
  }

  return errors;
};

const KelasEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm
        defaultValues={{}}
        sx={{ maxWidth: 500 }}
        validate={validateForm}
      >
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="kode" label="Kode" isRequired fullWidth />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="kelas" label="Kelas" isRequired fullWidth />
          </Box>
        </Box>
      </SimpleForm>
    </Edit>
  );
};


export default KelasEdit;
