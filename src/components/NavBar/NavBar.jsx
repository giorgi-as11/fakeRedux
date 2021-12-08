import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={(data => data.isActive ? s.active : null)} to='/Profile'>profile</NavLink>
            <NavLink className={(data => data.isActive ? s.active : null)} to='/Dialogs'>messages</NavLink>
            <NavLink className={(data => data.isActive ? s.active : null)} to='/News'>News</NavLink>
            <NavLink className={(data => data.isActive ? s.active : null)} to='/Music'>Music</NavLink>
            <NavLink className={(data => data.isActive ? s.active : null)} to='/Settings'>Settings</NavLink>
        </nav>
    )
}
export default NavBar