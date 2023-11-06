import React from "react";
import { Stack, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import imageQrCode from "../../assets/image-qr-code.png";

function Qrcode() {
  return (
    <Stack
      direction="row"
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundcolor: "white",
      }}
    >
      <Grid style={{ backgroundColor: "white", borderRadius: "2ch" }}>
        <Stack
          direction="column"
          spacing={1}
          style={{
            width: "30ch",
            placeContent: "center",
            placeItems: "center",
          }}
        >
          <Stack
            direction="row"
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              padding: "1.5ch",
            }}
          >
            <img
              src={imageQrCode}
              style={{ height: "100%", width: "100%", borderRadius: "1ch" }}
            />
          </Stack>
          <Stack
            direction="column"
            spacing={1}
            style={{
              width: "90%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2ch",
            }}
          >
            <Typography
              variant="h7"
              style={{ fontWeight: "800", fontSize: "1.1rem", color: "black" }}
            >
              Improve your front-end skills by building projects
            </Typography>

            <Typography
              variant="h9"
              style={{ fontSize: "0.8rem", color: "grey" }}
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Stack>
  );
}

export default Qrcode;
