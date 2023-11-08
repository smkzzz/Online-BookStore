import React from "react";

function Book({image,title,price,author,genre}) {
  return (
    <div className="flex flex-col justify-center bg-slate-900 p-0 rounded-md items-center relative group">
      <img src={image} className="w-full h-[280px] rounded-md" />
      <span className="text-center p-3">
        {title.slice(0, 20)}
        {title.length > 20 ? "..." : ""}
      </span>
      <span className="p-1 text-white bg-rose-600 absolute top-0 right-0 z-10">₱{price}</span>
      <span className="group-hover:opacity-[1]  cursor-pointer duration-200 transition-opacity opacity-0  bg-black w-full bg-opacity-[0.6] h-full absolute flex flex-col justify-center items-center gap-4">

        <p className="font-bold text-xl">{author}</p>
        <p className="text-center font-semibold text-green-600">{genre}</p>
      </span>
    </div>
  );
}

export default Book;
