import React, {useState,useEffect}from "react";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Form({  apiUrl, table,notify,msg}) {
  const fields = {
    items: ["ISBN", "TYPE", "GENRE", "PRICE", "TITLE", "AUTHOR"],
    customers: ["NAME", "EMAIL", "ADDRESS"],
  };
  const navigate = useNavigate();

  const [loading, setLoading] = useState(msg.includes('Up'));
  const [status, setStatus] = useState("text-white");

  const fetchDetails = async () => 
  {
        if(!msg.includes('Up')) return;

        const response = await fetch(apiUrl.replace('edit','get'));
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        fields[table].forEach((e) => {
            const inputElement = document.querySelector(`input[name=${e}]`);
      
            inputElement.value = data.results[0][e.toLowerCase()];
          });
        setLoading(false);
 
    
  }
  const handleFormSubmit = () => {
    setStatus("text-slate-600");
    setLoading(true);
    // Gather the user's input
    const formData = {};
    fields[table].forEach((e) => {
      const inputElement = document.querySelector(`input[name=${e}]`);

      formData[e] = inputElement.value;
    });

    // Make an HTTP POST request to your Python API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(formData), // Send the form data as JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const ok = toast.success(msg);
        notify(ok);
        // Handle the response from the API
        console.log("API Response:", data);
        navigate(`/${table.toLowerCase()}`);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  };
  useEffect(()=> {
    fetchDetails();
  },[])
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent the default form submission
        handleFormSubmit(); // Call your function to send the data to the Python API
      }}
      className="grid grid-cols-2 gap-6 relative"
    >
      {loading && (
        <ClipLoader
          className="absolute top-[120px] left-[500px]"
          color="#ffff"
        />
      )}
      {fields[table].map((e, index) => (
        <div className="w-full  gap-3">
          <label className={`${status}`}>{e}</label>
          <input
            required
            key={index}
            className={`w-full p-2 border-none outline-none bg-slate-700 ${status} rounded-md`}
            autoComplete="off"
            type="text"
            name={e}
          />
        </div>
      ))}

      <input
        type="submit"
        value="Save"
        className="self-end rounded-md font-bold p-3 text-sm bg-blue-600"
      />
    </form>
  );
}

export default Form;
