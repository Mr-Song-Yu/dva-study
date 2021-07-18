import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { 
  Button, 
  Radio
} from 'antd';

function IndexPage() {
  const [ size, setSize ] = useState('large');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
