import { Link } from "react-router-dom";
const MessageItem = ({messages}) =>{

    let content 

   
     content = (
        <div>
            {
                messages.map((message) =>(

                    <Link to={`/mes/${message.id}`}><div className="border bg-white sm:w-80 w-64 p-4 ">
                        <span className="flex flex-row flex-wrap sm:gap-4 gap-2">

                            <img src={message.image} alt="message" />
                            <span>
                                <span className="inline-flex text-sm gap-2 sm:gap-12">
                            <p className="text-sm"> { 
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
    


   
     return (

        <div className=" flex flex-row justify-end">
        <div  style={{height:'440px'}} className="bg-gray-50 w-72 sm:w-96 flex-col flex items-center m-0 p-4
        rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white">

           { content}

        </div>
        </div>
    )
}

export default MessageItem