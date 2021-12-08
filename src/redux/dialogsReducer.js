
let ADD_MESSAGE = 'ADD_MESSAGE'
let UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const dilogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.messageText
            }
            state.messageText = ''
            state.messageData.push(newMessage)
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.text
            return state;

        default:
            return state;

    }
}


export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateMessageTextActionCreator = (value) => ({
    type: UPDATE_MESSAGE_TEXT,
    text: value
})

export default dilogsReducer;