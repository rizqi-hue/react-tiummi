import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  Button,
} from "@mui/material";

import {
  useTranslate,
  Edit,
  DateInput,
  ReferenceInput,
  TabbedForm,
  FormTab,
  AutocompleteInput,
  TextInput,
  useRecordContext,
  useGetManyReference,
} from "react-admin";

import { RichTextInput } from "ra-input-rich-text";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.kode) {
    errors.kode = "ra.validation.required";
  }

  if (!values.tanggal) {
    errors.tanggal = "ra.validation.required";
  }

  if (!values.user_id) {
    errors.user_id = "ra.validation.required";
  }

  return errors;
};

const OptionRenderer = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.user_id}</span>
    <span className="ml-2 font-bold">({choice.namalengkap})</span>
  </span>
);
const inputText = (choice: any) => choice.user_id;
const matchSuggestion = (filter: any, choice: any) => {
  return choice.user_id.toLowerCase().includes(filter.toLowerCase());
};

const OptionRendererInventori = (choice: any) => (
  <span className="flex flex-row">
    <span>{choice.nama}</span>
    <span className="ml-2 font-bold">({choice.kode})</span>
  </span>
);
const inputTextInventori = (choice: any) => choice.kode;
const matchSuggestionInventori = (filter: any, choice: any) => {
  return choice.kode.toLowerCase().includes(filter.toLowerCase());
};

const status = [
  { id: "0", name: "Menunggu Persetujuan" },
  { id: "1", name: "Disetujui" },
  { id: "2", name: "Ditolak" },
  { id: "3", name: "Sedang Dipinjam" },
  { id: "4", name: "Sudah Dikembalikan" },
];

const MaintenanceEdit = (props: any) => {
  return (
    <Edit {...props}>
      <TabbedForm validate={validateForm}>
        <FormTab
          label="resources.peminjaman.tabs.pilihbarang"
          sx={{ maxWidth: "40em" }}
        >
          <SectionTitle label="Pilih Barang" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <ReferenceInput
              label="Cari Barang"
              source="kode"
              reference="inventori"
            >
              <AutocompleteInput
                optionText={OptionRendererInventori}
                optionValue="kode"
                isRequired
                fullWidth
                inputText={inputTextInventori}
                matchSuggestion={matchSuggestionInventori}
              />
            </ReferenceInput>
          </Box>

          <SectionTitle label="Petugas" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <ReferenceInput
              label="Cari Pengguna"
              source="user_id"
              reference="users"
            >
              <AutocompleteInput
                optionText={OptionRenderer}
                optionValue="user_id"
                isRequired
                fullWidth
                inputText={inputText}
                matchSuggestion={matchSuggestion}
              />
            </ReferenceInput>
          </Box>
          <SectionTitle label="Keterangan" />
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <TextInput
                source="no_maintenance"
                label="No Maintenance"
                isRequired
                fullWidth
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput source="jenis" label="Jenis" isRequired fullWidth />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <DateInput
                source="tanggal"
                label="Tanggal Cek"
                isRequired
                fullWidth
                // format={dateFormatter}
                // parse={dateParser}
                // defaultValue={new Date()}
              />
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
              <TextInput
                source="ruangan"
                label="Ruangan"
                isRequired
                fullWidth
              />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <RichTextInput source="uraian" label="Uraian ?" />
            </Box>
          </Box>
          <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
            <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
              <RichTextInput source="keterangan" label="Keterangan ?" />
            </Box>
          </Box>
        </FormTab>
        <HistoriFormTab path="histori" />
        {/* <ReferenceManyField
            reference="maintenance"
            target="kode"
            pagination={<Pagination />}
          >
            <Datagrid
              sx={{
                width: "100%",
                "& .column-comment": {
                  maxWidth: "20em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
              }}
            >
              <TextField source="namalengkap" label="Petugas" />
              <DateField source="nama" label="Barang" />
              <DateField source="tanggal" label="Tanggal" />
              <TextField source="uraian" label="Uraian" />
            </Datagrid>
          </ReferenceManyField>
        </HistoriFormTab> */}
      </TabbedForm>
    </Edit>
  );
};

const SectionTitle = ({ label }: { label: string }) => {
  const translate = useTranslate();

  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
};

const HistoriFormTab = (props: any) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const record = useRecordContext();
  const { data, isLoading, total } = useGetManyReference(
    "maintenance",
    {
      id: record.kode,
      // pagination: { page: 1, perPage: 25 },
      sort: { field: "id", order: "DESC" },
    },
    {
      enabled: !!record,
    }
  );

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // const translate = useTranslate();
  let label = "Histori";
  if (isLoading) {
    return (
      <FormTab label={label} {...props}>
        Loading
      </FormTab>
    );
  }

  return (
    <FormTab label={label} {...props}>
      <div ref={componentRef}>
        Inventaris LAB TI <br />
        <QRCodeSVG
          value={`${process.env.REACT_APP_BASE_URL}/maintenance/${record.id}/histori`}
        />
      </div>
      <Button onClick={handlePrint}>Cetak QR</Button>
      <Table sx={{ padding: 2 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Petugas</TableCell>
            <TableCell>Barang</TableCell>
            <TableCell>Tanggal</TableCell>
            <TableCell>Uraian</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((value) => (
            <TableRow key={value.id}>
              <TableCell>{value.namalengkap}</TableCell>
              <TableCell>{value.nama}</TableCell>
              <TableCell>{value.tanggal}</TableCell>
              <TableCell>{value.uraian}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </FormTab>
  );
};

export default MaintenanceEdit;
