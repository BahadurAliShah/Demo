import React, {useState} from 'react'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { UpdateItemFunction, DeleteItemFunction } from '../../Data/itemsList'


export default function Item(props) {
  const {itemPtr} = props
  const [inp, setInp] = useState(false)
  const editFunc = (e) => setInp(!inp)

  const updateItem = UpdateItemFunction()
  const deleteItemF = DeleteItemFunction()

  function savePrice(e){
    setInp(!inp)
    updateItem(itemPtr.id, e.target.value)
  }

  function deleteItem(){
    deleteItemF(itemPtr.id)
  }

  const price = inp?
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">New Price</span>
      <input type="number" className="form-control" aria-describedby="basic-addon1" onBlur={(e)=>savePrice(e)} onKeyUp={(e) => e.keyCode == 13?savePrice(e):0}/>
    </div>
    :<><p className='col-8 d-inline'>{itemPtr.price}</p> <p className='d-inline col-4'><AiFillEdit onClick={editFunc}/><AiFillDelete onClick={deleteItem}/></p></>


  return (
    <tr className='row'>
        <td className='col-5'>{itemPtr.name}</td>
        <td className='col-7 row'>{price} </td>
    </tr>
  )
}