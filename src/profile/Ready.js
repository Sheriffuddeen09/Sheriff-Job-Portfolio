import { Link, useNavigate } from "react-router-dom"
import useLocalStorage from "use-local-storage"

const Ready = () =>{

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [istoggle, setIsToggle] = useLocalStorage("istoggle",preference)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const handleChecked = () =>{

        setIsToggle(!istoggle)
    }

    return (

        <div className="flex flex-col justify-center flex-wrap mx-10 items-center mt-6 sm:px-10 -translate-x-5 sm:-translate-x-0">
            <div>
            <button onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        </button>
            <h1 className="font-bold text-2xl mb-2">Ready to work</h1>
            <p>Let employers know that you can begin working right away.</p>
            <div className="inline-flex gap-4 items-center my-6 -translate-x-4">
            <input className="toggle" id='check'
            type="checkbox" onChange={handleChecked}/>
            <label htmlFor="check" dark-theme={istoggle ? "dark" : "light"} className="label"> I'm available to start immediately</label>
           
            </div>
            <p dark-theme={istoggle ? "dark" : "light"} className="am">
                Am available
            </p>
            <br />
            <p dark-theme={istoggle ? "dark" : "light"} className="not">Am not available</p>
            <div className="flex flex-row flex-wrap items-center gap-2">
                <Link to={'/user'}>
                    <p className="border sm:w-96 w-60 p-2 lg:w-20 rounded-lg text-red-400 font-bold text-center" >Cancel</p>
                </Link>
                <Link to={'/user'}>
                    <p className="bg-blue-600 lg:w-20 my-2 sm:w-96 w-60  p-2 rounded-lg text-white font-bold text-center" >Save</p>
                </Link>
            </div>
            <footer className="text-center lg:text-start lg:translate-x-20 text-sm mt-6">©2024 Indeed - <span className="underline">Cookies, Privacy and Terms</span></footer>
            </div>
        </div>
    )
}

export default Ready