import { useState } from "react";
import { INITIAL_APPLICATION, STATUS_OPTIONS } from "../constants/application";

export function ApplicationForm({ addApplication }) {
  const [formData, setFormData] = useState(INITIAL_APPLICATION);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

const handleSubmit = (event) => {
  event.preventDefault();

  const newApplication = {
    ...formData,
    id: crypto.randomUUID(),
  };

  addApplication(newApplication);
  setFormData({ ...INITIAL_APPLICATION });
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company"
      />

      <input
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="Role"
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
        placeholder="Location"
      />

      <select name="status" value={formData.status} onChange={handleChange}>
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
        placeholder="Notes"
      />

      <button type="submit">Add</button>
    </form>
  );
}
