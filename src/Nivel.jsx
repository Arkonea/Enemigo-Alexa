import { useEffect, useState } from "react";

function Nivel() {
    const [Niveles, setNiveles] = useState([]);

    useEffect(() => {
        fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel', {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        })
            .then(response => response.json())
            .then(data => setNiveles(data));
    }, []);
           
        async function eliminar(id){
            await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id=eq.${id}`, {
                method: 'DELETE',
                headers: {
                    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
                },
            },
        ).then(() => {
                setNiveles(Niveles.filter(nivel => nivel.id_nivel !== id));
            });
        }

        function actualizar(id){
            console.log("Actualizar nivel con id:", id);
        }

    return (
        <div>
            <h2>Niveles</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id Niveles</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Dificultad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {Niveles.map((nivel) => (
                        <tr key={nivel.id_nivel}>
                            <td>{nivel.id_nivel}</td>
                            <td>{nivel.nombre}</td>
                            <td>{nivel.descripcion}</td>
                            <td>{nivel.dificultad}</td>
                            <td>{nivel.Acciones}</td>
                            <td>
                                <button onClick={()=>actualizar(nivel.id_nivel)}>Editar</button>
                                <button onClick={()=>eliminar(nivel.id_nivel)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    

}

export default Nivel;

    