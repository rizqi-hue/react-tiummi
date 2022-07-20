import { Chip } from "@mui/material";
import { useRecordContext } from "react-admin";
import { Peminjaman } from "../../../services/types";
import { Done, Timer, Block } from "@mui/icons-material";

const StatusInputPeminjaman = () => {
  const record = useRecordContext<Peminjaman>();
  if (!record) return null;
  return (
    <>
      {record.status == 0 ? (
        <Chip label="Menunggu Persetujuan" icon={<Timer />} />
      ) : (
        ""
      )}

      {record.status == 1 ? <Chip label="Disetujui" icon={<Done />} /> : ""}
      {record.status == 2 ? <Chip label="Ditolak" icon={<Block />} /> : ""}
      {record.status == 3 ? (
        <Chip label="Sedang Dipinjam" icon={<Timer />} />
      ) : (
        ""
      )}
      {record.status == 4 ? (
        <Chip label="Sudah Dikembalikan" icon={<Done />} />
      ) : (
        ""
      )}
    </>
  );
};

export default StatusInputPeminjaman;
