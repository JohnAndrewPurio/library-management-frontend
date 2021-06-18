import { 
    CACHE_BOOK_TO_DELETE, STORE_ACCESS_TOKEN, STORE_BOOKS_LIST_DATA, PROMPT_ADD_BOOK, PROMPT_DELETE_BOOK, PROMPT_SIGN_UP, STORE_CATEGORIES_DATA,
    REDIRECT_TO_PAGE, STORE_ERROR, CLEAR_STORED_DATA 
} from "./action_types"

const initState = {
    booksList: null,
    bookToDelete: null,
    signUpDialog: false,

    deleteBook: false,
    addBook: false,
    tokens: null,
    errors: null,

    categoriesData: null,
    pageRedirect: null
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[STORE_BOOKS_LIST_DATA] = storeBooksListData
    selector[PROMPT_ADD_BOOK] = promptAddBook
    selector[PROMPT_DELETE_BOOK] = promptDeleteBook
    selector[CACHE_BOOK_TO_DELETE] = cacheBookToDelete
    selector[PROMPT_SIGN_UP] = promptSignUp
    selector[STORE_ACCESS_TOKEN] = storeAccessToken
    selector[STORE_CATEGORIES_DATA] = storeCategoriesData
    selector[REDIRECT_TO_PAGE] = redirectToPage
    selector[STORE_ERROR] = storeError
    selector[CLEAR_STORED_DATA] = clearStoredData

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function cacheBookToDelete(state, payload) {
    return {...state, bookToDelete: payload}
} 

function storeAccessToken(state, payload) {
    return {...state, tokens: payload}
}

function storeBooksListData(state, payload) {
    return {...state, booksList: payload}
}

function storeCategoriesData(state, payload) {
    return {...state, categoriesData: payload}
}

function storeError(state, payload) {
    return {...state, errors: payload}
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

function redirectToPage(state, payload) {
    return {...state, pageRedirect: payload}
}

function clearStoredData(state, payload) {
    return initState
}