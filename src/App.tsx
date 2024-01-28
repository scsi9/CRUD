import { useEffect, useState } from "react";
import React from "react";
import { getData } from "./api/getData";
import "./App.css";
import axios from "axios";

function App() {
  const [TableData, setTableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div>CRUD Панель</div>

      <input type="number" value={data.id}></input>
      <div>{TableData ? TableData : null}</div>
      <div></div>
    </div>
  );
}

export default App;
