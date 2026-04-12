export function ApplicationList({ applications }) {
  if (!applications || applications.length === 0) {
    return <p>No applications yet.</p>;
  }

  return (
    <section>
      <h2>Applications</h2>
      {applications.map((application) => {
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
          <article key={id}>
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Role:</strong> {role}</p>
            <p>
              <strong>Date Applied:</strong>{" "}
              {new Date(dateApplied).toLocaleDateString()}
            </p>
            <p><strong>Location:</strong> {location || "Not provided"}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Notes:</strong> {notes || "No notes added"}</p>
          </article>
        );
      })}
    </section>
  );
}