"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const handleSearch = () => {
    router.push(`/cart?query=${query}`);
  };
  return (
    <div className="flex gap-2">
      <input
        className="border border-gray-300 rounded-md p-2"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
