import {
  Datagrid,
  TextField,
  DateField,
  Identifier,
  BulkDeleteButton,
} from "react-admin";

import rowStyle from './rowStyle';

export interface ReviewListDesktopProps {
  selectedRow?: Identifier;
}

const ReviewsBulkActionButtons = () => (
  <>
    <BulkDeleteButton />
  </>
);

const InventoriListDesktop = ({ selectedRow }: ReviewListDesktopProps) => (
  <Datagrid
    rowClick="edit"
    optimized
    rowStyle={rowStyle(selectedRow)}
    bulkActionButtons={<ReviewsBulkActionButtons />}
    sx={{
      "& .RaDatagrid-thead": {
        borderLeftColor: "transparent",
        borderLeftWidth: 5,
        borderLeftStyle: "solid",
      },
      "& .column-comment": {
        maxWidth: "18em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    }}
  >
    <TextField source="kode" label="Kode" />
    <TextField source="nama" label="Nama" />
    <TextField source="kategori" label="Kategori" />
    <DateField source="tgl" label="Tanggal" />
  </Datagrid>
);

export default InventoriListDesktop;
