import Accordion from "./accordion/Accordion"
import JobPost from "./jobs/JobPost"
import { useState } from "react"
import RecentSearch from "./RecentSearch"
import JobPostSecond from "./jobssecond/JobPostSecond"
import JobPostThird from "./jobsthird/JobPostThird"
import JobPostFour from "./jobsfour/JobPostFour"

const Home = ({jobs, searchResults,handleDelete, setSearchResults, jobseconds, jobfours, jobthirds, ApplyDeleteSecond}) =>{

  const [toggle, setToggle] = useState(1)

  const handleTemplate = (id) => {
      setToggle(id)
  }
    const handleSubmit = (e) => e.preventDefault()

    const handleChange = (e) =>{
        if(!e.target.value) return setSearchResults(jobs)

            const search = jobs.filter(job => job.job.includes(e.target.value)
        || job.state.includes(e.target.value))
    
        return setSearchResults(search)
    }
    
    return (
        <>
        <div>
            <form className="mt-0 flex flex-col  items-center sm:flex-row mx-auto mt-2 mb-6 items-center justify-center sm:border border-gray-600 sm:rounded-md w-8/12 sm:h-14 sm:shadow-md">
            <input type="text" placeholder="job title, keywords, or company" className="w-72 h-12 py-3 px-8 border shadow-slate-700 outline-none border-gray-500 rounded-tl-lg rounded-tr-lg input sm:border-y-0 sm:border-l-0 sm:rounded-tr-none rounded-tl-lg " 
            onChange={handleChange}
            id="search"
            />

            <input type="text" placeholder="City state, zip code, or remote" className="w-72 h-12 border rounded-bl-lg border-gray-500 border-t-0 py-3 px-8 rounded-br-lg 
            sm:border-none relative outline-none"
            onChange={handleChange}
            id="search"
            />
    
            <button className="w-72 h-9 mb-5 bg-blue-700 h-5 font-bold text-white find rounded mt-4 sm:w-32 sm:text-sm bg-blue-700 sm:relative top-1 bottom-4 right-4 sm:translate-x-3" onClick={handleSubmit}>Find Jobs</button>
            </form>
        </div>
        <Accordion />
        <div>
        <p className="m-5 text-sm sm:mx-32">Jobs based on your activity on <span className="font-bold">SheriffPortfolio</span>
             </p>
      <div className="hidden sm:block sm:flex sm:items-center sm:justify-start z-10 isolate">
        <span className="relative cursor-pointer">
        <p className={`m-5 text-xl sm:mx-32 ${toggle === 1 ? "selected" : "template"}`} onClick={() => handleTemplate(1) }>Jobs</p>
        <div className={` ${toggle === 1 ? "linetemplate" : "nontemplate"}`}></div>
        </span>
        <span className=" cursor-pointer">
        <p className={`m-5 text-xl sm:mx-32 ${toggle === 2 ? "selected" : "template"}`} onClick={() => handleTemplate(2) }>Recent Searches</p>
        <div className={` ${toggle === 2 ? "linetemplates" : "nontemplate"}`}></div>
        </span>
        </div>
        <div className="inline-flex sm:relative items-center gap-44">
        </div>
        <hr className="translate-x-4 -mt-6 w-8/12 h-2"/> 
        <div className={toggle === 1 ? "block" : "hidden"}>
        <JobPost  jobs={jobs} searchResults={searchResults}/>
        <JobPostSecond jobseconds={jobseconds}/>
        <JobPostThird jobthirds={jobthirds}/>
        <JobPostFour jobfours={jobfours}/>
        <JobPost  jobs={jobs} searchResults={searchResults}/>
        <JobPostSecond jobseconds={jobseconds}/>
        <JobPostThird jobthirds={jobthirds}/>
        <JobPostFour jobfours={jobfours}/>
        <JobPost  jobs={jobs} searchResults={searchResults}/>
        <JobPostSecond jobseconds={jobseconds}/>
        <JobPostThird jobthirds={jobthirds}/>
        <JobPostFour jobfours={jobfours}/>
        <JobPost  jobs={jobs} searchResults={searchResults}/>
        <JobPostSecond jobseconds={jobseconds}/>
        <JobPostThird jobthirds={jobthirds}/>
        <JobPostFour jobfours={jobfours}/>
        
        </div>
        <div className={toggle === 2 ? "block" : "hidden"}>
          {searchResults.map((job) =>(
        <RecentSearch job={job} handleDelete={handleDelete}/>
      ))}
        </div>
        </div>
    </>
    )
}

export default Home