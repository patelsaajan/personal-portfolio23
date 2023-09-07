import { Fab, useTheme } from "@mui/material";
import React from "react";

type fabProps = {
  children?: React.ReactNode;
  sx?: any;
};

const CustomFab = ({ children, sx }: fabProps) => {
  const theme = useTheme();
  return (
    <Fab
      variant="extended"
      size="medium"
      sx={{
        color: "text.secondary",
        backgroundColor: "primary.light",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "primary.main",
          border: `1px solid ${theme.palette.primary.light}`,
          transition: "all 200ms ease-in-out",
        },
        ...sx,
      }}
    >
      {children}
    </Fab>
  );
};

export default CustomFab;
