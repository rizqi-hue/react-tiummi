import { Box, Typography } from "@mui/material";
import { useGetIdentity } from "react-admin";


const Welcome = () => {
  const { identity } = useGetIdentity();
  return (
    <Box
      sx={{
        paddingTop: "10px",
        marginTop: 2,
        marginBottom: 4,
      }}
      display="flex"
    >
      <Box flex="1">
        <Typography variant="h5" component="h2" gutterBottom>
          Selamat Datang <span className="font-bold">{identity?.fullName}</span>
        </Typography>
        <Box maxWidth="40em">
          <Typography variant="body1" component="p" gutterBottom>
            Manajemen Laboratorium Teknik Informatika (Melati)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
