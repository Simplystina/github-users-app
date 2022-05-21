import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { useAuth0 } from "@auth0/auth0-react";
import { getUser, getFollowers, getInfo, getLanguages} from '../../Services/services';
import { Followers, LanguageGraph, User, UserStats, PopularGraph, Stats } from '../../components';
import ForkedGraph from '../../components/ForkedGraph/ForkedGraph';
import loadingImage from '../../images/preloader.gif'

const Dashboard = () => {
    const { logout } = useAuth0();
    const [statInfo, setStatInfo] = useState()
    const [searchWord, setSearchWord] = useState("john")
    const [followers, setFollowers] = useState()
    const [reposList, setReposList] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState('')
    const { user, isAuthenticated, isLoading } = useAuth0();
     

    const searchword = (e)=>{
        //console.log(e.target.value)
        setValue(e.target.value)
        setSearchWord(e.target.value)
        console.log(value)
    }
    

    useEffect(()=>{
       const data = getUser(searchWord)
       const followers = getFollowers(searchWord)
       const info = getInfo(searchWord)
       

       data.then(function(resp){
           setStatInfo(resp?.data)
          //console.log(resp,"dattttttaaa")
       }) 
       followers.then(function(response){
           setFollowers(response?.data)
           //console.log(response, "responseeee")
       })
      
       info.then(function(response){
           setReposList(response?.data)
           //console.log(response,'responseeeeeeeeeeeee')
     })

    },[])
    
    const displaySearch = async ()=>{
        setLoading(true)
        const data = await getUser(searchWord)
        

        if(data){
            setStatInfo(data?.data)
            const followers = await getFollowers(searchWord)
            setFollowers(followers?.data)

            const info = await getInfo(searchWord)
           setReposList(info?.data)
           setLoading(false)
           setValue('')

        }else{
            setError('There is no user with this username')
            setLoading(false)

        }

        
    }
    
    useEffect(
        () => {
          let timer1 = setTimeout(() =>  setError(''), 2000);
          return () => {
            clearTimeout(timer1);
          };
          
        },
        [error]);

    if (isLoading || loading) {
    return <div>
        <nav>
          <div className='navbar-info'>
            <img className='user-image' src={user?.picture}/>
            <h3> Welcome back, {user?.name}</h3>
            <button className='btn' onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
          </div>
        </nav>
        <h3 className='warning-text'>{error}</h3>
        <div className='search-field' >
            <div className='search-container'>
              <input  value={value} type='text' id='search' onChange={searchword} className='search-input' placeholder='Enter Github User details'/>
              <button onClick={displaySearch} className='btn'>search</button>
            </div>
            <h3>Requests: 58/60 </h3>
        </div>
           <div><img src={loadingImage} alt='loading-image' className='loading-image' /></div>
                
    </div>;
    }
   return (
   <>
    {statInfo &&
    <div className='dashboard-container'>
        <nav>
          <div className='navbar-info'>
            <img className='user-image' src={user?.picture}/>
            <h3> Welcome back, {user?.name}</h3>
            <button className='btn' onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
          </div>
        </nav>
        <h3 className='warning-text'>{error}</h3>
        <div className='search-field' >
            <div className='search-container'>
              <input value={value} type='text' id='search' onChange={searchword} className='search-input' placeholder='Enter Github User details'/>
              <button onClick={displaySearch} className='btn'>search</button>
            </div>
            <h3>Requests: 58/60 </h3>
        </div>
     <UserStats data={statInfo}/>
        <div className='content'>
            <User data={statInfo}/>
            <Followers data={followers}/>
        </div>
        <div className='content2'>
            <LanguageGraph data={reposList}/>
            <PopularGraph data={reposList}/>
        </div>
        <div className='content2'>
            <ForkedGraph data={reposList}/>
        </div>
    </div>}
   </>
  )
}

export default Dashboard
