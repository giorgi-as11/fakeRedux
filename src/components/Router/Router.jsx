import Dialogs from '../Dialogs/Dialogs'
import Profile from '../Profile/Profile'

import { Route, Routes } from 'react-router-dom'
import News from '../News/News'
import Music from '../Music/Music'
import Settings from '../Settings/Settings'
import DialogsContainer from '../Dialogs/DialogsContainer'
import UsersContainer from '../Users/UsersContainer'
import ProfileMatch from '../Profile/ProfileContainer'
import Login from '../login/login'

let Router = (props) => {
    return (
        <Routes>

            <Route
                path='/Dialogs/*'
                element={<DialogsContainer />} />
            <Route
                path='/Profile/*'
                element={<ProfileMatch />} />
            <Route
                path='/Users'
                element={<UsersContainer />} />

            <Route
                path='/News'
                element={<News />} />
            <Route
                path='/Music'
                element={<Music />} />
            <Route
                path='/Settings'
                element={<Settings />} />
            <Route
                path='/Login'
                element={<Login />} />

        </Routes>

    )
}

export default Router