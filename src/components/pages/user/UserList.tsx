import { useMediaQuery, Theme } from "@mui/material";
import { List, Datagrid, TextField, DateField } from "react-admin";

export default function UserList(props: any) {
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
          <TextField source="user_id" label="ID" />
          <TextField source="namalengkap" label="Nama" />
          <TextField source="level" />
        </Datagrid>
      )}
    </List>
  );
}
