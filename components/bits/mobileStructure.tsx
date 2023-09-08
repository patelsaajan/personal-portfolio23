import Image from "next/image";
import React from "react";
import CustomFab from "./customFab";
import { Box, Typography } from "@mui/material";
import MutedText from "./mutedText";

const MobileStructure = () => {
  return (
    <>
      <Box
        sx={{
          pt: "80px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          src={"/imgs/ProfilePic.png"}
          width={350}
          height={380}
          alt={"picture of the author"}
        />
      </Box>
      <Box
        sx={{
          //   pt: "50px",
          px: "40px",
          display: "flex",
          flexDirection: "column",
          alignContent: "flex-start",
          textAlign: "flex-start",
          gap: 4,
        }}
      >
        <CustomFab sx={{ width: "170px" }}>🤔 sobre mim</CustomFab>

        <Typography variant="h3" width="75%">
          Washington Heriique
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap="2">
          <Typography fontSize={16}>
            <MutedText>
              Mas pode me chamar apenas de Henrique. Prazer! Há mais de 2 anos
              desenvolvendo e programando interfaces com JavaScript, React JS e
              Typescript. Graduado em Análise e Desenvolvimento de Sistemas pela
              Fatec de São José dos Campos Interesses em desenvolvimento
              Front-end com React, React Native, VueJS e UX/UI Design.
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
    </>
  );
};

export default MobileStructure;
