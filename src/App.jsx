import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Customer from "./pages/Customer.jsx";
import Items from "./pages/Items.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import "./App.css";

import Create from "./pages/Create.jsx";
import MyComponent from './components/MyComponent.jsx'

import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import View from "./pages/View.jsx";
import Login from "./pages/Login.jsx";
function App() {
  const [collapse, setCollapse] = useState(true);
  const notify = (msg) => msg;
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <AdminLayout collapse={collapse} setCollapse={setCollapse}>
              <Routes>
                <Route path="/" element={<Customer />} />
                <Route path="/customers" element={<Customer notify={notify} />} />
                <Route path="/customers/edit/:id" element={<Edit table='customers' notify={notify} />} />
                <Route path="/customers/view/:id" element={<View table='customers' notify={notify} />} />
                <Route path="/items" element={<Items notify={notify} />} />
                <Route path="/items/edit/:id" element={<Edit table='items' notify={notify} />} />
                <Route path="/items/view/:id" element={<View table='items' notify={notify} />} />
                <Route path="/customers/create" element={<Create notify={notify} table='customers' />} />
                <Route path="/items/create" element={<Create notify={notify} table='items' />} />
              </Routes>
            </AdminLayout>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
