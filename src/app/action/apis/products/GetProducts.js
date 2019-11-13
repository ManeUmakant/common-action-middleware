import { GET_PRODUCTS } from '../../constants';

export default class GetProduct {

    constructor(method='GET', timeout=5000) {
        this.type = GET_PRODUCTS;
        this.method = method;
        this.timeout = timeout;
        this.res = null;
    }

    getEndPoint() {
        return 'http://localhost:3000/product';
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