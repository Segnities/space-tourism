import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { changeBackgroundAction } from "../store/backgroundImageReducer";

import { useResizeObserver } from "./useResizeObserver";

export const useBackgroundChange = (background: {
  backgroundDesktop: string;
  backgroundTablet: string;
  backgroundMobile: string;
}) => {
  const resizeObserver = useResizeObserver();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBackgroundAction({
        desktop: background.backgroundDesktop,
        tablet: background.backgroundTablet,
        mobile: background.backgroundMobile,
        resizeObserver 
      })
    );
  }, [resizeObserver.clientWidth]);
};
