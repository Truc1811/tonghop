import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import {useQuery} from "@tanstack/react-query";
import Axios from "axios";
export const Home=()=>{
  const { data, isLoading, error , refetch} = useQuery({
    queryKey: ["catFact"],
    queryFn: () => Axios.get(`https://catfact.ninja/fact`).then((res) => res.data)
  });
  const { user } = useContext(AppContext);
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>Hello, {user}!</p>

      {isLoading && <p>Loading cat fact...</p>}
      {error && <p>Error loading cat fact!</p>}
      {data && <p><strong>Cat Fact:</strong> {data?.fact}</p>}

      <button onClick={refetch}>Update data</button>
    </div>
   
  );
}

export default Home;

