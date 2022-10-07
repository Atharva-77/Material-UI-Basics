import React from 'react';
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system';//Margin to left & right
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, Paper, Radio, RadioGroup, TextField } from '@material-ui/core';
import Button from '@mui/material/Button'
import './InputTextField.css'
import { useState } from 'react';
import { FormControl, FormLabel, Grid } from '@mui/material';

const useStyle=makeStyles({
    filed:{
        marginTop:20,
        marginBottom: 20,
        display: 'block'
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



function GridComponent() {

    const classes=useStyle();
    // console.log("CLASSES", classes);
    
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const [category, setcategory] = useState('money');

    
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
             console.log("handleSUBMIT ", title, details,category);
            
    }
    
    return (
        <Container>
            Grid
             <ThemeProvider  theme={theme1}>

                {/* <form onSubmit={handleSubmit}>
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
                    

                    <FormControl className={classes.filed}>

                        <FormLabel>Select One category</FormLabel>
                        <RadioGroup value={category} onChange={(e) => setcategory(e.target.value)}>
                            <FormControlLabel value="money" control={<Radio />} label="Money" />
                            <FormControlLabel value="car" control={<Radio />} label="Car1" />
                            <FormControlLabel value="Airplane" control={<Radio />} label="Airplane1" />
                            <FormControlLabel value="Ship" control={<Radio />} label="Ship1" />
                        </RadioGroup>

                    </FormControl>
                </form> */}

                <Grid container>
                    <Grid item xs={12} sm={6} md={3} l>
                        <Paper>1</Paper>
                        <Paper>11</Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} l>
                        <Paper>2</Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} l>
                        <Paper>3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} l>

                        <Paper>4</Paper>
                    </Grid>
                </Grid>
         

          </ThemeProvider>
         </Container>
    );
}

export default GridComponent;