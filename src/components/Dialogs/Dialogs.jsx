import { NavLink } from 'react-router-dom'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer'
import DialogItem from './dialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'


let Dialogs = (props) => {


    let dialogItems = props.dialogData.map((dialog) => {
        return <DialogItem name={dialog.name} path={dialog.path} />
    })

    let messageItems = props.messageData.map(el => {
        return <Message message={el.message} />
    })

    let handleSendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let handleMessageTextChange = (e) => {
        let text = e.target.value
        props.dispatch(updateMessageTextActionCreator(text))
    }

    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                <div>{messageItems}</div>
                <div> <input onChange={handleMessageTextChange} value={props.value} type='text' /> </div>
                <div><button onClick={handleSendMessage} >send Message</button></div>
            </div>
        </div >
    )
}
export default Dialogs