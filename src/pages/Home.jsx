import { useState } from "react";
import { ApplicationForm } from "../components/ApplicationForm";
import { ApplicationGrid } from "../components/ApplicationGrid";
import { DeleteConfirmDialog } from "../components/DeleteConfirmDialog";
import { useApplications } from "../hooks/useApplications";

export default function Home() {

  const { applications, addApplication, deleteApplication } = useApplications();
  const [selectedId, setSelectedId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteClick = (id) => {
    console.log(id);
    setSelectedId(id);
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log(applications);
    console.log(selectedId);
    deleteApplication(selectedId);
    setIsDialogOpen(false);
    alert("Application deleted successfully");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ApplicationForm addApplication={addApplication} />
      
      <DeleteConfirmDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      <ApplicationGrid
        applications={applications}
        onDelete={handleDeleteClick}
      />
    </div>
  );
}
