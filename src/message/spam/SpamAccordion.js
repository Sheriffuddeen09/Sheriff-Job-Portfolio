import { useState } from "react"
import { Link } from "react-router-dom"
const SpamAccordion = ({accordion}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
return(
    <div className="" >
          <button onClick={toggleSubmit} className={`selectinput flex-row justify-between flex items-center sm:w-66 w-64 outline-blue-800 border mb-4 border-black rounded-lg px-5 font-bold py-2 ${isVisible ? "noneselect" : "selectinput"}`}>
        Spam
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 translate-x-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
        </button>
        
        <div onClick={toggleSubmit} className={`rounded-xl bg-white z-10 -mb-32 -relative left-2 bottom-10 px-5 py-2 -translate-y-3 shadow-md w-60 ${isVisible ? "block" : "hidden"}`}>
            <Link to={'/mes'}><p className="my-2 accordiontitle">{accordion.title1}</p></Link>
            <Link to={'/spam'}><p className="my-2 accordiontitle">{accordion.title2}</p></Link>
            <Link to={'/archive'}><p className="my-2 accordiontitle">{accordion.title3}</p></Link>
           
        </div>
        </div>
)
}

export default SpamAccordion