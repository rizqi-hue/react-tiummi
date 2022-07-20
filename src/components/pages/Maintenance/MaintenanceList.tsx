import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanInput,
} from "react-admin";
import StatusInputPeminjaman from "./StatusInputPeminjaman";

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
