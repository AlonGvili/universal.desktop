import React, { useReducer } from "react";
import { queryCache } from "react-query";
import { fetchComponents } from "service-hooks";
import {
  ActionType,
  DrawerReducerState,
  initState,
  DrawerContext,
} from "./Context";

export function drawerReducer(
  state: DrawerReducerState,
  action: { type: ActionType }
) {
  switch (action.type) {
    case "OPEN": {
      return {
       isVisible: true
      };
    }
    case "CLOSE": {
      return {
        isVisible: false
      };
    }
  }
}

export default function DrawerProvider({ children }) {
  queryCache.prefetchQuery("components", fetchComponents)
  const value = useReducer(drawerReducer, initState);
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}
