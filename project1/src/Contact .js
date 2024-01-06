import React, { useState } from 'react'

const Contact = ()=> {
  const [user,setUser]=useState("gopi")

  const handleChange=()=>{
    setUser("gpwtham")

  }
  return (
    <>
    {user}
    
    <div> <button type="submit" onClick={handleChange}>login</button> 
    <button type='submit'></button></div>
    </>
  )
}

export default Contact 