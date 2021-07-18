import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { 
  Button, 
  Radio
} from 'antd';

function IndexPage(props) {
  const history = props.history;
  const itemHigh = props.location?.itemHigh?.scrollTop;

  if (itemHigh) {
    // window.scrollBy(0, itemHigh?.scrollTop);
    window.scroll(0, itemHigh?.scrollTop);
    // window.scroll({
    //   left: 0,
    //   top: itemHigh?.scrollTop,
    // });
    // window.scrollTo(100, itemHigh?.scrollTop);
    // window.scrollTo({
    //   top: 100,
    // });
    console.log(itemHigh?.scrollTop, 'itemHigh');
  }
  console.log(props);

  const [ size, setSize ] = useState('large');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  }
  
  const handleScroll = (event) => {
  // 注意事项 https://www.cnblogs.com/tu-0718/p/12988129.html
  // 1. PC上为了兼容性，获取滚动距离的2种方式都要写，document.documentElement.scrollTop || document.body.scrollTop;
  // 2. 移动端获取滚动的距离要用document.body.scrollTop，document.documentElement.scrollTop不起作用
    console.log('挂载滚动监听');
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 视窗高度
    const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
    // 页面高度
    const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
    // 距离页面底部的高度
    const height = scrollHeight - scrollTop - clientHeight;
    console.log(scrollTop, clientHeight, scrollHeight, height, 'xxxx');
    // 判断距离页面底部的高度
    // if (height <= (this.props.num || 0)) {
    //   // 判断执行回调条件
    //   if (this.state.codeType) {
    //     // 执行回调
    //     this.props.scrollCallback();
    //     // 关闭判断执行开关
    //     this.setState(
    //       {
    //         codeType: false,
    //       }
    //     );
    //   }
    // } else {
    //   // 打开判断执行开关
    //   this.setState({
    //       codeType: true
    //   });
    // }
  }
  const removeScroll = (e) => {
    console.log('移除滚动监听');
  }
  const goInputColor = (event) => {
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 视窗高度
    const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
    // 页面高度
    const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
    // 距离页面底部的高度
    const height = scrollHeight - scrollTop - clientHeight;
    history.push({
      pathname: '/InputColor',
      itemHigh: {
        scrollTop: scrollTop,
      },
    });
  }
  useEffect(() => {
    if (itemHigh) {
      window.scroll(0, itemHigh?.scrollTop);
    }
    // // 挂载滚动监听
    // window.addEventListener('scroll', handleScroll)
    // // 移除滚动监听
    // window.removeEventListener('scroll', removeScroll);
  }, [itemHigh]);

  return (
    <div className={styles.normal} onScroll={handleScroll}>
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
<Button onClick={goInputColor}>go InputColor</Button>
      <p>Hello world!!! 1</p>
      <p>Hello world!!! 2</p>
      <p>Hello world!!! 3</p>
      <p>Hello world!!! 4</p>
      <p>Hello world!!! 5</p>
      <p>Hello world!!! 6</p>
      <p>Hello world!!! 7</p>
      <p>Hello world!!! 8</p>
      <p>Hello world!!! 9</p>
      <p>Hello world!!! 10</p>
      <p>Hello world!!! 11</p>
      <p>Hello world!!! 12</p>
      <p>Hello world!!! 13</p>
      <p>Hello world!!! 14</p>
      <p>Hello world!!! 15</p>
      <p>Hello world!!! 16</p>
      <p>Hello world!!! 17</p>
      <p>Hello world!!! 18</p>
      <p>Hello world!!! 19</p>
      <p>Hello world!!! 20</p>
      <p>Hello world!!! 21</p>
      <p>Hello world!!! 22</p>
      <p>Hello world!!! 23</p>
      <p>Hello world!!! 24</p>
      <p>Hello world!!! 25</p>
      <p>Hello world!!! 26</p>
      <p>Hello world!!! 27</p>
      <p>Hello world!!! 28</p>
      <p>Hello world!!! 29</p>
      <p>Hello world!!! 30</p>
      <p>Hello world!!! 31</p>
      <p>Hello world!!! 32</p>
      <p>Hello world!!! 33</p>
      <p>Hello world!!! 34</p>
      <p>Hello world!!! 35</p>
      <p>Hello world!!! 36</p>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
