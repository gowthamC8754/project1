import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();


  const [user, setUser] = useState({
    username: "",
    password: "",
    gender: "",
    country: '',
    option1: false,
    option2: false,
  });

  const handleSubmit = (e) => {
    console.log("userdetails", user)

    e.preventDefault();
    if (user.username === "admin" && user.password === "1234") {
      // Successful login, you can redirect or update state here
      console.log("Login successful!");
      navigate('/dashboard')
    } else {
      // Failed login, display an error message
      alert("Login failed. Please check your credentials.");
    }
    // Add lon gic to handle login here
  };

  const handleChange =(e)=>{
   const {id,value}=e.target;
   setUser({
    ...user,
    [id]:value
   })
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
          // onChange={(e)=>setUser({...user,username:e.target.value})}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <br />
       <label>Gender:</label>
        <label htmlFor="male">
          <input
            type="radio"
            id="gender"
            name="gender"
            value="male"
            checked={user.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
         <label htmlFor="female">
          <input
            type="radio"
            id="gender"
            name="gender"
            value="female"
            checked={user.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
          <label htmlFor="country">Select Country:</label>
        <select
          id="country"
          name="country"
          value={user.country}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="USA"></option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        <label>
        <input
          type="checkbox"
          id="option1"
          name="option1"
          checked={user.option1}
          onChange={handleChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="checkbox"
          id="option2"
          checked={user.option2}
          onChange={handleChange}
        />
        Option 2
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
