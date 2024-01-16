import React from "react";
import {useState,useEffect} from "react";
import DisplayTable from './DisplayTable'
function Main() {
  const [items,setitems]=useState([])
  const [supplier,setsupplier]=useState([])
  const [quantity,setquantity]=useState(0)
  const [finalitens,setfinalitems]=useState([])
const handleSubmit=async()=>{
  const itemObject={
    itemname, price, supplier_info, mfgDate
  }
const displaysub=await fetch('http://localhost:8000/item/add', {
  method: 'POST',
  body: JSON.stringify(itemObject),
  headers: {
      'Content-Type': 'application/json'
  }}
)
const ds=await displaysub.json()
}

const fetchAllinventoryItems=async()=>{
  const displaysub=await fetch('http://localhost:8000/item/getallitems', {
    method: 'GET',

    headers: {
        'Content-Type': 'application/json'
    }}
  )
  const finaldisplaysub=await displaysub.json()
  setfinalitems(finaldisplaysub)

}

    return (
      <div >
    <form action="">
    <h1>Inventory</h1>
    <div>
      <h3>Select SUPPLIER</h3>
      <select onChange={(e)=>handleSupplier(e)}>
        <option value="0" selected>Select</option>
        {supplier.map(i=>
        <option value={i.id}>{i.name} </option>
        )}
        </select>
    </div>
    <div>
      <h3>Select Item</h3>
      <select onChange={(e)=>handleItem(e)}>
        <option value="0" selected>Select</option>
        {items.map(i=>
        <option value={i.id}>{i.itemname} </option>
        )}
      </select>
    </div>
    <div>
      <h3>Add Quantity</h3>
  
    <input type="number" onChange={(e)=>setquantity(e.target.value)} value={quantity} />
 
    </div>

    <div>
      <button type="submit" onClick={()=>handleSubmit()}>Add to Inventory</button>
    </div>
    </form>

    <div>
      <DisplayTable Inventorytable={finalitens}/>
    </div>
      </div>
    );
  }
  
  export default Main;