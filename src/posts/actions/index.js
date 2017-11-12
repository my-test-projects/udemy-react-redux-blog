import axios from 'axios';
import * as types from '../consts/actionTypes';
import { REST_API_URL, REST_API_KEY } from '../consts/apiURL';

export function fetchPosts() {
    const request = axios.get(`${REST_API_URL}/posts${REST_API_KEY}`)

    return {
        type: types.FETCH_POSTS,
        payload: request
    }
}
