import {
    FETCH_URL_RESULT,
    FETCH_URL_ERROR,
} from '../actions/remote';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_URL_RESULT:
            return {
                ...state,
                text: action.text
            };
        case FETCH_URL_ERROR:
            return {
                ...state,
                text: 'Unknown error',
            };
        default:
            console.log('unexpected action', action);
        return state;
    }
};

export default reducer;
