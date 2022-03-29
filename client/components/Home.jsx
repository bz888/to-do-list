import React, {useState} from "react";

function Home(){
    const [input, setInput] = useState({user: "" , password: ""})

    const [testingValue, setVal] = useState("")
  
     function handleChange(event) {
       const id = event.target.id
       const value = event.target.value
       console.log(input);
      setInput({
        ...input,
        [id]: value
      })
     }
  
     function handleLogin(event){
      event.preventDefault()
      setVal("Login")
      
     }
  
     function handleSignUp(event){
      event.preventDefault()
      setVal("SignUp")
     }
  
    return (
     
    <>
      <h2>{testingValue}</h2>
      <h1>Welcome to your To-Do-List!</h1>
      <form>
       <label htmlFor='user'>User </label>
       <input onChange={handleChange} type="text" id="user" value={input.user}/>
       <label htmlFor='password'>Password </label>
       <input onChange={handleChange} type="password" id="password" value={input.password}/>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleSignUp}>SignUp</button>
      </form>
    </>
      
    )
}

export default Home