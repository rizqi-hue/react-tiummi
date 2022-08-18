import { Card, CardMedia } from "@mui/material";
import { useRecordContext } from "react-admin";
import { Inventori } from "../../../services/types";

const Poster = () => {
  const record = useRecordContext<Inventori>();
  if (!record) return null;
  return (
    <Card sx={{ display: "inline-block" }}>
      <CardMedia
        component="img"
        image={`${process.env.REACT_APP_DATA_PROVIDER}/${record.image}`}
        alt=""
        sx={{ maxWidth: "10em", maxHeight: "15em" }}
      />
    </Card>
  );
};

export default Poster;
