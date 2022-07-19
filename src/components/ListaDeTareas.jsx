import React, { useState } from "react";
import "../css/ListaDeTareas.css";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

export default function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      //*Cadena vacia
      tarea.texto = tarea.texto.trim(); //*Espacios innecesarios

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
    // console.log("Tarea agregada");
    // console.log(tarea);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => {
          return (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          );
        })}
      </div>
    </>
  );
}
