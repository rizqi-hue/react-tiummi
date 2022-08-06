import { useMediaQuery, Theme } from "@mui/material";
import { Datagrid, TextField, List } from "react-admin";

export default function MateriList(props: any) {
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
          <TextField source="nama_dosen" label="Nama Dosen" />
          <TextField source="nama" label="Materi" />
          <TextField source="matakul" label="Matakuliah" />
        </Datagrid>
      )}
    </List>
  );
}
