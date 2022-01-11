import { dalApi } from '../dal/api'

let ADD_POST = 'ADD_POST'
let UPDATE_POST_VALUE = 'UPDATE_POST_VALUE'
let SET_PROFILE_PAGE = 'SET_PROFILE_PAGE'

let initialState = {
    postData: [
        {
            message: 'hey',
            likeCount: 11,
            id: 1
        },
        {
            message: 'Say my name',
            likeCount: 5,
            id: 2
        },
        {
            message: 'John',
            likeCount: 2,
            id: 3
        }

    ],
    postValue: 'itSamurai',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.postValue,
                likeCount: 0
            }
            return {
                ...state,
                postData: [newPost, ...state.postData],
                postValue: '',
            }
        }
        case UPDATE_POST_VALUE: {
            return {
                ...state,
                postValue: action.text
            }
        }
        case SET_PROFILE_PAGE: {
            return {
                ...state,
                profile: action.profilePage
            }
        }
        default: {
            return state
        }
    }

}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updatePostValueActionCreator = (text) => ({
    type: UPDATE_POST_VALUE,
    text: text
})
export const setProfilePage = (profilePage) => ({
    type: SET_PROFILE_PAGE,
    profilePage

})


export const profilePageThunk = (userId) => (dispatch) => {
    dalApi.getProfilePage(userId)
        .then(data => {
            dispatch(setProfilePage(data))
        })
}
export default profileReducer;