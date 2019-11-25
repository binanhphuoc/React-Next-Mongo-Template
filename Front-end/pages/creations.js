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
import { withStyles } from '@material-ui/core/styles';
import Link from '../src/Link';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
    },
    titleWord: {
        fontSize: 'x-large',
        fontWeight: '600',
        fontFamily: 'cursive'
    },
    paraG: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        marginBottom: '16px'
    },
    card: {
        width: '300px',
    },
    media: {
        height: '140px',
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
    divideTitle: {
        marginBottom: '8px',
    },
}));

export default function Challenges() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <div className={classes.title}>
                <img height="64px" width="64px" src="https://cdn1.iconfinder.com/data/icons/steaming-gaming/80/minecraft-block-crafting-256.png"/>
                <Typography className={classes.titleWord}>
                    Creations
                </Typography>
                <img height="64px" width="64px" src="https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/minecraft-block-crafting-build-256.png"/>
            </div>
            <Typography paragraph>
                Welcome to MineCommand, we hope you guys are having a good day. In this section, we will show you what
                "Creations" means on our website. "Creations" is one of our most important categories.
            </Typography>
            <Typography paragraph>
                "Creations" generally includes all the creations made and posted by users. These creations are samples 
                that you can follow and rebuild in your own Minecraft world. There would be specific steps or tutorial videos which you can
                use to guide your restructing process.
            </Typography>
            <Typography paragraph>
                "Creations" covers 3 fields just the same as "Challenges":
            </Typography>
            <Typography paragraph>
                <img height="36px" width="36px" src="https://cdn2.iconfinder.com/data/icons/minecraft-and-pixels/32/minecraft-21-512.png"/>
                Buildings and structures. There are a lot of beautiful houses and ways to arrange furnitures that you can
                refer to in your world.
            </Typography>
            <Typography paragraph>
                <img height="36px" width="36px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c819a5d7-18f6-4ee1-9150-de2de2c2000a/dabr12y-1016df17-0722-42c6-b73a-fbd92a1a0f3d.png/v1/fill/w_894,h_894,strp/command_block_by_lanceberyl_dabr12y-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2M4MTlhNWQ3LTE4ZjYtNGVlMS05MTUwLWRlMmRlMmMyMDAwYVwvZGFicjEyeS0xMDE2ZGYxNy0wNzIyLTQyYzYtYjczYS1mYmQ5MmExYTBmM2QucG5nIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iH6gCVVtP-qjrmJ8Z5x65qdDLMKkTGhPy89_KvOhOaU"/>
                Command Blocks. A long list of machines working based on Command Blocks. They are really cool if you can rebuild
                in your world and see the process of them working.
            </Typography>
            <Typography paragraph>
                <img height="36px" width="36px" src="http://www.minecraftopia.com/images/blocks/redstone_repeater.png"/>
                Redstones. These creations are pretty much the same as Command Blocks ones. There are also steps which if you follow,
                you will have a modern Minecraft world with complicated piston machines working beautifully.   
            </Typography>
            <Divider className={classes.divider}/>
            <Typography paragraph>
                The card for the "Creations" would look like below:
            </Typography>
            <div className={classes.paraG}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Painting and zooming machine"
                        height="150"
                        image="data:image/jpeg;base64,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"
                        title="Painting and zooming machine"
                        />
                        <CardContent>
                            <Typography component="h6" className={classes.letter}>
                                Painting and zooming machine
                            </Typography>
                            <Typography gutterBottom className={classes.subtitle1}>
                                Created by HiThere
                            </Typography>
                            <Divider className={classes.divideTitle}/>
                            <Typography gutterBottom component="h6" className={classes.letter}>
                                Description:
                            </Typography>
                            <Typography gutterBottom component="h6">
                                You can paint and get the picture right inside Minecraft! A custom painting.
                                Follow my steps to make... 
                            </Typography>
                            <Typography component="h6" className={classes.letter}>
                                Creations / Command Blocks
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div className={classes.likeAndShareShow}>
                        <Typography classes={{
                            root: classes.likeAndShareWords
                        }}>
                            Likes: 201
                        </Typography>
                        <Typography classes={{
                            root: classes.likeAndShareWords
                        }}>
                            Shares: 116
                        </Typography>
                    </div>
                    <CardActions className={classes.likeAndShareButtons}>
                        <Button size="small" color="primary">
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
            </div>
        </Paper>
    );
}