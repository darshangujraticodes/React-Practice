import { useState } from "react";

export function useFilter(data, callback, listId) {
  const [query, setQuery] = useState("");
  //   console.log("data", data);

  //   console.log(callback);
  //   console.log(callback(item));

  const filteredData = data.filter((item) =>
    callback(item).toLowerCase().includes(query.toLowerCase())
  );

  //   console.log("filter data hook =", filteredData);

  return { filteredData, setQuery };
}
