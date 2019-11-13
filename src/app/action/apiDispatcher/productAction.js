import { OPEN_PRODUCT_POPUP } from '../constants';

export function openProductPopUp(open) {
    return dispatch => {
        dispatch(getProdcutPopUpType(open));
    }
}

function getProdcutPopUpType(open) {
    return {
        type:OPEN_PRODUCT_POPUP,
        open
    }
}