import React, { useState, useEffect } from "react";
import "./index.css";
import Newsmenu from "./menu";
import Newsgrid from "./newsgrid";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Newsroom() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=61fcbf81a0f444a2a068795e4fc3c7ca`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <div className="newsroom">
      <Sidebar />
      <div className="newscontainer">
        <Newsmenu
          active={active}
          setActive={setActive}
          setCategory={setCategory}
        />
        <Newsgrid items={items} />
      </div>
    </div>
  );
}

export default Newsroom;
