import React, { useState } from "react";
import Axios from "axios";

function Excuse() {
  const [excuse, setExcuse] = useState("");
  const fetchExcuse = (excuseType) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };
  return (
    <div>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <p>{excuse}</p>
    </div>
  );
}
export default Excuse;
