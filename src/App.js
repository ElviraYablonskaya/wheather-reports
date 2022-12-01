import "./App.css";
import React from "react";
import { CreateReport } from "./components/CreateReport";
import { Reports } from "./components/Reports";

const App = () => {

  return (
    <div className="w-1/2 m-auto">
      <br />
      <CreateReport />
      <Reports />
      <div className="allList"></div>
    </div>
  );
};

export default App;
