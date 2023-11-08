import React, { useState } from "react";
import FormTop from "../components/FormTop";
import Form from "../components/Form";
function Create({ table, notify }) {

  const apiUrl = "http://localhost:5000/create/" + table;

  return (
    <div className="m-4 bg-slate-900 text-white rounded-lg p-4 w-3/4 ">
      <FormTop table={table} title="Create" />

      <Form table={table} notify={notify} apiUrl={apiUrl} msg='Successfully Created!' />
    </div>
  );
}

export default Create;
