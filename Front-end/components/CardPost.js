import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    card: {
        width: '300px',
    },
    letter: {
        fontWeight: '600',
        fontSize: 'medium',
    },
    likeAndShareShow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '8px'
    },
    likeAndShareButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#e3f2fd'
    },
    likeAndShareWords: {
        fontFamily: 'cursive',
        color: '#3f51b5',
    },
    subtitle1: {
        fontSize: 'smaller',
        fontFamily: 'cursive'
    },
    subtitle2: {
        fontSize: 'xx-small',
        fontFamily: 'cursive'
    },
    divideTitle: {
        marginBottom: '8px',
    },
}));
    
export default function CardPost(props) {
    const classes = useStyles();

    const cardInfo = props.info;

    const handleClick = event => {
        console.log({info: cardInfo});
    };

    const handleDate = (value) => {
        var date = "";
        for(var i=0; i<15; i++) {
            date += value[i];
        }
        return date;
    };

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Moving Helicopter"
                height="150"
                image={cardInfo.image}
                title="Moving Helicopter"
                />
                <CardContent>
                    <Typography component="h6" className={classes.letter}>
                        {cardInfo.name}
                    </Typography>
                    <Typography gutterBottom className={classes.subtitle1}>
                        Created by <em>{cardInfo.creator}</em>
                    </Typography>
                    <Typography gutterBottom className={classes.subtitle2}>
                        Last edited: {handleDate(cardInfo.lastEdit)}
                    </Typography>
                    <Divider className={classes.divideTitle}/>
                    <Typography gutterBottom component="h6" className={classes.letter}>
                        Description:
                    </Typography>
                    <Typography gutterBottom component="h6">
                        {cardInfo.description}
                    </Typography>
                    <Typography component="h6" className={classes.letter}>
                        {cardInfo.type1} / {cardInfo.type2}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className={classes.likeAndShareShow}>
                <Typography classes={{
                    root: classes.likeAndShareWords
                }}>
                    Likes: {cardInfo.likes}
                </Typography>
                <Typography classes={{
                    root: classes.likeAndShareWords
                }}>
                    Shares: {cardInfo.shares}
                </Typography>
            </div>
            <CardActions className={classes.likeAndShareButtons}>
                <Button size="small" color="primary" onClick={handleClick}>
                    Like
                </Button>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    See More
                </Button>
            </CardActions>
        </Card>
    );
}