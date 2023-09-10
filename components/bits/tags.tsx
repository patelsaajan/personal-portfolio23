import { Button } from "@mui/material";
import React from "react";
type CardProps = {
  styleType: string;
};

const StyledButton = ({ styleType }: CardProps) => {
  if (styleType === "Online")
    return (
      <Button
        disableRipple
        sx={{
          backgroundColor: "rgba(74, 226, 144 ,0.3)",
          color: "rgb(74, 226, 144)",
          width: "100px",
          "&:hover": { backgroundColor: "rgba(74, 226, 144 ,0.3)" },
        }}
      >
        Online
      </Button>
    );
  else
    return (
      <Button
        disableRipple
        sx={{
          backgroundColor: "primary.light",
          color: "text.secondary",
          width: "100px",
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        {styleType}
      </Button>
    );
};
export default StyledButton;
