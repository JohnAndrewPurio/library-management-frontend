import axios from 'axios'
import { Dispatch } from "redux"
import { redirectToPage } from './actions';

axios.interceptors.request.use((request) => {
    console.log(request.method, request.url)

    return request;
}, (error) => {
    Dispatch( redirectToPage('/login') )
    return Promise.reject(error);
})

axios.interceptors.response.use((response) => {
    console.log(response.status)

    return response;
}, function (error) {
    Dispatch( redirectToPage('/login') )
    return Promise.reject(error);
})

