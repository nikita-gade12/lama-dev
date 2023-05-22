import React from "react";
import { Box,  Stack } from "@mui/material";
import {Sidebar} from "./Components/Sidebar";
import{ Feed }from "./Components/Feed";

import {Rightbar} from "./Components/Rightbar";
import Navbar from "./Components/Navbar";
import { Add } from "@mui/icons-material";




function App() {
  return (
    
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between" >
    <Sidebar/>
    <Feed/> 
    <Rightbar/>
    </Stack>
    <Add/>

    </Box>
   
    
  );
}

export default App;
