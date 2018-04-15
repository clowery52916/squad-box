import { SAVE_USER_FACE } from '../actions/facial.actions';

function saveUserFace(state = [], action) {
      let initialState = {};

    console.log(action.payload);
    switch (action.type) {
        case SAVE_USER_FACE:
            let faces = [];
            // check for errors happening during fetching phase
            if (action.payload.data.Errors) {
                faces = [];
            } else {
                faces = action.payload.data.subject_ids;
            }
            return { ...state, gallery: faces };
        default:
            return state;
    }
}

export default saveUserFace
