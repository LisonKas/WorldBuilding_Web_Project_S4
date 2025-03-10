import { useState } from "react";
import worldbuilding from "../../data/worldbuilding.json";

export default function Form() {
    const [formData, setFormData] = useState({});
    const [randomResult, setRandomResult] = useState(null);
  
     
    // const [data, setData] = useState([]

    // )
    // const [category, setCategory] = useState("all")

    // const filteredData = useMemo(() => {
    //   return data.filter((item) => {
    //     return item.categories.includes(category)
    //   })
    // }, [category])

    const handleChange = (fieldName, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      let matchedResult = null;

      for (const result of worldbuilding.results) {
        console.log(result.environment);
        const matchesTemperature =
          formData.temperature >= result.temperature_min &&
          formData.temperature <= result.temperature_max;

        console.log("temperature : ", matchesTemperature);

        const matchesRelief = formData.relief === result.relief;

        console.log("Relief : ", matchesRelief);

        const formResources = formData.ressources || [];
        let matchesResources = true;

        for (const resource of result.ressources) {
          if (formResources.indexOf(resource) === -1) {
            matchesResources = false;
            break;
          }
        }

        console.log("Ressources : ", matchesResources);

        const matchesPercentageWater =
          formData.percentage_water >= result.percentage_water_min &&
          formData.percentage_water <= result.percentage_water_max;

        console.log("% water : ", matchesPercentageWater);

        const matchesPercentageSalt =
          formData.percentage_salt >= result.percentage_salt_min &&
          formData.percentage_salt <= result.percentage_salt_max;

        console.log("% salt : ", matchesPercentageSalt);

        const matchesPercentageRealism =
          formData.percentage_realism >= result.percentage_realism_min &&
          formData.percentage_realism <= result.percentage_realism_max;

        console.log("% realism : ", matchesPercentageRealism);

        if (
          matchesTemperature &&
          matchesRelief &&
          matchesResources &&
          matchesPercentageWater &&
          matchesPercentageSalt &&
          matchesPercentageRealism
        ) {
          matchedResult = result;
          break;
        }
      }
  
      if (matchedResult) {
        setRandomResult(matchedResult);
        onNavigate("SingleResultPage", matchedResult);
      } else {
        alert("Aucun résultat correspondant trouvé.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-gray-100 rounded-lg">
        {worldbuilding.form_fields.map((field) => (
          <div key={field.name} className="flex flex-col space-y-2">
            <label className="font-semibold">
              {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
            </label>
            
            {/* Handling number inputs */}
            {field.type === "number" ? (
              <input
                type="number"
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="p-2 border rounded-md"
                placeholder={`Enter value in ${field.unit}`}
              />
            ) : null}

            {/* Handling selection inputs for regular fields like 'relief' */}
            {field.type === "selection" && !field.options[0]?.ressources_type ? (
              <select
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="p-2 border rounded-md"
              >
                <option value="">Select...</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : null}

            {field.type === "text" ? (
              <div className="space-y-4">
                <label className="font-semibold">Select Resources</label>

                {/* Affichage des checkboxes pour chaque catégorie de ressources */}
                {field.options.map((resourceCategory) => (
                  <div key={resourceCategory.ressources_type}>
                    <div className="font-semibold">{resourceCategory.ressources_type}</div>
                    <div className="space-y-2">
                      {resourceCategory.options.map((option) => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={option}
                            checked={(formData[field.name] || []).includes(option)}
                            onChange={(e) => {
                              const selectedOptions = formData[field.name] || [];
                              let updatedOptions;
                              if (e.target.checked) {
                                updatedOptions = [...selectedOptions, option]; // Ajout de l'option
                              } else {
                                updatedOptions = selectedOptions.filter((opt) => opt !== option); // Suppression de l'option
                              }
                              handleChange(field.name, updatedOptions); // Mise à jour des ressources sélectionnées
                            }}
                            className="w-4 h-4"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            
          </div>
        ))}
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
  }