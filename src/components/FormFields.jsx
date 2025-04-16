import React from "react";
import "../css/Form.css";

export default function FormFields({ formData, onChange, formFields }) {
    return (
        <form className="form-content">
            {formFields.map((field) => (
                <div key={field.name}>
                <label>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</label>

                {field.type === "number" && (
                    <input type="number" value={formData[field.name] || ""} onChange={(e) => onChange(field.name, e.target.value)} placeholder={`Enter value in ${field.unit}`}/>
                )}

                {field.type === "selection" && !field.options[0]?.ressources_type && (
                    <select value={formData[field.name] || ""} onChange={(e) => onChange(field.name, e.target.value)}>
                        <option value="">Select...</option>
                        {field.options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                )}

                {field.type === "text" && (
                    <div className="ressources-titles">
                        <label>Select Resources</label>
                        {field.options.map((resourceCategory) => (
                        <div key={resourceCategory.ressources_type}>
                            <div className="ressources-content">{resourceCategory.ressources_type}</div>
                            <div className="ressources-content">
                                {resourceCategory.options.map((option) => (
                                    <label key={option}>
                                        <input type="checkbox" value={option} checked={(formData[field.name] || []).includes(option)} onChange={(e) => {
                                            const selectedOptions = formData[field.name] || [];
                                            let updatedOptions;
                                            if (e.target.checked) {
                                                updatedOptions = [...selectedOptions, option];
                                            } else {
                                                updatedOptions = selectedOptions.filter((opt) => opt !== option);
                                            }
                                            onChange(field.name, updatedOptions);
                                        }}/>
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        ))}
                    </div>
                )}
                </div>
            ))}
        </form>
    );
}