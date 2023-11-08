import React from "react";

import Table from "../components/Table";

function Customer({notify}) {
  

  return (
    <>
      <Table tableName='Customers'  notify={notify}/>
    </>
  );
}

export default Customer;
