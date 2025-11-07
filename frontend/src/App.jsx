import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        hôm nay là <strong>{today}</strong>. Thời gian hiện tại là: {time}
      </p>
    </>
  );
}

export default App;
