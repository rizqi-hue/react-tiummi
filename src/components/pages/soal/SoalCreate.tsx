import { Box } from "@mui/material";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.soal) {
    errors.soal = "ra.validation.required";
  }

  if (!values.status) {
    errors.status = "ra.validation.required";
  }

  return errors;
};

const soal = [
  { id: "Y", name: "Aktif" },
  { id: "T", name: "Tidak Aktif" },
];

const SoalCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm
        defaultValues={{}}
        sx={{ maxWidth: 500 }}
        validate={validateForm}
      >
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <TextInput source="soal" label="Soal" isRequired fullWidth />
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <SelectInput
            source="status"
            label="Status"
            choices={soal}
            optionText="name"
            optionValue="id"
            isRequired
          />
        </Box>
      </SimpleForm>
    </Create>
  );
};



export default SoalCreate;
