import { useMediaQuery, Theme, Box, Typography, Button } from "@mui/material";
import {
  useGetIdentity,
  Form,
  useGetOne,
  TextInput,
  PasswordInput,
  Loading,
  Create,
  useNotify,
  DateInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import api from "../../../services/axios";
import SendIcon from "@mui/icons-material/Send";

interface FormValues {
  nim?: string;
  nama?: string;
  tlahir?: string;
  tgllahir?: string;
  jk?: string;
  alamat?: string;
  jurusan?: string;
  telp?: string;
  telp_ortu?: string;
  password?: string;
  confirm_password?: string;
}

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

  if (!values.telp) {
    errors.telp = "ra.validation.required";
  }

  if (!values.telp_ortu) {
    errors.telp_ortu = "ra.validation.required";
  }

  if (values.password && values.password !== values.confirm_password) {
    errors.confirm_password = "resources.customers.errors.password_mismatch";
  }

  return errors;
};

const ProfileList = () => {
  const notify = useNotify();

  // const isXsmall = useMediaQuery<Theme>((theme) =>
  //   theme.breakpoints.down("sm")
  // );
  // const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  const { identity } = useGetIdentity();
  const { data, isLoading, error } = useGetOne("mahasiswa", {
    id: identity?.id,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR</p>;
  }

  const jk = [
    { id: "L", name: "Laki Laki" },
    { id: "P", name: "Perempuan" },
  ];

  // const [update, { isLoading, error }] = useUpdate();
  const handleSubmit = (form: FormValues) => {
    const da = {
      ...form,
    };

    var form_data = new FormData();

    form_data.append("id", identity?.id.toString() || "");
    form_data.append("nama", da.nama || "");
    form_data.append("nim", da.nim || "");
    form_data.append("tlahir", da.tlahir || "");
    form_data.append("tgllahir", da.tgllahir || "");
    form_data.append("jk", da.jk || "");
    form_data.append("alamat", da.alamat || "");
    form_data.append("jurusan", da.jurusan || "");
    form_data.append("telp", da.telp || "");
    form_data.append("telp_ortu", da.telp_ortu || "");

    api.post(`/mahasiswa`, form_data).then((res) => {
      notify(`Profile berhasil dirubah`, { type: "success", undoable: true });
    });
  };

  return (
    <Create sx={{ border: 0 }}>
      <div className="w-full md:w-1/2">
        <Box
          sx={{ backgroundColor: "#fff", marginTop: "10px", padding: "20px" }}
        >
          <Box sx={{ width: "100%" }}>
            <Form
              defaultValues={data}
              validate={validateForm}
              onSubmit={handleSubmit}
            >
              <SectionTitle label="Data Diri" />
              <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="nim"
                    label="No Induk Mahasiswa (NIM)"
                    isRequired
                    fullWidth
                    disabled
                  />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="nama"
                    label="Nama"
                    isRequired
                    fullWidth
                    disabled
                  />
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
                  <TextInput
                    source="alamat"
                    label="Alamat"
                    isRequired
                    fullWidth
                  />
                </Box>
              </Box>

              <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                <Box flex={1}>
                  <TextInput
                    source="jurusan"
                    label="Jurusan"
                    isRequired
                    fullWidth
                    disabled
                  />
                </Box>
              </Box>

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
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Simpan
              </Button>
            </Form>
          </Box>
        </Box>
      </div>
    </Create>
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
