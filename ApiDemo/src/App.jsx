
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [userData,setUserData]=useState([])

  useEffect(()=>{
   getUserData();

  },[])

  const getUserData = async ()=>{
    const url ="https://dummyjson.com/users"
    let response = await fetch(url)
    response = await response.json()
    // console.log(response);
setUserData(response.users);
  }
  
  console.log(userData)

  return (
  
    <div><h1>Fecth Data from Api</h1>
    {
       userData && userData.map((user)=>(
        <ul className="user-list">
          <li key={user.id}>{user.firstName}</li>
          <li >{user.lastName}</li>
          <li >{user.age}</li>
         
        </ul>
       ))
      }
 
    </div>
   
  )
}

export default App

/*
Api notes from chatgpt

*/