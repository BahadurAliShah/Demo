import React from 'react'
import { useContext, useReducer } from 'react'

const itemsListContext = React.createContext();
const addItemContext = React.createContext();
const updateItemContext = React.createContext();
const deleteItemContext = React.createContext();

const FuncStr = {
  Add: "ADDITEM",
  Edit: "EDITITEM",
  Delete: "DELETEITEM"
}

export const ItemsListPointer = () => useContext(itemsListContext)
export const AddItemFunction = () => useContext(addItemContext)
export const UpdateItemFunction = () => useContext(updateItemContext)
export const DeleteItemFunction = () => useContext(deleteItemContext)


function reducer(items, action){

  console.log("Items",items, action)
    switch (action.type){
        case FuncStr["Add"]:
            if (items.findIndex(x => x.name === action.value.name) == -1 && action.value.name.length > 0)
                return [...items, action.value]
            else
                return items

        case FuncStr["Edit"]:{
          const ind = items.findIndex(x => x.id == action.value.id)
          if (ind != -1){
            items[ind].price = action.value.price
          }
          return [...items]
        }
        case FuncStr["Delete"]:{
          const ind = items.findIndex(x => x.id == action.value.id)
          if (ind != -1){
            items.splice(ind, 1)
          }
          return [...items]
        }
        default:
            return items
            
    }
}


export default function ItemsList({ children }) {
  const [items, dispatch] = useReducer(reducer, [])

  const addItem = (item) => {
    dispatch({type: FuncStr["Add"], value: {"name":item, "price": 0, "id":Date.now()}})
  }

  const updateItem = (id, price) => {
    dispatch({type: FuncStr["Edit"], value: { "id": id, "price": price}})
  }

  const deleteItem = (id) => {
    dispatch({type: FuncStr["Delete"], value: { "id": id}})
  }
  console.log(items)
  return (
    <itemsListContext.Provider value={items}>
      <addItemContext.Provider value={addItem}>
        <updateItemContext.Provider value={updateItem}>
          <deleteItemContext.Provider value={deleteItem}>
            { children }
          </deleteItemContext.Provider>
        </updateItemContext.Provider>
      </addItemContext.Provider>
    </itemsListContext.Provider>
  )
}
