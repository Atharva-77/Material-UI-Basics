import React from 'react';
import Typography from '@mui/material/Typography'
import { Container } from '@mui/system';//Margin to left & right
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, Paper, Radio, RadioGroup, TextField } from '@material-ui/core';
import Button from '@mui/material/Button'
import { useState } from 'react';
import { Drawer, FormControl, FormLabel, Grid } from '@mui/material';


const drawerWidth = 240

const useStyle=makeStyles({
    filed:{
        marginTop:20,
        marginBottom: 20,
        display: 'block'
       
    },
    // button color not changing ..see how to change
    drawer: {
        width:drawerWidth
        
    },
    drawerPaper: {
        width: drawerWidth
        
    }
})
function Sidebar() {

    const classes= useStyle()
    return (
        <div>
           Sidebar
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }} /*Makes paper wider */
             >
                <div>
                    <Typography variant="h5">
                        Sidebar Left
                    </Typography>
                </div>

            </Drawer>
        </div>
    );
}

export default Sidebar;