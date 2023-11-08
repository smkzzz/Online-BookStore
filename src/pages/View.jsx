import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormTop from "../components/FormTop";
function View({ table, notify }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true)
  const fetchDetails = async () => {
    const apiUrl = `http://localhost:5000/get/${table}/${id}`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    setData(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchDetails();
    document.title = `${table} | ${id}`;
  }, []);
  console.log(data)
  return (
    <div className="bg-slate-900 ml-2 mt-2 mr-2 text-white flex flex-col gap-6 p-10 pt-4">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-sm">{table} / Show</h1>
          <h2>Show {table}</h2>
        </div>
        <div className="flex flex-row gap-2">
          <a className="p-2">DEELTE</a>
          <a className="p-2">DEELTE</a>
          <a className="p-2">DEELTE</a>
        </div>
      </div>

      {data.length !== 0 && Object.keys(data[0])
        .sort((a, b) => a.length - b.length)
        .map((key, index) => (
          <div>
            <span className="text-xl font-bold">{key.toUpperCase()}</span>
            {key.toUpperCase() === 'IMAGE' ? <img src={data[0][key]} className="w-20 rounded-md"/> :<p>{data[0][key]}</p>}
          </div>
        ))}
    </div>
  );
}

export default View;
