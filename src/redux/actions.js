import {
    CACHE_BOOK_TO_DELETE, PROMPT_ADD_BOOK, PROMPT_DELETE_BOOK, PROMPT_SIGN_UP, STORE_BOOKS_LIST_DATA, STORE_ACCESS_TOKEN, STORE_CATEGORIES_DATA,
    REDIRECT_TO_PAGE, STORE_ERROR, CLEAR_STORED_DATA
} from "./action_types"
import './axiosIntercept'
import axios from 'axios'
import { booksEndPoint, tokenEndPoint } from "../config"

export const cacheBookToDelete = (payload) => ({
    type: CACHE_BOOK_TO_DELETE,
    payload: payload
})

export const clearStoredData = (payload) => ({
    type: CLEAR_STORED_DATA,
    payload: payload
})

export const storeBooksListData = (payload) => ({
    type: STORE_BOOKS_LIST_DATA,
    payload: payload
})

export const promptAddBook = (payload) => ({
    type: PROMPT_ADD_BOOK,
    payload: payload
})

export const promptDeleteBook = (payload) => ({
    type: PROMPT_DELETE_BOOK,
    payload: payload
})

export const promptSignUp = (payload) => ({
    type: PROMPT_SIGN_UP,
    payload: payload
})

export const storeCategoriesData = (payload) => ({
    type: STORE_CATEGORIES_DATA,
    payload: payload
})

export const storeAccessToken = (payload) => ({
    type: STORE_ACCESS_TOKEN,
    payload: payload
})

export const storeError = (payload) => ({
    type: STORE_ERROR,
    payload: payload
})

export const redirectToPage = (payload) => ({
    type: REDIRECT_TO_PAGE,
    payload: payload
})

export const requestBooksListData = (source) => {
    return async (dispatch, getState) => {
        const { tokens } = getState()

        const headers = {
            'Authorization': `Bearer ${tokens.access_token}`
        }

        const request = {
            method: 'GET',
            url: source,
            headers: headers
        }

        try {
            const result = await axios(request)

            dispatch(storeBooksListData(result.data))
        } catch (e) {
            dispatch( requestBooksListData(booksEndPoint) )
        }
    }
}

export const requestCategoriesListData = (source) => {
    return async (dispatch, getState) => {
        try {
            const fetchedData = await fetch(source)
            const jsonData = await fetchedData.json()

            dispatch(storeCategoriesData(jsonData))
        } catch (e) {
            console.log(e)
        }
    }
}

export const requestDeleteBook = (source, bookID) => {
    return async (dispatch, getState) => {
        try {
            await fetch(source + bookID, { method: 'DELETE' })
        } catch (e) {
            console.log(e)
        }
    }
}

export const signUpUser = (source, data) => {
    return async (dispatch, getState) => {
        const request = {
            method: 'POST',
            body: data
        }

        try {
            const postData = await fetch(source, request)
            const jsonResult = await postData.json()

            console.log(jsonResult)
        } catch (e) {
            console.log(e)
        }
    }
}

export const logInUser = (source, data) => {
    return async (dispatch, getState) => {
        const request = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(data)
        }

        try {
            const postData = await fetch(source, request)
            const results = await postData.json()

            if(results.error) {
                if( JSON.stringify(results.error) === '{}' )
                    results.error = 'Invalid email or password'

                dispatch( storeError(results.error) )

                return
            }

            dispatch(storeAccessToken(results))
        } catch (e) {
            console.log(e)
        }
    }
}

export const requestNewAccessToken = (source = tokenEndPoint) => {
    return async (dispatch, getState) => {
        const { tokens } = getState()

        const headers = {
            'Authorization': `Bearer ${tokens.refresh_token}`
        }

        const request = {
            method: 'GET',
            url: source,
            headers: headers
        }

        try {
            const fetchedData = await axios(request)
            const refreshedAccessToken = fetchedData.data

            refreshedAccessToken.refresh_token = tokens.refresh_token
            refreshedAccessToken.refresh_token_expiry = tokens.refresh_token_expiry
            
            dispatch(storeAccessToken(refreshedAccessToken))
        } catch(e) {
            console.log(e)
        }
    }
}