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
    /*
    const {
        isloading,
        isError,
        error,
        data: accordions
    } = useQuery('accordions', getPosts)


    let content 

    if (isloading){
        content = <p>loading</p>
    } else if(isError){
        content = <p>{error.message}</p>
    }else {
        content = accordions.map((accordion) =>{
     return <AccordionMap key={accordion.id} accordion={accordion} />
    })
    }
*/

let content

    content = accordions.map((accordion) =>{
    return <AccordionMap key={accordion.id} accordion={accordion} />
   })


    return (
    <div className="flex gap-0 gap-3 items-center justify-center mx-auto scrollbar scroll-p-0 scroll-smooth scrollbars scrollbar-thumb-gray-200 scrollbar-thin scrollbar-track-white sm:flex flex-row items-center justify-center sm:mx-auto sm:mr-52">
        {content}
    </div>
    )
}

export default Accordion