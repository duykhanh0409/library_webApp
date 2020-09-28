import React, { useState } from 'react'
import {Popconfirm } from "antd";
import Data from './Data';

const Column=()=>{
    const [data,setData]=useState([]);
  const columns=[
        {
          title: "IdBook",
          dataIndex: "IdBooks",
        },
        {
          title: "Book Name",
          dataIndex: "bookName",
        },
        {
          title: "Status",
          dataIndex: "Status",
        },
        {
          title: "Total",
          dataIndex: "Total",
        },
        {
          title: "Date",
          dataIndex: "Date",
        },
        {
          title: "Barcode",
          dataIndex: "Barcode",
        },
        {
          title: "Edit",
          dataIndex: "Edit",
        },
        {
          title: "Delete",
          dataIndex: "Delete",
          render: (text, record) =>
                Data.length >= 1 ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() =>handleDelete(record.key)}>
                    <a>Delete</a>
                  </Popconfirm>
                ) : null
        },
      ];
     const handleDelete = (key) => {
         setData(Data);
         
        //const datas = [...data];
        setData(data.filter(item=>item.key!==key))
        
      };
    return(
        <>
        {columns}
        </>
    )
}

export default Column;