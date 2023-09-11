import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";
import { projectCards } from "./projectsConstants";
import Card from "./card";
import { Box, useTheme } from "@mui/material";

const MobileStrucutre = () => {
  const theme = useTheme();
  const [width, setWidth] = useState<number>(0);
  const carousel1 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(carousel1.current?.scrollWidth, carousel1.current?.offsetWidth);
    setWidth(
      (carousel1.current?.scrollWidth as number) -
        (carousel1.current?.offsetWidth as number)
    );
    // setWidth(2000);
  }, []);
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          border: `2px solid ${theme.palette.primary.light}`,
          width: "550px",
          padding: "auto",
          borderRadius: "16px",
        }}
      >
        <motion.div
          ref={carousel1}
          className="carousel1"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel1"
          >
            {projectCards.map((projectCard, index) => (
              <Box className="items" key={index}>
                <Card
                  title={projectCard.title}
                  description={projectCard.discription}
                  tags={projectCard.tags}
                  src={projectCard.img}
                  indexColor={index}
                />
              </Box>
            ))}
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default MobileStrucutre;

// {images.map((image) => {
//   return (
//     <motion.div className="items" key={image}>
//       <img src={image} alt="" />
//     </motion.div>
//   );
// })}
