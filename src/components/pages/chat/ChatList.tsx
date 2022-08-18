import { Theme, useMediaQuery } from "@mui/material";
import { Datagrid, List, TextField } from "react-admin";

export default function KelasList(props: any) {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <List {...props}>
      {isXsmall ? (
        // <MobileGrid />
        <></>
      ) : (
        <Datagrid optimized rowClick="edit">
          <TextField source="no_hp" label="No Hp" />
          <TextField source="nama" label="Nama" />
          <TextField source="message" label="Pesan" />
          <TextField source="action" label="Status" />
        </Datagrid>
      )}
    </List>
  );
}
