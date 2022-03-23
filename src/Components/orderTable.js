import React, {useEffect} from 'react'
import { OrderListPointer, DeleteOrderItemFunction, DecreaseOrderItemQuantityFunction, IncreaseOrderItemQuantityFunction } from '../Data/ordersList'
// import { OrderFinalList } from './ordersFinal'
import {ItemsListPointer} from '../Data/itemsList'
import {AiFillDelete, AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai'


export default function Orders() {

  const items = ItemsListPointer()

  let order2 = OrderListPointer()
  console.log("orders.js",order2)
  const deleteOrderItem = DeleteOrderItemFunction()
  const increaseQty = IncreaseOrderItemQuantityFunction()
  const decreaseQty = DecreaseOrderItemQuantityFunction()

  function tableRow(item, index){
    return (
        <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.item.name}</td>
            <td>{item.item.price}</td>
            <td><AiFillMinusSquare onClick={()=>decreaseQty(item.id)}/> {item.qty} <AiFillPlusSquare onClick={()=>increaseQty(item.id)}/></td>
            <td>{item.item.price*item.qty}</td>
            <td><AiFillDelete onClick={()=>deleteOrderItem(item.id)}/></td>
        </tr>
    )
  }

  return (
    order2.length > 0?
    <table className="table caption-top text-white">
        <caption>List of Orders</caption>
        <thead>
            <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {order2.map(tableRow)}
        </tbody>
    </table>:
    <></>
  )
}
