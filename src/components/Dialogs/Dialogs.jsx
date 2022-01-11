import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router'

let Dialogs = (props) => {

    let handleSendMessage = () => {
        props.sendMessage()
    }

    let handleMessageTextChange = (e) => {
        let text = e.target.value
        props.messageChange(text)
    }
    let dialogItems = props.dialogData.map((dialog) => {
        return <DialogItem name={dialog.name} path={dialog.path} />
    })

    let messageItems = props.messageData.map(el => {
        return <Message message={el.message} />
    })

    if (!props.isAuth) return <Navigate to={'/login'} />

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