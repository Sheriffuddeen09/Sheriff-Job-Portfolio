

const PalmPay = ({companySearchResults}) =>{


    const content = <>
            {
                companySearchResults.map((palm) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={palm.imagec} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold">{palm.titlec}</p>
                        <span className="inline-flex items-center gap-2">
                        <img src={palm.star} alt="star" className="h-4 w-20"/>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{palm.reviewsc}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{palm.salary}</p>
                        <p>{palm.qa}</p>
                        <p>{palm.open}</p>

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

export default PalmPay