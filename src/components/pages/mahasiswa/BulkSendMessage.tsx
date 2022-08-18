import * as React from "react";

import {
  Button,
  useUpdateMany,
  useNotify,
  useUnselectAll,
  Identifier,
  useListContext,
} from "react-admin";
import api from "../../../services/axios";
import { FormControl, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";

const noSelection: Identifier[] = [];

const BulkSendMessage = () => {
  const { selectedIds = noSelection, data } = useListContext();
  const [pesan, setPesan] = React.useState("");
  const notify = useNotify();
  const unselectAll = useUnselectAll("mahasiswa");

  const updateMany = async () => {
    await Promise.all(
      data.map(async (_value) => {
        await Promise.all(
          selectedIds.map(async (_ids) => {
            if (_value.id == _ids) {
              var form_data = new FormData();

              let selectedData = {
                no_hp: _value.telp,
                message: pesan,
                nama: _value.nama,
              };

              await api
                .post(
                  `${process.env.REACT_APP_WHATSAPP_URL}/send`,
                  selectedData
                )
                .then(async (res_message) => {
                  if (res_message.data.status == 200) {
                    form_data.append("no_hp", selectedData.no_hp);
                    form_data.append("message", selectedData.message);
                    form_data.append("nama", selectedData.nama);
                    form_data.append("action", res_message.data.message);
                    form_data.append("status", "in");

                    await api.post("/api_admin/whatsapp/store", form_data);

                    notify("Pesan terkirim ke " + selectedData.nama, {
                      type: "info",
                      undoable: true,
                    });

                    unselectAll();
                  }
                });
            }
          })
        );
      })
    );
  };
  // const [updateMany, { isLoading }] = useUpdateMany(
  //     'reviews',
  //     { ids: selectedIds, data: { status: 'accepted' } },
  //     {
  //         mutationMode: 'undoable',
  //         onSuccess: () => {
  //             notify('resources.reviews.notification.approved_success', {
  //                 type: 'info',
  //                 undoable: true,
  //             });
  //             unselectAll();
  //         },
  //         onError: () => {
  //             notify('resources.reviews.notification.approved_error', {
  //                 type: 'warning',
  //             });
  //         },
  //     }
  // );

  return (
    <div className="flex flex-row mr-4">
      <div className="bg-white rounded-xl">
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Pesan"
            variant="outlined"
            placeholder="Pesan Singkat"
            size="small"
            onChange={(e) => setPesan(e.target.value)}
          />
        </FormControl>
      </div>
      <Button
        label="Kirim Pesan"
        onClick={() => updateMany()}
        //   disabled={isLoading}
      >
        <Send />
      </Button>
    </div>
  );
};

export default BulkSendMessage;
