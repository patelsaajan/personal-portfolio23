import Link from "next/link";
import * as React from "react";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "@/components/navbar";

export default function Page() {
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <br />
      <Button variant="text" href="/" color="error">
        Return Home
      </Button>
    </>
  );
}
