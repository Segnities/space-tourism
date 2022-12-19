import { useEffect, useState } from "react";

export function useResizeObserver() {
  const element = document.getElementById("root");
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    const ReziseObserver = new ResizeObserver((entries) => {
      console.log(entries[0]?.contentRect?.width);
      setClientWidth(entries[0]?.contentRect?.width);
    });
    ReziseObserver.observe(element as HTMLElement);
  }, [element]);

  return clientWidth;
}
