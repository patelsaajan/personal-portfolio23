"use client";
import {
  Box,
  Button,
  Fab,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BasicInfo from "./bits/basicInfo";

const MediumStruct = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: 1 / 4,
          pl: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <>
          <BasicInfo />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1.5,
              justifyContent: "left",
              alignItems: "left",
              textAlign: "left",
            }}
          >
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </>
      </Box>
      <Box
        sx={{
          width: 2 / 4,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/imgs/profile.png"
          width={550}
          height={600}
          alt="Picture of author"
        />
      </Box>
      <Box
        sx={{
          width: 1 / 4,
          display: "flex",
          flexDirection: "column",
          direction: "rtl",
          gap: 1,
        }}
      >
        <Fab
          variant="extended"
          size="small"
          sx={{
            color: "text.secondary",
            backgroundColor: "primary.main",
            width: 115,
            boxShadow: 0,
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          <Typography variant="subtitle2">
            <DownloadIcon sx={{ fontSize: 16, position: "relative", top: 3 }} />
            Baixar CV
          </Typography>
        </Fab>
        <Fab
          size="small"
          variant="extended"
          sx={{
            width: 200,
            backgroundColor: "primary.main",
            color: "text.secondary",
            boxShadow: 0,
            border: `1px solid ${theme.palette.primary.light}`,
            transition: "all 200ms ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(123, 74, 226, 0.3)",
              color: "text.primary",
              border: "1px solid #FFFF",
            },
          }}
        >
          <Typography variant="subtitle2">
            Vamos conversar{" "}
            <WhatsAppIcon sx={{ fontSize: 16, position: "relative", top: 3 }} />
          </Typography>
        </Fab>
      </Box>
    </>
  );
};

export default MediumStruct;
