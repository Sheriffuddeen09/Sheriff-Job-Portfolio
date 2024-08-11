import { Link } from "react-router-dom"
import Images from "./image/interview.webp"
const Interview = () =>{


    return (
        <div className="my-10 mx-auto flex items-center justify-center flex-col">
            <img src={Images} width={200} alt="imagelogo"/>
            <p className="font-bold">No jobs saved yet</p>
            <p>Jobs you save appear here.</p>
            <p className="text-blue-600 font-bold my-6">Not see a job?</p>
            <Link to="/"><button className="bg-blue-600 rounded-lg p-2 text-white font-bold inline-flex items-center gap-4">Find Job <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</button>
</Link>
        </div>
    )
}

export default Interview