import { Button } from "@mui/material";
import React from "react";
type CardProps = {
  styleType: string;
};

const StyledButton = ({ styleType }: CardProps) => {
  if (styleType === "online")
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
        online
      </Button>
    );
  else if (styleType === "typescirpt")
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
        Typescript
      </Button>
    );
  else if (styleType === "react")
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
        React JS
      </Button>
    );
  else return <></>;
};
export default StyledButton;
