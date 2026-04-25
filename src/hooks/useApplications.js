import { useState } from "react";
import { applicationService } from "../services/applicationService";

export function useApplications() {
  const [applications, setApplications] = useState(() =>
    applicationService.getAll()
  );

  function addApplication(application) {
    const updated = applicationService.create(application);
    setApplications(updated);
  }

  function updateApplication(updatedApp) {
    const updated = applicationService.update(updatedApp);
    setApplications(updated);
  }

  function refresh() {
    setApplications(applicationService.getAll());
  }

  return {
    applications,
    addApplication,
    updateApplication,
    refresh,
  };
}