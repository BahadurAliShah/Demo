import React from 'react'
import { useState } from "react";

export default function Input() {
    const [name, setName] = useState("")
  
    function handleSubmit(e){
      e.preventDefault()
      console.log(name)
      setName('')
    }
  
  
    return (
      <>
        <div className='row'>
          <div className='offset-md-4 col-md-8'>
          <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Fruit Name" value={name} onChange={(e) => setName(e.target.value)}/>
              <button className="btn btn-outline-secondary bg-primary text-white" type="submit" onClick={handleSubmit}>ADD</button>
          </div>
          </div>
        </div>
      </>
    )
  }
  