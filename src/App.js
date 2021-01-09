import logo from './logo.svg';
import './App.css';
import {Button,Grid,AppBar, Toolbar, Typography, InputBase,GridList, Card, CardContent} from '@material-ui/core/';

function App() {
  return (
    /*
      Get App to full colo
    */
    <Grid container style={{backgroundColor:"#393e46"}}>
    <Grid container  style={{backgroundColor:"#222831"}}>
      <Grid item xs={12} sm={3} >
        <Typography variant="h6" style={{color:"#ffd369"}}>
          Dubbed Anime Search Engine
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>  <AppBar style={{backgroundColor:"#393e46"}} position="static">
          <Toolbar>
          <InputBase
          placeholder="Search..."
          />

          </Toolbar>
        </AppBar></Grid>
      <Grid item xs={0} sm={6}></Grid>
    </Grid >
      <Grid id="default-display" container justify="center" alignItems="center" style={{paddingTop:"100px"}} direction="column">

        <Grid item xs={6} justify="center" alignItems="center" >
          <GridList id="showcase"cellheight={160} cols={2}>
            <Card>
              <CardContent>
                <Typography>
                  Attack on Titan
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography>
                  Attack on Titan
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography>
                  Attack on Titan
                </Typography>
              </CardContent>
            </Card>
          </GridList>
          <GridList id="showcase2"cellheight={160} cols={1}>
            <Card>
              <CardContent>
                <Typography>
                  Attack on Titan
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography>
                  Attack on Titan
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography>
                  Attack on Titan
                </Typography>
              </CardContent>
            </Card>
          </GridList>
        </Grid>

      </Grid>
    </Grid>


  );
}

export default App;
