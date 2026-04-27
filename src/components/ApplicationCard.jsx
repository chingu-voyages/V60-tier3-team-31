export function ApplicationCard({ application, onDelete }) {
    const { id, company, role, dateApplied, status } = application;

    return (
        <div>
            <h3>{company}</h3>
            <p>{role}</p>

            <span>{status}</span>
            <p>{new Date(dateApplied).toLocaleDateString()}</p>

            <div>
                <button>Edit</button>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
}