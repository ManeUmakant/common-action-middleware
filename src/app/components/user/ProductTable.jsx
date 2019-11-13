import React from 'react';
import Table from 'react-bootstrap/Table';
import CreateProduct from '../dailogBox/CreateProduct';
import Typography from '@material-ui/core/Typography';
//import DeleteOutlineOutlined  from '@material-ui/icons/DeleteOutlineOutlined';
import UpdateOutlined from '@material-ui/icons/UpdateOutlined'
import DeleteOutlineOutlined from '../common/DeleteOutlineOutlined';
import ConfirmBox from '../dailogBox/ConfirmBox';

const ProductTable = (props) => {

    const { products } = props;
    return(
        <>
            <CreateProduct />
            <Typography>Product list</Typography>
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product Title</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(row=>{
                            return <tr key={row._id}>
                                    <td>{row.title}</td>
                                    <td>{row.product_name}</td>
                                    <td>{row.quantity}</td>
                                    <td>
                                        <ConfirmBox id={row._id}/>
                                        {/* <UpdateOutlined /> */}
                                    </td>
                            </tr>
                        })
                    } 
                    </tbody>
                </Table>
            </>
    )
}

export default ProductTable;
