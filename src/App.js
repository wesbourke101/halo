import CharacterCard from './components/CharacterCard';
import Home from './components/Home';
import Something from './components/Something';
import React, { render } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
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
          <Route path="HaloInformation" element={<CharacterCard />} />
          <Route path="SomethingElse"element={<Something />}/>
        </Routes>
      
      </BrowserRouter>

  );
}
export default App;
