"use client";

import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import CustomFab from "../bits/customFab";
import Card from "./card";
import { projectCards } from "./projectsConstants";

const WebsiteStructure = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
      }}
    >
      <CustomFab sx={{ width: "170px" }}>🔗 Portfolio</CustomFab>
      <Box display={"flex"} justifyContent={"space-between"}>
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
      <Box display={"flex"} gap={"30px"} flexWrap={"wrap"}>
        {projectCards.map((projectCard) => (
          <Card
            title={projectCard.title}
            description={projectCard.discription}
            tags={projectCard.tags}
            src={projectCard.img}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WebsiteStructure;
