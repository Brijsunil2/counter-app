import { useState, useEffect } from "react";
import Header from "./components/Header";

const App = () => {
  const [counters, setCounters] = useState([]);

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
    <div>
      <Header />
    </div>
  )
}

export default App;