import React, { useState } from "react";
import { Table, Button, Popconfirm } from "antd";

import './Content.css';
import Data from "./Data";
import DialogEditBook from "./dialogEditBook";
import { BarcodeOutlined,DeleteTwoTone,EditTwoTone } from "@ant-design/icons";

const GirdView = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState(Data);
  const [visible, setVisible] = useState(false);
  

  //show dialog
  const showModal = () => {
    setVisible(true);
  };
  //handle of for modal
  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const columns = [
    {
      title:()=><div className="title">IdBooks</div>,
      dataIndex: "IdBooks",
      render:tag=>Data.length>=1?<p className="content-row">{tag}</p>:"null"
    },
    {
      title:()=><div className="title">Book Name</div>,
      dataIndex: "bookName",
      render:tag=>Data.length>=1?<p className="content-row">{tag}</p>:"null"
    },
    {
      title:()=><div className="title">Status</div>,
      dataIndex: "Status",
      render:tag=>Data.length>=1?<p className="content-row">{tag}</p>:"null"
    },
    {
      title:()=><div className="title">Id Books</div>,
      dataIndex: "Total",
      render:tag=>Data.length>=1?<p className="content-row">{tag}</p>:"null"
    },
    {
      title:()=><div className="title">Date</div>,
      dataIndex: "Date",
      render:tag=>Data.length>=1?<p className="content-row">{tag}</p>:"null"
    },
    {
      title:()=><div className="title">Barcode</div>,
      dataIndex: "Barcode",
      render:tag=>Data.length>=1?()=><p icon={<BarcodeOutlined />}></p>:null
    },
    {
      title:()=><div className="title">Edit infor</div>,
      dataIndex: "Edit",
      render: (text, record) =>
        Data.length >= 1 ? (
          <Button type="dashed" onClick={showModal} icon={<EditTwoTone />} className="icon-edit">
            Edit
          </Button>
        ) : null,
    },
    {
      title:()=><div className="title">Delete</div>,
      dataIndex: "Delete",
      render: (text, record) =>
        Data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button type="dashed" icon={<DeleteTwoTone />} className="icon-delete">Detele</Button>
          </Popconfirm>
        ) : null,
    },
  ];

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setLoading(false);
      setSelectedRowKeys([]);
    }, 1000);
  };

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const hasSelected = selectedRowKeys.length > 0;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <>
      <div>
        {/*modal will show when click */}
        <DialogEditBook
          visible={visible}
          handleOK={handleOk}
          handleCancel={handleCancel}
        />
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          className="custom_table"
         
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          scroll={{x:300}}
        />
      </div>
    </>
  );
};

export default GirdView;
