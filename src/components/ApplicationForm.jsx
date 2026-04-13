import { useState } from "react";
import {
  INITIAL_APPLICATION,
  STATUS_OPTIONS,
} from "../constants/application";
import {
  validateApplication,
} from "../utils/validation/applicationValidation";

export function ApplicationForm({ addApplication }) {
  const [formData, setFormData] = useState(() => ({
    ...INITIAL_APPLICATION,
  }));

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateApplication(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newApplication = {
      ...formData,
      id: crypto.randomUUID(),
    };

    addApplication(newApplication);

    // Show success feedback
    setSuccessMessage("Application added successfully!");

    // Reset form
    setFormData({ ...INITIAL_APPLICATION });
    setErrors({});

    // Auto-hide success message
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Application</h2>

      {/* Success Message */}
      {successMessage && <p>{successMessage}</p>}

      {/* Company */}
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company"
      />
      {errors.company && <p>{errors.company}</p>}

      {/* Role */}
      <input
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="Role"
      />
      {errors.role && <p>{errors.role}</p>}

      {/* Date Applied */}
      <input
        name="dateApplied"
        type="date"
        value={formData.dateApplied}
        onChange={handleChange}
      />
      {errors.dateApplied && <p>{errors.dateApplied}</p>}

      {/* Location */}
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
      />

      {/* Status */}
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        {STATUS_OPTIONS.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      {errors.status && <p>{errors.status}</p>}

      {/* Notes */}
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Notes"
      />

      <button type="submit">Add Application</button>
    </form>
  );
}