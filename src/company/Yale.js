
import { Link } from "react-router-dom"

const Yale = ({companySearchResults}) =>{

    const content = <>
            {
                companySearchResults.map((yale) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={yale.image} alt="imagecompany"/>   
                        <span>                    
                       <Link to={''}> <p className="font-bold hover-">{yale.title}</p></Link>
                        <span className="inline-flex items-center gap-2">
                        <img src={yale.star} alt="star" className="h-4 w-20"/>
                        <Link to={''}></Link><p style={{fontSize:'12px'}} className=" text-blue-400" >{yale.reviews}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{yale.salary}</p>
                        <p>{yale.qa}</p>
                        <p>{yale.open}</p>

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

export default Yale