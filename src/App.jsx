import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Customer from "./pages/Customer.jsx";
import Items from "./pages/Items.jsx";
import toast, { Toaster } from 'react-hot-toast';

import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header.jsx";
import Create from "./pages/Create.jsx";
import MyComponent from './components/MyComponent.jsx'
import Edit from "./pages/Edit.jsx";
import View from "./pages/View.jsx";
function App() {
  const [collapse, setCollapse] = useState(true);
  const notify = (msg) => msg;
  return (
    <Router>
      <div className="flex flex-row">
        <Sidebar collapse={collapse} setCollapse={setCollapse} />
        <div className="bg-gray-800  flex flex-col w-full">
        <Toaster />
          <Header collapse={collapse} setCollapse={setCollapse} />
          <Routes>
            <Route path="/" element={<Customer />} />
            <Route path="/customers" element={<Customer  notify={notify}/>} />
            <Route path="/customers/edit/:id" element={<Edit table='customers'notify={notify}/>} />
            <Route path="/customers/view/:id" element={<View table='customers'notify={notify}/>} />

            <Route path="/items" element={<Items notify={notify} />} />
            <Route path="/items/edit/:id" element={<Edit table='items'notify={notify}/>} />
            <Route path="/items/view/:id" element={<View table='items'notify={notify}/>} />

            <Route path="/customers/create" element={<Create  notify={notify} table='customers'/>} />
            <Route path="/items/create" element={<Create notify={notify} table='items'/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
