import React from 'react'
import { useState } from "react";
import { AddItemFunction } from '../Data/itemsList';
import { ItemsListPointer } from '../Data/itemsList';

export default function Input() {
    const [name, setName] = useState("")
    const addItem = AddItemFunction()
  
    function handleSubmit(e){
      e.preventDefault()
      addItem(name)
      console.log(name)
      setName('')
    }
  
    const items = ItemsListPointer()
  
    return (
      <>
        <div className= {items.length>0?'col-md-8 order-first':'col-12'}>
          <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Fruit Name" value={name} onChange={(e) => setName(e.target.value)} onKeyUp={(e) => e.keyCode == 13?handleSubmit(e):0}/>
              <button className="btn btn-outline-secondary bg-primary text-white" type="submit" onClick={(e) => handleSubmit(e)}>ADD</button>
          </div>
        </div>
      </>
    )
  }
  