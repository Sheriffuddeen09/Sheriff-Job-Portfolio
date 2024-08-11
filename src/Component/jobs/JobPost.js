import JobList from "./JobList"
const JobPost = ({searchResults, jobs}) =>{

    
    const results = searchResults.map(job => <JobList key={job.id} job={job} jobs={jobs}/>)

    const content = results ? results : <p> no job to display </p>
    

    return (
        <div>
            {content}
        </div>
    )
}

export default JobPost