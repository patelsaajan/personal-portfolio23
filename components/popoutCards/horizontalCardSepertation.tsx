import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "/components/projects/carousel.module.css";
import VerticleCardSeperation from "./VerticleCardSeperation";
import cardDetails from "./cardDetails";
import { projectCards } from "../projects/projectsConstants";
import Card from "../projects/card";
import CardMapping from "./cardMapping";
import MutedText from "../bits/mutedText";

const HorizontalCardSepertation = () => {
  const theme = useTheme();
  const [width, setWidth] = useState<number>(0);
  const carousel1 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(carousel1.current?.scrollWidth, carousel1.current?.offsetWidth);
    setWidth(
      (carousel1.current?.scrollWidth as number) -
        (carousel1.current?.offsetWidth as number)
    );
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "60px",
        width: "100%",
        pt: "40px",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          //   border: "2px solid #FFFF",
          alignItems: { xs: "flex-start", lg: "center" },
          width: "100%",
        }}
      >
        <Typography variant="h4">Area profissional</Typography>
        <MutedText> 2016 ~ Atualmente</MutedText>
        <motion.div
          ref={carousel1}
          className={styles.carousel1}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.innerCarousel1}
          >
            <Box sx={{ display: "flex", gap: "40px" }}>
              <CardMapping cardDetails={cardDetails} />
            </Box>
          </motion.div>
        </motion.div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          //   border: "2px solid #FFFF",
          alignItems: { xs: "flex-start", lg: "center" },
          width: "100%",
        }}
      >
        <Typography variant="h4">Academica</Typography>{" "}
        <MutedText> 2016 ~ Atualmente</MutedText>
        <motion.div
          ref={carousel1}
          className={styles.carousel1}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.innerCarousel1}
          >
            <Box sx={{ display: "flex", gap: "40px" }}>
              <CardMapping cardDetails={cardDetails} />
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HorizontalCardSepertation;
