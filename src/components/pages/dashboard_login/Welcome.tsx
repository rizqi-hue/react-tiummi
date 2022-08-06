import { Box, Typography } from "@mui/material";
import logo from "./logo.jpeg";

const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <img src={logo} className="w-20 md:mr-5" />
      <div className="w-full text-center md:text-left justify-center md:justify-left items-center">
        <Typography variant="h5" component="h2">
          <span className="font-bold">Selamat Datang </span>
        </Typography>
        <Box maxWidth="40em">
          <Typography variant="body1" component="p" gutterBottom>
            Manajemen Laboratorium Teknik Informatika (Melati)
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Welcome;
