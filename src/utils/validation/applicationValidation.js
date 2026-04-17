export function validateApplication(data) {
  const errors = {};

  const company = data.company?.trim();
  const role = data.role?.trim();
  const dateApplied = data.dateApplied;
  const status = data.status;

  if (!company) {
    errors.company = "Company name is required";
  }

  if (!role) {
    errors.role = "Role is required";
  }

  if (!dateApplied) {
    errors.dateApplied = "Date applied is required";
  }

  if (!status) {
    errors.status = "Status is required";
  }

  return errors;
}