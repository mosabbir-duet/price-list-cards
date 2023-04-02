import { useState } from "react";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Navbar from "./component/Navbar/Navbar";
import PriceList from "./component/PriceList/PriceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <h1 className="text-3xl font-bold underline text-orange-400">
        Hello world!
      </h1> */}
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
