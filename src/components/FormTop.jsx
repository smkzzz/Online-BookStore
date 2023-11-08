import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
function FormTop({table,title}) {
  return (
    <div className="flex flex-col gap-3">
        <span className="">
          <Link className="hover:underline" to={"/admin/" + table}>
            {table.toUpperCase()}
          </Link>{" "}
          / {title}
        </span>
        <div className="flex flex-row items-center gap-4 ">
          <Link
            to="/admin/customers"
            className="hover:bg-slate-600  duration-300 p-2 rounded-md bg-opacity-[0.1] "
          >
            <AiOutlineArrowLeft size={20} />
          </Link>
          <span className="text-2xl font-bold">{title} {table.slice(0,-1)}</span>
        </div>
      </div>
  )
}

export default FormTop