import { ApplicationForm } from "../components/ApplicationForm";
import { ApplicationGrid } from "../components/ApplicationGrid";
import { useApplications } from "../hooks/useApplications";

export default function Home() {
  const { applications, addApplication } = useApplications();

  return (
    <div>
      <h1>Home Page</h1>
      <ApplicationForm addApplication={addApplication} />
      <ApplicationGrid
        applications={applications}
      />
    </div>
  );
}
