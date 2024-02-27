import { useState } from "react"

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import InputType from "../InputType"
import InputTypeSelect from "../InputTypeSelect"

import TicketSalidad from "./TicketSalidad"

const parqueaderos = [
    {
        value:'423423423423d',
        text:'Parqueadero la 33'
    },
    {
        value:'42sdad3423d',
        text:'Parqueadero Suramericana'
    },
    {
        value:'42sda423d',
        text:'Parqueadero Buenos Aires'
    }
]

function ModalSalidaVehiculo({isOpen}){

    const[next,setNext]=useState(false)

    const handleSubtmit =(e)=>{
        e.preventDefault()
        console.log({
            nombres
        })
    }

    return (
        <form
            onSubmit={handleSubtmit} 
            className="max-w-2xl bg-white flex flex-col gap-5 border shadow md:px-10 px-5 md:py-10 py-5 rounded-md sm:mx-auto mx-2 mt-5"
        >
            {
                !next ?
                <>
                    <div className="flex flex-row justify-between">
                        <h2 className="text-2xl font-bold italic tracking-wider">¿Registrar salidad de vehiculo?</h2>
                    </div>

                    <div className="w-full flex flex-col sm:flex-row sm:gap-2">
                        <button
                            onClick={isOpen}
                            type="submit"
                            className='w-full text-black text-lg tracking-wide font-semibold rounded-md  bg-green-400 border border-green-600'
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            onClick={()=>setNext(true)}
                            className='w-full text-black text-lg tracking-wide font-semibold rounded-md  bg-green-400 border border-green-600'
                        >
                            Registrar salida
                        </button>
                    </div>
                </> 
                :
                <TicketSalidad
                    isOpen={isOpen}
                />

            }


        </form>
    )
}

export default ModalSalidaVehiculo;