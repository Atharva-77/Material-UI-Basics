import React from 'react';
// import {Typography} from '@mui/material'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system';//Margin to left & right
// import { makeStyles, createTheme,ThemeProvider } from '@mui/styles';
// import { createTheme } from '@material-ui/core';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
// import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';
// import { palette} from '@mui/system';

// const useStyle=makeStyles({
//     btn:{
//         fontSize:60,
//         backgroundColor:'yellow',
//         color: 'purple',
//         '&:hover':
//         {
//             backgroundColor:'blue'
//         }
//     }
// })
// --
// const theme = createTheme({
//   p1alette: {
//     primary: {
//       main: "white",
//     },
//     secondary: {
//       main: "green",
//     },
//   },
// });
// --

// const theme1=createTheme({
//     palette: {
//         primary: {
//             main: "#fc1212"
//         }
//     }
// })
// const theme={};

function MultTypography() {

    // const classes=useStyle();
    // console.log("CLASSES","\nTHEME",theme1);
    
    return (
        <Container>
             {/* <ThemeProvider theme={theme1}> */}

            
             {/* In MultiTypography */}

            <Typography 
                // className={classes.btn}
                variant="h1"
                // color="primary"
                align="left"
               
                >
                 h1. Heading
            </Typography>

             <Typography 
                variant="h1"
                color="primary"
                align="center">
                 h11. Heading
            </Typography>

            <Typography 
                variant="h6"
                component="h2"  // The size is h6, but on inspecting, the tag is enclosed in h2.
                color="secondary"
                gutterBottom //Adds margin to bottom. Yellow line at bottom on insepcting.
                >
                Creating a new App
            </Typography>

          {/* </ThemeProvider> */}
         </Container>
    );
}

export default MultTypography;