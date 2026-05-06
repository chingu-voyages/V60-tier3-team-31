import { useState, useRef } from "react";
import {
  INITIAL_APPLICATION,
  STATUS_OPTIONS,
} from "../constants/application";
import { validateApplication } from "../utils/validation/applicationValidation";

export function ApplicationForm({ addApplication }) {
  const [formData, setFormData] = useState({ ...INITIAL_APPLICATION });
  const [successMessage, setSuccessMessage] = useState("");

  const timeoutRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateApplication(formData);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const newApplication = {
      ...formData,
      id: crypto.randomUUID(),
    };

    addApplication(newApplication);

    setSuccessMessage("Application added successfully!");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    setFormData({ ...INITIAL_APPLICATION });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Application</h2>

      {successMessage && <p>{successMessage}</p>}

      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
      />

      <input
        name="role"
        value={formData.role}
        onChange={handleChange}
      />

      <input
        name="dateApplied"
        type="date"
        value={formData.dateApplied}
        onChange={handleChange}
      />

      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
      />

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

      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">Add Application</button>
    </form>
  );
}