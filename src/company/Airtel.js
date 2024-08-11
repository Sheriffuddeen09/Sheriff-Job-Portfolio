
const Airtel = ({companySearchResults}) =>{

    const content = <>
            {
                companySearchResults.map((airtel) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={airtel.imageb} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold">{airtel.titleb}</p>
                        <span className="inline-flex items-center gap-2">
                        <img src={airtel.starb} alt="star" className="h-4 w-20"/>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{airtel.reviewsb}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{airtel.salary}</p>
                        <p>{airtel.qa}</p>
                        <p>{airtel.open}</p>

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

export default Airtel