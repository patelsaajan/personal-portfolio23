"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import MutedText from "../bits/mutedText";
import HorizontalCardSepertation from "./horizontalCardSepertation";
import VerticleCardSeperation from "./VerticleCardSeperation";
import cardDetails from "./cardDetails";

const ProfissionalInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "flex-start", lg: "center" },
        width: "580px",
      }}
    >
      <Typography variant="h4">Area profissional</Typography>
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
        {isMobile ? (
          <HorizontalCardSepertation />
        ) : (
          <VerticleCardSeperation cardDetails={cardDetails} />
        )}
      </Box>
    </Box>
  );
};

export default ProfissionalInfo;
