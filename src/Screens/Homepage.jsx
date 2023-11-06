import React from "react";
import Qrcode from "../components/qrcode/Qrcode";
import { Stack } from "@mui/material";

function Homepage() {
  return (
    <Stack
      direction="column"
      style={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Qrcode />
    </Stack>
  );
}

export default Homepage;
