import React, {useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';
import FloatingActionButtons from '../common/FloatingActionButtons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActivityIndicator from '../common/ActivityInicator';
import CreateProduct from '../../action/apis/products/CreateProduct';
import apiDispatchAction from '../../action/apiDispatcher/apiDispatchAction';
import GetProducts from '../../action/apis/products/GetProducts';
import { openProductPopUp } from '../../action/apiDispatcher/productAction';

/**
 * Author:Umakant Mane
 *  */ 


const CustomizedDialogs = (props) => {

    const [close, setClose ] = useState(false);
    const { open } = props;
    const [productTitle, setProductTitle] = useState('');
    const [productName, setProductName] = useState('');
    const [productQuentity, setProdutQuentity] = useState('');

    const handleProductTitleChange = (e) => setProductTitle(e.target.value);
    const handleProductNameChange = (e) => setProductName(e.target.value);
    const handleProductQuentityChange = (e) => setProdutQuentity(e.target.value);
    
    const handleSubmit = () => {
        const { apiDispatchAction} = props;
        if(productTitle !=='' && productName !== '' && productQuentity !== '') {
          let data = {
            title:productTitle,
            product_name:productName,
            quantity:productQuentity
          };
          let createProduct = new CreateProduct(data);
          apiDispatchAction(createProduct);
        }       
    }

    const { openProductPopUp } = props; 
    const handleClickOpen = () => {
      setClose(false);
      openProductPopUp(true);
    };
    const handleClose = () => {
      setClose(true);
      openProductPopUp(false);
    };
    useEffect(()=>{
      if(!open && !close) {
        props.apiDispatchAction(new GetProducts());
      }
    },[open]);
    
  return (
    <>
      
      <FloatingActionButtons handleClick={handleClickOpen} />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <ActivityIndicator />
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Create product
        </DialogTitle>
        <DialogContent dividers>
        <ActivityIndicator />
        <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" onChange={handleProductTitleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={handleProductNameChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Quntity</Form.Label>
                <Form.Control type="text" placeholder="Enter Title"  onChange={handleProductQuentityChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} >
                CREATE
            </Button>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = state => {
  return {
      open:state.product.open,
      apiProgress:state.apiStatus.progress
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  apiDispatchAction:apiDispatchAction,
  openProductPopUp:openProductPopUp
},  dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (CustomizedDialogs);