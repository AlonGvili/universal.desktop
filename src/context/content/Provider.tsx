import React, { useReducer } from "react";
import {
  ActionType,
  ContentReducerState,
  initState,
  ContentContext,
} from "./Context";

export function contentReducer(
  state: ContentReducerState,
  action: { type: ActionType }
) {
  switch (action.type) {
    case "EXPAND_LEFT": {
      return {
        left: {
          isExpanded: true,
          colSpan: 24,
        },
        right: {
          ...state.right,
          colSpan: 0,
        },
      };
    }
    case "EXPAND_RIGHT": {
      return {
        left: {
          ...state.left,
          colSpan: 0,
        },
        right: {
          isExpanded: true,
          colSpan: 24,
        },
      };
    }
    case "RESET": {
      return {
        left: {
          isExpanded: false,
          colSpan: 12,
        },
        right: {
          isExpanded: false,
          colSpan: 12,
        },
      };
    }
  }
}

export default function ContentProvider({ children }) {
  const value = useReducer(contentReducer, initState);
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
