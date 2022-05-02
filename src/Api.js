import React, { useState } from 'react'
import Axios from 'axios';
import { useEffect } from 'react';

const url = "https://api.github.com/users";

function Api() {
    const [user,setUser]= useState([]);
   
    const [loading, setLoading] = useState(true)
    
    
    useEffect(()=> {
        Axios.get(url).then((resp)=>{

            // getting data
            setUser(resp.data)
            //removing the loading text
            setLoading(false)

        }

        ) 
    
    },[]);
  console.log(user)
  if (loading){

    return(

        <div>
            <h1> Loading .....</h1>
        </div>
    )
  }


  return(

    
      <div className='container' >
        <div>
          <h1>Github Users</h1>

        </div>


    <div className='user-container'> 
        {user.map((person)=>{
            const {login,avatar_url, html_url}= person

        return( 
        
        <div className='user-card'>
          <img src={avatar_url} alt ={login}></img>
         <p>{login}</p> 
         <a href={html_url}>Visit Github</a>
     </div>
        )
})}    

    </div>
   </div>
  )
    }
export default Api;
