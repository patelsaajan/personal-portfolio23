"use client";
import { Box, Container, Fab, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomFab from "../bits/customFab";

const MutedText = ({ children }: any) => (
  <span style={{ color: "rgba(255, 255, 255, 0.5)", paddingLeft: "4px" }}>
    {children}
  </span>
);

const Bio = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row", minHeight: "80vh" },
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Image
        width={350}
        height={380}
        alt={"Real Picture"}
        src={"/imgs/ProfilePic.png"}
      />
      <Box
        display="flex"
        flexDirection={"column"}
        gap={4}
        alignContent={"center"}
      >
        <CustomFab sx={{ width: "170px" }}> 🤔 sobre mim</CustomFab>
        <Typography variant="h3" width="75%">
          Washington Heriique Fernandes de Sousa
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap="2">
          <Typography fontSize={16}>
            👋
            <MutedText>
              Me chamo Washington Henrique Fernandes de Sousa, mas pode me
              chamar apenas de Henrique. Prazer!
            </MutedText>
          </Typography>
          <Box py={3}>
            <Typography>
              👨‍💻
              <MutedText>
                Há mais de 2 anos desenvolvendo e programando interfaces com
                JavaScript, React JS e Typescript.
              </MutedText>
            </Typography>
            <Typography>
              🎓
              <MutedText>
                Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de
                São José dos Campos
              </MutedText>
            </Typography>
            <Typography>
              💡
              <MutedText>
                Interesses em desenvolvimento Front-end com React, React Native,
                VueJS e UX/UI Design.
              </MutedText>
            </Typography>
          </Box>
          <Typography>
            🚀
            <MutedText>
              Tentando ser um pouquinho melhor do que ontem todos dias.
            </MutedText>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Bio;
