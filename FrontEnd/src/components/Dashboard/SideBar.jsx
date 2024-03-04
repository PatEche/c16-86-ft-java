//components
import TarjetaMenu from "../Tarjetas/TarjetaMenu"

//react router
import { Link,useNavigate } from "react-router-dom"

// font awesome
import {faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const menu = [
    {'text':'parqueaderos','link':'/dashboard/parqueaderos','type':'parqueadero','id':'34lhadasd34234'},
    {'text':'parkers','link':'/dashboard/parkers','type':'parker','id':'34l2323fdfsasd34234'},
    {'text':'clientes','link':'/dashboard/usuarios','type':'usuario','id':'54548887gg323fdfsasd34234'},
]

function SideBar() {

    const navigate = useNavigate()
  
    const returnBack=()=>{
      navigate(-1)
    }

    return (
        <div className="w-full gap-5 px-5 flex flex-col py-10 rounded-lg shadow-2xl bg-azul-argentina border-2 border-blue-400">

            <div
                className="flex-end"
            >
                <button
                    onClick={returnBack}
                >
                    <FontAwesomeIcon icon={faLeftLong} size="2xl"/>
                </button>
            </div>

            {
                menu?.map( item => {
                    return <Link key={item.id} to={item.link}><TarjetaMenu key={item.id} type={item.type} text={item.text}/></Link> 
                })
            }

        </div>
    )
}

export default SideBar
