import React from 'react'
import {BsPersonBadge} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import logo from '../../images/login-img.svg'
import './User.css'

const User = ({data}) => {
    
    const {avatar_url,login,twitter_username,location, name, email,html_url, bio} = data


  return (
    <div className='users-container'>
       <div className='user-title'>
          <p>User</p>
        </div>
        <div className='user-content'>
          <div className='user-heading'>
                <div className="user-heading-content">
                   <img src={avatar_url} alt='user'/>
                    <div className='user-heading-text'>
                       <h3 className='user-heading-name'>{name || 'no name'}</h3>
                       <p>@{twitter_username}</p>
                    </div>
                </div>
              <a href={html_url}><button className='user-btn'>follow</button></a>
          </div>
          <h3 className='user-bio'>{bio}</h3>
          <span><BsPersonBadge className='user-icon'/> <p>{login}</p></span>
          <span><MdLocationOn className='user-icon'/> <p>{location}</p></span>
          <span><AiOutlineLink className='user-icon'/> <p className='web-link'>{email || 'www.noemail@gmail.com'}</p></span>
       </div>
    </div>
  )
}

export default User
