import { Chip } from "@mui/material";
import { useRecordContext } from "react-admin";
import { Peminjaman } from "../../../services/types";
import { Done, Timer, Block } from "@mui/icons-material";

const Tahun = () => {
  const record = useRecordContext<Peminjaman>();
  if (!record) return null;
  return (
    <>
      <Chip label={record.smt + " " + record.thpel} icon={<Timer />} />
    </>
  );
};

export default Tahun;
