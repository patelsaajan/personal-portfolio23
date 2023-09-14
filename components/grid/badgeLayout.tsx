import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import badgesArray from "./importBadges";
import Image from "next/image";

const Badges = () => {
  return (
    <>
      <Box mt="100px" display={"flex"} justifyContent={"center"}>
        <Typography variant="h3">Badge-Grid Section</Typography>
      </Box>
      <Box
        sx={{
          pt: "60px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          px: "100px",
        }}
      >
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {badgesArray.map((badge) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                textAlign: "center",
              }}
            >
              {<Image width={100} height={100} src={badge} alt={"badge"} />}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Badges;
