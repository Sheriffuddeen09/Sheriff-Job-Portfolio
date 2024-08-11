import { postUrlPosts, postsUrlEndpoint as postsCacheKey } from "../api/axiosPost";
import useSWR from "swr";
import SkeletonPost from "../skeleton/SkeletonPost";
import Onlymessage from "./Onlymessage";
import { Link } from "react-router-dom";
const MessageItem = ({currentUserId}) =>{


    const{
        data:messages,
        isLoading,
        isError,
        error
        
    } = useSWR([postsCacheKey, currentUserId],
        ([url, userId]) => postUrlPosts(url, userId),
        {suspense: true}
    )

    let content 

    if (isLoading){
        content= [Array(5).keys()].map(i =>
            <SkeletonPost key={i} />)
    }

    else if(isError){
        content = <p>{error.message}</p>
    }
    else{
     content = (
        <div>
            {
                messages.map((message) =>(

                    <Link to={`/mes/${message.id}`}><div className="border bg-white w-80 p-4 ">
                        <span className="flex flex-row flex-wrap gap-4">

                            <img src={message.image} alt="message" />
                            <span>
                                <span className="inline-flex gap-12">
                            <p> { 
                                (message.company).length <= 10 ?
                                message.company : `${(message.company).slice(0, 16)}...`
                                
                                 }
                            </p>
                            <p className="text-sm">{message.date}</p>
                            </span>
                            <p>{ 
                                (message.message).length <= 10 ?
                                message.message : `${(message.message).slice(0, 16)}...`
                                
                                 }</p>
                            </span>
                            
                        </span>
                       
                    </div>
                    </Link>
                ))
            }
        </div>
    )
    }


   
     return (

        <div className="">
        <div  style={{height:'440px'}} className="bg-gray-50 w-96 flex-col flex items-center m-0 p-4
        rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white">

           { content}

        </div>
        <div className="fixed p-4 top-20 right-24 rounded-lg mx-auto hidden lg:block w-7/12 bg-gray-100">
            <Onlymessage currentUserId={currentUserId}/>
        </div>
        </div>
    )
}

export default MessageItem