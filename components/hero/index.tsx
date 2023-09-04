"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MediumStruct from "./mediumStruct";
import SmallStruct from "./smallStruct";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mx: 5,
        justifyContent: "center",
        pt: -5,
      }}
    >
      {isMobile ? <SmallStruct /> : <MediumStruct />}
    </Box>
  );
};

export default Hero;
