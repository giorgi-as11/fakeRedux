import { NavLink } from 'react-router-dom'
import s from '../Dialogs.module.css'

let DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink
                className={data => data.isActive ? s.active : null + ' ' + s.dialogLink}
                to={`/dialogs/${props.path}`} >{props.name}

            </NavLink>
        </div>
    )
}

export default DialogItem