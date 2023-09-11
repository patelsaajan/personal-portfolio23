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
      <Box
        display={"flex"}
        gap={"30px"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
      >
        {projectCards.map((projectCard, index) => (
          <Card
            title={projectCard.title}
            description={projectCard.discription}
            tags={projectCard.tags}
            src={projectCard.img}
            indexColor={index}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WebsiteStructure;
