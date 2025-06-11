import { useContext } from "react";
import { CrushSuiteContext } from "../components";

export const useCrushSuite = () => {
  return useContext(CrushSuiteContext);
};
