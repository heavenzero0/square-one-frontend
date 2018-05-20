import {RESUME_LOAD} from "../actions/actionTypes";

export default function (state = null, action) {
    switch (action.type) {
        case RESUME_LOAD: return action.payload;
        default:
            return state;
    }
}