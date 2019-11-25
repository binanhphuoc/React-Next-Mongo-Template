import React, {useState} from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Link from '../src/Link';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
    },
    titleWord: {
        fontSize: 'x-large',
        fontWeight: '600',
        fontFamily: 'cursive',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    toolBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        margin: theme.spacing(1),
    },
    note: {
        marginRight: '8px',
        marginLeft: '8px',
        marginTop: '8px',
    },
    highlight: {
        fontWeight: 'bold',
        marginRight: '4px',
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const tags = [
    'Command',
    'Redstone',
    'Furniture',
];

const types = [
    'Challenges',
    'Creations',
];

function getStyles(type, Types, theme) {
    return {
        fontWeight:
            Types.indexOf(type) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function Challenges() {
    const classes = useStyles();
    const theme = useTheme();
    const [Tags, setTags] = React.useState([]);
    const [Types, setTypes] = React.useState([]);
    const [Note, setNote] = React.useState("You still need to fill in Type box and Tag box.");

    const handleChangeNote = () => {
        if(Types.length===0) {
            if(Tags.length===0) setNote("You still need to fill in Type box and Tag box.");
            else setNote("You still need to fill in Type box.");
        }
        else {
            if(Tags.length===0) setNote("You still need to fill in Tag box.");
            else setNote("You have finished. Now all you need is Search!");
        }
    };

    React.useEffect(handleChangeNote, [Tags, Types]);

    const handleChangeTags = event => {
        setTags(event.target.value);
    };

    const handleChangeTypes = event => {
        setTypes(event.target.value);
    };

    const handleSearch = event => {
        /*axios.post('http://localhost:3000/api/user/register', {
            email: 'yolo@gmail.com',
            password: 'yolo',
            first: 'yo',
            last: 'lo',
            phone: '0123456789',
        })*/
        axios.get('http://localhost:3000/api/user/all')
        .then(res => {
            console.log({users: res.data});
            console.log({user0: res.data[0].email});
        }).catch(error => {
            console.log({error, message: error.message});
        })
    };

    return (
        <Paper className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.titleWord}>
                    Search List
                </Typography>
                <img height="64px" width="64px" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699311-icon-40-clipboard-list-256.png"/>
            </div>
            <Typography paragraph>
                {<em className={classes.highlight}>Search List</em>} is a great tool that you can use to get used to 
                all the categories which you can search for on our website. All you need to do to search is choosing
                the type first (Challenges/Creations) and then the tag provided for that type (Command/Redstone/Furniture) 
            </Typography>
            <Typography paragraph>
                After hitting the button Search, you will be directed to the page containing the content that you want.
                Have fun with MineCommand and Minecraft!
            </Typography>
            <Typography>
                Below is the Search List:
            </Typography>
            <div className={classes.toolBar}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-name-label">Type</InputLabel>
                    <Select
                    labelid="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    multiple
                    value={Types}
                    onChange={handleChangeTypes}
                    input={<Input />}
                    MenuProps={MenuProps}
                    >
                        {types.map(type => (
                            <MenuItem key={type} value={type} style={getStyles(type, Types, theme)}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
                    <Select
                    labelid="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={Tags}
                    onChange={handleChangeTags}
                    input={<Input />}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                    >
                        {tags.map(tag => (
                            <MenuItem key={tag} value={tag}>
                                <Checkbox checked={Tags.indexOf(tag) > -1} />
                                <ListItemText primary={tag} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button color="primary" className={classes.button} onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <Typography className={classes.note}>
                <em className={classes.highlight}>Note:</em> {Note}
            </Typography>
        </Paper>
    );
}