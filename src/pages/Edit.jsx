import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApplicationsContext } from "../context/useApplicationsContext";
import { validateApplication } from "../utils/validation/applicationValidation";
import { STATUS_OPTIONS } from "../constants/application";

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [saved, setSaved] = useState(false);

    const { applications, updateApplication } = useApplicationsContext();
    const application = applications?.find((app) => app.id === id);


    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (application) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData(application);
        }
    }, [application]);
        
    if (!applications) {
        return <p>Loading...</p>;
    }

    if (!application) {
        return <p>Application not found</p>;
    }

    if (!formData) {
        return <p>Loading...</p>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };


    const handleSave = () => {
        const errors = validateApplication(formData);

        if (Object.keys(errors).length > 0) {
            console.error(errors);
            return;
        }
        updateApplication(formData);
        setSaved(true);
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
                {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
                </select>

                <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                />
                <button onClick={handleSave}>
                    Save
                </button>
            </section>
        </div>
    );
}