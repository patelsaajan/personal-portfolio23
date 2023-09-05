import {
  Box,
  Container,
  Icon,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { Height } from "@mui/icons-material";
import BasicInfo from "./bits/basicInfo";

const SmallStruct = () => {
  const setSize = "large";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%,",
          }}
        >
          <IconButton>
            <LinkedInIcon sx={{ fontSize: { setSize } }} />
          </IconButton>
          <IconButton>
            <GitHubIcon sx={{ fontSize: { setSize } }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ fontSize: { setSize } }} />
          </IconButton>
        </Stack>
        <Box sx={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            src={"/imgs/profile.png"}
            width={isMobile ? 440 : 550}
            height={isMobile ? 440 : 550}
            alt="Picture of the aurthor"
          />
        </Box>
        <Box>
          <BasicInfo />
        </Box>
      </Container>
    </>
  );
};

export default SmallStruct;
