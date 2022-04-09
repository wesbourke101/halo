import "./App.css"
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import CardContainer from "./components/CardContainer"
import Header from "./components/Header"
import AppBar from '@mui/material/AppBar';

function App() {
  const [characters, setCharacters] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    affiliation: "",
    image: ""
  })

  useEffect(() => {
    fetch("http://localhost:4000/halo")
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])

  function saveCharacter (e){
    e.preventDefault()
    const newCharacter = {
        name: formData.name,
        bio: formData.bio,
        affiliation: formData.affiliation,
        image: formData.image
    }
    fetch('http://localhost:4000/halo', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCharacter)
    })
    .then(res => res.json())
    .then(data => setCharacters([...characters, data]))
    setFormData({
        name: "",
        bio: "",
        affiliation: "",
        image:""
    })
}



  return (
    
    <div className="App">
        <AppBar>
          <Header formData={formData} setFormData={setFormData} saveCharacter={saveCharacter}/>
        </AppBar>
     
        <Container>
          <CardContainer characters={characters}/>
        </Container>
             
    </div>
  );
}

        
  
export default App;
