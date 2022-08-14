import React from "react";
import {CssBaseline} from "@mui/material";
import DividerBar from "./components/DividerBar";
import DividerBar1 from "./components/Dividerbar1";
import Kav from "./components/Kavmain/kar";

function App() {
  return (
    <div class="container" >
      <>
        <CssBaseline />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <DividerBar />
          <DividerBar1 />
          <Kav />
        </div>
      </>
    </div>
  );
}

export default App;
