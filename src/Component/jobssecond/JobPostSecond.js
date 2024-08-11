import JobListSecond from "./JobListSecond"

const JobPostSecond = ({jobseconds}) =>{

    
    const results = jobseconds.map(job => <JobListSecond key={job.id} job={job} jobseconds={jobseconds}/>)

    const content = results ? results : <p> no job to display </p>
    

    return (
        <div>
            {content}
        </div>
    )
}

export default JobPostSecond