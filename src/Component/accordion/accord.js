import { getAccordi, getAccordio, getAccordion, getAccordions, getPosts } from "../../api/axios"
import { useEffect, useState } from "react"


const Accordion = () =>{

    const [accordions, setAccordions] =  useState([])

    const [isVisible, setIsVisible] = useState(false)
    const [isVisiblese, setIsVisiblese] = useState(false)
    const [isVisibleth, setIsVisibleth] = useState(false)
    const [isVisiblefr, setIsVisiblefr] = useState(false)
    const [isVisiblefi, setIsVisiblefi] = useState(false)
    const [accordion, setAccordion] = useState('')
    const [accordionse, setAccordionse] = useState([])
    const [accordionfi, setAccordionfi] = useState([])
    const [accordionth, setAccordionth] = useState([])
    const [accordionfr, setAccordionfr] = useState([])
    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    const toggleSubmite = () =>{
        setIsVisiblese(!isVisiblese)
    }
    const toggleSubmitth = () =>{
        setIsVisibleth(!isVisibleth)
    }
    const toggleSubmitfr = () =>{
        setIsVisiblefr(!isVisiblefr)
    }
    const toggleSubmitfi = () =>{
        setIsVisiblefi(!isVisiblefi)
    }

    useEffect(() =>{
       
        getPosts().then(json=>{
            setAccordions(json)
            return json
        })
    },[])
    
    useEffect(() =>{
       
        getAccordi().then(json=>{
            setAccordionfi(json)
            return json
        })
    },[])
    
    useEffect(() =>{
       
        getAccordio().then(json=>{
            setAccordionfr(json)
            return json
        })
    },[])
    
    useEffect(() =>{
       
        getAccordion().then(json=>{
            setAccordionse(json)
            return json
        })
    },[])
    
    useEffect(() =>{
       
        getAccordions().then(json=>{
            setAccordionth(json)
            return json
        })
    },[])
    
let options

options = accordions.map(accordion => {
    return (
        <option className={`text-black sm:w-52 flex flex-col`} value={accordion.id}>
           
           <p onClick={toggleSubmit}>{accordion.title}</p>
    
        </option>
    )
})
const optionse = accordionse.map(accordion => {
    return (
        <option className={`text-black sm:w-52 flex flex-col`} value={accordion.id}>
           
           <p onClick={toggleSubmit}>{accordion.title}</p>
    
        </option>
    )
})
const optionth = accordionth.map(accordion => {
    return (
        <option className={`text-black sm:w-52 flex flex-col`} value={accordion.id}>
           
           <p onClick={toggleSubmit}>{accordion.title}</p>
    
        </option>
    )
})
const optionfr = accordionfr.map(accordion => {
    return (
        <option className={`text-black sm:w-52 flex flex-col`} value={accordion.id}>
           
           <p onClick={toggleSubmit}>{accordion.title}</p>
    
        </option>
    )
})
const optionfi = accordionfi.map(accordion => {
    return (
        <option className={`text-black sm:w-52 flex flex-col`} value={accordion.id}>
           
           <p onClick={toggleSubmit}>{accordion.title}</p>
    
        </option>
    )
})


               
let content
   
        content = (
            <select onClick={toggleSubmit} className={`border border-green-300 flex flex-col p-2 rounded-lg colors sm:mt-0 ${isVisible ? 'color' : 'colors'}`}
                value={accordion}
                onChange={(e) => setAccordion(e.target.value)}
            >{options}</select>
        )
        const contentse = (
            <select onClick={toggleSubmite} className={`border border-green-300 flex flex-col p-2 rounded-lg colors sm:mt-0 ${isVisiblese ? 'color' : 'colors'}`}
                value={accordion}
                onChange={(e) => setAccordion(e.target.value)}
            >{optionse}</select>
        )
        const contentth = (
            <select onClick={toggleSubmitth} className={`border border-green-300 flex flex-col p-2 rounded-lg colors sm:mt-0 ${isVisibleth ? 'color' : 'colors'}`}
                value={accordion}
                onChange={(e) => setAccordion(e.target.value)}
            >{optionth}</select>
        )
        const contentfr = (
            <select onClick={toggleSubmitfr} className={`border border-green-300 flex flex-col p-2 rounded-lg colors sm:mt-0 ${isVisiblefr ? 'color' : 'colors'}`}
                value={accordion}
                onChange={(e) => setAccordion(e.target.value)}
            >{optionfr}</select>
        )
        const contentfi = (
            <select onClick={toggleSubmitfi} className={`border border-green-300 flex flex-col p-2 rounded-lg colors sm:mt-0 ${isVisiblefi ? 'color' : 'colors'}`}
                value={accordion}
                onChange={(e) => setAccordion(e.target.value)}
            >{optionfi}</select>
        )

    return (
    <div className="flex gap-0 gap-3 items-center justify-center mx-auto scrollbar scroll-p-0 scroll-smooth scrollbars scrollbar-thumb-gray-200 scrollbar-thin scrollbar-track-white sm:flex flex-row items-center justify-center sm:mx-auto sm:mr-52">
        {content}
        {contentse}
        {contentth}
        {contentfr}
        {contentfi}
    </div>
    )
}

export default Accordion

/*
"accordions": [
    {
      "id": "1",
      "title": "Dated posted"
    },
    {
      "id":"2",
      "title": "Last 24 hours"
    },
    {
      "id":"3",
      "title": "Last 3 days"
    },
    {
      "id":"4",
      "title": "Last 7 days"
    },
    {
      "id":"5",
      "title": "Last 14 days"
    }
  ],
  "accordionse":[
    {
      "id": "1",
      "title": "Job type"
    },
    {
      "title": "Permanent",
      "id":"2"
    },
    {
      "id":"3",
      "title": "Contract"
    },
    {
      "id":"4",
      "title": "Full-time"
    },
    {
      "id":"5",
      "title": "New-Grad"
    },
    {
      "id":"6",
      "title": "Intership"
    },
    {
      "id":"7",
      "title": "Temporary"
    }
  ],
  "accordionth":[
    {
      "id": "1",
      "title": "Location"
    },
    {
      "id":"2",
      "title": "Lagos"
    },
    {
      "id":"3",
      "title": "Lekki"
    }
  ],
  "accordionfr":[
    {
      "id": "1",
      "title": "Company"
    },
    {
      "id":"2",
      "title": "Tek Expert"
    },
    {
      "id":"3",
      "title": "Co-create Hub"
    },
    {
        "id":"4",
        "title": "Apex Network"
    },
    {
      "id":"5",
      "title": "Seamfix"
    },
    {
      "id":"6",
      "title": "NewGlobe"
    },
    {
      "id":"7",
      "title": "Moniepoint"
    },
    {
      "id":"8",
      "title": "fatherland"
    },
    {
      "id":"9", 
      "title": "01 Technologies"
    },
    {
      "id":"10",
      "title": "VendEase"
    },
    {
      "id":"11",
      "title": "Subhujo Technologies"
    },
    {
      "id":"12",
      "title": "Pivotage Consult"
    }
  ],
  "accordionfi":[
    {
      "id": "1",
      "title": "Language"
    },
    {
      "id":"2",
      "title": "English"
    }
  ],
*/