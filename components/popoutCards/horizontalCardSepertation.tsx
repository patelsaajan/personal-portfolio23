import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "/components/projects/carousel.module.css";
import VerticleCardSeperation from "./VerticleCardSeperation";
import cardDetails from "./cardDetails";
import { projectCards } from "../projects/projectsConstants";
import Card from "../projects/card";

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
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100vw",
        }}
      >
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
            <VerticleCardSeperation cardDetails={cardDetails} />
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HorizontalCardSepertation;
