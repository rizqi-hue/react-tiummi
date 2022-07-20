import { Card, CardMedia } from "@mui/material";
import { useRecordContext } from "react-admin";
import { Inventori } from "../../../services/types";
import PdfPreview from "./PdfPreview";

const Poster = () => {
  const record = useRecordContext<Inventori>();
  if (!record) return null;
  return (
    <Card sx={{ display: "inline-block" }}>
      <embed type="application/pdf" src={`${process.env.REACT_APP_DATA_PROVIDER}/${record.berkas}`} width="600" height="1000"></embed>
    </Card>
  );
};

export default Poster;
