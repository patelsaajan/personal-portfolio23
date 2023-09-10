import { Button } from "@mui/material";
import React from "react";
type CardProps = {
  styleType: string;
};

const StyledButton = ({ styleType }: CardProps) => {
  const greenTag = styleType === "Online";
  return (
    <Button
      disableRipple
      sx={{
        backgroundColor: greenTag ? "rgba(74, 226, 144 ,0.3)" : "primary.light",
        color: greenTag ? "rgba(74, 226, 144, 1)" : "text.secondary",
        width: "100px",
        textTransform: "none",
        borderRadius: "10px",
        "&:hover": { backgroundColor: "primary.light", cursor: "default" },
      }}
    >
      {styleType}
    </Button>
  );
};
export default StyledButton;
