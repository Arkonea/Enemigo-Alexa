import {useState } from "react";
import { useParams } from "react-router-dom";

function ActEnemigo(){
    const { id } = useParams();

    const [ vida, setVida ] = useState("");

    async function actualizar(){
        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo?id=eq.${id}`, {
            method: 'PATCH',
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Vida: vida
            })
        });
    }
    return (
        <div>
            <h2>Actualizar Enemigo</h2>
            <form onSubmit={e => { e.preventDefault(); actualizar}}>
                <input type="number" placeholder="Editar vida" onChange={event => setVida(event.target.value)} />
                <button type="submit">Actualizar</button>
            </form>
        </div>
    )
}
export default ActEnemigo;