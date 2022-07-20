import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  useGetIdentity,
  SearchInput,
} from "react-admin";

export default function SurveilList(props: any) {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const { identity } = useGetIdentity();
  const filters = [<SearchInput source="q" alwaysOn />];

  return (
    <List
      // filters={filters}
      filterDefaultValues={{
        user_id: identity?.user_id,
        permission: identity?.permission[0],
      }}
    >
      <Datagrid optimized rowClick="edit">
        <TextField source="nama" label="Nama" />
        <TextField source="keperluan" label="Keperluan" />
      </Datagrid>
    </List>
  );
}
