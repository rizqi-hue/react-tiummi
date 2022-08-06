import { Theme, useMediaQuery } from "@mui/material";
import { Datagrid, List, TextField } from "react-admin";
import Tahun from "./Tahun";

export default function JadwalList(props: any) {
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
          <TextField source="hari" label="Hari" />
          <TextField source="jam" label="Jam" />
          <TextField source="matakul" label="Nama Matakuliah" />
          <TextField source="nama" label="Dosen" />
          <TextField source="kelas" label="Kelas" />
          <TextField source="nama_ruangan" label="Ruangan" />
          <Tahun />
        </Datagrid>
      )}
    </List>
  );
}
