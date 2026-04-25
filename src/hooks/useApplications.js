import { useState, useEffect } from "react";
import { applicationService } from "../services/applicationService";

export function useApplications() {
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    const data = applicationService.getAll();
    setApplications(data);
  }, []);

  function addApplication(application) {
    try {
      const updated = applicationService.create(application);
      setApplications(updated);
    } catch (error) {
      console.error("Failed to add application:", error.message);
    }
  }

  return {
    applications,
    addApplication,
  };
}