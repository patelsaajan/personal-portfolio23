import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import MutedText from "../bits/mutedText";
import StyledButton from "../bits/tags";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
  src: string;
  indexColor: number;
};

const Card = ({ title, description, tags, src, indexColor }: CardProps) => {
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
        mx: { xs: "30px", md: 0 },
        backgroundColor: !(indexColor % 2) ? "primary.main" : "primary.light",
      }}
    >
      <Box>
        <Typography color={"text.primary"} variant="h6">
          {title}
        </Typography>
        <MutedText>{description}</MutedText>
      </Box>
      <Box display={"flex"} gap={"20px"}>
        {tags.map((tag, key) => (
          <StyledButton key={key} styleType={tag} />
        ))}
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
