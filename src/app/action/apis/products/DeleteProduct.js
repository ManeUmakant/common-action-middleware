import { DELETE_PRODUCT } from '../../constants';

export default class DeleteProduct {

    constructor(id, method='DELETE', timeout=5000) {
        this.type = DELETE_PRODUCT;
        this.method = method;
        this.timeout = timeout;
        this.id = id
        this.res = null;
    }

    getEndPoint() {
        return `http://localhost:3000/product/${this.id}`;
    }

    getHeader(){
        return {
            headers:{ 
                'Content-Type': 'application/json'
            }
        }
    }
    
    getResponse() {
        return this.res;
    }

    parseResponse(res){
        if(res) {
            this.res = res;
            return true;
        } return false;
    }

}