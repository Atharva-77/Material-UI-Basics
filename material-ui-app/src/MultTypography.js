import React from 'react';
// import {Typography} from '@mui/material'
import Typography from '@mui/material/Typography'

function MultTypography(props) {
    return (
        <div>
             In MultiTypography

            <Typography 
                variant="h1"
                color="primary"
                align="left">
                 h1. Heading
            </Typography>

             <Typography 
                variant="h1"
                color="error"
                align="center">
                 h11. Heading
            </Typography>

            <Typography 
                variant="h6"
                component="h2"  // The size is h6, but on inspecting, the tag is enclosed in h2.
                color="textsecondary"
                gutterBottom //Adds margin to bottom. Yellow line at bottom on insepcting.
                >
                Creating a new App
            </Typography>


        </div>
    );
}

export default MultTypography;