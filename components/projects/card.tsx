import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import MutedText from "../bits/mutedText";
import StyledButton from "../bits/tags";
import Image from "next/image";

type CardProps = {
  name: string;
  description: string;
  tags: boolean[];
  src: string;
};

const Card = ({ name, description, tags, src }: CardProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: "16px",
        width: "360px",
        height: "460px",
        padding: "30px",
      }}
    >
      <Box>
        <Typography color={"text.primary"} variant="h6">
          {name}
        </Typography>
        <MutedText>{description}</MutedText>
      </Box>
      <Box display={"flex"} gap={"20px"}>
        {tags[0] ? <StyledButton styleType="online" /> : <></>}
        {tags[1] ? <StyledButton styleType="react" /> : <></>}
        {tags[2] ? <StyledButton styleType="typescirpt" /> : <></>}
      </Box>
      <Image
        src={src}
        alt={"basic image for the cards"}
        width={300}
        height={200}
      />
    </Box>
  );
};

export default Card;
