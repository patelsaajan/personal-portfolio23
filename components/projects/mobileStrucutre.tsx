import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

const MobileStrucutre = () => {
  const [width, setWidth] = useState(0);
  const carousel1 = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(carousel1.current?.scrollWidth, carousel1.current?.offsetWidth);
    setWidth(892);
  }, []);
  return (
    <div className="App">
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
          {images.map((image) => {
            return (
              <motion.div className="items" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileStrucutre;
