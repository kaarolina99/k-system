import React from "react";
import "./App.css";
import { QueueGrid } from "../queue_component/App";
import { FormsGrid } from "../forms_component/App";
import Navbar from "../navbar_component/App";

export default function MyApp() {
  return (
    <div>
      <Navbar />
      <QueueGrid />
      <FormsGrid />
    </div>
  );
}
