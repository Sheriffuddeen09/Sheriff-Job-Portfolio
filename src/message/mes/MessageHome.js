import MessageItem from "./MessageItem"
import {useEffect, useState } from "react";
import MessageList from "./MessageList";
import Onlymessage from "./Onlymessage";
import { getPostMessage } from "../../api/apifetch";

const MessageHome = () =>{

    const [messages, setMessages] = useState([])
    useEffect(() =>{

        getPostMessage().then(json =>{
            setMessages(json)
            return json
        })
    },[])
   
    const content =
                  <div  className="flex flex-row p-3">
                  <div className="bg-gray-100 sm:w-96 mx-auto flex-col flex items-center m-6 p-4 -translate-x-4
                    rounded-lg">
                    <MessageList />
                    <MessageItem messages={messages}/>
                    </div>  
                    <div className="p-4 rounded-lg mx-auto hidden lg:block w-7/12 bg-gray-100">
                    <Onlymessage messages={messages}/>
                    </div>
                </div>
                            
    return (
        <div>   
            {content}
        </div>
            )


}

export default MessageHome