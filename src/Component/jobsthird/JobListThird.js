import { useState } from "react"
import ViewJobThird from "./ViewJobThird"
const JobListThird = ({job, jobthirds}) =>{

const [menuicon, setMenuicon] = useState(false)
const [side, setSide] = useState(false)
const handleMenuIcon = () =>{

    setMenuicon(!menuicon)
}

const handleSidebar = () =>{

  setSide(!side)
}
    return (
    <>
  <main className="">
      <section>
        <div className="sm:w-96 border cursor-pointer p-6 my-6 sm:mx-10 w-72 mx-4 rounded-lg lg:w-5/12 lg:mx-24">
        <span className="flex flex-row items-center ">
        <p onClick={handleSidebar} className="text-1xl font-bold jobtitle">{job.job}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 menuicon relative left-28 md:translate-x-28 lg:translate-x-40" onClick={handleMenuIcon}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>
</p>
</span>
        <p>{job.company}</p>
        <p>{job.state}</p>
        <span className="flex flex-wrap mt-2 gap-8">
        <p className='bg-white w-64 p-1 text-black font-bold rounded'>{job.amount}</p>
        <p className='bg-white w-30 p-1 text-black rounded font-bold'>{job.type}+</p>

        </span>
        <br />
        <p className="mt-5 inline-flex gap-2 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-900">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
 Easily apply</p>
        
           <p className="mt-4 lg:w-11/12">
            { 
                (job.descriptions).length <= 30 ?
                job.descriptions : `${(job.descriptions).slice(0,200)}...`
                
            }
            </p>
        <p className="">visited 1 day ago</p>

          
        </div>
          <div className={`z-10 bg-white border-gray-200 border p-4 rounded-lg w-44 leading-10 relative md:bottom-72 md:left-60 lg:bottom-60 sm:left-96 bottom-72 left-28 -mb-48  ${menuicon ? "block" : "hidden"}`}>
          <p className="inline-flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
Save job</p>
          <p className="inline-flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>
Not interested</p>
          <p className="inline-flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
 Report job</p>
      </div>
  </section>
  
  <section className={`sideposition z-10 sm:z-0 h fixed top-0 left-0 items-center 
    sm:bg-transparent sm:left-80 sm:top-60 sm:w-6/12 lg:-translate-y-3 md:translate-y-32 md:translate-x-28 lg:translate-x-72 flex ${side ? "block" : "hidden"}`}>
    <ViewJobThird jobthirds={jobthirds}/>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={handleSidebar} className={`size-6 md:fixed md:top-2 md:w-10 md:right-10 md:bg-gray-200 fixed top-10 w-10 right-6 bg-gray-200 lg:fixed lg:top-4 lg:w-6 lg:right-14 lg:bg-gray-200 cursor-pointer `} >
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

  </section>
</main>
      </>
    )
} 

export default JobListThird