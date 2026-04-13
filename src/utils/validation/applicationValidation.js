export function validateApplication(data) {
  const errors = {};

  if (!data.company?.trim()) {
    errors.company = "Company name is required";
  }

  if (!data.role?.trim()) {
    errors.role = "Role is required";
  }

  if (!data.dateApplied) {
    errors.dateApplied = "Date applied is required";
  }

  if (!data.status) {
    errors.status = "Status is required";
  }

  return errors;
}

// Optional helper
export function isApplicationValid(data) {
  return Object.keys(validateApplication(data)).length === 0;
}