import { ApplicationForm } from "../components/ApplicationForm";
import { ApplicationList } from "../components/ApplicationList";
import { useApplicationsContext } from "../context/useApplicationsContext";

export default function Home() {
  const { applications, addApplication } = useApplicationsContext();
  console.log("HOME RENDER");
  return (
    <div>
      <h1>Home Page</h1>
      <ApplicationForm addApplication={addApplication} />
      <ApplicationList applications={applications} />
    </div>
  );
}
