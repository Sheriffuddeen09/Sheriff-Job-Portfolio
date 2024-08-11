
const Polaris = ({companySearchResults}) =>{

   
    const content = <>
            {
                companySearchResults.map((polar) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={polar.imageh} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold">{polar.titleh}</p>
                        <span className="inline-flex items-center gap-2">
                        <img src={polar.star} alt="star" className="h-4 w-20"/>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{polar.reviewsh}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{polar.salary}</p>
                        <p>{polar.qa}</p>
                        <p>{polar.open}</p>

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

export default Polaris