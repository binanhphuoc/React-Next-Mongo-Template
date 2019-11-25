import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Help from './help';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '16px',
    },
    title: {
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        fontSize: 'large',
        fontWeight: 'bold',
    },
    content: {
        marginRight: '4px',
    },
}));

export default function LogInHelp() {
    const classes = useStyles();

    return (
        <Help>
            <div className={classes.root}>
                <Typography className={classes.title}>Search List</Typography>
                <Typography paragraph>
                    Our search list is a really useful tool for new visitors as it lists all the categories you
                    can search for on our website. Later on, if you are familiar with the terms, you can enter them directly
                    in the search bar on our Home page.
                </Typography>
                <Typography paragraph>
                    If you go to the search list, you will notice that there are boxes where you can tick the categories
                    you like to search. After choosing your favorite tags, start searching by only one click at the button
                    near the end of the page that says "Confirm".
                </Typography>
                <Typography paragraph>
                    There will be more categories in the future if Minecraft updates more features. To create new categories
                    for searching if you find it necessary, you can check out the "New Tags" section in the bar above.  
                </Typography>
            </div>
        </Help>
    );
}