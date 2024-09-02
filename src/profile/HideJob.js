import { useNavigate } from "react-router-dom"

const HideJob = () =>{

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (

        <div className="flex flex-col justify-center mx-10 items-center lg:translate-x-24 mt-6 px-10">
            <div>
            <button onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        </button>
            <h1 className="font-bold text-2xl mb-2">Hide jobs with these details</h1>
            <p>We’ll try to hide jobs asking for these qualifications or preferences.</p>
            <div className="bg-gray-100 lg:w-9/12 lg: p-4 rounded-lg w-72 my-6">
                <p>When you provide feedback about the jobs shown in your search results and email notifications, you’ll see the details here.</p>
            </div>
            <footer className="text-center lg:text-start lg:translate-x-48 text-sm">©2024 Indeed - <span className="underline">Cookies, Privacy and Terms</span></footer>
            </div>
        </div>
    )
}

export default HideJob