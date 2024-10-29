import { getPosts } from "../../api/axios"
import AccordionMap from "./AccordionMap"
import { useEffect, useState } from "react"


const Accordion = () =>{

    const [accordions, setAccordions] =  useState([])

    useEffect(() =>{
       
        getPosts().then(json=>{
            setAccordions(json)
            return json
        })
    },[])
    

let content

    content = accordions.map((accordion) =>{
    return <AccordionMap key={accordion.id} accordion={accordion} />
   })


    return (
    <div className="flex relative gap-0 gap-3 items-center justify-center mx-auto scrollbar scroll-p-0 scroll-my-3 scroll-smooth scrollbars scrollbar-thumb-transparent scrollbar-thin scrollbar-track-transparent sm:flex flex-row items-center justify-center sm:mx-auto sm:mr-52">
        {content}
    </div>
    )
}

export default Accordion