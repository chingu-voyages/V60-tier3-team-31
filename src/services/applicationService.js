const STORAGE_KEY = "applications";

function readFromStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function writeToStorage(applications) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  return applications;
}

const localApplicationDataSource = {
  list() {
    return readFromStorage();
  },

  create(application) {
    const current = readFromStorage();

    const exists = current.some((app) => app.id === application.id);
    if (exists) return current;

    const updated = [...current, application];
    return writeToStorage(updated);
  },

  saveAll(applications) {
    return writeToStorage(applications);
  },

  delete(id) {
    const current = readFromStorage();
    const updated = current.filter((app) => app.id !== id);
    return writeToStorage(updated);
  },
};

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

  delete(id) {
    return localApplicationDataSource.delete(id);
  },
};