import logo from './logo.svg';
import './App.css';
import MultTypography from './MultTypography';
import ButtonUI from './ButtonUI';
import React from 'react';
import { MuiThemeProvider, createTheme, makeStyles ,withStyles} from '@material-ui/core/styles';
import createPalette from '@mui/material/styles/createPalette';
// import { withStyles } from '@material-ui/core/styles';

import { ThemeProvider } from '@mui/material';
import InputFieldText from './InputTextField';
import InputTextField from './InputTextField';
import GridComponent from './GridComponent';

const theme=createTheme({
    palette: {
        primary: {
            main: '#34ebc3'
        },
        secondary:{
          main:'#fc1212'
        },

    //     typography:// No chnage. The import added in index.css changes the font.
    //     {
    //       fontFamily:'Roboto'
    //     }
    }
})
const theme1={}

function App() {
  return (
    <div>

   
    <ThemeProvider theme={theme} >
        {console.log("\ 1.THEME",theme)} 
       
        <div className="App">
             Hello App.jsh
             {/* <MultTypography/> */}
              {/* <ButtonUI /> */}
              {/* <InputTextField /> */}
              <GridComponent />
        </div>

      </ThemeProvider>
      </div>
  );
}

export default App;
// export default withStyles({ withTheme: true })(App);