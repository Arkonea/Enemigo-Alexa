import  { useEffect, useState} from "react";

function Enemigo(){
    const [Enemigos, setEnemigo] = useState([]);

    useEffect(() => {
        fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo', {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        })
            .then(response => response.json())
            .then(data => setEnemigo(data));
    }, []);

   
        async function eliminar(id){
            await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo?id=eq.${id}`, {
                method: 'DELETE',
                headers: {
                    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnV1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
                },
            },
        ).then(() => {
                setEnemigo(Enemigos.filter(enemi => enemi.id_enemigo !== id));
            });
        }

        function actualizar(id){
            a
        }


    return (
        <div>
            <h2>Lista de enemigos:</h2>

            <table>
                <thead>
                    <tr>
                        <th>id_Enemigo</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Vida</th>
                        <th>Ataque</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {Enemigos.map((enemi) => (
                        <tr key={enemi.id_enemigo}>
                            <td>{enemi.id_enemigo}</td>
                            <td>{enemi.nombre}</td>
                            <td>{enemi.tipo}</td>
                            <td>{enemi.vida}</td>
                            <td>{enemi.ataque}</td>
                            <td>
                                <button>Editar</button>
                                <button onClick={() => eliminar(enemi.id_enemigo)}>Eliminar</button>
                                </td>
                        </tr>
                    )) }
                </tbody>
            </table>



        </div>
    )}
}

export default Enemigo;


