export const SIGN_UP_WITH_FACE = 'signUpWithFace';
export const FIND_USER_BY_FACE = 'findUserByFace';
export const SAVE_USER_FACE = 'saveUserFace';
export const RECOGNIZE_USER = 'recognizeUser';
export const CAMERA_LOADER = 'cameraLoader';
export const CLEAR_USER_DATA = 'clearUserData';




export function signUpWithFace(data) {

    return {
        type: SIGN_UP_WITH_FACE,
        payload: data
    };
}

// function to recognize user
export function findUserByFace(data) {

    return {
        type: FIND_USER_BY_FACE,
        payload: data
    };
}

export function saveUserFace(data) {

    return {
        type: SAVE_USER_FACE,
        payload: data
    };
}
export function recognizeUser(data) {

    return {
        type: RECOGNIZE_USER,
        payload: data
    };
}
export function cameraLoader(data) {

    return {
        type: CAMERA_LOADER,
        payload: data
    };
}
export function startPicture(data) {

    return {
        type: CAMERA_LOADER,
        payload: data
    };
}

// resetting the display messages
export function clearUserData() {

    return {
        type: CLEAR_USER_DATA,
        payload: {}
    };
}
