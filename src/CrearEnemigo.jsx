import {useState } from "react";

function CrearEnemigo(){

    const [Enemigo, setEnemigo] = useState({
        Nombre: '',
        Tipo: '',
        Vida: '',
        Ataque: ''
    });

    async function handleSubmit(e){
        e.preventDefault();
        await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                
            },
            body: JSON.stringify({
                nombre: Enemigo.Nombre,
                tipo: Enemigo.Tipo,
                vida: Enemigo.Vida,
                ataque: Enemigo.Ataque
            })
        });

        
    }

    return (
        <div>
            <h2>Crear enemigo</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e) => setEnemigo({...Enemigo, Nombre: e.target.value })} />
                <label htmlFor="tipo">Tipo</label>
                <input type="text" id="tipo" name="tipo" onChange={(e) => setEnemigo({...Enemigo, Tipo: e.target.value })} />
                <label htmlFor="vida">Vida</label>
                <input type="text" id="Vida" name="vida" onChange={(e) => setEnemigo({...Enemigo, Vida: e.target.value })} />
                <label htmlFor="ataque">Ataque</label>
                <input type="text" id="ataque" name="ataque" onChange={(e) => setEnemigo({...Enemigo, Ataque: e.target.value })} />
                <button type="submit">Crear enemigo</button>
            </form>
                
        </div>
    )
}
export default CrearEnemigo;