import JobListFour from "./JobListFour"
const JobPostFour = ({jobfours}) =>{

    
    const results = jobfours.map(job => <JobListFour key={job.id} job={job} jobfours={jobfours}/>)

    const content = results ? results : <p> no job to display </p>
    

    return (
        <div>
            {content}
        </div>
    )
}

export default JobPostFour