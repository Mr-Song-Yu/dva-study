import { useState } from "react";

export default function InputColor() {
  let [color, setColor] = useState("red");
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      {/* <ExpensiveTree /> */}
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
