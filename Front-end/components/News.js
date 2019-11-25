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
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    news: {
        fontSize: 'x-large',
        fontWeight: 'bolder',
        marginBottom: '8px',
    }
});

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }

    // componentDidMount() {
    //     //axios.get để tìm 6 post edit gần đây nhất
    // }

    render() {
        const { classes } = this.props; 

        return (
            <Paper className={classes.root}>
                <Typography className={classes.news}>
                    NEWS
                </Typography>
                <Divider/>
            </Paper>
        );
    }
}

export default withStyles(styles)(News);