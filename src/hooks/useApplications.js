import { useState } from "react";
import { applicationService } from "../services/applicationService";

export function useApplications() {
  const [applications, setApplications] = useState(() =>
    applicationService.getAll()
  );

  function addApplication(application) {
    try {
      const updated = applicationService.create(application);
      setApplications(updated);
    } catch (error) {
      console.error("Failed to add application:", error.message);
    }
  }

  function updateApplication(updatedApp) {
    try {
      const updated = applicationService.update(updatedApp);
      setApplications(updated);
    } catch (error) {
      console.error("Failed to update application:", error.message);
    }
  }

  return {
    applications,
    addApplication,
    updateApplication,
  };
}