import axios from 'axios'
import { store } from './store'
import { redirectToPage, requestNewAccessToken } from './actions';

axios.interceptors.request.use((request) => {
    console.log(request.method, request.url)

    return request;
}, (error) => {
    store.dispatch( redirectToPage('/login') )
    return Promise.reject(error);
})

axios.interceptors.response.use((response) => {
    console.log(response.status)

    return response;
}, (error) => {
    console.log('Error Intercepted')
    // store.dispatch( redirectToPage('/login') )
    store.dispatch( requestNewAccessToken() )

    return Promise.reject(error);
})

