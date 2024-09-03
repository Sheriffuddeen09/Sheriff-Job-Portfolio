import {useEffect, useState } from "react";
import { getUsers } from "../../api/apifetch";
import ArchiveList from "./ArchiveList";
import ArchiveItem from "./ArchiveItem";
import OnlyArchive from "./OnlyArchive";


const MessageArchive = () =>{

    const [users, setUsers] = useState([])
    useEffect(() =>{

        getUsers().then(json =>{
            setUsers(json)
            return json
        })
    },[])
   
    const content =
                  <div  className="flex flex-row p-3">
                  <div className="bg-gray-100 sm:w-96 mx-auto flex-col flex items-center m-6 p-4 -translate-x-1
                    rounded-lg">
                    <ArchiveList users={users}/>
                    <ArchiveItem users={users}/>
                    </div>  
                    <div className="p-4 rounded-lg mx-auto hidden sm:block w-7/12 bg-gray-100">
                    <OnlyArchive users={users}/>
                    </div>
                </div>
                            
    return (
        <div>   
            {content}
        </div>
            )


}

export default MessageArchive