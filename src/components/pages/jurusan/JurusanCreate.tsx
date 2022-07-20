import { Box} from "@mui/material";
import { Create, SimpleForm, TextInput, useTranslate } from "react-admin";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.fakultas) {
    errors.fakultas = "ra.validation.required";
  }

  if (!values.prodi) {
    errors.prodi = "ra.validation.required";
  }

  if (!values.jurusan) {
    errors.jurusan = "ra.validation.required";
  }

  if (!values.sing_jur) {
    errors.sing_jur = "ra.validation.required";
  }

  return errors;
};

const JurusanCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm
        defaultValues={{}}
        sx={{ maxWidth: 500 }}
        validate={validateForm}
      >
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="fakultas"
              label="Fakultas"
              isRequired
              fullWidth
            />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="prodi" label="Prodi" isRequired fullWidth />
          </Box>
        </Box>
        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="jurusan" label="Jurusan" isRequired fullWidth />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput
              source="sing_jur"
              label="Singkatan Jurusan"
              isRequired
              fullWidth
            />
          </Box>
        </Box>
      </SimpleForm>
    </Create>
  );
};


export default JurusanCreate;
