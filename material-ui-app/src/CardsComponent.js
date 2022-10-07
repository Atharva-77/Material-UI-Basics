import { CardActionArea } from '@material-ui/core';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

function CardsComponent({ title, subHeading , details}) {
    return (
        <div>
            {/* {title} */}
            <Card elevation={3}>
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