import React, {Component} from 'react'

import './App.css';
import {Grid,AppBar, Toolbar, Typography, InputBase,GridList, Card, CardContent,CardMedia} from '@material-ui/core/';
import firebase from './firebase.js'

class App extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      results:[],
      showcase: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.searchDb = this.searchDb.bind(this);
    this.renderShowcase = this.renderShowcase.bind(this)
  }
  handleChange(e){
    this.setState({
      title:e.target.value
    })
    if(e.target.value.length <2){
      this.setState({
        showcase:true
      })
    }
    else{
      this.setState({
        showcase:false
      })
    }

  }
  changeTitle(){
    return (this.state.title)
  }
  componentDidMount(){
    const shows = firebase.database().ref('shows')
    shows.on("value", (snapshot)=>{
      let items = snapshot.val()
      let newState=[]
      for (let item in items){
        newState.push({
          title: items[item].title
        })
      }
      this.setState({
        results: newState
      })

    })
    console.log(this.state.results)
  }
  searchDb = () => {

    if(this.state.title.length > 1){

       let items = this.state.results.filter(show => show.title.toLowerCase().includes(this.state.title)).map((result, i) =>

            <Card key={i} className="root">

              <div className="details">
                <CardContent className="content">
                <Typography component="h5" variant="h5">
                {result.title}
                </Typography>
                <Typography>
                  {result.service}
                </Typography>
                </CardContent>
              </div>
            </Card>

      )

      return items
    }


  }

  renderShowcase = () =>{

      return(
          <div>
         <GridList id="showcase2"cellheight={160} cols={1}>

         <Card className="root">

           <div className="details">
             <CardContent className="content">
             <Typography component="h5" variant="h5">
             Attck on Titan
             </Typography>
             <Typography>
               Funimation
             </Typography>
             </CardContent>
           </div>
         </Card>
         <Card className="root">

           <div className="details">
             <CardContent className="content">
             <Typography component="h5" variant="h5">
             Attck on Titan
             </Typography>
             <Typography>
               Funimation
             </Typography>
             </CardContent>
           </div>
         </Card>
        </GridList>
        <GridList id="showcase"cellheight={160} cols={2}>
        <Card className="root">

          <div className="details">
            <CardContent className="content">
            <Typography component="h5" variant="h5">
            Attck on Titan
            </Typography>
            <Typography>
              Funimation
            </Typography>
            </CardContent>
          </div>
        </Card>
        <Card className="root">

          <div className="details">
            <CardContent className="content">
            <Typography component="h5" variant="h5">
            Attck on Titan
            </Typography>
            <Typography>
              Funimation
            </Typography>
            </CardContent>
          </div>
        </Card>
       </GridList>
        </div>
      )


  }

  render(){

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
          onChange={this.handleChange}
          value={this.state.title}
          />

          </Toolbar>
        </AppBar></Grid>
      <Grid item xs={0} sm={6}></Grid>
    </Grid >
      <Grid id="default-display" container  alignItems="center" style={{paddingTop:"100px"}} direction="column">

        <Grid item xs={6} justify="center" alignItems="center" >
          {this.state.showcase ? this.renderShowcase(): null}
          <GridList id="showcase"cellheight={160} cols={2}>

           {this.searchDb()}
         </GridList>
          <GridList id="showcase2"cellheight={160} cols={1}>
              {this.searchDb()}
          </GridList>
        </Grid>

      </Grid>
    </Grid>


  );
  }
}

export default App;
