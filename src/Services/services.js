import { Octokit } from "@octokit/core";
const token = process.env.REACT_APP_YOUR_TOKEN 
console.log(token, "token")
export const  getUser = async (username) => {
    try {
        const octokit = new Octokit({
            auth: token
          })
          
          const resp = await octokit.request(`GET /users/${username}`, {
            username: 'USERNAME'
          })

          console.log(resp, "resp")
          return resp
         
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

export const getFollowers = async (username)=>{
    const octokit = new Octokit({
        auth: token
      })
      
      
     const resp = await octokit.request(`GET /users/${username}/followers`, {
        username: 'USERNAME'
      })
      return resp
}


//https://api.github.com/users/john/subscriptions
export const getInfo = async (username)=>{
    const octokit = new Octokit({
        auth: token
      })
      
    const resp = await octokit.request(`GET /users/${username}/repos`, {
        username: 'USERNAME'
      })
      return resp
}

//https://api.github.com/repos/john/cyclone/languages

export const getLanguages = async (url)=>{
  const octokit = new Octokit({
      auth: token
    })
    //"https://api.github.com/repos/john/acts_as_commentable_with_threading/languages"
  const resp = await octokit.request(`GET ${url}`, {
      username: 'USERNAME'
    })

    //console.log(resp)
    return resp

   
}