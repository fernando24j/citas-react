import Paciente from "./Paciente";
import { useEffect } from "react";

function ListadoPacientes({ pacientes,setPaciente, eliminarPaciente }) {
  // console.log(pacientes);
  useEffect(() => {
    if (pacientes?.length>0) {
      // console.log('Nuevo paciente');      
    }
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      { pacientes?.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus &nbsp;
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => {
            return <Paciente key={paciente._id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Coimienza agregando pacientes &nbsp;
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
