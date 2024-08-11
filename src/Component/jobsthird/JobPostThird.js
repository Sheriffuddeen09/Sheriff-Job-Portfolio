import JobListThird from "./JobListThird"
const JobPostThird = ({jobthirds}) =>{

    
    const results = jobthirds.map(job => <JobListThird key={job.id} job={job} jobthirds={jobthirds}/>)

    const content = results ? results : <p> no job to display </p>
    

    return (
        <div>
            {content}
        </div>
    )
}

export default JobPostThird