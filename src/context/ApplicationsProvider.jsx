import { useApplications } from "../hooks/useApplications";
import { ApplicationsContext } from "./applicationsContext";

export function ApplicationsProvider({ children }) {
  const value = useApplications();

  return (
    <ApplicationsContext.Provider value={value}>
      {children}
    </ApplicationsContext.Provider>
  );
}