import { Link } from "react-router-dom"
const Thanks = () =>{

    return (
        <div className="flex border-gray-200 border-2 p-10 w-96 mt-40 mx-auto rounded-lg items-center justify-center ">
            <div>
            <p className="font-bold text-2xl mb-6">Your application has been submitted!</p>
            <p className="mb-4">✔️You will get an email confirmation</p>
            <p>✔️This employer typically responds to <span className="translate-x-6 relative left-6">applications</span></p>
            <Link to={'/'}><p className="w-72 font-bold p-2 text-center bg-blue-600 text-white rounded-lg mt-10">Return to HomePage</p></Link>
            </div>
        </div>
    )
}

export default Thanks