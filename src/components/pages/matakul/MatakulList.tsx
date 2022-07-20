import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, DateField } from "react-admin";

export default function MatakulList(props: any) {
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
          <TextField source="kode" label="Kode" />
          <TextField source="matakul" label="Mata Kuliah" />
          <TextField source="sks" label="Jumlah SKS" />
          <TextField source="temu" label="Jumlah Pertemuan" />
        </Datagrid>
      )}
    </List>
  );
}
