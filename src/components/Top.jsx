import React from 'react'
import {  AiOutlineUserAdd} from 'react-icons/ai'
import { Link } from "react-router-dom";
function Top({tableName ,searchHandle}) {
  return (
    <div class="md:mx-4 mt-4 flex mr-2  justify-between p-4  dark:bg-slate-900  text-white">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <span className="font-bold text-2xl">{tableName} Lists</span>

          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => searchHandle(e.target.value)}
              type="text"
              id="table-search-users"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for customers"
            />
          </div>
        </div>

        <div>
          <Link to={`/admin/${tableName.toLowerCase()}/create`} className="p-2 bg-blue-600 rounded-md text-sm flex flex-row items-center gap-2 cursor-pointer hover:bg-blue-500 duration-150 transition-colors">
            <AiOutlineUserAdd size={24} />
            <a className="">Create</a>
          </Link>
        </div>
      </div>
  )
}

export default Top