export function ApplicationCard({ application }) {
    const { company, role, dateApplied, status } = application;

    return (
        <div>
            <h3>{company}</h3>
            <p>{role}</p>

            <span>{status}</span>
            <p>{new Date(dateApplied).toLocaleDateString()}</p>

            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}