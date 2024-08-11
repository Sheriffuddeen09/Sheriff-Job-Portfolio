
const Bat = ({companySearchResults}) =>{
    const content = <>
            {
                companySearchResults.map((bat) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={bat.imagee} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold">{bat.titlee}</p>
                        <span className="inline-flex items-center gap-2">
                        <img src={bat.star} alt="star" className="h-4 w-20"/>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{bat.reviewse}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{bat.salary}</p>
                        <p>{bat.qa}</p>
                        <p>{bat.open}</p>

                        </span>
                    </div>
                ))
            }
    </>
    return (
        <div>

            {content}

        </div>
    )
}

export default Bat