import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductTable from './ProductTable';
import GetProduct from '../../action/apis/products/GetProducts';
import apiDispatchAction from '../../action/apiDispatcher/apiDispatchAction';

const Products = (props) => {
    const { apiDispatchAction } = props;
    useEffect(()=>{
        apiDispatchAction(new GetProduct());
    },[apiDispatchAction]);
    return <ProductTable {...props} />
}
const mapStateToProps = state => {
    return {
        products:state.product.products
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({
    apiDispatchAction:apiDispatchAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
