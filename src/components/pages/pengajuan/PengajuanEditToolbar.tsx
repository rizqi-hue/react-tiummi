import { useCallback } from "react";
import {
  Toolbar,
  DeleteButton,
  SaveButton,
  ToolbarProps,
  useRecordContext,
  useNotify,
  useRedirect,
} from "react-admin";

// import { Print } from "@mui/icons-material";
import { Inventori } from "../../../services/types";
import { useNavigate } from "react-router-dom";

const PengajuanEditToolbar = (props: ToolbarProps<Inventori>) => {
  const { resource } = props;
  const redirect = useRedirect();
  const navigate = useNavigate();
  const notify = useNotify();

  const record = useRecordContext<Inventori>(props);

//   const handleCetak = useCallback(() => {
//     navigate("/inventori/print/1");
//   }, [navigate]);

  return (
    <Toolbar
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        minHeight: { sm: 0 },
      }}
    >
      <div className="w-full flex flex-row justify-between">
        <SaveButton
          mutationOptions={{
            onSuccess: () => {
              notify("ra.notification.updated", {
                type: "info",
                messageArgs: { smart_count: 1 },
                undoable: true,
              });
              redirect("list", "inventori");
            },
          }}
          type="button"
        />
        {/* <Button onClick={handleCetak} variant="contained" endIcon={<Print />}>
          Cetak
        </Button> */}
        <DeleteButton record={record} resource={resource} />
      </div>
    </Toolbar>
  );
};

export default PengajuanEditToolbar;
