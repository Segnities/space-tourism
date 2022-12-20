import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { changeBackgroundAction } from "../store/backgroundImageReducer";

import { useResizeObserver } from "./useResizeObserver";

export const useBackgroundChange = (background: {
  backgroundHomeDesktop: string;
  backgroundHomeTablet: string;
  backgroundHomeMobile: string;
}) => {
  const clientWidth = useResizeObserver();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBackgroundAction({
        desktop: background.backgroundHomeDesktop,
        tablet: background.backgroundHomeTablet,
        mobile: background.backgroundHomeMobile,
        clientWidth,
      })
    );
  }, [clientWidth]);
};
