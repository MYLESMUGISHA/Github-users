import React, { useState } from 'react'
import { useEffect } from 'react';


const apiUrl = "https://api.github.com/users"

function Fetch() {   
 const[ user, setUser1] = useState([])

    useEffect(()=>{
    fetch(apiUrl).then((resp)=> resp.json()).then((data)=>{
    setUser1(data)
    console.log(data)
    }) 
    },[]);

return(
    <div>
      {user.map((person)=>{
          const {login,avatar_url, id,html_url}=person

      return( 
      <div key={id}>
       <p>{login}</p> 
        <img src={avatar_url} alt ={login}></img>
        <a href={html_url}>click me</a>
      
   </div>
      )
})}    
 </div>
)
}
export default Fetch;