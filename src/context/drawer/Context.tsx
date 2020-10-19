import React, { createContext } from "react";

declare const ActionTypes: ["OPEN", "CLOSE"];
export declare type ActionType = typeof ActionTypes[number];

export type DrawerReducerState = {
  isVisible: boolean
};

export type ContextTypeProps = [
  DrawerReducerState,
  React.Dispatch<{
    type: ActionType;
  }>
];

export const initState = {
  isVisible: false
};

export const DrawerContext = createContext<ContextTypeProps>([
  initState,
  (value) => value,
]);

