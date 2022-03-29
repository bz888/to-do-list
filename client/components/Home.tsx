import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { formVals } from "./types";

function Home () {
  const [input, setInput ] = useState<formVals>({user:'', password:''})

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e: SyntheticEvent){
    e.preventDefault()
    console.log('hello')
    
  }


  return (
    <div>
      <h1>Welcome to your to do list</h1>
      <form>
        <label htmlFor="user">user: </label>
        <input type='text' value={input.user} name='user' onChange={handleChange}/>

        <label htmlFor="password">password: </label>
        <input type='password' value={input.password} name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Home