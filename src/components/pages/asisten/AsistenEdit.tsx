import { Box } from "@mui/material";
import { SimpleForm, TextInput, SelectInput, Edit } from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.nama) {
    errors.nama = "ra.validation.required";
  }

  if (!values.jab) {
    errors.jab = "ra.validation.required";
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

const AsistenEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm
        defaultValues={{}}
        sx={{ maxWidth: 500 }}
        validate={validateForm}
      >
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <TextInput source="nama" label="Nama" isRequired fullWidth />
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <TextInput source="jab" label="Jabatan" isRequired fullWidth />
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
    </Edit>
  );
};

export default AsistenEdit;
