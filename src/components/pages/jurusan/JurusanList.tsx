import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, DateField } from "react-admin";

export default function JurusanList(props: any) {
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
          <TextField source="fakultas" label="Fakultas" />
          <TextField source="prodi" label="Prodi" />
          <TextField source="jurusan" label="Jurusan" />
          <TextField source="sing_jur" label="Singkatan Jurusan" />
        </Datagrid>
      )}
    </List>
  );
}
