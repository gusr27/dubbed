import logo from './logo.svg';
import './App.css';
import {Button,Grid,AppBar, Toolbar, Typography, InputBase} from '@material-ui/core/';

function App() {
  return (
    /*
      Fix and color app bar, and background color.

      Get showcase container ready.
    */
    <Grid container>
      <Grid item xs={3} style={{backgroundColor:"#023e8a"}}>
        <Typography variant="h6" style={{color:"#caf0f8"}}>
          Dubbed Anime Search Engine
        </Typography>
      </Grid>
      <Grid item xs={6}>  <AppBar style={{backgroundColor:"#0077b6"}} position="static">
          <Toolbar>
          <InputBase
          placeholder="Search..."
          />

          </Toolbar>
        </AppBar></Grid>
      <Grid item xs={3} style={{backgroundColor:"#023e8a"}}></Grid>
    </Grid>



  );
}

export default App;
