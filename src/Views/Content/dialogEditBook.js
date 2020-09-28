import React, { useState } from 'react'
import {Modal } from "antd";
const DialogEditBook=({visible,handleCancel,handleOk})=>{
    
    return(
        <Modal
          title="Edit Book"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    )
}

export default DialogEditBook;