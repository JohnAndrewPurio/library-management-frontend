import { CACHE_BOOK_TO_DELETE, STORE_BOOKS_LIST_DATA, PROMPT_ADD_BOOK, PROMPT_DELETE_BOOK, PROMPT_SIGN_UP } from "./action_types"

const initState = {
    booksList: [],
    bookToDelete: null,
    signUpDialog: false,

    deleteBook: false,
    addBook: false
}

export default function libraryReducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[STORE_BOOKS_LIST_DATA] = storeBooksListData
    selector[PROMPT_ADD_BOOK] = promptAddBook
    selector[PROMPT_DELETE_BOOK] = promptDeleteBook
    selector[CACHE_BOOK_TO_DELETE] = cacheBookToDelete
    selector[PROMPT_SIGN_UP] = promptSignUp

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function cacheBookToDelete(state, payload) {
    return {...state, bookToDelete: payload}
} 

function storeBooksListData(state, payload) {
    return {...state, booksList: payload}
}

function promptAddBook(state, payload) {
    return {...state, addBook: payload}
}

function promptDeleteBook(state, payload) {
    return {...state, deleteBook: payload}
}

function promptSignUp(state, payload) {
    return {...state, signUpDialog: payload}
}