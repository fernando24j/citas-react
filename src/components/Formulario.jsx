import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);
  // if (paciente) {
  //   const { nombre, propietario, email, fecha, sintomas } = paciente
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const pacienteNew = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      _id: '',
    };

    if (paciente?._id) {
      pacienteNew._id = paciente._id;
      const pacientesActualizados = pacientes.map((x) => {
        if (x._id == paciente._id) {
          return pacienteNew;
        } else {
          return x;
        }
      });
      setPacientes([...pacientesActualizados]);
      setPaciente({})
    } else {
      pacienteNew._id = generarId();
      setPacientes([...pacientes, pacienteNew]);
    }
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  useEffect(() => {
    console.log(paciente);
    if (Object.keys(paciente).length > 0) {
      const { nombre, propietario, email, fecha, sintomas } = paciente;
      setNombre(nombre);
      setPropietario(propietario);
      setEmail(email);
      setFecha(fecha);
      setSintomas(sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y &nbsp;
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-xl py-10 px-5 mb-5"
      >
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder="Nombre de la mascota"
            type="text"
            name=""
            id="mascota"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre del propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder="Nombre del propietario"
            type="text"
            name=""
            id="propietario"
            value={propietario}
            onChange={(evento) => setPropietario(evento.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder="email"
            type="Email contacto propietario"
            name=""
            id="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="Alta"
          >
            Fecha de alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="date"
            name=""
            id="Alta"
            value={fecha}
            onChange={(evento) => setFecha(evento.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="text"
            name=""
            id="sintomas"
            value={sintomas}
            onChange={(evento) => setSintomas(evento.target.value)}
          />
          {error && <Error>Todos los campos son obligatorios</Error>}
        </div>
        <input
          type="submit"
          className="bg-indigo-500 w-full p-3 text-white hover:bg-indigo-800 cursor-pointer transition-all"
          value={paciente?._id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Formulario;
