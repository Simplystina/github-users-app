import React from 'react'
import image from '../../images/watch_3.webp'
import './Followers.css'

const Followers = ({data}) => {


    
  return (
    <div className='followers-list-container'>
       <div className='followers-title'><p>followers</p></div>
       <div className='followers-list'>
          {data?.map((item, id)=>{
              //console.log(item,'itemmmmmmmmmmmmm')
              const {avatar_url, html_url,login} = item
              return (
                <div className='followers-heading' key={id}>
                   <img src={avatar_url} alt='name' className='followers-img'/>
                   <span className='followers-heading-text'>
                       <h3>{login}</h3>
                       <a href={html_url}>{html_url}</a>
                    </span>
             </div>
              )
          })
        }
       </div>
    </div>
  )
}

export default Followers
