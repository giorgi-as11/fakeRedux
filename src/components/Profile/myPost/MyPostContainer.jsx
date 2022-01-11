import s from './MyPost.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updatePostValueActionCreator } from '../../../redux/profileReducer'
import MyPost from './MyPost'
import { connect } from 'react-redux'




// const MyPostContainer = (props) => {

//     let state = props.store.getState()

//     let handleNewPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }

//     let handleInputChange = (text) => {
//         props.store.dispatch(updatePostValueActionCreator(text))
//     }

//     return (
//         <MyPost
//             addPost={handleNewPost}
//             changePostValue={handleInputChange}
//             value={state.profilePage.postValue}
//             postData={state.profilePage.postData} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        value: state.profilePage.postValue,
        postData: state.profilePage.postData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            return dispatch(addPostActionCreator())
        },
        changePostValue: (text) => {
            return dispatch(updatePostValueActionCreator(text))
        }
    }
}

let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer