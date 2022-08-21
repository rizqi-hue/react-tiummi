import { Card, CardContent } from "@mui/material";
import { FilterLiveSearch } from "react-admin";

const Aside = () => {
  return (
    <Card
      sx={{
        display: { xs: "none", md: "block" },
        order: -1,
        width: "15em",
        mr: 2,
        alignSelf: "flex-start",
      }}
    >
      <CardContent sx={{ pt: 1 }}>
        <FilterLiveSearch />
      </CardContent>
    </Card>
  );
};

export default Aside;
