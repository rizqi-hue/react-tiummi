import { Chip, useMediaQuery, Theme, Box } from "@mui/material";
import {
  ListBase,
  Pagination,
  Title,
  SortButton,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  FilterContext,
  FilterForm,
  SearchInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  useTranslate,
  InputProps,
  Datagrid,
  TextField,
  DateField,
  List,
} from "react-admin";
import Aside from "./Aside";
import ImageList from "./GridList";

export default function MateriList(props: any) {
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
          <TextField source="nama_dosen" label="Nama Dosen" />
          <TextField source="nama" label="Materi" />
          <TextField source="matakul" label="Matakuliah" />
        </Datagrid>
      )}
    </List>
  );
}
