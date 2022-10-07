import { CardActionArea } from '@material-ui/core';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';

const useStyle=makeStyles({
    
    
    test: {
        // border: (subHeading) =>
        // {
        //     // console.log("MKS ",subHeading);
        //     if (subHeading == 'Tech')
        //     {
        //         return '1px solid red'
        //     }    
        // }
        border:'1px solid red'
   }
})


function CardsComponent({ title, subHeading, details }) {
    
    console.log("SUBH",subHeading);
    const classes=useStyle(subHeading);


    return (
        <div>
            {/* {title} */}
            <Card elevation={3} className={classes.test}>
                <CardHeader
                    action=
                    {
                        <IconButton>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                     }
                    
                    title={title}
                    subheader={subHeading}
                />

                <CardContent>
                    <Typography variant="body2">
                     {details}
                    </Typography>
                </CardContent>

              
            </Card>
        </div>
    );
}

export default CardsComponent;