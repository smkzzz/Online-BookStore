import React from "react";
import {
  AiFillEye,
  AiFillEdit,
  AiFillDelete,
  AiOutlineUserAdd,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { TbError404Off } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import ClipLoader from "react-spinners/ClipLoader";
import Top from "./Top";
import toast from "react-hot-toast";

function Table({ tableName, notify }) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const we = queryParams.get("page");
  const [data, setData] = useState({});
  const [page, setPage] = useState(we ? parseInt(we) : 1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rows, setRows] = useState([]);
  const searchHandle = (search) => {
    clearTimeout(searchHandle.timeoutId);
    if (search === "") {
      getLists(1);
      getLists();
      return;
    }
    const fetchWithDelay = async () => {
      const apiUrl = `http://localhost:5000/search/${tableName}/` + search;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    searchHandle.timeoutId = setTimeout(fetchWithDelay, 300);
  };
  const handleDelete = async (id) => {
    const apiUrl = `http://localhost:5000/delete/${tableName}/${id}`;
    setRows((prev) =>
      prev.map((item) =>
        item.key === id ? { ...item, visible: false, loading: true } : item
      )
    );
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (data) {
        toast.success("Successfully Deleted!", {
          duration: 1000,
          style: {
            background: "#F43F5E",
            color: "white",
          },
          icon: <AiFillDelete size={30} className="text-white" />,
        });
        notify(toast);
        setRows((prev) => prev.filter((item) => item.key !== id));
        getLists();
        data.results.length && setPage(1);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getLists = async (np) => {
    try {
      const apiUrl = `http://localhost:5000/${tableName}/${np ? np : page}/10`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      navigate(`?page=${page}`);
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLists();

    document.title = "Customers";
  }, [page]);
  return (
    <>
      <Top tableName={tableName} searchHandle={searchHandle} />
      <div className=" h-[850px] overflow-x-auto mx-4">
        {loading ? (
          <div className="w-full h-[550px] flex items-center justify-center bg-slate-900 ">
            <ScaleLoader color="#2563EB" />
          </div>
        ) : error ? (
          <span className="text-white">Error</span>
        ) : (
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs  uppercase bg-slate-900  text-gray-400">
              <tr>
                {data.results.length !== 0 &&
                  Object.keys(data.results[0])
                    .sort((a, b) => a.length - b.length)
                    .map((key, index) => (
                      <th
                        key={index}
                        scope="col"
                        class={`${index !== 0 ? "px-6 py-3" : "py-4 px-6"} `}
                      >
                        {key.toUpperCase()}
                      </th>
                    ))}
                {data.results.length !== 0 && (
                  <th scope="col" class="p-4">
                    ACTIONS
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.results.length === 0
                ? console.log(
                    notify(
                      toast.error("No Records Found", {
                        duration: 1000,
                        style: {
                          background: "#F43F5E",
                          color: "white",
                        },
                        icon: (
                          <TbError404Off size={30} className="text-white" />
                        ),
                      })
                    )
                  )
                : data.results.map((e) => (
                    <tr
                      key={e.id}
                      class="bg-slate-900 border-b-2 border-slate-700 relative"
                    >
                      {Object.keys(data.results[0])
                        .sort((a, b) => a.length - b.length)
                        .map((key, index) => (

                            
                          <td
                            key={index}
                            class={`${index === 0 ? "w-4 p-4" : "px-6"} `}
                          >
                            {(e[key]+"").includes('https') ? <img className="w-10 rounded-md" src={e[key]}/> : e[key]}
                          </td>
                        ))}

                      <td className="px-6 py-2 text-left space-x-2">
                        <div className="flex flex-row gap-4 items-center">
                          <Link to={`/admin/${tableName.toLowerCase()}/view/${e.id}`}>
                            <AiFillEye
                              size={37}
                              className="border-2 hover:bg-green-500 duration-200 transition-all hover:text-slate-100 border-green-500 text-green-500 rounded-md p-2"
                            />
                          </Link>

                          <Link to={`/admin/${tableName.toLowerCase()}/edit/${e.id}`}>
                            <AiFillEdit
                              size={37}
                              className="border-2 hover:bg-blue-600 duration-200 transition-all hover:text-slate-100 border-blue-600 text-blue-600 rounded-md p-2"
                            />
                          </Link>
                          {rows.some(
                            (item) => item.key === e.id && item.loading
                          ) ? (
                            <span className="border-2 bg-rose-500 bg-opacity-[0.1] flex items-center transition-all hover:text-slate-100 border-rose-500 text-rose-500 rounded-md p-2">
                              <ClipLoader color="#F43F5E" size={17} />
                            </span>
                          ) : (
                            <AiFillDelete
                              onClick={() =>
                                setRows((prev) =>
                                  prev
                                    ? prev.some((item) => item.key === e.id)
                                      ? prev.filter(
                                          (element) => element.key !== e.id
                                        )
                                      : [
                                          ...prev,
                                          {
                                            key: e.id,
                                            loading: false,
                                            visible: true,
                                          },
                                        ]
                                    : [
                                        {
                                          key: e.id,
                                          loading: false,
                                          visible: true,
                                        },
                                      ]
                                )
                              }
                              size={37}
                              className={`border-2 ${
                                rows.some(
                                  (item) => item.key === e.id && item.visible
                                )
                                  ? "bg-rose-500 text-slate-100"
                                  : ""
                              } hover:bg-rose-500 duration-200 transition-all hover:text-slate-100 border-rose-500 text-rose-500 rounded-md p-2`}
                            />
                          )}

                          <span
                            className={` ${
                              rows.some(
                                (item) => item.key === e.id && item.visible
                              )
                                ? "block"
                                : "hidden"
                            } absolute bg-slate-800  right-20 rounded-md text-white  text-center w-[300px] bottom-[-110px] z-30  py-4`}
                          >
                            Are you sure?
                            <div className="pt-2 border-t-2 border-slate-600 w-full flex flex-row items-center justify-center gap-2 mt-2 ">
                              <span
                                className="bg-slate-600 p-2 cursor-pointer text-sm rounded-md"
                                onClick={() =>
                                  setRows((prev) =>
                                    prev.filter(
                                      (element) => element.key !== e.id
                                    )
                                  )
                                }
                              >
                                Cancel
                              </span>
                              <span
                                className="bg-blue-600 p-2 cursor-pointer text-sm rounded-md"
                                onClick={() => handleDelete(e.id)}
                              >
                                Delete
                              </span>
                            </div>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
            <tfoot>
              <tr class="font-semibold  text-white bg-slate-900">
                <td class="px-6 py-3"></td>

                <td class="px-6 py-3 flex flex-row gap-6 items-center justify-center">
                  <AiOutlineArrowLeft
                    onClick={() => {
                      if (page !== 1) setPage((prev) => prev - 1);
                    }}
                    className="border-2 border-slate-500 rounded-md p-2"
                    size={37}
                  />

                  <AiOutlineArrowRight
                    onClick={() => {
                      if (data.results.length >= 10)
                        setPage((prev) => prev + 1);
                    }}
                    className="border-2 border-slate-500 rounded-md p-2"
                    size={37}
                  />
                </td>
                <td class="px-6 py-3 text-slate-600 text-sm font-light">
                  Page {data.page}
                </td>
                <td class="px-6 py-3"></td>
                <td class="px-6 py-3"></td>
                <td class="px-6 py-3"></td>

                {tableName === "Items" ? (
                  <>
                    <td class="px-6 py-3"></td>
                    <td class="px-6 py-3"></td>
                    <td class="px-6 py-3"></td>
                  </>
                ) : (
                  ""
                )}
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </>
  );
}

export default Table;
