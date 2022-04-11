import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function CardContainter({oneLoop}) {
  const {id, name, bio, image, affiliation} = oneLoop
  return (
      <Grid item xs={3}>
        <Card align="center" sx={{m: 1, bgcolor: 'rgba(0,0,0,0.7)'}}>
          <h5>{name}, Works with: {affiliation}</h5>
          <h6>{bio}</h6>
          <h6>__________________________________</h6>
          <img className="picture" src={image} width="150rem" height="auto"/>
          <h6>__________________________________</h6>
          <Button variant="outlined">[Something]  🎮</Button>
        </Card>
      </Grid>
  )
}

export default CardContainter