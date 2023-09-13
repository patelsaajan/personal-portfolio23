import { Box, Typography } from "@mui/material";
import React from "react";
import MutedText from "../bits/mutedText";
import cardDetails from "./cardDetails";
import DetailedCard from "../bits/detailedCard";
import CardMapping from "./cardMapping";

const VerticleCardSeperation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: { xs: "column", lg: "row" },
        mt: "60px",
        gap: "40px",

        ml: { xs: "50px", lg: "0px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", lg: "center" },
          width: "580px",
        }}
      >
        <Typography variant="h4">Area profissional</Typography>
        <MutedText> 2016 ~ Atualmente</MutedText>{" "}
        <Box
          display="flex"
          justifyContent="space-around"
          pt={"40px"}
          gap={"30px"}
          sx={{
            flexDirection: "column",
          }}
        >
          {" "}
          <CardMapping cardDetails={cardDetails} />{" "}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", lg: "center" },
          width: "580px",
        }}
      >
        <Typography variant="h4">Academica</Typography>{" "}
        <MutedText> 2016 ~ Atualmente</MutedText>
        <Box
          display="flex"
          justifyContent="space-around"
          pt={"40px"}
          gap={"30px"}
          sx={{
            flexDirection: "column",
          }}
        >
          {" "}
          <CardMapping cardDetails={cardDetails} />{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default VerticleCardSeperation;
