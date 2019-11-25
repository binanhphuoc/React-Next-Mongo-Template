import React from 'react';
import Link from '../src/Link';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    images: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px',
        marginBottom: '16px',
    },
    singleImage: {
        marginLeft: '8px',
        marginRight: '8px',
    },
    loginFont: {
        fontSize: 'large',
        fontFamily: 'cursive',
        textDecorationLine: 'underline',
        marginTop: '8px',
    },
    paper: {
        padding: theme.spacing(3, 2),
        backgroundColor: '#e1f5fe'
    },
    highlight: {
        fontWeight: 'bold',
        marginRight: '4px',
    },
}));

export default function LogIn() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <div className={classes.root}>
                <img height="128px" width="128px" src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/user_profile_edit-256.png"/>
                <Typography className={classes.loginFont}>
                    Log In with Facebook or Google:
                </Typography>
                <div className={classes.images}>
                    <Button className={classes.singleImage}>
                        <img height="50px" width="50px" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png"/>
                    </Button>
                    <Button className={classes.singleImage}>
                        <img height="50px" width="50px" src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/2-512.png"/>
                    </Button>
                </div>
                <Typography>
                    <em className={classes.highlight}>Note:</em> You can edit your profile after logging in by Facebook and Google. The button Login will
                    be replaced by Profile button, and Signout button will be inside your Profile page.
                </Typography>
            </div>
        </Paper>
    );
}

/*
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
*/