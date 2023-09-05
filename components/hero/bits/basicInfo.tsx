import { Box, Fab, Typography, useTheme } from "@mui/material";
import React from "react";

const BasicInfo = () => {
  const theme = useTheme();
  return (
    <>
      {" "}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Fab
          variant="extended"
          size="small"
          sx={{
            width: 130,
            color: "text.secondary",
            backgroundColor: "primary.light",
            opacity: 1.5,
            fontSize: 12,
            fontWeight: 1000,
            transition: "all 200ms ease-in-out",
            boxShadow: 0,
            "&:hover": {
              backgroundColor: "primary.main",
              transition: "all 200ms ease-in-out",
              border: `2px solid ${theme.palette.primary.light}`,
            },
          }}
        >
          👋 Saudacoes!
        </Fab>
        <Typography variant="h3" sx={{ fontWeight: "Bold" }}>
          Henrique Sousa
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight="medium"
          color="rgba(255, 255, 255, 0.5)"
        >
          Front-end developer ~ UI designer
        </Typography>
      </Box>
    </>
  );
};

export default BasicInfo;
