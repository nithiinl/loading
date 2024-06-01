import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LazyComponent = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>Lazy Loaded Component {id}</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

export default LazyComponent;