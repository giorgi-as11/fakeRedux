import { dalApi } from '../dal/api'


let SET_AUTHED_USER_DATA = 'SET_AUTHED_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTHED_USER_DATA: {
            return {
                ...state,
                userId: action.id,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        }
        default: {
            return state;
        }
    }
}


export const setAuthUserData = (id, login, email) => {
    return {
        type: SET_AUTHED_USER_DATA,
        id,
        login,
        email
    }
}

export const getAuthThunk = () => (dispatch) => {
    dalApi.getHeaderUser()
        .then(data => {
            if (data.resultCode == 0) {
                let { id, login, email } = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}

export default authReducer;