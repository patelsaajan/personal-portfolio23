"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomFab from "../bits/customFab";
import MutedText from "../bits/mutedText";
import { motion } from "framer-motion";
import DetailedCard from "../bits/detailedCard";
import cardDetails from "./cardDetails";

const PopoutCards = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { sm: "flex-start", md: "center" },
          gap: "20px",
        }}
      >
        <CustomFab sx={{ width: "170px" }}>💼 Carreira</CustomFab>
        <Typography variant={"h3"}>Trajetória até aqui</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid #FFFF",
            width: "580px",
          }}
        >
          <Typography variant="h4">Area profissional</Typography>
          <MutedText> 2016 ~ Atualmente</MutedText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            border: "2px solid #FFFF",
            width: "580px",
          }}
        >
          <Typography variant="h4">Academica</Typography>{" "}
          <MutedText> 2016 ~ Atualmente</MutedText>
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        pt={"40px"}
        gap={"30px"}
      >
        {cardDetails.map((card) => (
          <DetailedCard
            title={card.title}
            description={card.description}
            leftBox={card.leftbox}
            date={card.date}
          />
        ))}
      </Box>
    </>
  );
};

export default PopoutCards;
