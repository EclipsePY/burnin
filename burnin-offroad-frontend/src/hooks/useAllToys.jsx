import { useEffect, useState } from "react";

const useAllToys = () => {
  const [allToys, setAllToys] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/toys/all-toys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setIsLoading(false);
      });
  }, []);

  return { allToys, isLoading };
};

export default useAllToys;
