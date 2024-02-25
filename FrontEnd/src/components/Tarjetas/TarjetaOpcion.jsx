import { faSquareParking, faUser,faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function TarjetaOpcion({type,children}) {
  const typeCard = {
    'parqueadero':{
      'color':'#f37748',
      'text':'parqueadero',
      'icon':faSquareParking
    },
    'parker':{
      'color':'#d8d2e1',
      'text':'parker',
      'icon':faUser
    },
    'usuario':{
      'color':'#8BB174',
      'text':'usuario',
      'icon':faAddressCard
    }
  }
  return (
    <div className='w-full flex flex-col max-w-sm sm:min-h-28 xl:min-h-32 bg-white border shadow  text-center
      rounded-lg'
      >
        <div className={`w-full flex flex-row items-center gap-5 justify-start px-5 py-1 rounded-t-lg bg-[${typeCard[type].color}]`}>
          <FontAwesomeIcon 
            icon={typeCard[type].icon} 
            size="xl"
            className="mt-1"
          />
          <h1 className="uppercase italic font-bold text-lg xl:text-xl tracking-wide">{typeCard[type].text}</h1>
        </div>
        <div className="w-full px-5 py-1">
          {children}
        </div>
    </div>
  )
}

export default TarjetaOpcion
