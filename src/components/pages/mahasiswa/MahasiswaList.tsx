import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, DateField } from "react-admin";

export default function MahasiswaList(props: any) {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <List {...props}>
      {isXsmall ? (
        // <MobileGrid />
        <></>
      ) : (
        <Datagrid optimized rowClick="edit">
          <TextField source="nim" label="NIM" />
          <TextField source="nama" label="Nama" />
          <DateField source="tgllahir" label="Tanggal Lahir" />
          <TextField source="jurusan" />
          <TextField source="alamat" />
          <TextField source="telp_ortu" label="Tlp Ortu" />
        </Datagrid>
      )}
    </List>
  );
}
