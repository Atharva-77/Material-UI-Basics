import React from 'react';
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system';//Margin to left & right
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button'

const useStyle=makeStyles({
    filed:{
        marginTop:20,
        marginBottom:20,
        // color: 'green',
        // '&:hover':
        // {
            // backgroundColor:'green'
        // }
    },
    // button color not changing ..see how to change
    btn: {
        backgroundColor:"#fc1212"
        
    }
})


const theme1=createTheme({
    palette: {
        primary: {
            main: "#b207f0"
        }
    }
})
// const theme={};

function InputTextField() {

    const classes=useStyle();
    console.log("CLASSES",classes);
    
    return (
        <Container>
             <ThemeProvider  theme={theme1}>

                <form>
                    <TextField 
                        className={classes.filed}
                        label="Notes"
                        variant='outlined'
                        color="primary"
                        fullWidth
                        required/>

                    <TextField 
                        className={classes.filed}
                        label="Details"
                        variant='outlined'
                        color="primary"
                        fullWidth
                        required
                        multiline
                        rows={4}
                    />
                    
                    <Button
                        className={classes.btn}
                        type="submit" 
                        variant="contained" 
                        // color="red"
                               >
                        SubmiT 
                        </Button>
                </form>
         

          </ThemeProvider>
         </Container>
    );
}

export default InputTextField;