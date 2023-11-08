import React from "react";
import Book from "./Book";
import ContentLoader from "react-content-loader";

function ListItems({ items, loading }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 mt-48 rounded-lg sm:px-10">
      {loading
        ? [...Array(10)].map((_, i) => (
            <ContentLoader
              key={i}
              speed={0.5}
              width={400}
              height={350}
              viewBox="0 0 400 460"
              backgroundColor="#0f172a"
              foregroundColor="#1e293b"
            >
              <rect x="24" y="302" rx="2" ry="2" width="140" height="10" />
              <rect x="-203" y="4" rx="2" ry="2" width="409" height="279" />
            </ContentLoader>
          ))
        : items.map((e, index) => (
            <Book
              key={index}
              title={e.title}
              price={e.price}
              author={e.author}
              image={e.image}
              genre={e.genre}
            />
          ))}
    </div>
  );
}

export default ListItems;
