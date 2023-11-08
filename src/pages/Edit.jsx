import React,{useEffect} from 'react'
import {  useLocation,useNavigate,useParams } from 'react-router-dom';
import FormTop from '../components/FormTop';
import Form from '../components/Form'
function Edit({table,notify}) {
  const navigate = useNavigate()
  const {id} = useParams()

  const apiUrl = `http://localhost:5000/edit/${table}/${id}`; // Replace with your actual Python API URL
  useEffect(()=> {
    document.title = `Editing ${ table.slice(0, -1)}  ${id}`
  },[])
  
  return (
    <div className="m-4 bg-slate-900 text-white rounded-lg p-4 w-3/4 ">
      <FormTop table={table} title='Edit'/>
      <Form table={table} apiUrl={apiUrl} notify={notify} msg='Successfully Updated!'/>
    </div>
  )
}

export default Edit