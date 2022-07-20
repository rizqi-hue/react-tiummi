import { useMediaQuery, Theme, Box, Typography, Button } from "@mui/material";
import {
  useGetIdentity,
  Form,
  useGetOne,
  TextInput,
  PasswordInput,
  Loading,
  SimpleForm,
  Create,
  useNotify,
} from "react-admin";
import api from "../../../services/axios";
import SendIcon from "@mui/icons-material/Send";

interface FormValues {
  user_id?: string;
  namalengkap?: string;
  password?: string;
  confirm_password?: string;
}

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

const ProfileList = () => {
  const notify = useNotify();

  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  const { identity } = useGetIdentity();
  const { data, isLoading, error } = useGetOne("profile", {
    id: identity?.id,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR</p>;
  }

  // const [update, { isLoading, error }] = useUpdate();
  const handleSubmit = (form: FormValues) => {
    const da = {
      ...form,
    };

    var form_data = new FormData();

    form_data.append("confirm_password", da.confirm_password || "");
    form_data.append("id", identity?.id.toString() || "");
    form_data.append("namalengkap", da.namalengkap || "");
    form_data.append("password", da.password || "");
    form_data.append("user_id", da.user_id || "");

    api.post(`/profile`, form_data).then((res) => {
      notify(`Profile berhasil dirubah`, { type: "success", undoable: true });
    });
  };

  return (
    // <List {...props}>
    <Box sx={{ backgroundColor: "#fff", marginTop: "10px", padding: "20px" }}>
      <Box sx={{ width: "40em" }}>
        <Create>
          <Form
            defaultValues={data}
            validate={validateForm}
            onSubmit={handleSubmit}
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
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Simpan
            </Button>
          </Form>
        </Create>
        {/* <Form onSubmit={handleSubmit}>
          <SectionTitle label="Data Diri" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              {/* <TextInput
                source="id"
                label="id"
                defaultValue={identity?.id}
                isRequired
                fullWidth
                type="hidden"
              /> 
              <TextInput
                source="user_id"
                label="ID"
                defaultValue={data.user_id}
                isRequired
                fullWidth
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput
                source="namalengkap"
                label="Nama Lengkap"
                defaultValue={data.namalengkap}
                isRequired
                fullWidth
              />
            </Box>
          </Box>
          <SectionTitle label="Password" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <PasswordInput source="password" fullWidth isRequired />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <PasswordInput source="confirm_password" fullWidth isRequired />
            </Box>
          </Box>
          <Button variant="contained" endIcon={<SendIcon />}>
            Simpan
          </Button>
        </Form> */}
      </Box>
    </Box>
  );
};

const SectionTitle = ({ label }: { label: string }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
};

export default ProfileList;
