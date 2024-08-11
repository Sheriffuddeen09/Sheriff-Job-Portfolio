import useSWR from "swr";
import { usersUrlEndpoint as userCacheKey, userUrl } from "../api/apiAxios";

const MessageList = ({currentUserId, setCurrentUserId}) =>{

    const{
        isLoading,
        error,
        data: employes,
    } = useSWR(userCacheKey, userUrl)
    
    let options

    if (isLoading){ 
     options = <option className="">loading.....</option>
     }
    else if (!error) {
        options = employes.map((user) =>{
            return (
            <option key={`opt${user.id}`} value={user.id}> {user.title} </option>
            
            )
          
        }
        
    )
    const optName = <option key='opt0' value="0">Select inbox message </option>
    options.push(optName)
    }

const handleChange = (e) => setCurrentUserId (e.target.value)

let content
    if (error)  {
 content = <p className="load"> {error.message} </p>
}
   
    else{
        content = <div >
        <select name="select" id="option" className="w-72 outline-blue-800 border mb-4 border-black rounded-lg p-1"
        value={currentUserId} onChange={handleChange}
        >
            {options}
        </select>
        </div>
    }

    return (

        <div>
               <p className="mb-6 text-xl font-bold">Messages</p> 
                {content}
        </div>
    )
}

export default MessageList