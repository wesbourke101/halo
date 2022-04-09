import "./App.css"
import Container from "@mui/material/Container"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
      <Container>
        <AppBar>
          <Header formData={formData} setFormData={setFormData} saveCharacter={saveCharacter}/>
        </AppBar>
        <ImageList>
          <CardContainer characters={characters}/>
        </ImageList>
      </Container>
    </div>
  );
}
export default App;
