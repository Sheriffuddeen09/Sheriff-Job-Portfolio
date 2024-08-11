

const Lapo = ({companySearchResults}) =>{

   

    const content = <>
            {
                companySearchResults.map((lapo) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={lapo.imageg} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold">{lapo.titleg}</p>
                        <span className="inline-flex items-center gap-2">
                        <img src={lapo.star} alt="star" className="h-4 w-20"/>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{lapo.reviewsg}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{lapo.salary}</p>
                        <p>{lapo.qa}</p>
                        <p>{lapo.open}</p>

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

export default Lapo