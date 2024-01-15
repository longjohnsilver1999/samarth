import React from "react";
import {useState,useEffect} from "react";


function DisplayTable(props) {


    return(
        
        <div>
          
         
                <table>
                    <thead>
                        <th>Item</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Mfg. Details</th>
                    </thead>
                    <tbody>
                    {props.Inventorytable.map(i=>
                        <tr>
                            <td>{i.itemname}</td>
                            <td>{i.supplier_info}</td>
                            <td>{i.quantity}</td>
                            <td>{i.price}</td>
                            <td>{i.mfgDate}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
        
        </div>
    )
}

export default DisplayTable