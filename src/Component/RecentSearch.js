import { Link } from "react-router-dom"

const RecentSearch = ({job, handleDelete}) =>{

   
    return (
        <>
        <div className="flex flex-row items-center mx-auto justify-center gap-96 mt-6">
        <Link to={'/views'}>
        <span>
            <p>{job.type}</p>
            <p className="text-red-500">1 new job in Lagos</p>
           </span>
        </Link>

        <span>
            <button onClick={() => handleDelete(job.id)}className="w-24"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
        </span>
        </div>
        <hr className="w-6/12 mx-auto -translate-x-10 mt-3"/>
        </>
    )
}

export default RecentSearch