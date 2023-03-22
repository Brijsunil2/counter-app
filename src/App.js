import "./App.css";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import CounterList from "./components/CounterList";
import AddCounter from "./components/AddCounter";

const App = () => {
  const [counters, setCounters] = useState([{
    "id": 1,
    "text": "Apples",
    "count": 10
  }]);

  useEffect(() => {
    const getCounters = async () => {
      const countersFromServer = await fetchCounters();
      setCounters(countersFromServer);
    };
    getCounters();
  }, []);

  const fetchCounters = async () => {
    const res = await fetch("http://localhost:5000/counters");
    const data = await res.json();

    return data;
  }
  
  return (
    <>
      <Header />
      <AddCounter />
      <CounterList counters={counters} />
    </>
  )
}

export default App;