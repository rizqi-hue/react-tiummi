import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, DateField } from "react-admin";

export default function DosenList(props: any) {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  // const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <List {...props}>
      {isXsmall ? (
        // <MobileGrid />
        <></>
      ) : (
        <Datagrid optimized rowClick="edit">
          <TextField source="nidn" label="NDN" />
          <TextField source="nama" label="Nama" />
          <DateField source="tgllahir" label="Tanggal Lahir" />
          <TextField source="jabatan" />
          <TextField source="alamat" />
        </Datagrid>
      )}
    </List>
  );
}
