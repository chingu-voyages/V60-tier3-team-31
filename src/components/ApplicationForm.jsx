import { useState, useRef } from "react";
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
  const timeoutRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

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

    setSuccessMessage("Application added successfully!");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    setFormData({ ...INITIAL_APPLICATION });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Application</h2>

      {successMessage && <p>{successMessage}</p>}

      <label>
        Company
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      {errors.company && <p>{errors.company}</p>}

      <label>
        Role
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
      </label>
      {errors.role && <p>{errors.role}</p>}

      <label>
        Date Applied
        <input
          name="dateApplied"
          type="date"
          value={formData.dateApplied}
          onChange={handleChange}
        />
      </label>
      {errors.dateApplied && <p>{errors.dateApplied}</p>}

      <label>
        Location
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>

      <label>
        Status
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
      </label>
      {errors.status && <p>{errors.status}</p>}

      <label>
        Notes
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Application</button>
    </form>
  );
}