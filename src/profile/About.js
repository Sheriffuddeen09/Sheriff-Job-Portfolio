import { useEffect, useState } from "react"
import { getInfos, getPdf } from "../api/axios"
import { Link } from "react-router-dom"
const About = () =>{

    const [infos, setInfos] = useState([])
    const [pdfs, setPdfs] = useState([])
    const [pdficon, setPdficon] = useState(false)

    useEffect(() =>{

        getInfos().then(json=>{
            setInfos(json)
            return json
        })
    }, [])

    useEffect(() =>{

        getPdf().then(json=>{
            setPdfs(json)
            return json
        })
    }, [])

    const handleDelete = (id) =>{

        const results = pdfs.filter((pdf) => pdf.id !== id)
        setPdfs(results)
    }

    const handlePdf = () =>{

        setPdficon(!pdficon)
    }
    const pdfContent = (
        <div>
            {
                
                pdfs.map((pdf) =>(
                <>
                    <div className="flex flex-row sm:justify-between jutify-around border border-black py-1 rounded-lg gap-4 sm:gap-48 flex-wrap mt-6 items-center">
                         <span className="inline-flex items-center">
                <img src={pdf.image} alt="pdf" width={100} height={70} />
                <span>
                    <p className="text-xl font-bold"> {pdf.name}</p>
                    <p>{pdf.date}</p>
                </span>
                </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    onClick={handlePdf}
                    stroke-width="1.5" stroke="currentColor" class="size-6 sm:mr-10 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>

                    </div>
                     <div className={` border border-black p-4 rounded-lg w-40 relative bottom-10 left-48 -top-4 sm:left-72 lg:left-96 bg-white ${pdficon ? "block" : "hidden"}`}>
                     <span>
                         <p className="inline-flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
     </svg>
     Resume</p>
                         <p className="cursor-pointer text-red-700 font-bold inline-flex mt-4 gap-2" onClick={() => handleDelete(pdf.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
     </svg>
     Delete</p>
                     </span>
                 </div>
                    </>
                ))
            }
           
        </div>
    )


    const content = (
        <div>
            {
                infos.map((info) =>(
              <Link to={'/profile'}>  <div className="flex flex-row justify-around lg:gap-96 gap-24 mt-6 flex-wrap items-center">
                    <div className="flex flex-col p-4 gap-2">
                        <p className="inline-flex gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
{info.email}</p>
                        <p className="inline-flex gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
{info.number}</p>
                        <p className="inline-flex gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
{info.location}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</div>
</Link>
                ))
            }
        </div>
    )
    return (

        <div className="flex flex-col justify-center items-center mt-8">
            <div className="inline-flex gap-4 items-center sm:justify-center justify-around wrap">
                <span className="w-10/12">
                <h1 className="text-xl sm:text-4xl font-bold">FRONTEND DEVELOPER </h1>
                <h1 className="text-sm sm:text-4xl font-bold ">ODUKOYA SHERIFF OLAWALE </h1>
                </span>
                <div className="text-4xl font-bold bg-gray-600 w-14 text-center flex items-center justify-center rounded-full h-14">FO</div>
            </div>
            <div>{content}</div>

            <h1 className="font-bold sm:mr-96 mr-44 text-xl mt-6 lg:-translate-x-10">Resume</h1>
            <div>
               {pdfContent}
            </div>
            <h1 className="font-bold lg:mr-72 sm:text-xl mt-6">Improve your job matches</h1>
            <hr className="w-11/12 lg:w-5/12  my-6"/>
           <Link to={'/qualify'}>
            <div className="flex flex-row items-center sm:justify-center justify-around">
            <span>
            <h2 className="font-bold mr-36 lg:mr-96 text-xl ">Qualifications</h2>
            <p>Improve your job matches</p>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            </div>
            </Link>
            <hr className="w-11/12 lg:w-5/12  my-6"/>

        <Link to={'/jobtitle'}>
            <div className="flex flex-row items-center sm:justify-center justify-around">
            <span>
            <h2 className="font-bold ml-6 lg:mr-72 gap-4 -translate-x-10 text-xl ">Job preferences</h2>
            <p className="text-sm -translate-x-4 w-60">Save specific details like minimum desired pay and schedule.</p>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 translate-x-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            </div>
        </Link>    
        <hr className="w-11/12 lg:w-5/12  my-6"/>

        <Link to={'/hide'}>
            <div className="flex flex-row items-center sm:justify-center justify-around">
            <span>
            <h2 className="font-bold mr-4 lg:mr-64 text-xl ">Hide jobs with these details</h2>
            <p className="text-sm w-60">Manage the qualifications or preferences used to hide jobs from your search.</p>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            </div>
        </Link>
            <hr className="w-11/12 lg:w-5/12  my-6"/>

        <Link to={'/ready'}>
            <div className="flex flex-row items-center sm:justify-center justify-around">
            <span>
            <h2 className="font-bold mr-4 lg:mr-96 text-xl ">Ready to work</h2>
            <p className="text-sm w-64">Let employers knows that you're available to start working as soon as possible</p>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            </div>
        </Link>
            <hr className="w-11/12 lg:w-5/12  my-6"/>

        <footer className="text-center text-sm mb-6">
            <p>©2024 Indeed - Cookies, Privacy and Terms</p>
        </footer>
            
        </div>
    )
}
export default About