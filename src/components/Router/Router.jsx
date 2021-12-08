import Dialogs from '../Dialogs/Dialogs'
import Profile from '../Profile/Profile'

import { Route, Routes } from 'react-router-dom'
import News from '../News/News'
import Music from '../Music/Music'
import Settings from '../Settings/Settings'
let Router = (props) => {
    return (
        <Routes>

            <Route path='/Dialogs/*' element={<Dialogs
                dispatch={props.dispatch}
                value={props.state.dialogsPage.messageText}
                dialogData={props.state.dialogsPage.dialogData}
                messageData={props.state.dialogsPage.messageData}
            />} />
            <Route path='/Profile' element={<Profile dispatch={props.dispatch}
                postData={props.state.profilePage.postData}
                postValue={props.state.profilePage.postValue}

            />} />
            <Route path='/News' element={<News />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
            {/* <Route path='*' element={<Profile postData={props.state.profilePage.postData} />} /> */}
        </Routes>

    )
}

export default Router