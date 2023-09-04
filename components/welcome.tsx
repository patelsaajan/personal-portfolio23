import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const WelcomeText = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" fontWeight={500} sx={{ pt: 2 }}>
        Welome!
      </Typography>
      <Typography variant="h2" fontWeight={500}>
        {" "}
        Take a look around :)
      </Typography>
    </Box>
  );
};

export default WelcomeText;
