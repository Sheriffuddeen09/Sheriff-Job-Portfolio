import { useEffect, useState } from "react"
import Save from "./Save"
import JobApply from "./JobApply"
import Interview from "./Interview"
import Archive from "./Archive"

const ElementJob = ({jobseconds, applys, ApplyDelete, ApplyDeleteSecond}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [toggle, setToggle] = useState(1)

    const handleToggle = (id) => {
        setToggle(id)
    }

    useEffect(()=>{
    
        setIsLoading(true)
        setTimeout(() =>{
        
        setIsLoading(false)
        }, 6000)
    
    }, [])

    return(
        <section className="p-4 sm:mx-20 mx-10">
            <h1 className="font-bold text-4xl my-6">My Jobs</h1>
            <div>
        <ul className="flex flex-row gap-10 ">
            <li onClick={() => handleToggle(1)} className={`hidden sm:block${toggle === 1 ? "selectedjob" : 'li'}`}>
                Saved (0)
            <div  className={toggle === 1 ? "jobselected" : 'li'}> </div>
            </li >
            <li onClick={() => handleToggle(2)} className={toggle === 2 ? "selectedjob" : 'li'}>
                Applied(2)
            <div  className={toggle === 2 ? "jobselectedee" : 'li'}> </div>

            </li >
            <li onClick={() => handleToggle(3)} className={`hidden sm:block ${toggle === 3 ? "selectedjob" : 'li'}`}>
                Interview (0)
            <div  className={toggle === 3 ? "jobselectede" : 'li'}> </div>

            </li >
            <li onClick={() => handleToggle(4)} className={toggle === 4 ? "selectedjob" : 'li'}>
                Archived
            <div  className={toggle === 4 ? "jobselected" : 'li'}> </div>

            </li >
        </ul>
        <hr  className="mt-4"/>
        {isLoading ? <p className='loading'></p> :
        <div className={toggle === 1 ? "block" : "hidden"}>
            <Save/>
        </div>
    }
     {isLoading ? <p className=''></p> :
        <div className={toggle === 2 ? "block" : "hidden"}>
        <JobApply ApplyDelete={ApplyDelete} ApplyDeleteSecond={ApplyDeleteSecond} applys={applys} jobseconds={jobseconds}/>
        </div>
        }
        {isLoading ? <p className=''></p> :
                <div className={toggle === 3 ? "block" : "hidden"}>
                    <Interview/>
                </div>
        }
        {isLoading ? <p className=''></p> :
                <div className={toggle === 4 ? "block" : "hidden"}>
                    <Archive ApplyDeleteSecond={ApplyDeleteSecond} jobseconds={jobseconds}/>
                </div>
        }
        
        </div>
</section>
    )
}
export default ElementJob