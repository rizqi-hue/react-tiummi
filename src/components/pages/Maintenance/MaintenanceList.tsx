import { Theme, useMediaQuery } from "@mui/material";
import {
  Datagrid, DateField, List, TextField
} from "react-admin";

export default function MaintenanceList(props: any) {
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
          <TextField source="namalengkap" label="Petugas" />
          <TextField source="nama" label="Barang" />
          <DateField source="tanggal" label="Tanggal" />
          <TextField source="uraian" label="Uraian" />
          {/* <StatusInputPeminjaman /> */}
        </Datagrid>
      )}
    </List>
  );
}
