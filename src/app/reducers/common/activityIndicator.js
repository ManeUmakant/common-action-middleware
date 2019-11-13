import { ACTIVITY_INDICATOR } from '../../action/constants';

const initial_states = {
    loading:true
}

export default function activityReducer(state = initial_states, action) {
    switch(action.type) {
        case ACTIVITY_INDICATOR:
        return {
            ...state,
            loading:action.loading
        }
        default: return state; 
    }
}

