import {useEffect, useState } from "react";
import { getUsers } from "../../api/apifetch";
import SpamItem from "./SpamItem";
import OnlySpam from "./Onlyspam";
import SpamList from "./SpamList";


const MessageSpam = () =>{

    const [users, setUsers] = useState([])
    useEffect(() =>{

        getUsers().then(json =>{
            setUsers(json)
            return json
        })
    },[])
   
    const content =
                  <div  className="flex flex-row p-3">
                  <div className="bg-gray-100 sm:w-96 mx-auto flex-col flex items-center m-6 p-4 -translate-x-4
                    rounded-lg">
                    <SpamList users={users}/>
                    <SpamItem users={users}/>
                    </div>  
                    <div className="p-4 rounded-lg mx-auto hidden lg:block w-7/12 bg-gray-100">
                    <OnlySpam users={users}/>
                    </div>
                </div>
                            
    return (
        <div>   
            {content}
        </div>
            )


}

export default MessageSpam