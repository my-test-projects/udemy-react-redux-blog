import * as types from '../consts/actionTypes';
import _ from 'lodash';

export default function(state = {}, action) {

    switch (action.type) {
        case types.FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
