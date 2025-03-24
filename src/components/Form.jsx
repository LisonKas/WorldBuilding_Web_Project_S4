import { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import "../css/Form.css";
import worldbuilding from "../../data/worldbuilding.json";

export default function Form({ setFormData }) {
  const [localFormData, setLocalFormData] = useState({});
  const [filteredResults, setFilteredResults] = useState(worldbuilding.results);

  const handleChange = (name, value) => {
    const updatedData = { ...localFormData, [name]: value };
    setLocalFormData(updatedData);
    setFormData(updatedData);
  };

  const filterResults = () => {
    let results = worldbuilding.results;

    if (localFormData.temperature) {
      const temperature = Number(localFormData.temperature);
      results = results.filter(
        (result) =>
          result.temperature_min <= temperature && result.temperature_max >= temperature
      );
    }

    if (localFormData.relief) {
      results = results.filter((result) => result.relief === localFormData.relief);
    }

    if (localFormData.ressources && localFormData.ressources.length > 0) {
      results = results.filter((result) =>
        localFormData.ressources.every((resource) => result.ressources.includes(resource))
      );
    }

    if (localFormData.percentage_water) {
      const waterPercentage = Number(localFormData.percentage_water);
      results = results.filter(
        (result) =>
          result.percentage_water_min <= waterPercentage &&
          result.percentage_water_max >= waterPercentage
      );
    }

    if (localFormData.percentage_salt) {
      const saltPercentage = Number(localFormData.percentage_salt);
      results = results.filter(
        (result) =>
          result.percentage_salt_min <= saltPercentage &&
          result.percentage_salt_max >= saltPercentage
      );
    }

    if (localFormData.percentage_realism) {
      const realismPercentage = Number(localFormData.percentage_realism);
      results = results.filter(
        (result) =>
          result.percentage_realism_min <= realismPercentage &&
          result.percentage_realism_max >= realismPercentage
      );
    }

    setFilteredResults(results);
  };

  useEffect(() => {
    filterResults();
  }, [localFormData]);

  return (
    <>
      <form className="form-content">
        {worldbuilding.form_fields.map((field) => (
          <div key={field.name}>
            <label>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</label>

            {field.type === "number" && (
              <input
                type="number"
                value={localFormData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={`Enter value in ${field.unit}`}
              />
            )}

            {field.type === "selection" && !field.options[0]?.ressources_type && (
              <select
                value={localFormData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
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
                          <input
                            type="checkbox"
                            value={option}
                            checked={(localFormData[field.name] || []).includes(option)}
                            onChange={(e) => {
                              const selectedOptions = localFormData[field.name] || [];
                              let updatedOptions;
                              if (e.target.checked) {
                                updatedOptions = [...selectedOptions, option];
                              } else {
                                updatedOptions = selectedOptions.filter((opt) => opt !== option);
                              }
                              handleChange(field.name, updatedOptions);
                            }}
                          />
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
      <div className="environment-gallery" flex="wrap">
        {filteredResults.map((result) => (
          <ResultCard key={result.environment} result={result} />
        ))}
      </div>
    </>
  );
}
