import Icon from './images/placeholder.svg'


const ReplyList = ({replyLists}) =>{


    const content = (
        <div>
            {
                replyLists.map((reply) =>(
                    <div>
                        <span className="inline-flex items-center gap-2 mt-6">
                            <img src={Icon} alt="logo"/>
                            <p className="font-bold text-xl">You</p>
                            <p style={{fontSize:'11px'}}>{reply.time}</p>
                        </span>
                        <p>{reply.title}</p>
                        <p className="text-gray-500 font-bold mt-2">sent</p>
                    </div>
                ))
            }
        </div>
    )

    return (

        <div>
            {content}
        </div>
    )
} 
export default ReplyList