"use client";

import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import CustomFab from "../bits/customFab";
import Card from "./card";

const WebsiteStructure = () => {
  const theme = useTheme();
  const [projectCards, setProjectCards] = useState([
    {
      title: "Move.it",
      discription:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: [true, true, false],
      img: "/imgs/cardImage.png",
    },
  ]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <CustomFab sx={{ width: "170px" }}>🔗 Portfolio</CustomFab>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h3" color={"text.main"} fontWeight={800}>
          Trabalhos e projectos
        </Typography>

        <Box
          display={"flex"}
          border={`1px solid ${theme.palette.primary.light}`}
          borderRadius={"16px"}
          //   padding={"10px"}
          height={"50px"}
          width={"100px"}
          alignContent={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          UI Design
        </Box>
      </Box>
      <Card
        name={"Move.it"}
        description={
          "  Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."
        }
        tags={[true, true, false]}
        src={"/imgs/cardImage.png"}
      />
    </Box>
  );
};

export default WebsiteStructure;
