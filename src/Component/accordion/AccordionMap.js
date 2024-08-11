import { useState } from "react"
const AccordionMap = ({accordion}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
return(
    <div className="" >
            <div className="inline-flex z-10 isolate">
               
                <button onClick={toggleSubmit} className={` colors sm:mt-0 ${isVisible ? 'color' : 'colors'}`}>
                    <p onClick={toggleSubmit}>{accordion.title}</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`"w-4 relative left-1 top-0.5 font-bold text-gray-700" ${isVisible ? 'icon' : 'icons'}`} onClick={toggleSubmit}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
                </button>
                <span>
                <p className='text-white'>
                

                </p>
            </span>
            </div>
            <div className={`container translate-20 sm:w-48 ${isVisible ? 'block' : 'hidden'}`}>
            <p className="mt-2"> {accordion.body}</p>
            <p className="mt-2"> {accordion.body1}</p>
            <p className="mt-2"> {accordion.body2}</p>
            <p className="mt-2"> {accordion.body3}</p>
            <p className="mt-2"> {accordion.body4}</p>
            <p className="mt-2"> {accordion.body5}</p>
            <p className="mt-2"> {accordion.body6}</p>
            <p className="mt-2"> {accordion.body7}</p>
            <p className="mt-2"> {accordion.body8}</p>
            </div>
        
        </div>
)
}

export default AccordionMap