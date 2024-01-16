import React from "react";
import { useState, useEffect } from "react";


function DisplayTable(props) {


    return (

        <div>


            <table>
                <thead>
                    <th>Item</th>
                    <th>Supplier</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Mfg. Details</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {props.Inventorytable.map(i =>
                        <tr>
                            <td>{i.itemname}</td>
                            <td>{i.supplier_info}</td>
                            <td>{i.quantity}</td>
                            <td>{i.price}</td>
                            <td>{i.mfgDate}</td>
                            <td><button onClick={()=>props.editItem(i)}><i className="fa fa-edit"></i></button></td>
                            <td><button onClick={()=>props.deleteItem(i)}><i className="fa fa-trash"></i></button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default DisplayTable