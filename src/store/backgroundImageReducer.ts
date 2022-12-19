const defaultState = { backgroundImage: "" };

const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";

type actionPayload = {
  desktop: string;
  tablet: string;
  mobile: string;
  clientWidth: number;
};

export const backgroundImageReducer = (
  state = defaultState,
  action: {
    type: string;
    payload: actionPayload;
  }
) => {
  if (action.type === CHANGE_BACKGROUND) {
    
    const clientWidth: number = action.payload.clientWidth;
    if (clientWidth <= 480) {
      return { backgroundImage: action.payload.mobile };
    } else if (clientWidth > 480 && clientWidth < 1200) {
      return { backgroundImage: action.payload.tablet };
    } else if (clientWidth >= 1200) {
      return { backgroundImage: action.payload.desktop };
    }
  }
  return state;
};

export const changeBackgroundAction = (payload: actionPayload) => {
  return { type: CHANGE_BACKGROUND, payload };
};
