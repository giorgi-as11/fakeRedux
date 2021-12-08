import MyPost from './myPost/MyPost'
import Post from './myPost/Post/Post'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo'


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost dispatch={props.dispatch} postValue={props.postValue} postData={props.postData} />
        </div>
    )
}
export default Profile