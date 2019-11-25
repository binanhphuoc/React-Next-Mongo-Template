import React, {Component} from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
//import { fade, makeStyles } from '@material-ui/core/styles';
import { fade, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CardPost from '../components/CardPost';
import Grid from '@material-ui/core/Grid';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  paper: {
    backgroundColor: 'honeydew',
    marginBottom: '16px',
  },
  smallGrid: {
    maxWidth: 'fit-content',
  },
  show: {
    display: 'flex',
    alignItems: 'center',
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    /*const handleSearch = event => {
    /*axios.post('http://localhost:3000/api/cardPost/makePost', {
        name: 'Cake',
        creator: 'Yolo',
        lastEdit: Date(),
        firstCreated: Date(), ***
        type1: 'creations',
        type2: 'redstone',
        likes: 0,
        shares: 0,
        image: 'hi guys',
        description: 'The third card',
        download: 'url',
        video: 'url',
    })*/
    axios.post('http://localhost:3000/api/cardPost/updatePosts', {
      condition: {
        likes: 0
      },
      actions: {
        lastEdit: Date()
      }
    })
    .then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })

    axios.get('http://localhost:3000/api/cardPost/all')
    .then(res => {
      this.setState({cards: res.data});
      console.log({cards: this.state.cards});
    })
    .catch(error => {
      console.log({error, message: error.message});
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper classes={{
          root: classes.paper,
        }}>
          <div className={classes.searchBar}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Button color="inherit">
              Search
            </Button> 
          </div>
        </Paper>
        <Grid container justify="center" spacing={6}>
          {this.state.cards.map(card => (
            <Grid key={card.name} item className={classes.smallGrid}>
              <CardPost info={card} yolo='hehe'/>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
