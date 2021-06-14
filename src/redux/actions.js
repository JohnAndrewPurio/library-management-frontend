import { CACHE_BOOK_TO_DELETE, PROMPT_ADD_BOOK, PROMPT_DELETE_BOOK, PROMPT_SIGN_UP, STORE_BOOKS_LIST_DATA } from "./action_types"

export const cacheBookToDelete = (payload) => ({
    type: CACHE_BOOK_TO_DELETE,
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

export const requestBooksListData = (source) => {
    return async (dispatch, getState) => {
        try {
            const fetchedData = await fetch(source)
            const jsonData = await fetchedData.json()

            dispatch( storeBooksListData(jsonData) )
        } catch(e) {
            console.log(e)
        }
    }
}

export const requestDeleteBook = (source, bookID) => {
    return async (dispatch, getState) => {
        try {
            await fetch(source + bookID, { method: 'DELETE' })
        } catch(e) {
            console.log(e)
        }
    }
}