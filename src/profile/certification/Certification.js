import { Link } from "react-router-dom"

const Certification = ({certifications}) =>{

        const content = (
            <div>
                {
                    certifications.map((certificate) =>{

                        return (
                            <div className="flex flex-row justify-between flex-wrap gap-60 lg:gap-96">
                                <span className="inline-flex gap-2 lg:-translate-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>


                                <span>
                                    <p className="font-bold text-xl mb-1">Certications</p>
                                    <p>{certificate.name}</p>
                                </span>
                                </span>
                             <Link to={`/certificate/${certificate.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 lg:translate-x-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                            </div>
                        )
                    })
                }
            </div>
        )
    
    

    return(
        <div className="flex flex-col items-center  my-6"> 
       
        <div>{content}</div>
        <hr className="my-4"/>
        </div>
    )
}

export default Certification