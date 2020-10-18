import { useContext } from "react";
import { ContentContext } from "./Context";

export default function useContentProvider() {
  return useContext(ContentContext);
}
