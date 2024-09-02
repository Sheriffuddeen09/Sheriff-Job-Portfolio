const OnlySpam = ({users}) =>{

    const inboxcontent = (
        <div>
            {
                users.map((message) =>(
                    <div className="my-32">
                         <span>
                            <img src={message.image1} alt="message" className="mx-auto" width={100} />
                            <p className="text-center text-xl font-bold">{message.message1}</p>
                            <p className="text-center">{message.select1}</p>
                        </span>
                    </div>
                ))
            }
        </div>
    )
    return (

        <div className="">
            <div>
                {inboxcontent}
            </div>
        </div>
    )
}

export default OnlySpam