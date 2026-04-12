const STORAGE_KEY = "applications";

function readFromStorage() {
  const storedApplications = localStorage.getItem(STORAGE_KEY);

  if (!storedApplications) {
    return [];
  }

  try {
    return JSON.parse(storedApplications);
  } catch {
    return [];
  }
}

function writeToStorage(applications) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  return applications;
}

// Data source layer: handles persistence (localStorage for now).
// Can be replaced with API implementation later.
const localApplicationDataSource = {
  list() {
    return readFromStorage();
  },

  create(application) {
    if (!application || typeof application.id !== "string") {
      throw new Error("Invalid application: missing valid id");
    }

    const currentApplications = localApplicationDataSource.list();
    const updatedApplications = [...currentApplications, application];

    return writeToStorage(updatedApplications);
  },

  saveAll(applications) {
    return writeToStorage(applications);
  },
};
// Service layer: abstracts data source from the rest of the app.
export const applicationService = {
  getAll() {
    return localApplicationDataSource.list();
  },

  create(application) {
    return localApplicationDataSource.create(application);
  },

  saveAll(applications) {
    return localApplicationDataSource.saveAll(applications);
  },
};

export function getApplications() {
  return applicationService.getAll();
}

export function addApplication(application) {
  return applicationService.create(application);
}

export function saveApplications(applications) {
  return applicationService.saveAll(applications);
}
