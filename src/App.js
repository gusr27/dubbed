import logo from './logo.svg';
import './App.css';
import {Button,Grid,AppBar, Toolbar, Typography, InputBase,GridList} from '@material-ui/core/';

function App() {
  return (
    /*
      Fix and color app bar, and background color.

      Get showcase container ready.
    */
    <Grid container>
    <Grid container  style={{backgroundColor:"#312c51"}}>
      <Grid item xs={12} sm={3} >
        <Typography variant="h6" style={{color:"#f0c38e"}}>
          Dubbed Anime Search Engine
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>  <AppBar style={{backgroundColor:"#48426d"}} position="static">
          <Toolbar>
          <InputBase
          placeholder="Search..."
          />

          </Toolbar>
        </AppBar></Grid>
      <Grid item xs={0} sm={6}></Grid>
    </Grid>
      <Grid container>
        <Grid item x={3}></Grid>
        <Grid item x={6} justifyContent="center" style={{backgroundColor:"gray", width:"50%"}}>
          <GridList cellheight={160} cols={2}>
            <Typography>
              Show Here!
            </Typography>
          </GridList>
        </Grid>
        <Grid item x={3}></Grid>
      </Grid>
    </Grid>


  );
}

export default App;
