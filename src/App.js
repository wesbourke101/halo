import CharacterCard from './components/CharacterCard';
import Home from './components/Home';
import Something from './components/Something';

import Box from '@mui/material/Box';

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



// to install json run this npm install :npm install -g json-server
// to run server: json-server --watch db.json --port 3001

function App() {

  const [haloData, setHaloData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/halo")
    .then( res => res.json())
    .then( data => setHaloData(data))
    .catch( error => console.log(error.message));
  },[])


  return (
    <Box>
      <BrowserRouter> 
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
          <Link to='/'>Home</Link> |{" "}
          <Link to="/HaloInformation">Halo Infomation</Link> |{" "}
          <Link to="/SomethingElse">Another Halo Thing</Link>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="HaloInformation" element={<CharacterCard haloData={haloData}/>} />
          <Route path="SomethingElse"element={<Something />}/>
        </Routes>
      </BrowserRouter>
    </Box>      
  );
}
export default App;
