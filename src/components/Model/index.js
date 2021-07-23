import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./index.less";
export default function LocalizedModal(props) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        // okText="确认"
        // cancelText="取消"
        footer={[
          <Button
            type="primary"
            onClick={hideModal}
            className={styles.redColor}
          >
            确认
          </Button>,
          <Button onClick={hideModal}>取消</Button>,
        ]}
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  );
}
