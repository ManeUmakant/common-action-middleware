import {  API_STATUS } from '../../action/constants';
const initial_state = {
    progress:false,
    error:false,
    message:''
}
export default function apiStatus(state = initial_state, action) {
    switch(action.type) {
        case API_STATUS:
        const { payload } = action;
        return {
            ...state,
            progress:payload.progress,
            error:payload.error,
            message:payload.message
        }
        default: return state;
    }
}