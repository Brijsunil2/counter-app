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

  const countersLink = "http://localhost:5000/counters";

  useEffect(() => {
    const getCounters = async () => {
      const countersFromServer = await fetchCounters();
      setCounters(countersFromServer);
    };
    getCounters();
  }, []);

  const fetchCounters = async () => {
    const res = await fetch(countersLink);
    const data = await res.json();

    return data;
  }

  const fetchCounter = async (id) => {
    const res = await fetch(`${countersLink}/${id}`);
    const data = await res.json();

    return data;
  }

  const addCounter = async (counter) => {
    const res = await fetch(countersLink, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(counter)
    });

    const data = await res.json();
    setCounters([...counters, data]);
  }

  const addToCounter = async (id) => {
    const counterToInc = await fetchCounter(id);
    const updCounter = {...counterToInc, count: counterToInc.count + 1};
    const res = await fetch(`${countersLink}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updCounter)
      }
    );

    const data = await res.json();

    setCounters(counters.map((counter) => counter.id === id ? {...counter, count: data.count} : counter));
  }
  
  return (
    <>
      <Header />
      <AddCounter addCounter={addCounter} />
      <CounterList counters={counters} />
    </>
  )
}

export default App;