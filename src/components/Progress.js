import React, { useEffect } from 'react';
import useUploadImg from '../hooks/useUploadImg'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Progress = ({ file, setFile, setPicture }) => {
    const classes = useStyles();
    const { progress, url } = useUploadImg(file)
    useEffect(() => {
        if (url) {
            setPicture(url)
            setFile(null)
        }
    }, [url, setFile])



    return (
        <div className={classes.root}>
            <CircularProgress variant="determinate" value={progress} />
        </div>
    );
}

export default Progress