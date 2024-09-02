const OnlyArchive = ({users}) =>{

    const inboxcontent = (
        <div>
            {
                users.map((message) =>(
                    <div className="my-32">
                         <span>
                            <img src={message.image2} alt="message" className="mx-auto" width={100} />
                            <p className="text-center text-xl font-bold">{message.message2}</p>
                            <p className="text-center">{message.select2}</p>
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

export default OnlyArchive