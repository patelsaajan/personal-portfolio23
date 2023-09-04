"use client";
import { Box, useTheme } from "@mui/material";
import React from "react";

type CardProps = {
  children?: React.ReactNode;
  boxColor?: string;
};

const Card = ({ children, boxColor }: CardProps) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      justifyContent="center"
      sx={{
        width: "246px",
        height: "200px",
        border:
          boxColor === "light"
            ? "none"
            : `1.5px solid ${theme.palette.primary.light}`,
        boxShadow: "none",
        borderRadius: "16px",
        backgroundColor:
          boxColor === "light" ? "primary.light" : "primiary.main",
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
