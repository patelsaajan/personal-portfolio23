"use client";

import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import WebsiteStructure from "./websiteStructure";
import MobileStrucutre from "./mobileStrucutre";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{ py: "150px" }}>
      <MobileStrucutre />
      {/* {isMobile ? <MobileStrucutre /> : <WebsiteStructure />} */}
    </Container>
  );
};

export default Projects;
