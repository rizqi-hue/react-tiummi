import { Box, Stack, IconButton, Typography } from "@mui/material";

import {
  SimpleForm,
  TextInput,
  DateInput,
  Edit,
  EditProps,
  TabbedForm,
  FormTab,
} from "react-admin";

import CloseIcon from "@mui/icons-material/Close";

import { QRCodeSVG } from "qrcode.react";
import InventoriEditToolbar from "./InventoriEditToolbar";
import { Inventori } from "../../../services/types";
import InventoriCetak from "./InventoriCetak";

export const validateForm = (
  values: Record<string, any>
): Record<string, any> => {
  const errors = {} as any;
  if (!values.kode) {
    errors.kode = "ra.validation.required";
  }

  if (!values.nama) {
    errors.nama = "ra.validation.required";
  }

  if (!values.tgl) {
    errors.tgl = "ra.validation.required";
  }

  if (!values.kategori) {
    errors.kategori = "ra.validation.required";
  }

  return errors;
};

interface Props extends EditProps<Inventori> {
  onCancel: () => void;
}

const InventoriEdit = ({ onCancel, ...props }: Props) => {
  return (
    <Edit {...props}>
      <Box pt={2} width={{ xs: "100vW", sm: 400 }} mt={{ xs: 2, sm: 1 }}>
        <Stack direction="row" p={2}>
          <Typography variant="h6" flex="1">
            Detail
          </Typography>
          <IconButton onClick={onCancel} size="small">
            <CloseIcon />
          </IconButton>
        </Stack>
        <TabbedForm>
          <FormTab
            label="resources.products.tabs.image"
            sx={{ maxWidth: "40em" }}
          >
            s
            <SimpleForm
              toolbar={<InventoriEditToolbar />}
              defaultValues={{}}
              sx={{ maxWidth: 500, height: "100%" }}
              validate={validateForm}
            >
              <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput source="kode" label="Kode" isRequired fullWidth />
                </Box>
              </Box>
              <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="nama"
                    label="Nama Barang"
                    isRequired
                    fullWidth
                  />
                </Box>
              </Box>
              <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <TextInput
                    source="kategori"
                    label="Kategori"
                    isRequired
                    fullWidth
                  />
                </Box>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <DateInput
                    source="tgl"
                    label="Tanggal"
                    isRequired
                    fullWidth
                  />
                </Box>
              </Box>
              <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
                <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                  <Typography variant="h6" flex="1">
                    QR Code
                  </Typography>
                  <QRCodeSVG value="https://reactjs.org/" />
                </Box>
              </Box>
            </SimpleForm>
          </FormTab>
          <FormTab
            label="resources.products.tabs.details"
            path="cetak"
            sx={{ maxWidth: "40em" }}
          >
            <InventoriCetak />
          </FormTab>
        </TabbedForm>
      </Box>
    </Edit>
  );
};

export default InventoriEdit;
