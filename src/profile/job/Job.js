import { Link, useNavigate } from "react-router-dom"
import BasePay from "../base/BasePay"

const Job = ({jobtitles, basepays, relocations}) =>{

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

        const content = (
            <div>
                {
                    jobtitles.map((jobtitle) =>{

                        return (
                            <div className="flex flex-row justify-center gap-28 lg:justify-between flex-wrap ">
                                <span className="inline-flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <span>
                                    <p className="font-bold text-xl mb-1">Job title</p>
                                    <p className="w-72">{jobtitle.title}</p>
                                    <p>{jobtitle.name}</p>
                                </span>
                                </span>
                             <Link to={`/jobid/${jobtitle.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
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
        <div>
        <button onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-6 lg:mx-0">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        </button>

        <div className="w-11/12">
            <h1 className="text-start text-2xl my-6 font-bold px-4 lg:px-0">Job preferences</h1>
            <p className="lg:px-0 flex text-start px-6">Tell us the job details you’re interested in to get better recommendations across Indeed.</p>
            <p className="lg:px-0 flex text-start px-6">Employers may see these preferences when your resume is set to searchable.</p>
        </div>
        <hr className="my-4"/>
        <div>{content}</div>
        <hr className="my-4"/>
        <div>
            <BasePay basepays={basepays} relocations={relocations} />
        </div>
        </div>
        </div>
    )
}

export default Job