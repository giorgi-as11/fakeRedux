
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer'

import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import withAuthRedirect from '../hoc/withRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messageData: state.dialogsPage.messageData,
        value: state.dialogsPage.messageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        messageChange: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }

    }
}




let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


export default DialogsContainer