import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "../useFetch";
import Card from "../components/Card";

import "./styles.css";
function App() {
  let shailly=45;
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);
//commit by shailly
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="container">
      <div className="cardHolder">
        {list.map((item,i) => (
          <div className="cardDiv" key={i}>
            {Card(item)}
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
}

export default App;
