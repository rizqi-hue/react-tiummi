import { Box } from "@mui/material";
import { RichTextInput } from "ra-input-rich-text";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.no_hp) {
    errors.kode = "ra.validation.required";
  }

  if (!values.message) {
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
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="nama"
              label="Nama Penerima"
              isRequired
              fullWidth
            />
          </Box>
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="no_hp" label="No Hp" isRequired fullWidth />
          </Box>
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <RichTextInput source="message" label="Pesan" />
          </Box>
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="status"
              label="Status"
              defaultValue={"in"}
              disabled
              isRequired
              fullWidth
            />
          </Box>
        </Box>
      </SimpleForm>
    </Edit>
  );
};

export default KelasEdit;
