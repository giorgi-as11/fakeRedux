import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg&ga=GA1.2.1937249185.1630886400' alt='logo' />
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header