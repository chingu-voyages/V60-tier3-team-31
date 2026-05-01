import { useContext } from "react";
import { ApplicationsContext } from "./applicationsContext";

export function useApplicationsContext() {
  return useContext(ApplicationsContext);
}