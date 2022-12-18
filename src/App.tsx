import React from "react";

import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";
import Header from "./components/UI/Header/Header";

import styles from "./App.module.css";
import { useSelector } from "react-redux";

function App() {
  const backgroundImage = useSelector(
    (state: { backgroundImage: {backgroundImage:string} }) =>
      state.backgroundImage.backgroundImage
  );
  console.log(backgroundImage);
  
  return (
    <div className={styles["App"]} style={{backgroundImage: `url("${backgroundImage}")`}}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;