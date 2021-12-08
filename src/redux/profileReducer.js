let ADD_POST = 'ADD_POST'
let UPDATE_POST_VALUE = 'UPDATE_POST_VALUE'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.postValue,
                likeCount: 0
            }
            state.postData.push(newPost)
            state.postValue = ''
            return state
        case UPDATE_POST_VALUE:
            state.postValue = action.text
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updatePostValueActionCreator = (text) => ({
    type: UPDATE_POST_VALUE,
    text: text
})

export default profileReducer;