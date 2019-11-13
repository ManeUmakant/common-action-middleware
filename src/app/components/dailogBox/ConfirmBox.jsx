import React,  { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteOutlineOutlined from '../common/DeleteOutlineOutlined';
import DeleteProduct from '../../action/apis/products/DeleteProduct';
import GetProduct from '../../action/apis/products/GetProducts';
import apiDispatchAction from '../../action/apiDispatcher/apiDispatchAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const AlertDialog = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteClick = () => {
    const { id,apiDispatchAction } = props;
    apiDispatchAction(new DeleteProduct(id));
    handleClose();
  }
  useEffect(()=>{
    console.log('open', open);
    if(!open) {
      const { apiDispatchAction } = props;
      console.log('open2', open);
      apiDispatchAction(new GetProduct());
    }
  }, [open]);

  return (
    <div>
      < div onClick={handleClickOpen}><DeleteOutlineOutlined  /></div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button value="yes" onClick={handleDeleteClick} color="primary">
            Yes
          </Button>
          <Button value="no" onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({
  apiDispatchAction:apiDispatchAction
}, dispatch);
export default connect(null,mapDispatchToProps) (AlertDialog);