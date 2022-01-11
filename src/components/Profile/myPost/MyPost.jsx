import s from './MyPost.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updatePostValueActionCreator } from '../../../redux/profileReducer'




const MyPost = (props) => {

    let handleNewPost = () => {
        props.addPost()
    }

    let handleInputChange = (e) => {
        props.changePostValue(e.target.value)
    }

    let postItems = props.postData.map((element) => {
        return <Post message={element.message} likeCount={element.likeCount} />
    })
    return (
        <div className={s.myPost}>
            <h2>My post</h2>
            <input
                className={s.myPost_input}
                onChange={handleInputChange}
                value={props.value}
                type='text' />
            <input className={s.myPost_button}
                onClick={handleNewPost}
                type='submit' />
            {postItems}
        </div>
    )
}
export default MyPost