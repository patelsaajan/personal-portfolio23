"use client";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Card from "./card";
import ImBox from "./imBox";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const widthBreakpoints = { xs: "110px", xl: "246px" };
  return (
    <Box
      sx={{
        borderBottom: "solid",
        borderTop: "solid",
        borderWidth: isMobile ? "0px" : "1px",
        borderColor: "primary.light",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          py: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            flexWrap: "wrap",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            width: "100%",
            gap: "10px",
            alignContent: "space-around",
          }}
        >
          <Card>
            <Typography fontSize={16} color={"rgba(255, 255, 255, 0.7)"}>
              3 anos como
            </Typography>
            <Typography fontSize={32} fontWeight={"bold"}>
              Programador
            </Typography>
          </Card>
          <Card boxColor="light">
            <Typography fontSize={16} color={"rgba(255, 255, 255, 0.7)"}>
              7 anos de
            </Typography>
            <Typography fontSize={32} fontWeight={"bold"}>
              Trabalhos
            </Typography>
          </Card>
          <Card>
            <Typography fontSize={16} color={"rgba(255, 255, 255, 0.7)"}>
              4 anos como
            </Typography>
            <Typography fontSize={32} fontWeight={"bold"}>
              Designer
            </Typography>
          </Card>
        </Box>

        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            display: { xs: "none", md: "flex" },
            height: "110px",
            width: "100%",
            borderWidth: "0px",
            backgroundColor: "primary.light",
            borderRadius: "16px",
          }}
        >
          <ImBox>
            <Typography fontSize={16}>Desenvolvedor</Typography>
            <Typography fontSize={32} fontWeight={"bold"}>
              Front-end
            </Typography>
          </ImBox>
          <ImBox>
            <Typography fontSize={16}>Dezenas de projectos e</Typography>
            <Typography fontSize={32} fontWeight={"bold"}>
              Experiencias
            </Typography>
          </ImBox>
          <ImBox>
            <Typography fontSize={16}>Designer Freelancer e</Typography>
            <Typography fontSize={32} fontWeight={"bold"}>
              UI ~ UX
            </Typography>
          </ImBox>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
