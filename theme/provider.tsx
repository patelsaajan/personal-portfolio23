"use client";
import React from "react";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { TypeSpecimenTwoTone } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#090e16",
      light: "rgba(123, 74, 226, 0.2)",
    },
    text: {
      primary: "#FFFF",
      secondary: "#7B4AE2",
    },
  },
});

const MUIThemeProvider = ({ children }: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MUIThemeProvider;
