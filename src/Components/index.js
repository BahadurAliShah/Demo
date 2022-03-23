import React from 'react'
import Input from './input';
import DropDown from './dropdown';
import InputListTable from './itemTableList/inputListTable';


export default function Components() {
  return (
    <>
       <div className='row'>
        <DropDown/>
        <Input/>
       </div>
       <InputListTable/>
    </>
  )
}
