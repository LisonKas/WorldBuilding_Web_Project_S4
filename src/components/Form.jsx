import { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import worldbuilding from "../../data/worldbuilding.json";

export default function Form({ setFormData }) {
  const [localFormData, setLocalFormData] = useState({});
  const [filteredResults, setFilteredResults] = useState(worldbuilding.results);

  const handleChange = (name, value) => {
    const updatedData = { ...localFormData, [name]: value };
    setLocalFormData(updatedData);
    setFormData(updatedData);
  };

  // Fonction de filtrage des résultats en fonction des valeurs de formulaire
  const filterResults = () => {
    let results = worldbuilding.results;

    // Filtrer par température
    if (localFormData.temperature) {
      const temperature = Number(localFormData.temperature);
      results = results.filter(
        (result) =>
          result.temperature_min <= temperature && result.temperature_max >= temperature
      );
    }

    // Filtrer par relief
    if (localFormData.relief) {
      results = results.filter((result) => result.relief === localFormData.relief);
    }

    // Filtrer par ressources
    if (localFormData.ressources && localFormData.ressources.length > 0) {
      results = results.filter((result) =>
        localFormData.ressources.every((resource) => result.ressources.includes(resource))
      );
    }

    // Filtrer par pourcentage d'eau
    if (localFormData.percentage_water) {
      const waterPercentage = Number(localFormData.percentage_water);
      results = results.filter(
        (result) =>
          result.percentage_water_min <= waterPercentage &&
          result.percentage_water_max >= waterPercentage
      );
    }

    // Filtrer par pourcentage de sel
    if (localFormData.percentage_salt) {
      const saltPercentage = Number(localFormData.percentage_salt);
      results = results.filter(
        (result) =>
          result.percentage_salt_min <= saltPercentage &&
          result.percentage_salt_max >= saltPercentage
      );
    }

    // Filtrer par pourcentage de réalisme
    if (localFormData.percentage_realism) {
      const realismPercentage = Number(localFormData.percentage_realism);
      results = results.filter(
        (result) =>
          result.percentage_realism_min <= realismPercentage &&
          result.percentage_realism_max >= realismPercentage
      );
    }

    // Mettre à jour les résultats filtrés
    setFilteredResults(results);
  };

  // Utilisation de useEffect pour filtrer les résultats à chaque modification du formulaire
  useEffect(() => {
    filterResults();
  }, [localFormData]);

  return (
    <>
      <form>
        {worldbuilding.form_fields.map((field) => (
          <div key={field.name}>
            <label>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</label>

            {/* Champ de type number (ex : température, pourcentage d'eau, sel, etc.) */}
            {field.type === "number" && (
              <input
                type="number"
                value={localFormData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={`Enter value in ${field.unit}`}
              />
            )}

            {/* Champ de type sélection (ex : relief) */}
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

            {/* Champ de type texte (ex : ressources) */}
            {field.type === "text" && (
              <div>
                <label>Select Resources</label>
                {field.options.map((resourceCategory) => (
                  <div key={resourceCategory.ressources_type}>
                    <div>{resourceCategory.ressources_type}</div>
                    <div>
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
      <div className="environment-gallery">
        {filteredResults.map((result) => (
          <ResultCard key={result.environment} result={result} />
        ))}
      </div>
    </>
  );
}
