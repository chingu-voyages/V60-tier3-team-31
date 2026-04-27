import { ApplicationCard } from "./ApplicationCard";

export function ApplicationGrid({applications}) {
    if (!applications || applications.length == 0) {
        return <p>No applications yet.</p>
    }

    return (
        <section>
            <h2>Applications</h2>

            <div className="grid">
                {applications.map((app) => {
                    return (
                    <ApplicationCard
                    key={app.id}
                    application={app} 
                    />
                
                )})}
            </div>
        </section>
    )
}