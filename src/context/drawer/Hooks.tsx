import { useContext } from "react";
import { DrawerContext } from "./Context";

export default function useDrawerProvider() {
  return useContext(DrawerContext);
}
