import { FIND_USER_BY_FACE, CAMERA_LOADER, CLEAR_USER_DATA } from '../actions/facial.actions';

var initialState = {
    fetching: false,
    datatype: 'none'
};

var status;
var returnObj = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FIND_USER_BY_FACE:
            if (action.payload.data) {
                status = false;
            }

            returnObj = {};

            returnObj.data = action.payload.data;
            returnObj.fetching = status;
            returnObj.datatype = 'detect';

            // return returnObj;
            // switch (action.type) {
            //     case SIGN_UP_WITH_FACE:
            //         if (action.payload.data) {
            //             status = false;
            //         }
            //
            //         returnObj = {};
            //
            //         returnObj.data = action.payload.data;
            //         returnObj.fetching = status;
            //         returnObj.datatype = 'detect';
            //
            //         return returnObj;
        case CAMERA_LOADER:
            return { ...state, fetching: true }
        case CLEAR_USER_DATA:
            return action.payload;
        default:
            return state;
    }
}
