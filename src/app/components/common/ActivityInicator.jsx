import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position:'absolute',
    top:'25%',
    left:'50%',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const ActivityIndicator = ({loading, apiProgress}) => {
  const classes = useStyles();
  return (
    apiProgress &&  <div className={classes.root}>
   <CircularProgress 
    color='primary'
    disableShrink={false}
    size={40}
   />
     </div>
  );
}

const mapStateToProps = state => {
    return {
        loading:state.common.loading,
        apiProgress:state.apiStatus.progress
    }
}

export default connect(mapStateToProps)(ActivityIndicator);