import { useState } from "react"
import { Link } from "react-router-dom"
import JobApplySecond from "./JobApplySecond"

const JobApply = ({ApplyDelete, applys, jobseconds, ApplyDeleteSecond}) =>{


        const [flex, setFlex] = useState(false)
        const [deleted, setDeleted] = useState(false)
        const [check, setCheck] = useState(false)

    const flexhandle = () =>{
        setFlex(!flex)

    }
    const Deletehandle = () =>{
        setDeleted(!deleted)

    }
    const handleChange = (e) =>{
        const type = e.target.type
        const name = e.target.name

        const value = type === 'radio' ? e.target.checked : e.target.value

        setCheck(prev => ({
            ...prev, [name] : value
        }))
    }
    const content = (
        <div>
            {
                applys.map((apply) =>{
                   return ( 
                   <>
                   <div className="flex flex-row flex-wrap justify-around p-2 mt-10">
                    <span className="flex flex-row gap-4">
                        <img src={apply.image} width={70} alt="imagelogo" className="-translate-y-10"/>
                        <span>
                        <p className="bg-red-50 text-red-600 lg:w-60 w-32 mb-1 text-center rounded-lg p-1 text-sm font-bold ">Not selected by am employer</p>
                        <p className="font-bold mb-1">{apply.job}</p> 
                        <p>{apply.company}</p>
                        <p>{apply.state}</p>
                        <p className="text-gray-400 text-sm">{apply.deadline}</p>
                        </span>
                    </span>
                    <span className="inline-flex gap-8"><p className="rounded-lg w-32 border border-blue-200 text-blue-700 h-8 font-bold text-center p-1">Update Status</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer" onClick={flexhandle}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                    </span>
                    </div>

                    <div className={`bg-black opacity-70 w-full h-full fixed top-0 ${flex ? "block" : "hidden"}`}>
                    <div className="bg-white flex flex-col border border-gray-400 mx-auto justify-center my-52 w-6/12 rounded-lg">
                        <span className="flex flex-row justify-between  p-4">
                        <p className="text-2xl font-bold">Manage this application:</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer" onClick={flexhandle}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        </span>
                    <hr className="my-0"/>
                    <span className="flex flex-col p-2">                   
                 <Link to={'/viewjob'}>
                    <p className="inline-flex gap-3 items-center m-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
View and manage details
</p>
                    </Link>
                    <hr className="my-0"/>

                    <Link to={'/archive'}>
                    <p  className="inline-flex gap-3 items-center m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
                    Archive
                    </p>
                    </Link>
                    <hr className="my-0"/>
                    <span>
                    <p onClick={Deletehandle} className="inline-flex gap-3 items-center m-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                    Withdraw the application
</p>
</span>
<hr className="my-0"/>

                    <Link>
                    <p className="inline-flex gap-3 items-center m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>
Reports

                    </p>
                    </Link>
                    
                    </span>

                    </div>

                    </div>
                    <div className={`fixed top-0 bg-black opacity-90 w-full h-full ${deleted ? "block" : "hidden"}`}>
                    <div className={`bg-white border rounded-lg w-6/12 rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white p-4 mx-auto my-10`} style={{height:"550px"}}>
                        <span className="inline-flex gap-40">
                            <span>
                                <p className="font-bold">{apply.job}</p>
                                <p>{apply.state}</p>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer" onClick={Deletehandle}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        </span>
                    <hr className="my-6"/>
                    <p>Withdraw your application</p>
                    <p className="inline-flex gap-4 items-center my-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>
Review before proceeding</p>
<p>You will not be able to reapply to this job</p>
<p>The employer may still contact you</p>
<p>To update or correct your application, try messaging the employer instead</p>
<hr className="my-6 h-1 bg-gray-300"/>
<h1 className="font-bold text-2xl">Why are you no longer interested in this job?</h1>
<p>Anything you share can help us improve Indeed.</p>
<div className="flex-col flex ">
<span className="inline-flex gap-4 items-center">
    <input type="radio" value={check} checked={check} onChange={handleChange} className="h-10 w-5 p-4" />
    <label>Indeed helped me get a job</label>
</span>
<span className="inline-flex gap-4 items-center">
    <input type="radio" className="h-10 w-5 p-4"  />
    <label>Found a job another way</label>
</span>
<span className="inline-flex gap-4 items-center">
    <input type="radio" className="h-10 w-5 p-4" />
    <label>Haven't heard back from the employer</label>
</span>
<span className="inline-flex gap-4 items-center">
    <input type="radio" className="h-10 w-5 p-4" />
    <label>This job isn't a good match</label>
</span>
<span className="inline-flex gap-4 items-center">
    <input type="radio" className="h-10 w-5 p-4" />
    <label>Something else</label>
</span>
</div>
<button className="w-48 mb-10 mt-6 text-white p-2 font-bold rounded-lg bg-red-700" onClick={ApplyDelete}>Withdraw application</button>
                    </div>
                    </div>
                    </>
                )})
            }
        </div>
    )
    return (

        <div>
            <p className="font-bold mt-10 mx-48">Last 14 days</p>
            <hr className="my-4"/>
            {content}
        
        <p className="font-bold mx-48">Older</p>
        <hr className="my-4 w-11/12"/>

            <JobApplySecond jobseconds={jobseconds} ApplyDeleteSecond={ApplyDeleteSecond} />
        </div>
    )
}

export default JobApply