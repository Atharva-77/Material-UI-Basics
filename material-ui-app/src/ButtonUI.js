import React from 'react';
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material';

function ButtonUI() {
    return (
        <div>
            ButtonUI
            <Button type="submit" >
                SubmiT Button
            </Button>

            <Button type="submit" 
                    variant="outlined" 
                    color="error">
                <h3>JJ</h3>SubmiT Buttons
            </Button>

            <ButtonGroup variant="contained" color="secondary">
                <Button>one</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    );
}

export default ButtonUI;