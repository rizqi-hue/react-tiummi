import { Box } from "@mui/material";
import {
  Create, NumberInput, SimpleForm,
  TextInput
} from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.matakul) {
    errors.matakul = "ra.validation.required";
  }

  if (!values.kode) {
    errors.kode = "ra.validation.required";
  }

  if (!values.sks) {
    errors.sks = "ra.validation.required";
  }

  if (!values.temu) {
    errors.temu = "ra.validation.required";
  }

  return errors;
};

const MatakulCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm
        defaultValues={{}}
        sx={{ maxWidth: 500 }}
        validate={validateForm}
      >
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <TextInput
            source="matakul"
            label="Nama Mata Kuliah"
            isRequired
            fullWidth
          />
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="kode"
              label="Kode Mata Kuliah"
              isRequired
              fullWidth
            />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <NumberInput source="sks" label="Jumlah SKS" isRequired fullWidth />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <NumberInput
              source="temu"
              label="Jumlah Pertemuan"
              isRequired
              fullWidth
            />
          </Box>
        </Box>
      </SimpleForm>
    </Create>
  );
};

export default MatakulCreate;
