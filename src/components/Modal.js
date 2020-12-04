import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardMedia,
    CardActions,
    Avatar,
    IconButton
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Modal = ({ img }) => {
    const classes = useStyles();

    return (
        <Card >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src={img.userImageURL} alt={img.userImageURL} />
                    </Avatar>
                }
                title={img.user}
                subheader={img.tags}
            />
            <a href={img.pageURL}
                target="_blank"
                rel="noreferrer">
                <CardMedia
                    className={classes.media}
                    image={img.largeImageURL}
                    title={img.tags} />
            </a>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Modal