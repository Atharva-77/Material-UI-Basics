import { AppBar } from '@material-ui/core';
import { Toolbar, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240

const useStyle=makeStyles({
    appBar:
    {
        width:`calc(100% - ${drawerWidth}px)`
    }
})

function TopBar() {

    const classes = useStyle();

    return (
        <div>
            Tops
            <AppBar className={classes.appBar}>
                <Toolbar>
                        <Typography>
                        Welcome to the TopBar
                        </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopBar;