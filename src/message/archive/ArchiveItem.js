const ArchiveItem = ({users}) =>{

    let content 

   
     content = (
        <div>
            {
                users.map((message) =>(

                    <div className="border bg-white sm:w-80 w-64 p-4 ">
                        <span className="flex flex-row flex-wrap sm:gap-4 gap-2">
                            <img src={message.image2} alt="message" />
                            <p className="text-center text-sm sm:hidden block font-bold">{message.message2}</p>
                        </span>
                       
                    </div>
                ))
            }
        </div>
    )
    


   
     return (

        <div>
           { content}
        </div>
    )
}

export default ArchiveItem