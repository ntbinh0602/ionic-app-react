import React from "react";
import { useState, useEffect } from "react";
import { APP_LIST_MODULE } from "../services";

const HomePage = () => {
  useEffect(() => {
    let res = APP_LIST_MODULE("http://localhost:8069");
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
