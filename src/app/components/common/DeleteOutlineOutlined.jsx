import React from 'react';
import DeleteOutlineOutlined from '@material-ui/icons/DeleteOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      color: theme.palette.text.primary,
      cursor:'pointer'
    },
  }));

export default () => {

    const classes = useStyles();
    return <DeleteOutlineOutlined className={classes.root} />
}