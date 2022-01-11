
let ADD_MESSAGE = 'ADD_MESSAGE'
let UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

let initialState = {
    dialogData: [
        {
            name: 'giorgi',
            path: 1
        },
        {
            name: 'temo',
            path: 2
        },
        {
            name: 'ale',
            path: 3
        },
        {
            name: 'vaxo',
            path: 4
        }

    ],
    messageData: [
        {
            message: 'hey'
        },
        {
            message: 'Say my name'
        },
        {
            message: 'heizenber'
        }

    ],
    messageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                message: state.messageText
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                messageText: ''
            }
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                messageText: action.text
            }
        }
        default: {
            return state;
        }
    }
}


export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateMessageTextActionCreator = (value) => ({
    type: UPDATE_MESSAGE_TEXT,
    text: value
})

export default dialogsReducer;