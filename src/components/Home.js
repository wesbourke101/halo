import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Home() {
  const [addNewCharacter, setAddNewCharacter] = useState({
    name: "",
    bio: "",
    image: "url",
    affiliation: "name"
  })

  function eventHandler(event) {
    event.preventDefault()
    setAddNewCharacter({... addNewCharacter, [event.target.name]: event.target.value})
  }

  return (
    <Container sx={{width: "70rem", m: 2}}>
      <Grid container>
        <Grid item xs={6}>
          <Stack sx={{width: "33rem", height: "33rem", bgcolor: 'rgba(0,0,0,0.7)'}}>
            <h1>Form</h1>
            <TextField name="name" margin="normal" variant="filled" sx={{backgroundColor: "white"}} input="type" value={addNewCharacter.name} onChange={eventHandler} ></TextField>
            <TextField name="bio" margin="normal" variant="filled" sx={{backgroundColor: "white"}} input="type" value={addNewCharacter.bio} onChange={eventHandler}></TextField>
            <TextField name="image" margin="normal" variant="filled" sx={{backgroundColor: "white"}} input="type" value={addNewCharacter.image} onChange={eventHandler}></TextField>
            <TextField name="affiliation" margin="normal" variant="filled" sx={{backgroundColor: "white"}} input="type" value={addNewCharacter.affiliation} onChange={eventHandler}></TextField>
            <Button variant="outlined">[Submit]  🎮</Button>
            <Button variant="outlined">[Clear]  🎮</Button>
          </Stack>
          
        </Grid>
          <Grid item xs={6}>
            <Paper sx={{width: "33rem", height: "33rem", bgcolor: 'rgba(0,0,0,0.7)'}}>Section Two
              <Grid>
                <Card sx={{m: 2}}>One</Card>
              </Grid>
              <Grid>
                <Card sx={{m: 2}}>One</Card>
              </Grid>
              <Grid>
                <Card sx={{m: 2}}>One</Card>
              </Grid>
            </Paper>  
          </Grid>
      </Grid>
    </Container>
  )
}

export default Home