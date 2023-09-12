"use client";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import WebsiteStructure from "./websiteStructure";
import MobileStrucutre from "./mobileStrucutre";
import CustomFab from "../bits/customFab";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"baseline"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        gap={"20px"}
        mt={"20px"}
      >
        <Typography variant="h3" color={"text.main"} fontWeight={800}>
          Trabalhos e projectos
        </Typography>

        <Box display={"flex"} justifyContent={"space-around"} gap={"20px"}>
          <CustomFab
            sx={{
              width: "120px",
              border: `1px solid ${theme.palette.primary.light}`,
              backgroundColor: "primary.main",
            }}
          >
            UI Design
          </CustomFab>
          <CustomFab sx={{ width: "120px" }}>Design</CustomFab>
          <CustomFab
            sx={{
              width: "120px",
              backgroundColor: "primary.main",
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            UI Design
          </CustomFab>
        </Box>
      </Box>

      <Container sx={{ py: "100px" }}>
        {isMobile ? <MobileStrucutre /> : <WebsiteStructure />}
      </Container>
    </>
  );
};

export default Projects;
