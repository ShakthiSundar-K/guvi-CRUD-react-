import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://66a5ee0523b29e17a1a14b1b.mockapi.io/UserManagement"
      );
      if (res.status === 200) {
        setData(res.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/dashboard'
          element={<Dashboard data={data} getData={getData} />}
        />
        <Route path='/add-user' element={<AddUser getData={getData} />} />
        <Route path='/edit-user/:id' element={<EditUser getData={getData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
