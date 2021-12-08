import profileReducer from "./profileReducer"
import dialogsReducer from './dialogsReducer'
let store = {
    _state: {
        profilePage: {
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
                    message: 'heizenber',
                    likeCount: 2,
                    id: 3
                }

            ],
            postValue: 'itSamurai'
        },
        dialogsPage: {
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
    },

    getState() {
        return this._state
    },

    _renderTree() {
        console.log('alert')
    },
    subscribe(observer) {
        this._renderTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._renderTree()
    }

}



export default store