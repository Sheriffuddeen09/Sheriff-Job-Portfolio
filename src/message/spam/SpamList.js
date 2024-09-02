import { useEffect, useState } from "react"
import { getUsers } from "../../api/apifetch"
import SpamAccordion from "./SpamAccordion"

const SpamList = () =>{

    const [users, setUsers] = useState([])
    useEffect(() =>{
        getUsers().then(json=>{
            setUsers(json)
            return json
        })
    },[])
    
  
let content
        content = <div >
            {
                users.map((accordion) =>(
        <SpamAccordion accordion={accordion} />
        ))
}
        </div>
            
    return (

        <div>
               <p className="mb-6 text-xl font-bold sm:p-2 ">Messages</p> 
                {content}
        </div>
    )
}

export default SpamList