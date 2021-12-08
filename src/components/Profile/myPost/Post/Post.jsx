import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.Post}>
            <div className={s.yellowCircle}></div><p>{props.message}</p>
            <div>
                <div className={s.like}> Like </div>
                {props.likeCount} Likes

            </div>
        </div>
    )
}
export default Post