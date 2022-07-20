import * as React from "react";
import { useCallback } from "react";
import { useMediaQuery, Theme, Drawer, Box } from "@mui/material";
import { List } from "react-admin";
import InventoriListDesktop from "./InventoriListDesktop";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import InventoriEdit from "./InventoriEdit";

export default function InventoriList(props: any) {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate("/inventori");
  }, [navigate]);

  const match = matchPath("/inventori/:id", location.pathname);

  return (
    <Box display="flex">
      <List
        {...props}
        sx={{
          flexGrow: 1,
          transition: (theme: any) =>
            theme.transitions.create(["all"], {
              duration: theme.transitions.duration.enteringScreen,
            }),
          marginRight: !!match ? "400px" : 0,
        }}
      >
        {isXsmall ? (
          // <MobileGrid />
          <></>
        ) : (
          <InventoriListDesktop
            selectedRow={
              !!match ? parseInt((match as any).params.id, 10) : undefined
            }
          />
        )}
      </List>
      <Drawer
        variant="persistent"
        open={!!match}
        anchor="right"
        onClose={handleClose}
        sx={{ zIndex: 100 }}
      >
        {!!match && (
          <InventoriEdit id={(match as any).params.id} onCancel={handleClose} />
        )}
      </Drawer>
    </Box>
  );
}
