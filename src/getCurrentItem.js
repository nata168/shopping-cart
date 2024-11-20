import { useMemo } from "react";
import { storeItems } from "./storeItems";
export { getCurrentItem };


function getCurrentItem(param) {
  const currentItem = useMemo(() => storeItems.filter((item) => {
    return item.name.toLowerCase().split(" ").join("-") === param;
  }), [storeItems]);
  
  return currentItem[0];
}
