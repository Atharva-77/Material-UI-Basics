import React from 'react';
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system';//Margin to left & right
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button'
import './InputTextField.css'
import { useState } from 'react';

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
    // console.log("CLASSES", classes);
    
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        // console.log("handleSUBMIT ", title, details);
        setTitleError(false);
        setDetailsError(false);
        
        if (title == '')
            setTitleError(true);
        
        if (details == '')
            setDetailsError(true);

        if (title && details)
             console.log("handleSUBMIT ", title, details);
            
    }
    
    return (
        <Container>
             <ThemeProvider  theme={theme1}>

                <form onSubmit={handleSubmit}>
                    <TextField 
                        className={classes.filed}
                        onChange={(e)=>setTitle(e.target.value)}
                        label="Notes"
                        variant='outlined'
                        color="primary"
                        fullWidth
                        // required
                        error={titleError}
                    />

                    <TextField 
                        className={classes.filed}
                        onChange={(e)=>setDetails(e.target.value)}
                        label="Details"
                        variant='outlined'
                        color="primary"
                        fullWidth
                        // required
                        error={detailsError}
                        multiline
                        rows={4}
                    />
                    
                    <Button
                        // className="button_color"
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