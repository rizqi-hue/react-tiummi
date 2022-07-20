import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, DateField } from "react-admin";
import StatusInputPeminjaman from "./StatusInputPeminjaman";

export default function PeminjamanList(props: any) {
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
          <TextField source="nama_peminjam" label="Nama Peminjam" />
          <DateField source="tanggal_pengajuan" label="Tanggal Pengajuan" />
          <DateField source="tanggal_pemakaian" label="Digunakan Pada" />
          <TextField source="tanggal_selesai" label="Selesai Pada" />
          <StatusInputPeminjaman />
        </Datagrid>
      )}
    </List>
  );
}
