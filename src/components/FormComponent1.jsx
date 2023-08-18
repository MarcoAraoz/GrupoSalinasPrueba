import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPerson } from "../features/redux/peopleSlice"; // Asegúrate de importar la acción adecuada

const FormComponent1 = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();
  const history = useNavigate();

  const professions = ["Profesión 1", "Profesión 2", "Profesión 3"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch Redux action to add person
    dispatch(addPerson({ name, profession, age }));

    // Save to local storage
    const person = { name, profession, age };
    localStorage.setItem("person", JSON.stringify(person));

    // Redirect to a different route (if using React Router)
    history.push("/success");
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="profession">Profesión</label>
          <select
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="border p-2"
            required
          >
            <option value="">Selecciona una profesión</option>
            {professions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="age">Edad</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormComponent1;
