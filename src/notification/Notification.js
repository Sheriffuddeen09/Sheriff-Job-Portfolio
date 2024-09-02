import { useEffect, useState } from "react"
import { getNotify } from "../api/axios"
import { Link } from "react-router-dom"

const Notification = () =>{
    const [notifys, setNotifys] = useState([])
    useEffect(() =>{

        getNotify().then(json=>{
            setNotifys(json)
            return json
        })
    },[])
    const content = (
        <div>
            {
                notifys.map((message) =>{
                    return(
                            <div className="lg:flex lg:items-center px-4 sm:px-4 lg:justify-center lg:flex-col">
                                <h2 className="text-3xl text-center sm:-translate-x-40 font-bold my-4 p-4">{message.title}</h2>
                            <Link to={`/mes/${message.id}`}>
                        <span className="flex flex-row flex-wrap gap-4 ">
                            <span className="flex flex-wrap flex-row gap-4 wrap">
                                <img src={message.image} alt="icon"/>
                                <h2 className="sm:w-96 w-48">{message.notification}</h2>
                            </span>
                            <span>
                                <p>{message.time}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </span>
                        </span>
                            </Link>
                            <div className="w-72 border border-black p-2 rounded-lg mt-1 mx-auto mt-6 sm:-translate-x-10">
                                <p className="font-bold">{message.job}</p>
                                <p>{message.service}</p>
                                <p>{message.state}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
    return (
        <div>
            {content}
        </div>
        
    )
}

export default Notification