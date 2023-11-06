import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Qrcode from "./components/qrcode/Qrcode";
import { Stack } from "@mui/material";
import Homepage from "./Screens/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack
      style={{
        backgroundColor: "rgb(37, 150, 190, 0.2)",
      }}
    >
      <Homepage />
    </Stack>
  );
}

export default App;
