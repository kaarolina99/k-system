import React, { useEffect, useState } from "react";
import "./App.css";
import { QueueGrid } from "../queue_component/App";
import { FormsGrid } from "../forms_component/App";
import Navbar from "../navbar_component/App";

export default function MyApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5500/api/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  });
  console.log(data);
  return (
    <div>
      <Navbar />
      <QueueGrid />
      <FormsGrid />
      <div>{data[0].name}</div>
    </div>
  );
}
