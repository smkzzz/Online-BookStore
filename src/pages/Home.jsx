import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ListItems from "../components/ListItems";
function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLists = async (np) => {
    try {
      const apiUrl = `http://localhost:5000/Items/1/20`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setItems(data.results);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    getLists();
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="h-screen p-10 bg-gray-800 text-white">
        <div className="flex flex-col gap-6">
          <span className="self-center font-bold">GENRE</span>
          <ul className="flex flexr-row gap-10 items-center justify-center">
            <liv className='hover:text-blue-500 cursor-pointer'>Action</liv>
            <liv className='hover:text-blue-500 cursor-pointer'>Drama</liv>
            <liv className='hover:text-blue-500 cursor-pointer'>Fantasy</liv>
            <liv className='hover:text-blue-500 cursor-pointer'>Sci-Fiction</liv>
          </ul>
        </div>
        <Carousel loading={loading} items={items}/>

         <ListItems items={items} loading={loading}/>
        
        
      </div>
    </div>
  );
}

export default Home;
