import { Suspense, useState } from "react";
import SkeletonPost from "../skeleton/SkeletonPost";
import MessageList from "./MessageList";
import CopyItem from "./CopyItem";


const Copymessage = () =>{

    const [currentUserId, setCurrentUserId] = useState(0)
   
    const content = currentUserId === 0 ? <div className="h-80 text-xl mt-20 text-black font-bold">Select Inbox Message </div> : <Suspense fallback={[...Array(10).keys()].map(i =>
                     <SkeletonPost key={i} />)} >
                  
                    <CopyItem currentUserId ={currentUserId} setCurrentUserId={setCurrentUserId}/>
                    </Suspense>
                            
    return (
        <div className="flex flex-row lg:block hidden">
            <div className="bg-gray-100 w-96 flex-col flex items-center m-6 p-4
            rounded-lg">
                  <MessageList currentUserId ={currentUserId} setCurrentUserId={setCurrentUserId}/>
                {content}
                </div>  
            </div>
            )


}

export default Copymessage