import { Box, createTheme } from "@mui/material";
import React from "react";

type CardProps = {
  children?: React.ReactNode;
  boxColor?: string;
};

const ImBox = ({ children }: CardProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      textAlign={"center"}
      justifyContent={"center"}
      gap={"2px"}
      sx={{
        width: "246px",
        color: "text.secondary",
      }}
    >
      {children}
    </Box>
  );
};

export default ImBox;
