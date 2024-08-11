import { Link } from "react-router-dom"


const ViewApplySecond = ({jobs}) =>{

    return (
        <div>
            {
                jobs.map((job) =>(
                    <main className="w-full h-full 
                    md:w-11/12 
                     md:-translate-y-20 md:h-full md:translate-x-8 2xl:bg-transparent 2xl:w-48 bg-white p-6 my-8 2xl:w-48 2xl:bg-white 2xl:mx-">
        <span className="flex flex-col mt-3">
          
        <span className="border-2 rounded-lg p-3 shadow-md">
        <p className="text-2xl font-bold mb-2">{job.job}</p>
        <p className="">{job.company}
        </p>
        <p className="mb-2">{job.state}</p>
        <p>{job.amount}</p>
        
        <span className="sm:inline-flex sm:gap-5 sm:mt-3">
       <Link to={'/login'}> <button className="bg-gray-200 hidden sm:block text-black line-through p-2 w-28 rounded-lg">
        Applied
    </button>
    </Link>
    <p className="bg-gray-300 text-black p-2 w-10 rounded-lg hidden sm:block">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

    </p>
    <p className="bg-gray-300 hidden sm:block text-black p-2 w-10 rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
</svg>

    </p>
    </span>
    </span>
    </span>
    
    <div className="flex flex-col">
      <div>
        <p className="text-2xl mt-4 font-bold">Job details</p>
        <p className="text-sm" style={{fontSize:"12px", color:"gray"}}>Here’s how the job details align with your profile</p>
        <p className="inline-flex gap-6 mt-4 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
</svg> Pay
</p>
<br/>
        <p className="mt-0 translate-x-9 items-center gap-3 text-sm text-green-500 font-bold bg-green-100 inline-flex p-2 rounded-lg">
          💚 {job.amount}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

        </p>
        <br />
        <p className="inline-flex gap-6 mt-4 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
 Job type
</p>
<br />
<p className="mt-0 translate-x-9 items-center gap-3 text-sm text-green-500 font-bold bg-green-100 inline-flex p-2 rounded-lg">
          💚 {job.type}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

        </p>
        <hr className="w-8/12 my-6"/>
        <p className="text-xl font-bold mb-2">
 Location</p>
        <p className="inline-flex gap-5 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg> {job.state}</p>
<hr className="w-8/12 my-6"/>
<h2 className="text-xl font-bold mb-2">Full job description</h2>
<h2 className="text-gray-700 mb-3">{job.description}</h2>
<h2 className="text-gray-700 mb-3 italic">{job.posting}</h2>
<h2 className="text-gray-700 mb-3">{job.maindescription}</h2>
<h2 className="mb-3 font-bold">Role Description</h2>
<h2 className="text-gray-700 mb-3">{job.descriptions}</h2>
<h2 className="text-gray-700 mb-3">{job.role}</h2>
<h2 className="text-xl font-bold mb-3">What you will be doing:</h2>
<h2 className="text-gray-700  mb-3">At 83compass, we implore agile methodologies on all our projects unless stated otherwise.</h2>
<h2 className="text-gray-700  mb-3">In particular, you will:</h2>
<h2 className="text-gray-700">{job.doing}</h2>
<h2 className="text-gray-700">{job.doing2}</h2>
<h2 className="text-gray-700">{job.doing3}</h2>
<h2 className="text-gray-700">{job.doing4}</h2>
<h2 className="text-gray-700 mb-3">{job.doing5}</h2>

<h2 className="text-xl font-bold mb-3">What we are looking for:</h2>
<h2 className="text-gray-700 mb-3">In addition to the list below, we need someone willing to learn and ask for help when needed.</h2>
<h2>{job.looking}</h2>
<h2>{job.looking2}</h2>
<h2>{job.looking3}</h2>
<h2>{job.looking4}</h2>
<h2>{job.looking5}</h2>
<h2>{job.looking6}</h2>
<h2>{job.looking7}</h2>
<h2>{job.looking8}</h2>
<h2>{job.looking9}</h2>
<h2 className="text-xl mb-3">Work nature: Remote/Hybrid</h2>
<h2 className="text-lg mb-3">Pay: From ₦200,000.00 per month</h2>
<h2 className="text-xl mb-3">Location:</h2>
<p className="mb-3">{job.state}(Preferred)</p>
<p>Application Deadline: 14/06/2024</p>
<hr className="w-full my-6"/>
<span className="inline-flex items-center gap-10">
    <Link to={'/login'}><button className="bg-blue-700 text-white p-2 w-28 rounded-lg sm:hidden">
        Apply
    </button>
    </Link>
    <p className="bg-gray-300 text-black p-2 w-10 rounded-lg sm:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

    </p>
</span>

<div>
    </div>
    </div>
    </div>
                </main>
                ))
            }

        </div>
    )
}
export default ViewApplySecond