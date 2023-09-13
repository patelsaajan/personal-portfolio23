"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CustomFab from "../bits/customFab";
import HorizontalCardSepertation from "./horizontalCardSepertation";
import VerticleCardSeperation from "./VerticleCardSeperation";
import cardDetails from "./cardDetails";
import MutedText from "../bits/mutedText";

const PopoutCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "flex-start", lg: "center" },
          ml: { xs: "50px", lg: "0px" },
          gap: "50px",
          //   border: "2px solid #FFFF",
        }}
      >
        <CustomFab sx={{ width: "170px" }}>💼 Carreira</CustomFab>
        <Typography variant={"h3"}>Trajetória até aqui</Typography>
        {isMobile ? <HorizontalCardSepertation /> : <VerticleCardSeperation />}
      </Box>
    </>
  );
};

export default PopoutCards;
