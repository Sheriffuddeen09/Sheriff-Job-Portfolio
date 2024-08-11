
const Coca = ({companySearchResults}) =>{


    const content = <>
            {
                companySearchResults.map((coca) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={coca.imagef} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold">{coca.titlef}</p>
                        <span className="inline-flex items-center gap-2">
                        <img src={coca.star} alt="star" className="h-4 w-20"/>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{coca.reviewsf}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{coca.salary}</p>
                        <p>{coca.qa}</p>
                        <p>{coca.open}</p>

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

export default Coca