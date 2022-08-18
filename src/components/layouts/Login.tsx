import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {
  Form,
  required,
  TextInput,
  useTranslate,
  useLogin,
  useNotify,
} from "react-admin";

import Box from "@mui/material/Box";
import { Dashboard } from "../pages/dashboard_login";
import Welcome from "../pages/dashboard_login/Welcome";
import JadwalList from "../pages/dashboard_login/LihatJadwalList";
import { HeaderLogged } from "../../custome_components";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();

  const notify = useNotify();
  const login = useLogin();
  const location = useLocation();

  const handleSubmit = (auth: FormValues) => {
    setLoading(true);
    login(
      auth,
      location.state ? (location.state as any).nextPathname : "/"
    ).catch((error: Error) => {
      setLoading(false);
      notify(
        typeof error === "string"
          ? error
          : typeof error === "undefined" || !error.message
          ? "ra.auth.sign_in_error"
          : error.message,
        {
          type: "warning",
          messageArgs: {
            _:
              typeof error === "string"
                ? error
                : error && error.message
                ? error.message
                : undefined,
          },
        }
      );
    });
  };

  return (
    <>
    <HeaderLogged />
    <div className="bg-gray-50">
      <div className="h-screen flex flex-col md:flex-row overflow-hidden ">
        <div
          className="lg:flex w-full lg:w-2/3 login_img_section
          overflow-y-auto no-scrollbar max-h-screen"
        >
          <div
            className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          ></div>
          <div className="w-full mx-auto px-2 md:px-20 flex-col mt-10 md:mt-20">
            <div className="block md:hidden">
              {/* <Welcome /> */}
            </div>
            <div className="flex md:hidden w-full lg:w-1/3 justify-center items-center mt-5 md:mt-1">
              <div className="w-full px-8 justify-center items-center">
                <Form onSubmit={handleSubmit} noValidate>
                  <Card sx={{ maxWidth: 300 }}>
                    <Box
                      sx={{
                        margin: "1em",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Avatar sx={{ bgcolor: "secondary.main" }}>
                        <LockIcon />
                      </Avatar>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "1em",
                        display: "flex",
                        justifyContent: "center",
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      Silahkan Masuk
                    </Box>
                    <Box sx={{ padding: "0 1em 1em 1em" }}>
                      <Box sx={{ marginTop: "1em" }}>
                        <TextInput
                          autoFocus
                          source="username"
                          label={translate("ra.auth.username")}
                          disabled={loading}
                          validate={required()}
                          fullWidth
                        />
                      </Box>
                      <Box sx={{ marginTop: "1em" }}>
                        <TextInput
                          source="password"
                          label={translate("ra.auth.password")}
                          type="password"
                          disabled={loading}
                          validate={required()}
                          fullWidth
                        />
                      </Box>
                    </Box>
                    <CardActions sx={{ padding: "0 1em 1em 1em" }}>
                      <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        disabled={loading}
                        fullWidth
                      >
                        {loading && (
                          <CircularProgress size={25} thickness={2} />
                        )}
                        {translate("ra.auth.sign_in")}
                      </Button>
                    </CardActions>
                  </Card>
                </Form>
              </div>
            </div>

            <Dashboard />
          </div>
        </div>
        <div className="hidden md:flex w-full lg:w-1/3 justify-center items-center">
          <div className="w-full px-8">
            <Form onSubmit={handleSubmit} noValidate>
              <Card sx={{ maxWidth: 300 }}>
                <Box
                  sx={{
                    margin: "1em",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar sx={{ bgcolor: "secondary.main" }}>
                    <LockIcon />
                  </Avatar>
                </Box>
                <Box
                  sx={{
                    marginTop: "1em",
                    display: "flex",
                    justifyContent: "center",
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  Silahkan Masuk
                </Box>
                <Box sx={{ padding: "0 1em 1em 1em" }}>
                  <Box sx={{ marginTop: "1em" }}>
                    <TextInput
                      autoFocus
                      source="username"
                      label={translate("ra.auth.username")}
                      disabled={loading}
                      validate={required()}
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ marginTop: "1em" }}>
                    <TextInput
                      source="password"
                      label={translate("ra.auth.password")}
                      type="password"
                      disabled={loading}
                      validate={required()}
                      fullWidth
                    />
                  </Box>
                </Box>
                <CardActions sx={{ padding: "0 1em 1em 1em" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={loading}
                    fullWidth
                  >
                    {loading && <CircularProgress size={25} thickness={2} />}
                    {translate("ra.auth.sign_in")}
                  </Button>
                </CardActions>
              </Card>
            </Form>
          </div>
        </div>
      </div>
      <div className="p-2 md:px-20 md:p-5 ">
        <div className="p-2 md:p-5 bg-white rounded-xl">
          <JadwalList />
        </div>
      </div>
    </div>
                    </>
  );
};

Login.propTypes = {
  authProvider: PropTypes.func,
  previousRoute: PropTypes.string,
};

export default Login;

interface FormValues {
  username?: string;
  password?: string;
}
