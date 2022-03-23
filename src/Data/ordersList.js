import React from 'react'
import { useContext, useReducer } from 'react'

const itemsListContext = React.createContext();
const addItemContext = React.createContext();
const deleteItemContext = React.createContext();
const increaseQuantityContext = React.createContext();
const decreaseQuantityContext = React.createContext();

const FuncStr = {
  Add: "ADDITEM",
  Delete: "DELETEITEM",
  Increase: "INCREASEITEM",
  Decrease: "DECREASEITEM"
}

export const OrderListPointer = () => useContext(itemsListContext)
export const AddOrderItemFunction = () => useContext(addItemContext)
export const DeleteOrderItemFunction = () => useContext(deleteItemContext)
export const DecreaseOrderItemQuantityFunction = () => useContext(decreaseQuantityContext)
export const IncreaseOrderItemQuantityFunction = () => useContext(increaseQuantityContext)


function InDec(item1, id, op){
  if (item1.id == id){
    switch (op){
      case 1:
        return {"id": item1.id, "qty":item1.qty+1, "item":item1.item}
      case 0:
        return {"id": item1.id, "qty":item1.qty-1, "item":item1.item}
    }
  }
  else
    return {"id": item1.id, "qty":item1.qty, "item":item1.item}
}


function reducer(items, action){

    switch (action.type){
        case FuncStr["Add"]:{
            const ind = items.findIndex(x => x.id == action.value.id)
            if (ind == -1){
                console.log("hgjhjj")
                items[items.length] = action.value
//                items[items.length-1].qty = 1
                // console.log(items = items.map((item)=>Copy(item, -1)))
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

        case FuncStr["Increase"]:{
          const ind = items.findIndex(x => x.id == action.value.id)
          if (ind != -1){
            items = items.map((item)=>InDec(item, action.value.id, 1))
          }
          return items
        }

        case FuncStr["Decrease"]:{
          const ind = items.findIndex(x => x.id == action.value.id)
          if (ind != -1){
            if (items[ind].qty > 1)
              return items.map((item)=>InDec(item, action.value.id, 0))
            else
              items.splice(ind, 1)
          }
          return [...items]
        }

        default:
          return [...items]
            
    }
}


export default function OrderItemsList({ children }) {
  const [items, dispatch] = useReducer(reducer, [])

  const addItem = async (item) => {
    await dispatch({type: FuncStr["Add"], value: {"id":item.id, "qty": 1, "item": item}})
    console.log("done Adding", items)
  }

  const deleteItem = (id) => {
    dispatch({type: FuncStr["Delete"], value: { "id": id}})
  }

  const increaseItem = (id) => {
    dispatch({type: FuncStr["Increase"], value: { "id": id}})
  }

  const decreaseItem = (id) => {
    dispatch({type: FuncStr["Decrease"], value: { "id": id}})
  }

  return (
    <itemsListContext.Provider value={items}>
      <addItemContext.Provider value={addItem}>
        <deleteItemContext.Provider value={deleteItem}>
          <increaseQuantityContext.Provider value={increaseItem}>
            <decreaseQuantityContext.Provider value={decreaseItem}>
              { children }
            </decreaseQuantityContext.Provider>
          </increaseQuantityContext.Provider>
        </deleteItemContext.Provider>
      </addItemContext.Provider>
    </itemsListContext.Provider>
  )
}
