import axios from "axios";

import { useState } from "react";

import { createContext } from "react";

const ColaboradorContext = createContext()

function ColaboradorProvider({children}) {
    const URL_COLABORADORES=''
    const [colaboradores,setColaboradores]=useState([])

    const obtenerColaboradores = async ()=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const rta = await axios(URL_COLABORADORES,configuracion)
            setColaboradores(rta)
        }catch(error) {
            console.log(error)
        }
    }

    const crearColaborador = async ({dataColaborador})=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const rta = await axios.post(URL_COLABORADORES,dataColaborador,configuracion)
            setColaboradores([rta,...colaboradores])
        }catch(error) {
            console.log('aqui,error')
            console.log(error)
        }
    }

    return (
        <ColaboradorContext.Provider
            value={{
                crearColaborador,
                obtenerColaboradores,
                colaboradores
            }}
        >
            {children}
        </ColaboradorContext.Provider>
    )
}

export{
    ColaboradorContext
}

export default ColaboradorProvider;