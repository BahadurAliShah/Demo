import React, {useState, useMemo, useEffect} from 'react'
import { OrderListPointer } from '../Data/ordersList'
import { ItemsListPointer } from '../Data/itemsList'

export default function Bill() {
  const orderList = OrderListPointer()
  const itemList = ItemsListPointer()


  const gettotal = ()=>{
    let temptotal = 0
    for (let x of orderList){
        console.log(x.total)
        temptotal += x.item.price*x.qty;
    }
    return temptotal
  }


  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(gettotal()-discount)


  const gtotal = useMemo(()=>gettotal(), [orderList, itemList])

  useEffect(()=>setTotal(gtotal-discount), [gtotal])

  console.log(gtotal-discount)
  return (
    <>
    <div className='text-white'>Bill</div>
    {orderList.length>0?<>
        <div className="input-group mb-1">
        <span className="input-group-text" id="basic-addon1">G. Total</span>
        <input type="number" className="form-control" aria-describedby="basic-addon1" value={gtotal} disabled={true}/>
        </div>

        <div className="input-group mb-1">
        <span className="input-group-text" id="basic-addon2">Discount</span>
        <input type="number" className="form-control" aria-describedby="basic-addon2" value={discount} onChange={(e)=>setDiscount(e.target.value)} onBlur={()=>setTotal(gtotal-discount)} />
        </div>

        { gtotal >= discount? 
        <div className="input-group mb-1">
        <span className="input-group-text" id="basic-addon3">Total</span>
        <input type="number" className="form-control" aria-describedby="basic-addon3" value={total} disabled={true}/>
        </div>
        :<p className='text-danger mb-1'>Invalid Discount Entered</p>
        }</>
        :<></>}
    </>
  )
}
