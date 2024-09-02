import { useEffect, useState } from "react"
import { getUsers } from "../../api/apifetch"
import MessageAccordion from "./MessageAccordion"

const MessageList = () =>{

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
        <MessageAccordion accordion={accordion} />
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

export default MessageList