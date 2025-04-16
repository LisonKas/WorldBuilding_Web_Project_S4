import { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import FormFields from "./FormFields";
import "../css/Form.css";
import worldbuilding from "../../data/worldbuilding.json";

export default function Form() {
  const [localFormData, setLocalFormData] = useState({});
  const [filteredResults, setFilteredResults] = useState(worldbuilding.results);

  const handleChange = (name, value) => {
    const updatedData = { ...localFormData, [name]: value };
    setLocalFormData(updatedData);
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
      <FormFields formData={localFormData} onChange={handleChange} formFields={worldbuilding.form_fields}/>
      <div className="environment-gallery" flex="wrap">
        {filteredResults.map((result) => (
          <ResultCard key={result.environment} result={result} />
        ))}
      </div>
    </>
  );
}