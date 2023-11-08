import React from 'react'
import { useEffect } from 'react';
import Table from '../components/Table';
function Items({notify}) {
 
    useEffect(() => {
      // Set the page title when the component mounts
      document.title = 'Items';
    }, []); // The empty dependency array ensures this effect runs only once
  
  return (
    <Table tableName='Items' notify={notify}/>
  )
}

export default Items