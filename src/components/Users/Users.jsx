import React from "react";
import s from './users.module.css'
import Preloader from "../assets/preloader";
import { NavLink } from "react-router-dom";
import { dalApi } from "../../dal/api";
const Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsers / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <div className={s.main}>
            {props.isFetching ? <Preloader /> : null}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <h2 >USERS</h2></div>
            <div className={s.pageButtonsBlock}>
                {pages.map(pageCount => {
                    return <div className={s.pageButton}><span className={props.currentPage === pageCount ? s.active : ''} onClick={() => props.onPageChange(pageCount)}>{pageCount}</span></div>
                })}

            </div>


            {props.usersData.map(user => {
                return <div key={user.id} style={{ border: '3px solid yellowgreen', padding: '15px' }} className={s.flex} id={user.id}>

                    <div style={{ margin: '15px 15px 0' }} className={s.flexCollumn}>
                        <NavLink style={{ textDecoration: 'none' }} exact to={`../profile/${user.id}`} >

                            <img className={s.userImg}
                                src={user.photos.small ? user.photos.small
                                    : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}
                                alt='img' />
                        </NavLink>
                        {user.followed
                            ? <button style={{ marginTop: '15px' }}
                                disabled={props.followingInProcces.some(id => id === user.id)}
                                onClick={() => { props.unfollowThunk(user.id) }}
                            >UNFOLLOW</button>
                            : <button style={{ marginTop: '15px' }}
                                disabled={props.followingInProcces.some(id => id === user.id)}
                                onClick={() => { props.followThunk(user.id) }}
                            >FOLLOW</button>}

                    </div>

                    <div className={s.userInfo}>
                        <div className={s.flexCollumn}>
                            <h4>{user.name}</h4>
                            <h6>{user.status}</h6>

                        </div>
                        <div style={{ alignItems: 'space-between' }} className={s.flexCollumn}>
                            <span>user.location.city</span>
                            <span>user.location.country</span>
                        </div>
                    </div>
                </div>


            })}

        </div >
    )
}


export default Users