"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    
      <div className="flex sticky top-[60px] z-50  justify-center p-5 w-full max-w-screen-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="relative w-full"
          role="search"
        >
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f44d4d]"
            size={20}
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for medicines"
            className="
              w-full
              py-4
              pl-12
              pr-28
              rounded-full
              border
              border-gray-300
              focus:outline-none
              focus:border-blue-600
              placeholder-gray-500
              transition
              text-lg
            "
            aria-label="Search for medicines"
          />
          <button
            type="submit"
            className="
              absolute
              right-1
              top-1/2
              -translate-y-1/2
              bg-[#f44d4d]
              text-white
              px-8
              py-3
              rounded-full
              hover:bg-[#f44d4d]
              transition
              text-lg
              font-semibold
              whitespace-nowrap
              hidden
              sm:inline-flex
            "
            aria-label="Submit search"
          >
            Search
          </button>
        </form>
      </div>
  
  );
}


/*"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-center p-5 w-full">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-6xl"
          role="search"
        >
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f44d4d]"
            size={20}
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for medicines"
            className="
              w-full
              py-4
              pl-12
              pr-28
              rounded-full
              border
              border-gray-300
              focus:outline-none
              focus:border-blue-600
              placeholder-gray-500
              transition
              text-lg
            "
            aria-label="Search for medicines"
          />
          <button
            type="submit"
            className="
              absolute
              right-1
              top-1/2
              -translate-y-1/2
              bg-[#f44d4d]
              text-white
              px-8
              py-3
              rounded-full
              hover:bg-[#f44d4d]
              transition
              text-lg
              font-semibold
              whitespace-nowrap
              hidden
              sm:inline-flex
            "
            aria-label="Submit search"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
*/