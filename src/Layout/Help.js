import { Link } from "react-router-dom"

const Help = () =>{

    return (
        <div>

        <h1 className="font-bold text-blue-700 text-4xl mt-6 mx-10">SheriffPortifolio</h1>
        <div className="flex-row flex flex-wrap items-center gap-4 m-10">
            <div className="bg-gray-200 px-3 pb-10 pt-4 w-96">
                <h1 className="text-3xl">Help for Job Seekers</h1>
                <Link to={'/'}><h1 className="text-blue-600 ">Job Seeker Help Center</h1></Link>
            </div>
            <div className="bg-gray-200 px-3 pb-10 pt-4 lg:w-96">
                <h1 className="text-3xl">Help for Job Seekers</h1>
                <Link to={'/'}><h1 className="text-blue-600">Job Seeker Help Center</h1></Link>
            </div>
        </div>
        <div className="bg-gray-200 p-4 w-full">
        <div className="flex flex-row px-3 flex-wrap gap-8 ">
            <div>
                <h1 className="my-4 text-2xl font-bold">We're here to help</h1>
                <h1>Visit our Help Center for answers to common questions or contact us directly.</h1>
                <div className="inline-flex gap-3">
                <p className="p-3 text-blue-600 border-black bg-white mt-3 border rounded-lg text-center">Help center</p>
                <p className="p-3 border-black bg-white mt-3 border text-blue-600 border rounded-lg text-center">Contact support</p>     
            </div>
            </div>
                <div>
                    <h1 className="font-bold mt-6">SheriffPortifolio</h1>
                    <p className="mt-3">About SheriffPortifolio</p>
                    <p className="mt-3">Press</p>
                    <p className="mt-3">Security</p>
                    <p className="mt-3">Terms</p>
                    <p className="mt-3">Countries</p>
                    <p className="mt-3">Wprk at SheriffPortifolio</p>
                    
                </div>
                <div>
                    <h1 className="font-bold mt-6">Job Seekers</h1>
                    <p className="mt-3">salaries</p>
                    <p className="mt-3">Browse jobs</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Help