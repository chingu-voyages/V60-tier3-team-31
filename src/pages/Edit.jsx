import { useState } from "react";
import { applicationService } from "../services/applicationService";
import { useParams, useNavigate  } from "react-router-dom";

export default function Edit() {
    const { id } = useParams();
    const [saved, setSaved] = useState(false);
    const navigate = useNavigate();

    const applications = applicationService.getAll();
    const application = applications.find((app) => app.id === id);

    if (!application) {
        return <p>Application not found</p>;
    }
    
    const [formData, setFormData] = useState(application);    
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };


    return (
        <div style={{ padding: "20px" }}>
            {saved && <div className="toast">Saved successfully</div>}
            <button onClick={() => navigate("/")}>
            Back
            </button>
            <section className="card">
                <h1>Edit Application</h1>

                <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                />

                <input
                name="role"
                value={formData.role}
                onChange={handleChange}
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
                />

                <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
                </select>

                <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                />
                <button
                    onClick={() => {
                        applicationService.update(formData);
                        setSaved(true);

                        setTimeout(() => {
                        setSaved(false);
                        }, 1500);

                        setTimeout(() => {
                        navigate("/");
                        }, 1800);
                    }}
                >
                    Save
                </button>
            </section>
        </div>
    );
}