import Copymessage from "./Copymessage"
import { Link, useParams } from "react-router-dom"
import image from './images/placeholder.svg'
import ReplyList from "./ReplyList"
import { useState } from "react"

const MessageId = ({messages, reply, setReply, replyLists, ReplySubmit}) =>{

   
    const [hideicon, setHideicon] = useState(false)

    const handleHideIcon = () =>{
        setHideicon(!hideicon)
    }
    const {id} = useParams()

    const message = messages.find((message) => (message.id).toString() === id)

    return(

        <div className=" flex flex-row justify-around sm:mx-14 items-center">
            <Copymessage />
            <div className="bg-gray-100 -translate-x-4 md:mx-auto md:tramsate-x-20 sm:w-4/12 w-72 mx-auto mt-4 sm:mx-0  md:relative md:left-20 md:top-20 rounded-lg lg:relative lg:left-0 lg:top-0 rounded-lg border border-black" style={{ height:"535px"}}>
            {
                <>
               <div className="flex flex-row items-center  bg-white border border-black border-t-0 border-r-0 border-l-0 p-4 rounded-tr-lg rounded-tl-lg justify-between"  >
                <span className="inline-flex items-center gap-4">
                <img src={image} alt="icon" />
                <p className="font-bold text-sm sm:text-xl">
                {message.company}
                </p>
                </span>
                 <span className="inline-flex gap-2 translate-y-2"><p className="inline-flex gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>

                People</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={handleHideIcon} class="size-6 cursor-pointer hideiconhover">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
            </span>
                </div>
               
                <div className="bg-white p-4">
                    <div className="h-64 rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white">
                    <div className="bg-white p-4 m-4 rounded-lg">
                <p>You applied to this position on March 29, 2024.</p>
                </div>
                    <div className="flex flex-row items-center justify-center gap-2 bg-white">
                <div className="linemessage"></div>
                <div className="" style={{fontSize:'9px'}}>{message.date}</div>
                <div className="linemessage"></div>
                </div>
                        <span className="inline-flex items-center gap-4 px-4">
                        <img src={image} alt="icon" />
                        <p>{message.company}</p>
                        <p>{message.date}</p>
                        </span>
                        <p className="px-4 mt-6">{message.message}</p>
                        <div className="flex flex-row items-center justify-center gap-2">
                            <div className="linemessage"></div>
                            <div className="" style={{fontSize:'9px'}}>{message.date}</div>
                            <div className="linemessage"></div>
                        </div>
                        <span>
                            <ReplyList replyLists={replyLists} />
                        </span>
                    </div>
                </div>
                <div>
                    <form>
                    <textarea  value={reply}
                    onChange={(e) =>setReply(e.target.value)}
                    className=" outline-blue-700 border p-3 border-black w-72 sm:w-96 h-20 border-l-0 border-r-0 border-b-0 "
                    placeholder="Write message"/>
                    <div className="bg-white px-2 h-14 rounded-b-lg -mt-2">
                    <button onClick={ReplySubmit} className="bg-blue-500 text-white p-2 rounded-lg sm:mt-1 mt-3">Send</button>
                    </div>
                    </form>
                </div>
                </>
            }
        
            
        </div>
        <div className="hidden lg:block bg-gray-100 w-80 rounded-lg relative left-6 top-2 p-6" style={{height:"520px"}}>
            <div>
                <p className="text-xl font-bold">{message.company}</p>
                <p className="mb-2">{message.state}</p>
                <hr />
                <p className="my-2 font-bold">Job type</p>
                <p className="">{message.typea}</p>
                <p>{message.typeb}</p>
                <p className="my-4 font-bold">Salary</p>
                <p>{message.salary}</p>
                <Link to="/" className="text-blue-900 mt-10 underline">view description about the job</Link>
            </div>
        </div>
        <div className={`w-44 fixed top-32 sm:top-40 mb-4 sm:right-96 right-20 h-24 bg-white isolate p-4 flex flex-col z-10 rounded-lg border border-black ${hideicon ? "block" : "hidden"}`}>
            <p className="inline-flex gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
Archive</p>
            <p className="inline-flex gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
Report</p>
        </div>
     </div>
    )
}

export default MessageId