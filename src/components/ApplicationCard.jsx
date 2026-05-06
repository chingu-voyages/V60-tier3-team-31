import { useNavigate } from "react-router-dom";

export function ApplicationCard({ application, onDelete }) {
  const { id, company, role, dateApplied, status } = application;
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-header">
        <h3>{company}</h3>
        <span className={`status status-${status.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <p className="role">{role}</p>

      <p className="date">
        Applied: {new Date(dateApplied).toLocaleDateString()}
      </p>

      <div className="actions">
        <button onClick={() => navigate(`/edit/${id}`)}>
          Edit
        </button>

        <button onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}