import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import MutedText from "./mutedText";

const DetailedCard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "40px",
        width: "580px",
        height: "220px",
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: "16px",

        "&:hover": { backgroundColor: "primary.light", border: "none" },
      }}
    >
      <Typography variant="subtitle1" fontWeight={"1000"}>
        Title
      </Typography>
      <Box sx={{ width: "520px", height: "78.5px" }}>
        <MutedText>
          this is where the extra text goes talking about stuff
        </MutedText>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontWeight={"800"} variant="body2" color="text.secondary">
          hello
        </Typography>
        <Typography variant="body2" color="text.secondary">
          first
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailedCard;
