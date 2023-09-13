import { Box, Typography } from "@mui/material";
import React from "react";
import MutedText from "../bits/mutedText";
import cardDetails from "./cardDetails";
import DetailedCard from "../bits/detailedCard";

type Card = {
  title: string;
  description: string;
  leftbox: string;
  date: string;
};
type detailsProp = {
  cardDetails: Card[];
};

const VerticleCardSeperation = ({ cardDetails }: detailsProp) => {
  return (
    <>
      {cardDetails.map((card: Card) => (
        <DetailedCard
          title={card.title}
          description={card.description}
          leftBox={card.leftbox}
          date={card.date}
        />
      ))}
    </>
  );
};

export default VerticleCardSeperation;
