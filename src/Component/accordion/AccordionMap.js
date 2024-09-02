import { useState } from "react"
const AccordionMap = ({accordion}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
return(
    <div className="" >
          <button onClick={toggleSubmit} className={`colors inline-flex item-center ${isVisible ? "color" : "colors"}`}>
        {accordion.title} 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 translate-x-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
        </button>
        
        <div onClick={toggleSubmit} className={`container translate-x-6 w-40 ${isVisible ? "block" : "hidden"}`}>
            <p className="my-1">{accordion.body}</p>
            <p className="my-1">{accordion.body2}</p>
            <p className="my-1">{accordion.body3}</p>
            <p className="my-1">{accordion.body4}</p>
            <p className="my-1">{accordion.body5}</p>
            <p className="my-1">{accordion.body6}</p>
            <p className="my-1">{accordion.body7}</p>
            <p className="my-1">{accordion.body8}</p>
            <p className="my-1">{accordion.body9}</p>
            <p className="my-1">{accordion.body10}</p>
            
        </div>
        </div>
)
}

export default AccordionMap