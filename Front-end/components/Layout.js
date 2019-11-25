import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { MemoryRouter as Router } from 'react-router';
import Link from '../src/Link';
import News from './News';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    news: {
        padding: theme.spacing(3, 2),
    },
    layout: {
        flexGrow: 1,
    },
    appBarBackGround: {
        backgroundColor: 'forestgreen',
    },
    marginL: {
        marginLeft: '8px',
    },
    titleOfList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: "16px",
        paddingLeft: "16px",
        marginTop: "16px",
    },
    informationSect: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    rootToolBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function chooseIconPart1(text, index) {
        if(index===0) return (
            <ListItem button key={text} component={Link} href="/challenges">
                <ListItemIcon>
                    <img height='24px' width='24px' src='https://cdn3.iconfinder.com/data/icons/medals-and-awards/16/challenge--winner-champion-challenge-star-2-512.png'/>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        );
        else if(index===1) return (
            <ListItem button key={text} component={Link} href="/creations">
                <ListItemIcon>
                    <img height='24px' width='24px' src='https://cdn1.iconfinder.com/data/icons/business-outline-21/24/business_management_idea_inovation_creation-512.png'/>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        );
        else return (
            <ListItem button key={text} component={Link} href="/searchList">
                <ListItemIcon>
                    <img height='24px' width='24px' src='https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/67-512.png'/>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        );
    }

    function chooseIconPart2(text,index) {
        if(index===0) return (
            <ListItem button key={text} component={Link} href="/about">
                <ListItemIcon>
                    <img height='24px' width='24px' src='https://cdn4.iconfinder.com/data/icons/xicons/25/xicons_about_book-512.png'/>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        );
        else if(index===1) return (
            <ListItem button key={text} component={Link} href="/contact">
                <ListItemIcon>
                    <img height='24px' width='24px' src='https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_contact_phone-256.png'/>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        );
        else return (
            <ListItem button key={text} component={Link} href="/helpFolder/help">
                <ListItemIcon>
                    <img height='24px' width='24px' src='https://cdn3.iconfinder.com/data/icons/pictofoundry-pro-vector-set/512/Question-512.png'/>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        );
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
                classes={{
                    root: classes.appBarBackGround,
                }}
            >
                <Toolbar classes={{
                    root: classes.rootToolBar,
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Router>
                        <Button className={classes.title} color="inherit" component={Link} href="/">
                            <Typography variant="h6">
                            Mine
                            </Typography>
                            <img height="50px" width="50px" src="https://gamepedia.cursecdn.com/minecraft_gamepedia/7/76/Impulse_Command_Block.gif?version=5168f1f03f16d0e5a668bb7a68a4fc1a"/>
                            <Typography variant="h6">
                            Command
                            </Typography>
                        </Button>
                        <Button color="inherit" component={Link} href="/login">
                            Login
                        </Button>
                    </Router>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Divider />
                    <List>
                        <Router>
                            <ListItem button key='Home' component={Link} href="/">
                                <ListItemIcon>
                                    <img height='24px' width='24px' src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/home-512.png'></img>
                                </ListItemIcon>
                                <ListItemText primary='Home'/>
                            </ListItem>
                        </Router>
                    </List>
                <Divider />
                <Divider /> 
                    <List>
                    {['Challenges', 'Creations', 'Search List'].map((text, index) => (
                        chooseIconPart1(text, index)
                    ))}
                    </List>
                <Divider />
                <Divider />
                <List>
                {['About', 'Contact', 'Help'].map((text, index) => (
                    chooseIconPart2(text, index)
                ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <Grid container className={classes.root} spacing={4}>
                    <Grid item xs={7}>
                        {props.children}
                    </Grid>
                    <Grid item xs>
                        <News/>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}