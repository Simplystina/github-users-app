import React from 'react'
import {GoRepo,GoGist} from 'react-icons/go'
import {HiOutlineUsers} from 'react-icons/hi'
import {RiUserSharedLine} from 'react-icons/ri'
import './UserStats.css'

const UserStats = ({data}) => {

   //console.log(data,"data beforeee")
   const {public_repos, followers, following, public_gists} = data
  return (
    <div className='users-stat-container'>
       <div className='users-stats-inner-container'>
           <span className='users-stats-icon repo'><GoRepo className='stats-icon'/></span>
           <div className='users-stat-count'><span>{public_repos}</span><br/><p>Repos</p></div>
       </div>
       <div className='users-stats-inner-container'>
           <span className='users-stats-icon followers'><HiOutlineUsers className='stats-icon'/></span>
           <div className='users-stat-count'><span>{followers}</span><br/><p>followers</p></div>
       </div>
       <div className='users-stats-inner-container'>
           <span className='users-stats-icon following'><RiUserSharedLine className='stats-icon'/></span>
           <div className='users-stat-count'><span>{following}</span><br/><p>following</p></div>
       </div>
       <div className='users-stats-inner-container'>
           <span className='users-stats-icon gist'><GoGist className='stats-icon'/></span>
           <div className='users-stat-count'><span>{public_gists}</span><br/><p>Gist</p></div>
       </div>
    </div>
  )
}

export default UserStats
