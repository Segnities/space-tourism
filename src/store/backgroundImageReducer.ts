const defaultState = { backgroundImage: "" };

const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";

export const backgroundImageReducer = (
  state = defaultState,
  action: { type: string; payload: string }
) => {
  if (action.type === CHANGE_BACKGROUND) {
    console.log(action.payload);
    
    return { backgroundImage: action.payload };
  }
  return state;
};


export const changeBackgroundAction = (payload:string) => {
    return {type: CHANGE_BACKGROUND, payload};
}