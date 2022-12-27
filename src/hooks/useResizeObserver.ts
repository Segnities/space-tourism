import { useState } from "react";

export function useResizeObserver() {
  const element = document.getElementById("root");
  const [clientWidth, setClientWidth] = useState(0);

  const ReziseObserver = new ResizeObserver((entries) => {
    setClientWidth(entries[0]?.contentRect?.width);
  });
  ReziseObserver.observe(element as HTMLElement);

  return {
    clientWidth,
    isMobile: clientWidth <= 560,
    isTablet: clientWidth > 560 && clientWidth < 1200,
    isDesktop: clientWidth >= 1200,
  };
}
