import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
// import { QRCodeSVG } from "qrcode.react";

const InformasiCetak = (props: any) => {
  return (
    <Box maxWidth="50em" marginTop="15px">
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Cetak
              </Typography>
              <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                  Date
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  Reference
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InformasiCetak;
