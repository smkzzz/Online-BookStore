import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);
  const [clicked, setClicked] = useState(1);

  useEffect(() => {
    isMounted.current = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Items/${clicked}`);
        if (isMounted.current) {
          setData(response.data.results);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted.current) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, [clicked]); // Include 'clicked' in the dependency array to re-fetch data when 'clicked' changes
  console.log(data)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 onClick={() => setClicked(prev => prev + 1)}>Click to Fetch Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
