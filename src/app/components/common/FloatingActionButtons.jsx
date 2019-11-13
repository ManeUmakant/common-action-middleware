import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
      position: 'absolute',
    top: '84%',
    left: '92%',
    backgroundColor:'#007bff',
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Fab color="primary" onClick={props.handleClick} aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
}