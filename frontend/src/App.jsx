import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let date = new Date().toLocaleDateString;
let time = new Date().toLocaleTimeString;
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        hôm nay là <strong>{date}</strong>
      </p>
    </>
  );
}

export default App;
