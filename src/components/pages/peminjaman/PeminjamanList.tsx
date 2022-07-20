import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanInput,
} from "react-admin";
import StatusInputPeminjaman from "./StatusInputPeminjaman";

export default function PeminjamanList(props: any) {
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
          <TextField source="nama" label="Nama Peminjam" />
          <DateField source="tgl" label="Tanggal Peminjaman" />
          <DateField source="tglkembali" label="Tanggal Pengembalian" />
          <TextField source="ket" label="Keterangan" />
          <StatusInputPeminjaman />
        </Datagrid>
      )}
    </List>
  );
}
