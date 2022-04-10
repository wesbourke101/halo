import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function CardContainter({oneLoop}) {
  const {id, name, bio, image, affiliation} = oneLoop
  return (
      <Grid item xs={3}>
        <Paper align="center" sx={{m: 1, bgcolor: 'rgba(0,0,0,0.7)'}}>
          <h5>{name}, Works with: {affiliation}</h5>
          <h6>{bio}</h6>
          <img className="picture" src={image} width="150px" height="auto"/>
        </Paper>
      </Grid>
  )
}

export default CardContainter