import { useSyncExternalStore } from "react";
import { applicationService } from "../services/applicationService";

// simple cache so React doesn't freak out
let cached = applicationService.getAll();

function subscribe(callback) {
  // IMPORTANT: storage event doesn't fire in same tab reliably,
  // so we use a manual trigger system
  window.addEventListener("app-storage-change", callback);

  return () => {
    window.removeEventListener("app-storage-change", callback);
  };
}

// IMPORTANT FIX: stable snapshot (NO recalculation every render)
function getSnapshot() {
  return cached;
}

// helper to refresh cache + notify React
function emitChange() {
  cached = applicationService.getAll();
  window.dispatchEvent(new Event("app-storage-change"));
}

export function useApplications() {
  const applications = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getSnapshot
  );

  function addApplication(application) {
    applicationService.create(application);
    emitChange();
  }

  function deleteApplication(id) {
    applicationService.delete(id);
    emitChange();
  }

  function updateApplication(updatedApp) {
    const all = applicationService.getAll();

    const updated = all.map((app) =>
      app.id === updatedApp.id ? updatedApp : app
    );

    applicationService.saveAll(updated);
    emitChange();
  }

  return {
    applications,
    addApplication,
    deleteApplication,
    updateApplication,
  };
}