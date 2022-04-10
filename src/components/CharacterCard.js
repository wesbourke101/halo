import React from "react"
import Box from '@mui/material/Box';
import CardContainer from "./CardContainer";
import Grid from '@mui/material/Grid';

function CharacterCard({haloData}) {

    const mappedCards = haloData.map(oneLoop => {
        return <CardContainer oneLoop={oneLoop} />
    })

    return (
        <Box>
            <Grid container spacing={2}>
                {mappedCards}
            </Grid>
        </Box>

    )
}
export default CharacterCard