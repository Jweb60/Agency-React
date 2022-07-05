import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Biensimmo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.cfihome.es/guest/properties")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="biens">
      <div className="container">
        <ul>
          {data.map((biens, index) => (
            <Card key={index} biens={biens} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Biensimmo;
