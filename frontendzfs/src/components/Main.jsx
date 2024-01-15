import React from "react";
import {useState,useEffect} from "react";
function Main() {
  const [items,setitems]=useState([])
  const [supplier,setsupplier]=useState([])
  const [quantity,setquantity]=useState(0)
const fetchSuppliers=async()=>{
const displaysub=await fetch()
}

    return (
      <div >
    <form action="">
    <h1>Inventory</h1>
    <div>
      <h3>Select SUPPLIER</h3>
      <select onChange={}>
        <option value="0" selected>Select</option>
        <option value="">Dummy </option>
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
      <h3>Select Quantity</h3>
      <select onChange={}>
    <input type="number" />
      </select>
    </div>
    </form>
      </div>
    );
  }
  
  export default Main;