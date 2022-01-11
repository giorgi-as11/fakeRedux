
import Status from './myPost/Status'
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <>
            <div >
                <img className={s.content_img} src='https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg' />
            </div>
            <div className={s.container}>

                <div className={s.profile}>
                    <img className={s.profile_img} src={props.profile.photos.small ? props.profile.photos.small : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'} />

                </div>
                <div className={s.profile_info}>
                    <h2>{props.profile.fullName}</h2>
                    <h6>{props.profile.aboutMe}</h6>
                </div>
                <div >
                    <h4>My accounts</h4>
                    <a target='_blank' href={props.profile.contacts.facebook}>facebook</a><br />
                    <a target='_blank' href={props.profile.contacts.website}>website</a><br />
                    <a target='_blank' href={props.profile.contacts.vk}>vk</a><br />
                    <a target='_blank' href={props.profile.contacts.twitter}>twitter</a><br />
                    <a target='_blank' href={props.profile.contacts.instagram}>instagram</a><br />
                    <a target='_blank' href={props.profile.contacts.youtube}>youtube</a><br />
                    <a target='_blank' href={props.profile.contacts.github}>github</a><br />
                    <a target='_blank' href={props.profile.contacts.mainLink}>mainLink</a>
                </div>
            </div>
            {props.profile.lookingForAJob ?
                <div style={{ marginTop: '20px' }} className={s.container}>
                    <div style={{ textAlign: 'center' }} className={s.green}>open for work</div>
                    <div style={{ textAlign: 'center' }}>{props.profile.lookingForAJobDescription}</div>
                </div> : <div style={{ marginTop: '20px' }} className={s.container}>
                    <p style={{ textAlign: 'center' }} >im not looking for a job</p>
                </div>}
            <Status status={'React samurai'} />
        </>
    )
}
export default ProfileInfo