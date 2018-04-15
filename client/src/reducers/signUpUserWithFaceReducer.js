import { SIGN_UP_WITH_FACE, CAMERA_LOADER, CLEAR_USER_DATA } from '../actions/facial.actions';

function signUpWithFace(state = [], action) {

    switch (action.type) {
        case SIGN_UP_WITH_FACE:
            let finalData = {
                name: '',
                faceID: '',
                message: ''
            };

            if (action.payload.Errors) {
                finalData.message = 'error';
            } else if (action.payload.images['0'].transaction.status === 'success') {
                finalData.message = 'success';
            } else if (action.payload.images['0'].transaction.status === 'failure') {
                finalData.message = 'failure';
            }
            return finalData;
        case CLEAR_USER_DATA:
            return {};
        default:
            return state;
    }
}
export default signUpWithFace
