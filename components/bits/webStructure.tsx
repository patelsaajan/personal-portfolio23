import Image from "next/image";
import React from "react";
import CustomFab from "./customFab";
import { Box, Typography } from "@mui/material";
import MutedText from "./mutedText";

const WebStructure = () => {
  return (
    <>
      <Box display={"flex"} px={"60px"}>
        <Image
          width={350}
          height={380}
          alt={"Real Picture"}
          src={"/imgs/ProfilePic.png"}
        />
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        gap={4}
        justifyContent={"center"}
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
    </>
  );
};

export default WebStructure;
