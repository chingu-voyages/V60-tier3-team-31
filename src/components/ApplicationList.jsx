import { useState } from "react";
import { Link } from "react-router-dom";

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function getStatusColor(status) {
  switch (status) {
    case "Applied":
      return "blue";
    case "Interview":
      return "orange";
    case "Rejected":
      return "red";
    default:
      return "gray";
  }
}

export function ApplicationList({ applications = [] }) {
  const [sortBy, setSortBy] = useState("date");

  if (!applications) {
    return (
      <div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div>
        <h2>No applications yet</h2>
        <p>Start by adding your first job application.</p>
      </div>
    );
  }

  const sortedApps = [...applications].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.dateApplied) - new Date(a.dateApplied);
    }
    if (sortBy === "company") {
      return a.company.localeCompare(b.company);
    }
    return 0;
  });
  

  return (
    <section>
      <h2>Applications</h2>

      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="date">Sort by Date</option>
        <option value="company">Sort by Company</option>
      </select>

      <div className="grid">
        {sortedApps.map((application) => {
          const {
            id,
            company,
            role,
            dateApplied,
            location,
            status,
            notes,
          } = application;

          return (
            <Link to={`/edit/${id}`} key={id}>
              <article className="card">
                <p><strong>{company}</strong></p>
                <p>{role}</p>
                <p>{formatDate(dateApplied)}</p>

                <span className={`badge ${getStatusColor(status)}`}>
                  {status}
                </span>

                <p>{location || "No location"}</p>
                <p>{notes || "No notes"}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}