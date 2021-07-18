import { useState } from "react";
import { 
  Button
} from 'antd';
// import history from 'history';

export default function InputColor(props) {
  const history = props.history;
  // 获取传递过来的参数
  const itemHigh = props.location.itemHigh;
  console.log(props);
  console.log(itemHigh);

  let [color, setColor] = useState("red");
  const goBack = () => {
    window.history.back();
  }
  const goIndex = () => {
    history.push({
      pathname: '/',
      itemHigh: {
        scrollTop: itemHigh,
      },
    });
  }
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      {/* <ExpensiveTree /> */}
      <Button onClick={goBack}>Go back</Button>
      <Button onClick={goIndex}>Go Index</Button>
    </>
  );
}

// function ExpensiveTree() {
//   let now = performance.now();
//   while (performance.now() - now < 100) {
//     // Artificial delay -- do nothing for 100ms
//   }
//   return <p>I am a very slow component tree.</p>;
// }
