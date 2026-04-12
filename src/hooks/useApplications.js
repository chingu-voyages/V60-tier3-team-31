import { useState, useCallback } from "react";
import {
  addApplication,
  getApplications,
} from "../services/applicationService";

export function useApplications() {
  const [applications, setApplications] = useState(() => getApplications());

  const refreshApplications = useCallback(() => {
    const nextApplications = getApplications();
    setApplications(nextApplications);
  }, []);

  const addNewApplication = useCallback((application) => {
    try {
      const updatedApplications = addApplication(application);
      setApplications(updatedApplications);
    } catch (error) {
      console.error("Failed to add application:", error.message);
    }
  }, []);

  return {
    applications,
    addApplication: addNewApplication,
    refreshApplications,
  };
}