import React, { useContext } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Menu from "../../components/ExploreMenu/Menu";
import { useState } from "react";
import Item from "../../components/Items/Item";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <Item category={category}/>
      <AppDownload />
    </div>
  );
};

export default Home;
 