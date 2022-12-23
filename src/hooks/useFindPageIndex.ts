import { useLocation } from "react-router";
import { headerLinks } from "../router";

export const useFindPageIndex = ():number => {
  const { pathname } = useLocation();

  const index = headerLinks.findIndex((el) => el.to === pathname); 

  if(index === -1) {
    return 0;
  }

  return index;
};
