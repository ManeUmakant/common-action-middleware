import axios from 'axios';
import { API_STATUS  } from '../constants';

export default function apiDispatchAction(apiRequest) {

    return dispatch => {
        if(apiRequest.method === 'POST') {
            dispatch(apiStatus(true, false, ''));
            axios.post(apiRequest.getEndPoint(), apiRequest.getBody(), apiRequest.getHeader())
            .then(response => {
                if(apiRequest.parseResponse(response.data)) {
                    setTimeout(()=>{
                        dispatch(apiStatus(false, false, 'api success'));
                        dispatch(apiSuccess(apiRequest));
                    },1000);
                }
                else dispatch(apiStatus(false, true, 'api request failed!'));
                
            });
        }
        else if(apiRequest.method === 'GET') {

            dispatch(apiStatus(true, false, ''));
            axios.get(apiRequest.getEndPoint())
            .then(response=>{
                if(apiRequest.parseResponse(response.data)) {
                    setTimeout(()=>{
                        dispatch(apiStatus(false, false, 'api success'));
                        dispatch(apiSuccess(apiRequest));
                    },1000);
                }else dispatch(apiStatus(false, true, 'api request failed!'));
            })
            .catch(error=>{
                console.log('error', error);
            });

        }
        else if(apiRequest.method === 'DELETE') {

            dispatch(apiStatus(true, false, ''));
            axios.delete(apiRequest.getEndPoint())
            .then(response=>{
                if(apiRequest.parseResponse(response.data)) {
                    setTimeout(()=>{
                        dispatch(apiStatus(false, false, 'api success'));
                        dispatch(apiSuccess(apiRequest));
                    },1000);
                }else dispatch(apiStatus(false, true, 'api request failed!'));
            })
            .catch(error=>{
                console.log('error', error);
            });

        }
    }
}

function apiStatus(progress, error, message) {
    return {
        type:API_STATUS,
        payload:{
            progress,
            error,
            message
        }
    }
}

function apiSuccess(apiConfig) {
    return {
        type:apiConfig.type,
        payload:apiConfig.getResponse()
    }
}