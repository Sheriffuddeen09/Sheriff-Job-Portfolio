import MessageList from "./MessageList";
import CopyItem from "./CopyItem";
import { useEffect, useState } from "react";
import { getPostMessage } from "../../api/apifetch";


const Copymessage = () =>{
    const [messages, setMessages] = useState([])
   
    useEffect(() =>{

        getPostMessage().then(json=>{
            setMessages(json)
            return json
        })
    },[])
    const content = <CopyItem messages={messages}/>
                            
    return (
        <div className="flex flex-row md:-mx-20 sm:block hidden">
            <div className="bg-gray-100 w-96 flex-col flex items-center m-6 p-4
            rounded-lg">
                  <MessageList />
                {content}
                </div>  
            </div>
            )


}

export default Copymessage