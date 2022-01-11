import Preloader from '../assets/preloader'
import MyPost from './myPost/MyPost'
import MyPostContainer from './myPost/MyPostContainer'
import Post from './myPost/Post/Post'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo'


const Profile = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div>
            <ProfileInfo {...props} />
            <MyPostContainer />
        </div>
    )
}
export default Profile