const Onlymessage = ({messages}) =>{

    const inboxcontent = (
        <div>
            {
                messages.map((message) =>(
                    <div>
                         <span>
                            <img src={message.inboximg} alt="message" className="mx-auto" width={100} />
                            <p className="text-center text-xl font-bold">{message.inbox}</p>
                            <p className="text-center">{message.sinbox}</p>
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

export default Onlymessage