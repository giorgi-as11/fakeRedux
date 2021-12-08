import s from './MyPost.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updatePostValueActionCreator } from '../../../redux/profileReducer'




const MyPost = (props) => {

    let inputRef = React.createRef()

    let handleNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let handleInputChange = () => {
        let text = inputRef.current.value
        props.dispatch(updatePostValueActionCreator(text))
    }

    let postItems = props.postData.map((element) => {
        return <Post message={element.message} likeCount={element.likeCount} />
    })
    return (
        <div className={s.myPost}>
            <h2>My post</h2>
            <input className={s.myPost_input} onChange={handleInputChange} value={props.postValue} placeholder='Your post place' ref={inputRef} type='text' />
            <input className={s.myPost_button} onClick={handleNewPost} type='submit' />
            {postItems}
        </div>
    )
}
export default MyPost