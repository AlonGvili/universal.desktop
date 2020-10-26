import React, { createContext } from "react";

declare const ActionTypes: ["EXPAND_LEFT", "EXPAND_RIGHT", "RESET"];
export declare type ActionType = typeof ActionTypes[number];

export type ContentReducerState = {
  left: {
    isExpanded: boolean;
    colSpan: number;
  };
  right: {
    isExpanded: boolean;
    colSpan: number;
  };
};

export type ContextTypeProps = [
  ContentReducerState,
  React.Dispatch<{
    type: ActionType;
  }>
];

export const initState = {
  left: {
    isExpanded: false,
    colSpan: 12,
  },
  right: {
    isExpanded: false,
    colSpan: 12,
  },
};

export const ContentContext = createContext<ContextTypeProps>([
  initState,
  (value) => value,
]);

