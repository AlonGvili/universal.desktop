import React, { useReducer, createContext, useContext } from "react";

declare const ActionTypes: ["EXPAND_LEFT", "EXPAND_RIGHT", "RESET"];
export declare type ActionType = typeof ActionTypes[number];

type ContentReducerState = {
  left: {
    isExpanded: boolean;
    colSpan: number;
  };
  right: {
    isExpanded: boolean;
    colSpan: number;
  };
};

type ContextTypeProps = [
  ContentReducerState,
  React.Dispatch<{
    type: ActionType;
  }>
];

const initState = {
  left: {
    isExpanded: false,
    colSpan: 15,
  },
  right: {
    isExpanded: false,
    colSpan: 9,
  },
};

const ContentContext = createContext<ContextTypeProps>([
  initState,
  (value) => value,
]);

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
          colSpan: 16,
        },
        right: {
          isExpanded: false,
          colSpan: 8,
        },
      };
    }
  }
}

export function ContentProvider({ children }) {
  const value = useReducer(contentReducer, initState);
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export default function useContentProvider() {
  return useContext(ContentContext);
}
