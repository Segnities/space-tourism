import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import BackgroundHomeDesktop from "./assets/img/background-home-desktop.jpg";
import BackgroundHomeTablet from "./assets/img/background-home-tablet.jpg";
import BackgroundHomeMobile from "./assets/img/background-home-mobile.jpg";


import styles from "./assets/css/Home.module.css";
import { changeBackgroundAction } from "../../store/backgroundImageReducer";

function Home() {
    const dispatch = useDispatch();
    const backgroundImage = useSelector((state:{backgroundImage:string}) => state.backgroundImage);


    useEffect(()=> {
        dispatch(changeBackgroundAction(BackgroundHomeDesktop));
    }, [])

    return (
        <main>
            <h1>Home</h1>
        </main>
    )
}

export default Home;