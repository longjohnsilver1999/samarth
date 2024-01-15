import React from "react";
import {useState,useEffect} from "react";
function Main() {
  const [items,setitems]=useState([])
  const [supplier,setsupplier]=useState([])
  const [quantity,setquantity]=useState(0)
const handleSubmit=async()=>{
const displaysub=await fetch('http://localhost:8000/item/add', {
  method: 'POST',
  body: JSON.stringify(itemObject),
  headers: {
      'Content-Type': 'application/json'
  }}
)
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
      <select onChange={}>
        <option value="0" selected>Select</option>
        <option value="">Dummy </option>
      </select>
    </div>
    <div>
      <h3>Add Quantity</h3>
  
    <input type="number" />
 
    </div>

    <div>
      <button type="submit" onClick={()=>handleSubmit()}>Add to Inventory</button>
    </div>
    </form>
      </div>
    );
  }
  
  export default Main;