import { CREATE_USER } from '../../constants';

export default class CreateProduct {

    constructor(data, method='POST', timeout=5000) {
        this.type = CREATE_USER;
        this.method = method;
        this.timeout = timeout;
        this.data = data;
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
    
    getBody() {
        return this.data;
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