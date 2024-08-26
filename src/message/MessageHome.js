import MessageItem from "./MessageItem"
import { Suspense, useState } from "react";
import SkeletonPost from "../skeleton/SkeletonPost";
import MessageList from "./MessageList";
import Onlymessage from "./Onlymessage";


const MessageHome = () =>{

    const [currentUserId, setCurrentUserId] = useState(0)
   
    const content = currentUserId === 0 ? <div className="h-96 text-xl mt-20 text-black font-bold">Select Inbox Message </div> : <Suspense fallback={[...Array(10).keys()].map(i =>
                     <SkeletonPost key={i} />)} >
                  <div  className="flex flex-row p-3">
                  <div className="bg-gray-100 sm:w-96 mx-auto flex-col flex items-center m-6 p-4 -translate-x-4
                    rounded-lg">
                    <MessageList currentUserId ={currentUserId} setCurrentUserId={setCurrentUserId}/>
                    <MessageItem currentUserId ={currentUserId} setCurrentUserId={setCurrentUserId}/>
                    </div>  
                    <div className="p-4 rounded-lg mx-auto hidden lg:block w-7/12 bg-gray-100">
                    <Onlymessage currentUserId={currentUserId}/>
                    </div>
                </div>
                    </Suspense>
                            
    return (
        <div>   
            {content}
        </div>
            )


}

export default MessageHome