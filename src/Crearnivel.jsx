import {useState} from 'react'
import Nivel from './Nivel';

function Crearnivel () {
     
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [dificultad, setDificultad] = useState("");

    async function crearNivel(e) {
        e.preventDefault();
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                
            },
            body: JSON.stringify({ nombre:nombre, descripcion:descripcion, dificultad:dificultad})
    })
    }

    return (
        <div>
            <h2>Crear Nivel</h2>
            <form onSubmit={crearNivel}>
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre({...crearNivel, nombre: e.target.value})} />
                <label>Descripcion</label>
                <input type="text" value={descripcion} onChange={(e) => setDescripcion({...crearNivel, descripcion: e.target.value})} />
                <label>Dificultad</label>
                <input type="text" value={dificultad} onChange={(e) => setDificultad({...crearNivel, dificultad: e.target.value})} />
                <button type="submit">Crear Nivel</button>
            </form>
        </div>
    )

}
export default Crearnivel;