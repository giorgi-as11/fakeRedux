import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img className={s.content_img} src='https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg' />
            </div>
            <div className={s.profile}>
                <img className={s.profile_img} src='https://static8.depositphotos.com/1311503/875/i/600/depositphotos_8758702-stock-photo-insant-camera-kid.jpg' />
                <div className={s.profile_info}>
                    <h5>Dmitry K.</h5>
                    <p>Date <br />
                        City  <br />
                        Education <br />
                        Web Site
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo