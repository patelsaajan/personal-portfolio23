"use client";
import {
  Box,
  Container,
  Fab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import WebStructure from "../bits/webStructure";
import MobileStructure from "../bits/mobileStructure";

const Bio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row", minHeight: "80vh" },
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-around",
        // gap: "48px",
        pt: isMobile ? "0" : "60px",
      }}
    >
      {isMobile ? <MobileStructure /> : <WebStructure />}
    </Box>
  );
};

export default Bio;
