import React from 'react'
import { ItemsListPointer } from '../Data/itemsList'

export default function DropDown() {
    const items = ItemsListPointer()

    const listItemsDesign = (item) => {
        return (
            <li key={item.id}>
                <a className='dropdown-item d-inline'>{item.name}</a>
                <button type="button" className="btn btn-primary d-inline btn-sm content-right">Add</button>
                <div className="dropdown-divider"></div>
            </li>
        )
    }
  return (
      items.length>0?
        <div className="dropdown col-md-4 order-md-first">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select Items
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {items.length>0?
                items.map(listItemsDesign):
                <li>**Nothing is available Yet**</li>}
            </ul>
        </div>
    :<></>
  )
}
