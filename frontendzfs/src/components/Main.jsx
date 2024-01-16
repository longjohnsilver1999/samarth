import React from "react";
import { useState, useEffect } from "react";
import DisplayTable from './DisplayTable'
import { toast } from "react-toastify"
function Main() {
  const [items, setitems] = useState([])
  const [supplier, setsupplier] = useState([])
  const [quantity, setquantity] = useState(0)
  const [finalitens, setfinalitems] = useState([])
  const [itemname, setitemname] = useState('')
  const [itemprice,setitemprice]=useState()
  const [price, setprice] = useState(0)
  const [supplier_info, setsupplier_info] = useState()
  const [editbool, seteditbool] = useState(false)
  const handleSubmit = async () => {
    const itemObject = {
      itemname, price, supplier_info, mfgDate
    }
    if (itemname != '' || itemname != null || itemname != undefined || price != null || price != 0) {
      const displaysub = await fetch('http://localhost:8000/item/add', {
        method: 'POST',
        body: JSON.stringify(itemObject),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      const ds = await displaysub.json()
    }
    else {
      toast("unable to load")
    }
  }

  const fetchAllinventoryItems = async () => {
    const displaysub = await fetch('http://localhost:8000/item/getallitems', {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
    const finaldisplaysub = await displaysub.json()
    setfinalitems(finaldisplaysub)

  }
  const editItem = async (item) => {
    setitemname(item.itemname)
  }
  const editItem2 = async () => {
    const itemObject = {
      itemname, price, supplier_info, mfgDate
    }
    const editd = await fetch(`http://localhost:8000/edititem/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(itemObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  const deleteItem = async (item) => {
    const deletedd = await fetch(`http://localhost:8000/deleteitem/${item.id}`, {
      method: 'DELETE',

      headers: {
        'Content-Type': 'application/json'
      }
    })
    const fd = await deletedd.json()
  }

  const handleSupplier = (e) => {
  setsupplier_info(e.target.value)
  }
  const handleItem = (e) => {
    setitemname(e.target.value.itemname)
    setitemprice(e.target.value.price)
  }
  const handleprice = (val) => {
  setprice(val*itemprice)
  }
useEffect(()=>{
  fetchAllinventoryItems()
},[])

  return (
    <div >
      <form action="">
        <h1>Inventory</h1>
        <div>
          <h3>Select SUPPLIER</h3>
          <select onChange={(e) => handleSupplier(e)} value={supplier_info}>
            <option value="0" selected>Select</option>
            {supplier.map(i =>
              <option value={i.id}>{i.name} </option>
            )}
          </select>
        </div>
        <div>
          <h3>Select Item</h3>
          <select onChange={(e) => handleItem(e)} value={itemname}>
            <option value="0" selected>Select</option>
            {items.map(i =>
              <option value={i}>{i.itemname} </option>
            )}
          </select>
        </div>
        <div>
          <h3>Add Quantity</h3>

          <input type="number" onChange={(e) => handleprice(e.target.value)} value={quantity} />

        </div>

        <div>
          <button type="submit" onClick={() => handleSubmit()}>Add to Inventory</button>
        </div>
      </form>

      <div>
        <DisplayTable Inventorytable={finalitens} deleteItem={deleteItem} editItem={editItem} />
      </div>
    </div>
  );
}

export default Main;