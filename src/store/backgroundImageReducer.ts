const defaultState = { backgroundImage: "" };

const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";

type actionPayload = {
  desktop: string;
  tablet: string;
  mobile: string;
  resizeObserver: {clientWidth: number, isMobile:boolean, isTablet:boolean, isDesktop:boolean};
};

export const backgroundImageReducer = (
  state = defaultState,
  action: {
    type: string;
    payload: actionPayload;
  }
) => {
  if (action.type === CHANGE_BACKGROUND) {
    
    const isMobile:boolean = action.payload.resizeObserver.isMobile;
    const isTable: boolean = action.payload.resizeObserver.isTablet;
    const isDesktop: boolean = action.payload.resizeObserver.isDesktop;

    if (isMobile) {
      return { backgroundImage: action.payload.mobile };
    } else if (isTable) {
      return { backgroundImage: action.payload.tablet };
    } else if (isDesktop) {
      return { backgroundImage: action.payload.desktop };
    }
  }
  return state;
};

export const changeBackgroundAction = (payload: actionPayload) => {
  return { type: CHANGE_BACKGROUND, payload };
};
